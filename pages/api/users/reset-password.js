
import { auth } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { email } = req.body;

  try {
    const link = await auth.generatePasswordResetLink(email);
    res.status(200).json({ success: true, message: "Link sent", link });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
