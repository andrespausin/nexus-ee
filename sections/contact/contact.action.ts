'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  console.log('Datos recibidos:', rawData);

  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const name = formData.get('name') as string;

  try {
    const data = await resend.emails.send({
      from: 'Nexus Web <onboarding@resend.dev>',
      to: ['candrespausin2001@gmail.com'],
      replyTo: email,
      subject: `Nuevo mensaje web de ${name}`,
      text: `Mensaje: ${message}`,
    });

    if (data.error) {
      console.error("Error devuelto por Resend:", data.error);
      return { success: false, error: data.error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error en el servidor:", error);
    return { success: false, error };

  }
}