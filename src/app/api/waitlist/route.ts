import { db } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, modes, userType, specialIdentity } = body;

    // Validation
    if (!email || !userType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (userType === "Special" && !specialIdentity) {
      return NextResponse.json(
        { error: "Special type requires identity" },
        { status: 400 }
      );
    }

    // Add to Firestore
    const docRef = await db.collection("waitlist").add({
      email: email.trim(),
      modes: modes || [],
      userType,
      specialIdentity: userType === "Special" ? specialIdentity?.trim() : null,
      timestamp: new Date(),
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        id: docRef.id,
        message: "Successfully added to waitlist",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to add to waitlist" },
      { status: 500 }
    );
  }
}
