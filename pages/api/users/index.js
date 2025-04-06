
export default function handler(req, res) {
  const users = [
    {
      firstName: "יוסי",
      lastName: "כהן",
      email: "kaikov@gmail.com",
      role: "admin",
      permission: "מנהל מערכת"
    },
    {
      firstName: "דנה",
      lastName: "לוי",
      email: "dana@example.com",
      role: "support",
      permission: "צופה"
    }
  ];
  res.status(200).json(users);
}
