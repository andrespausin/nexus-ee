import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-black tracking-tighter uppercase mb-4">
            Nexus <span className="text-blue-500">Engineering</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Soluciones integrales de ingeniería, gestión de proyectos y sistemas de acceso seguro para la industria moderna.
          </p>

        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Explorar</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Nuestras Soluciones</Link></li>
            <li><Link href="/#contact_us" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Servicios</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="/services/civil-engineer" className="hover:text-white transition-colors">
                Ingeniería, Arquitectura y Consultoría
              </Link>
            </li>
            <li>
              <Link href="/services/project-management" className="hover:text-white transition-colors">
                Gestión de Proyectos
              </Link>
            </li>
            <li>
              <Link href="/services/civil-engineer" className="hover:text-white transition-colors">
                Ejecución de Obras civiles
              </Link>
            </li>
            {/* <li>Consultoría Técnica</li> */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Calle de las Huertas Nº14, Esc 2, Planta Nº2, Puerta B, Paracuellos de Jarama, Madrid.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <a
                href="https://wa.me/34624951014"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                +34 624 95 10 14
              </a>
            </li>
            <li className="flex items-center space-x-3 text-wrap">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <a href="mailto:administracion@nexusee.com" className="hover:text-white transition-colors">administracion@nexusee.com</a>
            </li>
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 Nexus Engineering & Energy. Todos los derechos reservados.</p>
        <div className="flex space-x-6">
          <Link href="/privacidad" className="hover:text-white">Política de Privacidad</Link>
          <Link href="/terminos" className="hover:text-white">Términos de Servicio</Link>
        </div>
      </div>
    </footer >
  );
};

export default Footer;