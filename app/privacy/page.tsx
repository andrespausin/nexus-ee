export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-25 text-neutral-300">
      <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
      <p className="mb-6 text-sm italic">Última actualización: {new Date().toLocaleDateString()}</p>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">1. Información General</h2>
          <p>
            Esta política detalla cómo tratamos los datos en esta web. El objetivo principal es la transparencia y el respeto a tu privacidad.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">2. Datos que recolectamos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Análisis de uso:</strong> Utilizamos Vercel Analytics y Speed Insights para entender cómo se usa la web. Estos datos son anónimos y no rastrean tu identidad personal (no guardan PII).</li>
            <li><strong>Cookies:</strong> Usamos cookies técnicas para recordar tus preferencias (como si aceptaste este aviso).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">3. Servicios de Terceros</h2>
          <p>Utilizamos servicios externos que pueden recolectar información técnica mínima:</p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Vercel:</strong> Alojamiento y analíticas optimizadas para privacidad.</li>
            <li><strong>Google Fonts:</strong> Las fuentes se cargan de forma optimizada.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">4. Tus Derechos</h2>
          <p>
            Aunque no recolectamos datos personales identificables, tienes derecho a consultar cualquier duda sobre tu privacidad escribiendo a nuestro contacto.
          </p>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-neutral-800">
        <p className="text-sm">Si tienes dudas, puedes contactarme a través de mis redes sociales o correo electrónico.</p>
      </footer>
    </main>
  );
}