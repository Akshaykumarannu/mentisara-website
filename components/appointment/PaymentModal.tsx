"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  amountInINR: number;
  clientEmail?: string;
  onSuccess?: (paymentId: string) => void;
}

export function PaymentModal({
  isOpen,
  onClose,
  serviceTitle,
  amountInINR,
  clientEmail = "",
  onSuccess,
}: PaymentModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  const handleInitiatePayment = async () => {
    setLoading(true);
    setError(null);
    trackEvent("payment_initiate", "PaymentModal", serviceTitle, amountInINR);

    try {
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: serviceTitle,
          amountInINR,
          clientEmail,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderData.success) {
        setError(orderData.message || "Could not initialize payment order.");
        setLoading(false);
        return;
      }

      // Check if simulated or live Razorpay key
      if (orderData.data.isSimulated) {
        // Handle test/simulation mode gracefully
        setTimeout(async () => {
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: orderData.data.orderId,
              razorpay_payment_id: `pay_sim_${Date.now()}`,
              razorpay_signature: "simulated_signature",
              isSimulated: true,
            }),
          });
          const verifyData = await verifyRes.json();
          setLoading(false);
          if (verifyData.success) {
            setCompleted(true);
            setPaymentId(verifyData.data.paymentId);
            if (onSuccess) onSuccess(verifyData.data.paymentId);
            trackEvent("payment_success", "PaymentModal", serviceTitle, amountInINR);
          }
        }, 1200);
        return;
      }

      // If Razorpay SDK is available on window:
      if (typeof window !== "undefined" && (window as unknown as { Razorpay: unknown }).Razorpay) {
        const RazorpayClass = (window as unknown as { Razorpay: new (options: unknown) => { open: () => void } }).Razorpay;
        const rzp = new RazorpayClass({
          key: orderData.data.keyId,
          amount: orderData.data.amount,
          currency: orderData.data.currency,
          name: "Mentisara",
          description: serviceTitle,
          order_id: orderData.data.orderId,
          handler: async function (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) {
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
            setLoading(false);
            if (verifyData.success) {
              setCompleted(true);
              setPaymentId(verifyData.data.paymentId);
              if (onSuccess) onSuccess(verifyData.data.paymentId);
            } else {
              setError("Payment verification failed.");
            }
          },
          prefill: {
            email: clientEmail,
          },
          theme: {
            color: "#1E3A2F",
          },
        });
        rzp.open();
      } else {
        setError("Razorpay SDK not loaded yet. Please try again in a moment.");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Payment processing error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Secure Online Payment">
      {completed ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-serif text-forest-900 font-semibold">Payment Completed</h4>
          <p className="text-sm text-slate-600">
            Thank you. Your transaction for <strong className="text-forest-900">{serviceTitle}</strong> was successful.
          </p>
          {paymentId && (
            <p className="text-xs font-mono text-slate-500 bg-sand-100 py-1.5 px-3 rounded-lg inline-block">
              Transaction ID: {paymentId}
            </p>
          )}
          <div className="pt-4">
            <Button onClick={onClose} variant="primary" className="w-full">
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-sand-100 rounded-2xl p-5 border border-sand-300 space-y-2">
            <div className="flex justify-between items-center text-xs text-forest-800 uppercase tracking-wider font-semibold">
              <span>Selected Service</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-serif text-lg text-forest-950 font-medium">{serviceTitle}</span>
              <span className="text-xl font-bold text-forest-900">₹{amountInINR}</span>
            </div>
          </div>

          {error && <Alert variant="error">{error}</Alert>}

          <div className="space-y-3 text-xs text-slate-600 bg-ivory-soft p-4 rounded-xl border border-sand-200">
            <div className="flex items-center gap-2 text-forest-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Razorpay 256-bit Encrypted Checkout</span>
            </div>
            <p>Supports UPI (GPay, PhonePe, Paytm), NetBanking, Debit/Credit Cards & International Cards.</p>
          </div>

          <Button
            onClick={handleInitiatePayment}
            isLoading={loading}
            className="w-full justify-center"
            size="lg"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Proceed to Pay ₹{amountInINR}
          </Button>
        </div>
      )}
    </Modal>
  );
}
