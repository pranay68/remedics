import { db } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, institution, role, interest } = body;

    // Validation
    if (!name || !interest) {
      return NextResponse.json(
        { error: "Name and interest are required" },
        { status: 400 }
      );
    }

    // Add to Firestore
    const docRef = await db.collection("research_inquiries").add({
      name: name.trim(),
      institution: institution?.trim() || "",
      role: role?.trim() || "",
      interest: interest.trim(),
      timestamp: new Date(),
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        id: docRef.id,
        message: "Research inquiry submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Research inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to submit research inquiry" },
      { status: 500 }
    );
  }
}
