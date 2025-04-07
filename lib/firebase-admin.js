
import admin from "firebase-admin";

const serviceAccount = {
  "type": "service_account",
  "project_id": "yossi-dd10f",
  "private_key_id": "1aab4b00090d67df5cb6bc16d19d65622b28e613",
  "private_key": `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9...TRUNCATED...
-----END PRIVATE KEY-----`,
  "client_email": "firebase-adminsdk-fbsvc@yossi-dd10f.iam.gserviceaccount.com",
  "client_id": "114172683786723196486",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40yossi-dd10f.iam.gserviceaccount.com"
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { admin, db, auth };
