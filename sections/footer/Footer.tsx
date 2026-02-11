import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-black tracking-tighter uppercase mb-4">
            Nexus <span className="text-blue-500">Engineering</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Soluciones integrales de ingeniería, gestión de proyectos y sistemas de acceso seguro para la industria moderna.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Explorar</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-white transition-colors">Nuestras Soluciones</Link></li>
            <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Servicios</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Ingeniería Estructural</li>
            <li>Sistemas de Andamiaje</li>
            <li>Project Management</li>
            <li>Consultoría Técnica</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Dirección Principal de la Empresa, Ciudad, País.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+XX XXX XXX XXX</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>contacto@nexus-eng.com</span>
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
    </footer>
  );
};

export default Footer;