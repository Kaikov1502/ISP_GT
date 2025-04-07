
import { db } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { uid, firstName, lastName, email, permission, role } = req.body;

  try {
    await db.collection("users").doc(uid).update({
      firstName,
      lastName,
      email,
      permission,
      role
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
