import { getDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const db = getDb();
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
    } catch (error: any) {
        console.error("Waitlist error:", error);
        const msg = error?.message || "Failed to add to waitlist";
        return NextResponse.json(
            { error: msg },
            { status: 500 }
        );
    }
}
