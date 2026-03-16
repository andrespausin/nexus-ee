"use client"
import CookieConsent from "react-cookie-consent";
import Link from "next/link";


const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="mi_app_consent"

      containerClasses="fixed !bottom-6 !left-1/2 !-translate-x-1/2 !w-[90%] md:!w-max !max-w-2xl !bg-neutral-900/90 !backdrop-blur-md !text-white !p-6 !rounded-2xl !border !border-neutral-800 !shadow-2xl !flex-col md:!flex-row !items-center !gap-4 !z-50"

      contentClasses="!m-0 !text-sm !font-light !leading-relaxed text-neutral-300"

      buttonClasses="!bg-white !text-black !px-6 !py-2.5 !rounded-full !font-medium !text-sm hover:!bg-neutral-200 !transition-all !m-0"

      declineButtonClasses="!bg-transparent !text-neutral-400 !px-4 !py-2.5 !rounded-full !font-medium !text-sm hover:!text-white !transition-all !m-0"
    >
      Usamos cookies para mejorar tu experiencia. Al navegar, aceptas nuestra{" "}
      <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
        política de privacidad
      </Link>.
    </CookieConsent>
  )
}

export default CookieConsentComponent
