'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Modal from '@/components/ui/Modal'

interface ProcessPhase {
  id: string
  tab: string
  label: string
  title: string
  description: string
  image: string
}

const phases: ProcessPhase[] = [
  {
    id: 'concept',
    tab: 'Concept',
    label: 'Fase uno',
    title: "Ascoltiamo e trasformiamo l'idea",
    description: "Iniziamo con una conversazione profonda. Comprendiamo lo spazio, il vostro stile, le vostre necessità. Poi trasformiamo tutto in un progetto che prende forma.",
    image: '/images/process/01_concept.webp',
  },
  {
    id: 'materiali',
    tab: 'Materiali',
    label: 'Fase due',
    title: 'Selezioniamo legni pregiati',
    description: "Ogni progetto merita il legno giusto. Selezioniamo essenze pregiate come noce canaletto, rovere massello e frassino, valutando venature, tonalità e caratteristiche uniche per garantire risultati eccezionali.",
    image: '/images/process/02_materiali.webp',
  },
  {
    id: 'realizzazione',
    tab: 'Realizzazione',
    label: 'Fase tre',
    title: 'Realizziamo con maestria artigianale',
    description: "Nel nostro atelier ogni pezzo prende vita attraverso tecniche tradizionali e moderne. Le mani esperte dei nostri artigiani modellano il legno con precisione millimetrica, creando mobili destinati a durare generazioni.",
    image: '/images/process/03_realizzazione.webp',
  },
]

export default function Processo() {
  const [activePhase, setActivePhase] = useState<string>('concept')
  const [detailsOpen, setDetailsOpen] = useState(false)

  const currentPhase = phases.find((phase) => phase.id === activePhase) || phases[0]

  const detailsByPhase: Record<
    string,
    {
      eyebrow: string
      title: string
      bullets: [string, string, string]
      closingLine: string
    }
  > = {
    concept: {
      eyebrow: 'Concept',
      title: 'Dalla visione al concept',
      bullets: ['Brief e obiettivi del progetto', 'Misure e studio degli spazi', 'Proposta iniziale + timeline indicativa'],
      closingLine: 'Ogni progetto parte dall’ascolto: chiarezza prima di tutto.',
    },
    materiali: {
      eyebrow: 'Materiali',
      title: 'Materiali e campionature',
      bullets: ['Scelta essenze', 'Finiture', 'Campioni e approvazione'],
      closingLine: 'La materia si vede e si tocca prima di iniziare.',
    },
    realizzazione: {
      eyebrow: 'Realizzazione',
      title: 'Realizzazione e posa',
      bullets: ['Lavorazione in atelier', 'Controllo qualità', 'Consegna/posa'],
      closingLine: 'Precisione e cura in ogni dettaglio, fino all’installazione.',
    },
  }

  const currentDetails = detailsByPhase[activePhase] ?? detailsByPhase.concept

  return (
    <section id="processo" className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#3D4F48] text-sm md:text-base font-medium uppercase tracking-wider mb-4">
            Processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6">
            Tre fasi di creazione
          </h2>
          <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Dalla visione iniziale alla consegna finale, ogni momento conta. Riva Design guida il progetto
            con esperienza e dedizione, assicurando che il risultato superi le aspettative.
          </p>

          {/* Header CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/atelier"
              className="flex items-center gap-2 text-[#1A2E26] text-base font-medium hover:text-[#C5A059] transition-colors duration-200 group"
            >
              <span>Altro</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-16 border-b border-[#E8E6E1]">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`pb-4 text-base md:text-lg font-medium transition-colors duration-200 relative ${
                activePhase === phase.id
                  ? 'text-[#1A2E26]'
                  : 'text-[#3D4F48] hover:text-[#1A2E26]'
              }`}
            >
              {phase.tab}
              {activePhase === phase.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A2E26]" />
              )}
            </button>
          ))}
        </div>

        {/* Phase Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-[#3D4F48] text-sm md:text-base font-medium uppercase tracking-wider">
              {currentPhase.label}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2E26] leading-tight">
              {currentPhase.title}
            </h3>
            <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
              {currentPhase.description}
            </p>

            {/* Content CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button
                type="button"
                onClick={() => setDetailsOpen(true)}
                className={[
                  'px-6 py-3 rounded-sm',
                  'text-[#1A2E26] text-base font-medium bg-transparent border-2 border-[#1A2E26]',
                  'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                ].join(' ')}
              >
                Dettagli
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] bg-[#E8E6E1] overflow-hidden">
            <Image
              src={currentPhase.image || "/placeholder.svg"}
              alt={currentPhase.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <Modal
          open={detailsOpen}
          onClose={() => setDetailsOpen(false)}
          eyebrow={currentDetails.eyebrow}
          title={currentDetails.title}
          footer={
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDetailsOpen(false)}
                className={[
                  'inline-flex items-center justify-center rounded-sm',
                  'px-6 py-3 border border-[#E8E6E1] bg-white text-[#1A2E26]',
                  'hover:border-[#C5A059] transition-colors duration-200 text-sm font-medium',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                ].join(' ')}
              >
                Chiudi
              </button>

              <Link
                href="/contatti"
                className={[
                  'inline-flex items-center justify-center rounded-sm',
                  'px-6 py-3 bg-[#1A2E26] text-[#F9F9F7] border border-[#1A2E26]',
                  'hover:bg-[#0F1F19] transition-colors duration-200 text-sm font-medium',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                ].join(' ')}
              >
                Richiedi una consulenza
              </Link>
            </div>
          }
        >
          <ul className="mt-1 list-disc pl-5 space-y-2 text-[#3D4F48] text-base leading-relaxed">
            {currentDetails.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <p className="mt-6 text-[#1A2E26] text-sm font-medium">{currentDetails.closingLine}</p>
        </Modal>
      </div>
    </section>
  )
}
