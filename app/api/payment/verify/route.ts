import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "@/types";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, isSimulated } = await req.json();

    if (isSimulated) {
      return NextResponse.json<APIResponse>({
        success: true,
        message: "Payment simulated successfully for demo mode.",
        data: { paymentId: razorpay_payment_id || `pay_sim_${Date.now()}` }
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json<APIResponse>({
        success: false,
        message: "Payment verification configuration missing."
      }, { status: 400 });
    }

    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      return NextResponse.json<APIResponse>({
        success: true,
        message: "Payment verified successfully.",
        data: { paymentId: razorpay_payment_id }
      });
    } else {
      return NextResponse.json<APIResponse>({
        success: false,
        message: "Payment signature verification failed."
      }, { status: 400 });
    }

  } catch (err) {
    console.error("Payment verification error:", err);
    return NextResponse.json<APIResponse>({
      success: false,
      message: "Server error verifying payment."
    }, { status: 500 });
  }
}
