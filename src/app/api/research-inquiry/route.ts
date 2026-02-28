import { getDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const db = getDb();
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
    } catch (error: any) {
        console.error("Research inquiry error:", error);
        const msg = error?.message || "Failed to submit research inquiry";
        return NextResponse.json(
            { error: msg },
            { status: 500 }
        );
    }
}
