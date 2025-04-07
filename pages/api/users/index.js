
import { db } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
