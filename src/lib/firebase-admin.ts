import * as admin from "firebase-admin";

function stripWrappingQuotes(value: string) {
    const trimmed = value.trim();
    if (
        (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
        (trimmed.startsWith("'") && trimmed.endsWith("'"))
    ) {
        return trimmed.slice(1, -1);
    }
    return trimmed;
}

function looksLikeBase64(value: string) {
    const normalized = value.replace(/\s+/g, "");
    return normalized.length > 128 && normalized.length % 4 === 0 && /^[A-Za-z0-9+/=]+$/.test(normalized);
}

function normalizePrivateKey(value: string) {
    let key = stripWrappingQuotes(value || "").replace(/\\r/g, "").replace(/\\n/g, "\n");

    if (key.startsWith("-----BEGIN")) {
        return key;
    }

    if (looksLikeBase64(key)) {
        const decoded = Buffer.from(key, "base64").toString("utf8");
        key = stripWrappingQuotes(decoded).replace(/\\r/g, "").replace(/\\n/g, "\n");
    }

    return key;
}

function buildServiceAccountFromEnv(): admin.ServiceAccount | null {
    if (!process.env.FIREBASE_PROJECT_ID) return null;

    const rawKey = normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY || "");

    return {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: rawKey,
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
