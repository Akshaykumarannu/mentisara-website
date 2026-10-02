import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { serviceId, amountInINR, clientEmail } = await req.json();

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret || keyId.includes("placeholder")) {
      // Provide clean configurable response when payment keys are pending configuration
      return NextResponse.json<APIResponse>({
        success: true,
        message: "Razorpay order initialized in test configuration mode.",
        data: {
          orderId: `order_simulated_${Date.now()}`,
          amount: (amountInINR || 1500) * 100,
          currency: "INR",
          keyId: keyId || "rzp_test_placeholder",
          isSimulated: true
        }
      });
    }

    // Real Razorpay API call using Basic Auth
    const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`;
    const razorpayRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: Math.round((amountInINR || 1500) * 100), // amount in paise
        currency: "INR",
        receipt: `receipt_${serviceId}_${Date.now()}`,
        notes: {
          serviceId: serviceId || "therapy_session",
          clientEmail: clientEmail || "unknown"
        }
      })
    });

    const orderData = await razorpayRes.json();

    if (!razorpayRes.ok) {
      return NextResponse.json<APIResponse>({
        success: false,
        message: orderData.error?.description || "Failed to create payment order."
      }, { status: 400 });
    }

    return NextResponse.json<APIResponse>({
      success: true,
      message: "Order created successfully",
      data: {
        orderId: orderData.id,
        amount: orderData.amount,
        currency: orderData.currency,
        keyId: keyId,
        isSimulated: false
      }
    });

  } catch (err) {
    console.error("Payment Order API Error:", err);
    return NextResponse.json<APIResponse>({
      success: false,
      message: "Unable to initialize payment system."
    }, { status: 500 });
  }
}
