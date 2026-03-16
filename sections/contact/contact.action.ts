'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const name = formData.get('name') as string;

  if (!email || !message || !name) {
    return {
      success: false,
      error: "Todos los campos son obligatorios."
    };
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "El formato del email no es válido." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Nexus Web <onboarding@resend.dev>',
      to: ['administracion@nexusee.com'],
      replyTo: email,
      subject: `Nuevo mensaje web de ${name}`,
      text: `Mensaje: ${message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Error inesperado al enviar el mensaje." };
  }
}