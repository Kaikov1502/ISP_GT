
export default function handler(req, res) {
  const user = req.body;
  console.log("משתמש עודכן:", user);
  res.status(200).json({ success: true });
}
