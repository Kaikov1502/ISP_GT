
import { auth, db } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { firstName, lastName, email, permission, role } = req.body;

  try {
    const userRecord = await auth.createUser({ email, password: "TempPass123!", emailVerified: false });
    await db.collection("users").doc(userRecord.uid).set({
      firstName,
      lastName,
      email,
      permission,
      role,
      active: true,
      createdAt: new Date().toISOString()
    });

    res.status(200).json({ success: true, uid: userRecord.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
