import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await request.json();
    const emailBody = `
      <h1>New Contact Form Submission</h1>
      <p><strong>From:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
      <hr>
      <h2>Message:</h2>
      <p>${message}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['jack.cao@utdallas.edu'], // Receiving email
      subject: `New message from ${firstName} ${lastName}`,
      html: emailBody,
      replyTo: email,
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error("Send Email Error:", error);
    if (error instanceof Error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: 'An unknown error occurred' }), { status: 500 });
  }
} 