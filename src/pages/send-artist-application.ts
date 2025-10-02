import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, artistName, message } = req.body;

  if (!name || !email || !phone || !artistName || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "London Star Records <no-reply@londonstarrecords.studio>", // must match your verified domain in Resend
        to: ["info@londonstarrecords.studio"],
        reply_to: email,
        subject: `New Artist Application - ${artistName}`,
        text: `
New Artist Application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Artist/Stage Name: ${artistName}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted on: ${new Date().toLocaleString()}
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return res.status(500).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ success: true, message: "Application sent!" });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
