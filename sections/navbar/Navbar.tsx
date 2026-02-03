"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import NavItem from "@/sections/navbar/components/NavItem"

const Items = [
  { id: 1, content: "Sobre nosotros", reference: "#about" },
  { id: 2, content: "Servicios", reference: "#services" },
  { id: 4, content: "Proyectos", reference: "#projects" },
  { id: 3, content: "Contáctanos", reference: "#contact_us" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
          <Link href="/">
            <div className="flex flex-col items-start leading-tight">
              <p className="font-bold text-xl font-syne text-gray-300">NEXUS</p>
              <p className="font-thin text-[10px] uppercase tracking-widest text-white">
                Engineering & Energy
              </p>
            </div>
          </Link>
          <div className="hidden xl:flex space-x-10 font-space-grotesk text-white">
            {Items.map((item) => (
              <NavItem key={item.id}>
                <a href={item.reference} className="hover:text-green-400 transition-colors">
                  {item.content}
                </a>
              </NavItem>
            ))}
          </div>
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`
        fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl
        transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {Items.map((item) => (
          <a
            key={item.id}
            href={item.reference}
            onClick={() => setIsOpen(false)}
            className="text-white font-space-grotesk hover:text-green-400"
          >
            {item.content}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar