import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const destinationEmail = process.env.CONTACT_EMAIL?.trim() || "takemydick0@gmail.com";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete all fields before submitting." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = getResendClient();

  if (!resend) {
    return NextResponse.json(
      {
        error:
          "The email service is not configured yet. Add RESEND_API_KEY in Vercel to activate message delivery."
      },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [destinationEmail],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f1c18;">
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "The message could not be sent right now. Please try again in a moment."
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out. Your message has been sent successfully."
  });
}
