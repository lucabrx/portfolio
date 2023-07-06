import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    
  try {
    const data = await resend.emails.send({
      from: "Work <onboarding@resend.dev>",
      to: ["lukabrkovic@proton.me"],
      subject: "Hello world",
      text: 
      `Message from ${body.name} (${body.email}):
        ${body.message}`,

    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}