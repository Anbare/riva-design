'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Modal from '@/components/ui/Modal'

interface Feature {
    number: string
    eyebrow: string
    category: string
    title: string
    description: string
    image: string
}

const features: Feature[] = [
    {
        number: '01',
        eyebrow: 'Selezione',
        category: 'Legni pregiati',
        title: 'Rovere, noce e ciliegio dai migliori fornitori europei',
        description:
            'Ogni cliente è accolto nel cosa. Selezioniamo i legni raccolta casa storia, e lavoro stessi dopo stabilire il profilo di architetto nelle nostre mani.',
        image: '/images/process/vertical/01_legni_pregiati.webp',
    },
    {
        number: '02',
        eyebrow: 'Dettagli',
        category: 'Finiture su misura',
        title: "Dalla verniciatura naturale all'olio fino alle finiture opache personalizzate",
        description:
            "Nero scezione duri giorni oggetti. La finitura è diversa cose il legno diversi vista, dove arredando il completo per trattamento per esempio.",
        image: '/images/process/vertical/02_Finiture_su_misura.webp',
    },
    {
        number: '03',
        eyebrow: 'Responsabilità',
        category: 'Sostenibilità consapevole',
        title: "Legni certificati e processi che rispettano l'ambiente",
        description:
            "La bellezza senza coscienza non è bellezza. Lavoriamo solo con fornitori che condividono il nostro impegno verso la terra.",
        image: '/images/process/vertical/03_sostenibilita_consapevole.webp',
    },
]

