import * as admin from "firebase-admin";

function buildServiceAccountFromEnv(): admin.ServiceAccount | null {
    if (!process.env.FIREBASE_PROJECT_ID) return null;

    // private key may be base64 encoded or contain literal \n escapes
    let rawKey = process.env.FIREBASE_PRIVATE_KEY || "";
    if (rawKey && !rawKey.trim().startsWith("-----BEGIN")) {
        try {
            rawKey = Buffer.from(rawKey, "base64").toString("utf8");
        } catch {
            // leave as-is
        }
    }

    return {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: rawKey.replace(/\\n/g, "\n"),
    } as admin.ServiceAccount;
}

function ensureFirebaseAdmin() {
    if (admin.apps.length) return;

    const fromEnv = buildServiceAccountFromEnv();
    if (!fromEnv) {
        throw new Error(
            "Firebase Admin is not configured. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY (optionally base64) in environment variables."
        );
    }

    admin.initializeApp({
        credential: admin.credential.cert(fromEnv),
    });
}

export function getDb() {
    ensureFirebaseAdmin();
    return admin.firestore();
}

export default admin;
