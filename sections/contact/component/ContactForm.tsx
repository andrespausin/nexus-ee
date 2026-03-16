"use client"
import { useRef, useState } from 'react';
import { sendEmail } from "../contact.action";
import SuccessModal from '@/shared/components/ui/successModal/SuccessModal';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ error: string | null }>({ error: null });

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setStatus({ error: null });

    const result = await sendEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      formRef.current?.reset();
      setShowSuccess(true);
    } else {
      setStatus({ error: result.error as string || "Hubo un error inesperado." });
    }
  }

  return (
    <>
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      <form ref={formRef} className="space-y-6" action={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="ml-4 text-[12px] lg:text-[15px] font-mono text-gray-500 uppercase tracking-widest">Nombre</label>
            <input
              required
              type="text"
              name="name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
              placeholder="Escriba su nombre"
            />
          </div>
          <div className="space-y-2">
            <label className="ml-4 text-[12px] lg:text-[15px] font-mono text-gray-500 uppercase tracking-widest">Email</label>
            <input
              required
              type="email"
              name="email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
              placeholder="usuario@nexusee.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="ml-4 text-[12px] lg:text-[15px] font-mono text-gray-500 uppercase tracking-widest">Mensaje</label>
          <textarea
            required
            rows={5}
            name="message"
            className="w-full bg-white/5 border border-white/10 rounded-4xl px-6 py-5 text-white outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
            placeholder="Describa los requerimientos técnicos de su proyecto..."
          />
        </div>

        {/* Mensaje de error amigable */}
        {status.error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm text-center">
            {status.error}
          </div>
        )}

        <button
          className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-900/20 group cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
          {!isSubmitting && (
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
      </form>
    </>
  )
}

export default ContactForm;