export default function VantaggiVertical() {
    const [legniModalOpen, setLegniModalOpen] = useState(false)
    const [finitureModalOpen, setFinitureModalOpen] = useState(false)
    const [sostenibilitaModalOpen, setSostenibilitaModalOpen] = useState(false)

    return (
        <section className="py-16 md:py-24 bg-[#F9F9F7]">
            <div className="max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={feature.number}
                        className={`${index !== 0 ? 'border-t border-[#E8E6E1]' : ''
                            } py-12 md:py-16 px-6 lg:px-8`}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Text Content */}
                            <div className="space-y-6">
                                {/* Number and Category */}
                                <div className="flex items-center gap-4">
                                    <span className="text-[#3D4F48] text-sm font-medium">
                                        {feature.number}
                                    </span>
                                    <span className="text-[#3D4F48] text-sm font-medium">
                                        {feature.category}
                                    </span>
                                </div>

                                {/* Eyebrow */}
                                <p className="text-[#3D4F48] text-sm font-medium uppercase tracking-wide">
                                    {feature.eyebrow}
                                </p>

                                {/* Title */}
                                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E26] leading-tight">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#3D4F48] text-base leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-wrap items-center gap-4">
                                    {feature.number === '01' ? (
                                        <button
                                            type="button"
                                            onClick={() => setLegniModalOpen(true)}
                                            className={[
                                                'px-6 py-3 bg-transparent border border-[#1A2E26] text-[#1A2E26]',
                                                'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium',
                                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                                            ].join(' ')}
                                        >
                                            Dettagli
                                        </button>
                                    ) : feature.number === '02' ? (
                                        <button
                                            type="button"
                                            onClick={() => setFinitureModalOpen(true)}
                                            className={[
                                                'px-6 py-3 bg-transparent border border-[#1A2E26] text-[#1A2E26]',
                                                'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium',
                                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                                            ].join(' ')}
                                        >
                                            Dettagli
                                        </button>
                                    ) : feature.number === '03' ? (
                                        <button
                                            type="button"
                                            onClick={() => setSostenibilitaModalOpen(true)}
                                            className={[
                                                'px-6 py-3 bg-transparent border border-[#1A2E26] text-[#1A2E26]',
                                                'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium',
                                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                                            ].join(' ')}
                                        >
                                            Dettagli
                                        </button>
                                    ) : (
                                        <>
                                            <button className="px-6 py-3 bg-transparent border border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium">
                                                Scopri
                                            </button>
                                            <button className="flex items-center gap-1 text-[#1A2E26] hover:text-[#C5A059] transition-colors duration-200 text-sm font-medium group">
                                                <span>Leggi</span>
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-[5/4] bg-[#E8E6E1] overflow-hidden">
                                <Image
                                    src={feature.image || "/placeholder.svg"}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                open={legniModalOpen}
                onClose={() => setLegniModalOpen(false)}
                eyebrow="Selezione"
                title="Legni pregiati"
                description="Essenze selezionate per stabilità, resa estetica e durata."
                footer={
                    <Link
                        href="/contatti"
                        className={[
                            'inline-flex items-center justify-center rounded-sm',
                            'px-6 py-3 border border-[#1A2E26] text-[#1A2E26] bg-transparent',
                            'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                        ].join(' ')}
                    >
                        Parliamo del tuo progetto
                    </Link>
                }
            >
                <ul className="mt-1 list-disc pl-5 space-y-2 text-[#3D4F48] text-base leading-relaxed">
                    <li>Rovere europeo e noce nazionale, selezione per venatura e stagionatura</li>
                    <li>Trattamenti protettivi su richiesta (naturali o opachi)</li>
                    <li>Stabilità dimensionale verificata in fase di lavorazione</li>
                </ul>

                <div className="mt-6 rounded-sm border border-[#E8E6E1] bg-white p-4 sm:p-5">
                    <p className="text-[#1A2E26] font-medium text-sm">Dettagli tecnici</p>
                    <p className="mt-2 text-[#3D4F48] text-sm leading-relaxed">
                        Essenze: rovere, noce, ciliegio. Origine: UE/Italia. Selezione: venatura e nodi controllati.
                    </p>
                </div>
            </Modal>

            <Modal
                open={finitureModalOpen}
                onClose={() => setFinitureModalOpen(false)}
                eyebrow="Dettagli"
                title="Finiture su misura"
                description="Dalla verniciatura naturale all’olio: la finitura cambia tutto."
                footer={
                    <Link
                        href="/contatti"
                        className={[
                            'inline-flex items-center justify-center rounded-sm',
                            'px-6 py-3 border border-[#1A2E26] text-[#1A2E26] bg-transparent',
                            'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                        ].join(' ')}
                    >
                        Richiedi una proposta
                    </Link>
                }
            >
                <ul className="mt-1 list-disc pl-5 space-y-2 text-[#3D4F48] text-base leading-relaxed">
                    <li>Opaco, satinato o naturale a poro aperto</li>
                    <li>Colorazioni su campione e abbinamenti con pietra/metallo</li>
                    <li>Manutenzione guidata e consigli post-consegna</li>
                </ul>

                <div className="mt-6 rounded-sm border border-[#E8E6E1] bg-white p-4 sm:p-5">
                    <p className="text-[#1A2E26] font-medium text-sm">Dettagli tecnici</p>
                    <p className="mt-2 text-[#3D4F48] text-sm leading-relaxed">
                        Finiture: olio, lacca opaca, ceratura. Prove su campione prima della produzione.
                    </p>
                </div>
            </Modal>

            <Modal
                open={sostenibilitaModalOpen}
                onClose={() => setSostenibilitaModalOpen(false)}
                eyebrow="Responsabilità"
                title="Sostenibilità consapevole"
                description="Materiali certificati e filiera trasparente, senza compromessi."
                footer={
                    <Link
                        href="/contatti"
                        className={[
                            'inline-flex items-center justify-center rounded-sm',
                            'px-6 py-3 border border-[#1A2E26] text-[#1A2E26] bg-transparent',
                            'hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-sm font-medium',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                        ].join(' ')}
                    >
                        Chiedi informazioni
                    </Link>
                }
            >
                <ul className="mt-1 list-disc pl-5 space-y-2 text-[#3D4F48] text-base leading-relaxed">
                    <li>Legni certificati FSC/PEFC su richiesta</li>
                    <li>Ottimizzazione tagli per ridurre scarti</li>
                    <li>Prodotti a bassa emissione per ambienti interni</li>
                </ul>

                <div className="mt-6 rounded-sm border border-[#E8E6E1] bg-white p-4 sm:p-5">
                    <p className="text-[#1A2E26] font-medium text-sm">Dettagli tecnici</p>
                    <p className="mt-2 text-[#3D4F48] text-sm leading-relaxed">
                        Certificazioni disponibili. Fornitori selezionati. Vernici a base acqua dove possibile.
                    </p>
                </div>
            </Modal>
        </section>
    )
}
