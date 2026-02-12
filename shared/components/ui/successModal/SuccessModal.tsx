// Componente Modal Success (puedes ponerlo al final del archivo o aparte)
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative animate-in fade-in zoom-in duration-300">

        {/* Icono de éxito animado */}
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-400 text-sm mb-6">
          Hemos recibido tu solicitud. Nos pondremos en contacto contigo a la brevedad.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;