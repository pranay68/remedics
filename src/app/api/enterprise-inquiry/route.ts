import { db } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, inquiryType, message } = body;

    // Validation
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    // Add to Firestore
    const docRef = await db.collection("enterprise_inquiries").add({
      name: name.trim(),
      organization: organization?.trim() || "",
      inquiryType: inquiryType || "General",
      message: message.trim(),
      timestamp: new Date(),
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        id: docRef.id,
        message: "Enterprise inquiry submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enterprise inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to submit enterprise inquiry" },
      { status: 500 }
    );
  }
}
