
import { auth, db } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { uid } = req.body;

  try {
    await auth.deleteUser(uid);
    await db.collection("users").doc(uid).delete();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
