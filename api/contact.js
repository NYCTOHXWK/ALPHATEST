import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = {};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || "unknown";
  const now = Date.now();

 if (!rateLimit[ip]) {
  rateLimit[ip] = {
    count: 1,
    startTime: now,
  };
} else {
  const user = rateLimit[ip];

  if (now - user.startTime > 60000) {
    rateLimit[ip] = {
      count: 1,
      startTime: now,
    };
  } else {
    user.count++;

    if (user.count > 9) {
      return res.status(429).json({ error: "Too many requests" });
    }
  }
}

  try {
    const { name, email, message, company } = req.body;

    if (company) {
      return res.status(200).json({ success: true });
    }

    const cleanName = name?.trim();
    const cleanEmail = email?.trim();
    const cleanMessage = message?.trim();

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({ error: "Invalid name" });
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return res.status(400).json({ error: "Message too short" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const spamWords = ["http://", "https://", "viagra", "casino", "loan"];
    const lowerMsg = cleanMessage.toLowerCase();
    if (spamWords.some((w) => lowerMsg.includes(w))) {
      return res.status(400).json({ error: "Spam detected" });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "takemydick0@gmail.com",
      subject: `New message from ${cleanName}`,
      html: `
        <div style="font-family: Arial; padding: 16px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${cleanMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
