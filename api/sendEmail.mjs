import { Resend } from "resend";

const resend = new Resend(process.env.Resend_api_key);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nom, email, text } = req.body;
    console.log("Clé Resend:", process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "philppe65800@gmail.com",
        subject: `Nouveau message de ${nom}`,
        html: `Email : ${email}\nMessage : ${text}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); 
  }
}
