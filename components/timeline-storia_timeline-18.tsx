'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1994',
    title: 'Gli inizi',
    description: 'Giuseppe Riva apre il primo laboratorio con tre artigiani e una passione infinita',
    image: '/placeholder.svg?height=400&width=300',
  },
  {
    year: '2001',
    title: 'Espansione',
    description: 'Primi progetti per architetti di fama internazionale e clienti esigenti',
    image: '/placeholder.svg?height=400&width=300',
  },
  {
    year: '2010',
    title: 'Innovazione',
    description: 'Espansione dello spazio di lavoro e introduzione di tecnologie di precisione',
    image: '/placeholder.svg?height=400&width=300',
  },
]

export default function TimelineStoria() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < timelineEvents.length - 1 ? prev + 1 : prev))
  }

  const extendedTimeline = [
    { year: '1994', text: 'Giuseppe Riva apre il primo laboratorio con tre artigiani.' },
    { year: '2001', text: 'Prime collaborazioni con architetti e clienti internazionali.' },
    { year: '2010', text: 'Espansione dell’atelier e introduzione di tecnologie di precisione.' },
    { year: '2016', text: 'Materiali selezionati e finiture sempre più personalizzate.' },
    { year: '2020', text: 'Focus su sostenibilità e filiera controllata.' },
    { year: 'Oggi', text: 'Progetti su misura per residenze e studi di architettura.' },
  ]

  useEffect(() => {
    if (!isModalOpen) return

    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isModalOpen])

  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="chi-siamo" className="text-center mb-12 md:mb-16 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-0">
          <p className="text-[#3D4F48] text-sm font-medium mb-4 tracking-wide uppercase">
            Storia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6 text-balance leading-tight">
            Tre decenni di maestria e innovazione nel cuore dell&apos;Italia
          </h2>
          <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Fondato da Giuseppe Riva con una visione semplice: creare mobili che durino nel tempo. Oggi,
            la sua eredità vive in ogni dettaglio del nostro lavoro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
              className="px-8 py-3 bg-transparent border border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]"
            >
              Timeline
            </button>
          </div>
        </div>

        {isModalOpen ? (
          <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="La nostra storia">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) setIsModalOpen(false)
              }}
            />

            {/* Modal */}
            <div className="relative h-full w-full overflow-y-auto">
              <div className="min-h-full w-full px-4 py-6 sm:px-6 sm:py-10 flex items-center justify-center">
                <div className="w-full max-w-xl rounded-sm border border-[#E8E6E1] bg-[#F9F9F7] shadow-sm">
                  <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-[#E8E6E1]">
                    <div className="min-w-0">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2E26] leading-tight">
                        La nostra storia
                      </h3>
                      <p className="mt-2 text-[#3D4F48] text-base leading-relaxed">
                        Tre decenni di artigianalità e innovazione.
                      </p>
                    </div>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      aria-label="Chiudi modal"
                      className="shrink-0 rounded-sm border border-[#E8E6E1] bg-white px-3 py-2 text-[#1A2E26] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]"
                    >
                      ×
                    </button>
                  </div>

                  <div className="p-5 sm:p-6">
                    <ul className="space-y-4">
                      {extendedTimeline.map((item) => (
                        <li key={item.year} className="flex gap-4">
                          <span className="shrink-0 w-16 text-[#1A2E26] font-semibold">{item.year}</span>
                          <span className="text-[#3D4F48] leading-relaxed">{item.text}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex justify-end">
                      <Link
                        href="/contatti"
                        className="inline-flex items-center justify-center rounded-sm px-6 py-3 border border-[#1A2E26] text-[#1A2E26] bg-transparent hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]"
                      >
                        Contattaci
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Timeline Content */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1A2E26] transition-all duration-200 flex items-center justify-center shadow-md"
            aria-label="Evento precedente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === timelineEvents.length - 1}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1A2E26] transition-all duration-200 flex items-center justify-center shadow-md"
            aria-label="Evento successivo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:justify-items-stretch gap-6 mb-12 px-4 sm:px-6 lg:px-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`transition-opacity duration-300 ${
                  index === currentIndex ? 'block opacity-100' : 'hidden opacity-40 lg:block'
                }`}
              >
                <div className="relative aspect-[3/4] bg-[#E8E6E1] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={`${event.year} - ${event.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Bar */}
          <div className="relative px-4 sm:px-6 lg:px-16 mb-8">
            <div className="relative h-1 bg-[#1A2E26]">
              {timelineEvents.map((event, index) => (
                <button
                  key={event.year}
                  onClick={() => setCurrentIndex(index)}
                  className="absolute top-1/2 w-8 h-8 lg:w-4 lg:h-4 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
                  style={{
                    left: `${(index / (timelineEvents.length - 1)) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-label={`Vai a ${event.year}`}
                >
                  <span aria-hidden="true" className="block w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#1A2E26]" />
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:justify-items-stretch gap-8 px-4 sm:px-6 lg:px-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`text-center transition-opacity duration-300 ${
                  index === currentIndex ? 'block opacity-100' : 'hidden opacity-60 lg:block'
                }`}
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E26] mb-3">
                  {event.year}
                </h3>
                <p className="text-[#3D4F48] text-sm md:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 