import { getDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const db = getDb();
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
    } catch (error: any) {
        console.error("Enterprise inquiry error:", error);
        const msg = error?.message || "Failed to submit enterprise inquiry";
        return NextResponse.json(
            { error: msg },
            { status: 500 }
        );
    }
}
