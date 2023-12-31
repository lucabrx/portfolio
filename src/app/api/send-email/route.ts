import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface IBody {
  email: string
  name: string
  message: string
}

export async function POST(request: Request) {
  const body = (await request.json()) as IBody

  try {
    const data = await resend.emails.send({
      from: "Work <onboarding@resend.dev>",
      to: ["lukabrkovic@proton.me"],
      subject: body.email,
      text: `Message from ${body.name} (${body.email}):
        ${body.message}`,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
