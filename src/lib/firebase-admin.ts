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

function buildServiceAccountFromLocalJson(): admin.ServiceAccount {
    // Local-only fallback. Do not commit this JSON.
    // Keep the require inside a function so builds don't fail when the file is absent.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const json = require("../reprog-web-firebase-adminsdk-fbsvc-c3c491f437.json");
    return json as admin.ServiceAccount;
}

function ensureFirebaseAdmin() {
    if (admin.apps.length) return;

    const fromEnv = buildServiceAccountFromEnv();
    const serviceAccount = fromEnv ?? buildServiceAccountFromLocalJson();

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export function getDb() {
    ensureFirebaseAdmin();
    return admin.firestore();
}

export default admin;
