"use client"
import {
  Card,
  CardContent,
  CardTitle,
} from '@/shared/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog/dialog"
import Image from 'next/image'
import { TeamData } from './team.data'
import { useState, useMemo } from 'react'
import { Globe, MapPin } from 'lucide-react'

const TeamSection = () => {

  return (
    <section className="w-full py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border-l-2 border-blue-600 pl-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            NUESTRO <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
              EQUIPO
            </span>
          </h2>
        </div>
        {/* <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <button
            onClick={() => setActiveTab('nacional')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'nacional' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <MapPin className="w-3.5 h-3.5" /> Nacionales
          </button>
          <button
            onClick={() => setActiveTab('internacional')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'internacional' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <Globe className="w-3.5 h-3.5" /> Internacionales
          </button>
        </div> */}
      </div>
      {/* SECCIÓN GRUPO DE CARDS */}
      <div className="max-w-340 font-extrabold mx-auto mt-8">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TeamData.map((item) => {
            return (
              <Dialog key={item.id}>
                <DialogTrigger className="cursor-pointer w-full group">
                  <Card className='relative w-full h-100 overflow-hidden rounded-3xl border-none'>
                    <div className={`absolute inset-0 z-0 transition-transform duration-500`}>
                      <Image
                        src={item.cardImageURL}
                        alt="Fondo Card"
                        fill
                        style={{ objectPosition: item.zoom || "center 10%" }}
                        className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-end text-start p-6 text-white">
                      <CardTitle className="text-2xl font-bold">
                        {item.name}
                      </CardTitle>
                      <CardContent className="p-0">
                        <h1 className="text-md text-white/50 font-extrabold uppercase group-hover:text-gray-300 transition-all duration-500">{item.jobTitle}</h1>
                      </CardContent>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-white text-black max-w-2xl lg:max-w-6xl! overflow-y-auto w-[92vw] max-h-[80vh] p-0 border-none shadow-2xl">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-75 overflow-hidden">
                      <Image
                        src={item.dialogImageURL ? item.dialogImageURL : item.cardImageURL}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:hidden" />
                    </div>
                    <div className="w-full md:w-3/5 xl:w-full p-8 md:p-10 flex flex-col justify-center">
                      <DialogHeader className="text-left">
                        <div className="mb-2">
                          <span className="text-blue-600 font-mono text-xs tracking-[0.3em] uppercase">
                            {item.jobTitle}
                          </span>
                        </div>
                        <DialogTitle className="text-3xl font-black text-gray-900 leading-tight">
                          {item.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="w-12 h-1 bg-blue-600 rounded-full" />
                        <DialogDescription className="text-gray-600 text-md text-justify lg:text-lg leading-relaxed">
                          {item.content ? (
                            <span dangerouslySetInnerHTML={{ __html: item.content }} />
                          ) : (
                            "Especialista con amplia trayectoria..."
                          )}
                        </DialogDescription>
                        <div className="pt-6 border-t border-gray-100 flex gap-4">
                          <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                            Nexus Engineering & Energy
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </DialogContent>
              </Dialog>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default TeamSection