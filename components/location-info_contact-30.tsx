'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/ui/Modal'

export default function LocationInfo() {
    const [mapModalOpen, setMapModalOpen] = useState(false)
    return (
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
            <div className="max-w-7xl mx-auto">
                {/* Content Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] gap-8 lg:gap-12 items-start">
                    {/* Left Column - Header + Info */}
						<div className="lg:pr-6">
                        {/* Header */}
                        <div className="mb-12 md:mb-16">
                            <p className="text-sm font-medium text-[#3D4F48] mb-3">Ubicazione</p>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-4">
                                Dove trovarci
                            </h2>
                            <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
                                Visita il nostro atelier nel cuore dell&apos;Italia
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Location */}
                            <div className="border-l-2 border-[#C5A059] pl-6">
                                <h3 className="text-2xl font-bold text-[#1A2E26] mb-3">
                                    Brescia
                                </h3>
                                <p className="text-[#3D4F48] text-base leading-relaxed mb-4">
                                    Via Artigiani 45, Brescia, Italia 25125
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setMapModalOpen(true)}
                                    className="inline-block text-[#1A2E26] text-sm font-semibold hover:text-[#C5A059] transition-colors duration-200 underline decoration-1 underline-offset-4 text-left"
                                >
                                    Vedi sulla mappa
                                </button>
                            </div>

                            {/* Direct Contacts */}
                            <div>
                                <h3 className="text-xl font-bold text-[#1A2E26] mb-3">
                                    Contatti diretti
                                </h3>
                                <p className="text-[#3D4F48] text-base leading-relaxed">
                                    +39 030 123 4567 | info@rivadesign.it
                                </p>
                            </div>

                            {/* Opening Hours */}
                            <div>
                                <p className="text-sm font-semibold text-[#1A2E26] mb-3">
                                    Orari di apertura
                                </p>
                                <h3 className="text-xl md:text-2xl font-bold text-[#1A2E26] mb-3">
                                    Lunedì a venerdì, 9:00 - 18:00
                                </h3>
                                <p className="text-[#3D4F48] text-base leading-relaxed mb-4">
                                    Su appuntamento
                                </p>
                                <Link
                                    href="/contatti#contattaci"
                                    onClick={(e) => {
                                        // Se siamo già sulla pagina contatti, gestisci lo scroll smooth
                                        if (window.location.pathname === '/contatti') {
                                            e.preventDefault()
                                            const element = document.getElementById('contattaci')
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                            }
                                        }
                                    }}
                                    className="inline-block text-[#1A2E26] text-sm font-semibold hover:text-[#C5A059] transition-colors duration-200 underline decoration-1 underline-offset-4"
                                >
                                    Contattaci per prenotare
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Map/Image */}
						<div className="relative w-full bg-[#E8E6E1] aspect-[16/10] lg:aspect-[4/5] overflow-hidden border border-[#C5A059]/20">
                        <Image
                            src="/images/contact/contatti_dove_trovarci.webp"
                            alt="Mappa dell'atelier Riva Design a Brescia"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>

            {/* Map Modal */}
            <Modal
                open={mapModalOpen}
                onClose={() => setMapModalOpen(false)}
                title="Mappa non disponibile in questa demo"
                description="Questa è una versione dimostrativa del sito. Nella versione reale, qui sarebbe disponibile il collegamento diretto a Google Maps."
                footer={
                    <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => setMapModalOpen(false)}
                            className={[
                                'inline-flex items-center justify-center rounded-sm',
                                'px-6 py-3 border border-[#E8E6E1] bg-white text-[#1A2E26]',
                                'hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-200 text-sm font-medium',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                            ].join(' ')}
                        >
                            Chiudi
                        </button>
                        <Link
                            href="/contatti#contattaci"
                            onClick={() => setMapModalOpen(false)}
                            className={[
                                'inline-flex items-center justify-center rounded-sm',
                                'px-6 py-3 bg-[#1A2E26] text-[#F9F9F7] border border-[#1A2E26]',
                                'hover:bg-[#0F1F19] transition-colors duration-200 text-sm font-medium',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                            ].join(' ')}
                        >
                            Contattaci
                        </Link>
                    </div>
                }
            >
            </Modal>
        </section>
    )
}
