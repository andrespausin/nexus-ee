"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import NavItem from "@/sections/navbar/components/NavItem"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/shared/components/ui/navigation-menu";

import { Items } from "./navbar.data"
import ListItem from "./components/ListItem"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <section className="fixed top-0 w-full z-50">
      <div className={`relative z-100 w-full transition-colors duration-300 ${isOpen ? 'bg-black' : 'bg-transparent backdrop-blur-sm'}`}>
        <div className="mx-auto px-6 lg:px-12 max-w-7xl flex justify-between items-center py-5">

          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="flex flex-col items-start leading-tight">
              <p className="font-bold text-xl font-syne text-gray-300">NEXUS</p>
              <p className="font-thin text-[10px] uppercase tracking-widest text-white">
                Engineering & Energy
              </p>
            </div>
          </Link>
          <div className="hidden xl:flex space-x-10 font-space-grotesk text-white">
            <NavigationMenu>
              <NavigationMenuList>
                {Items.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger>
                          {item.content}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent
                          className="bg-black/80 backdrop-blur-3xl border-0"
                        >
                          <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150 group">
                            {item.dropdown.map((itemList) => (
                              <ListItem
                                className="group-hover:scale-[0.95] transition-all duration-300 hover:scale-105 ! hover:z-10"
                                key={itemList.id}
                                title={itemList.title}
                                reference={itemList.reference}
                                description={itemList.description}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={item.reference}>
                          {item.content}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <button
            className="xl:hidden text-white p-2 outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      <div className={`
        fixed inset-0 bg-black z-90 flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out xl:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}>
        <div className="flex flex-col items-center space-y-8">
          <p className="text-gray-500 font-syne text-md  uppercase tracking-[0.3em] mb-4">Navegación</p>
          {Items.map((item) => (
            <a
              key={item.id}
              href={item.reference}
              onClick={() => setIsOpen(false)}
              className="text-white font-space-grotesk text-2xl font-bold hover:text-green-400 transition-transform active:scale-90"
            >
              {item.content}
            </a>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Navbar