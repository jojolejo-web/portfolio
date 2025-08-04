import { Resend } from "resend";

const resend = new Resend(process.env.Resend_api_key);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    // Lecture manuelle du body
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    const { nom, email, text } = JSON.parse(data);

    // Envoi email avec Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "philippe65800@gmail.com",
      subject: `Nouveau message de ${nom}`,
      html: `Email : ${email}<br>Message : ${text}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return res.status(500).json({ error: error.message });
  }
}