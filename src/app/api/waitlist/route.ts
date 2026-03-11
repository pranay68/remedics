import { getDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const db = getDb();
        const body = await request.json();
        const { email, problemToSolve, engineInterest, source } = body;

        // Validation
        if (!email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (typeof problemToSolve === "string" && problemToSolve.length > 10000) {
            return NextResponse.json(
                { error: "Problem description is too long" },
                { status: 400 }
            );
        }

        if (engineInterest && !["standard", "deep", "synthetic"].includes(engineInterest)) {
            return NextResponse.json(
                { error: "Invalid engine interest" },
                { status: 400 }
            );
        }

        // Add to Firestore
        const docRef = await db.collection("waitlist").add({
            email: email.trim(),
            engineInterest: typeof engineInterest === "string" ? engineInterest : "standard",
            problemToSolve: typeof problemToSolve === "string" ? problemToSolve.trim() : "",
            source: typeof source === "string" ? source.trim() : "unknown",
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
