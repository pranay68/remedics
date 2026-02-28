import * as admin from "firebase-admin";

// For local development, use the JSON file
// For production, set environment variables (see .env.local.example)
let serviceAccount: any;

if (process.env.FIREBASE_PROJECT_ID) {
    // Use environment variables whenever a project ID is provided.
    // This branch will run on Vercel regardless of NODE_ENV.
    serviceAccount = {
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
    };
} else {
    // No project ID in environment: fall back to local JSON (development only)
    try {
        serviceAccount = require("../reprog-web-firebase-adminsdk-fbsvc-c3c491f437.json");
    } catch (err) {
        throw new Error(
            "Firebase configuration missing: set FIREBASE_PROJECT_ID in environment variables or provide the service account JSON"
        );
    }
}

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
}

export const db = admin.firestore();
export default admin;
