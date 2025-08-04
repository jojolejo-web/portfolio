import { Resend } from "resend";
 console.log("🔑 Clé Resend utilisée :", process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nom, email, text } = req.body;
   console.log("📩 Body reçu :", data);
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "philppe65800@gmail.com",
        subject: `Nouveau message de ${nom}`,
        html: `Email : ${email}\nMessage : ${text}`,
      });
  console.log("📨 Email envoyé :", result);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); 
  }
}
