
export default function handler(req, res) {
  const newUser = req.body;
  console.log("משתמש חדש נוסף:", newUser);
  res.status(200).json({ success: true });
}
