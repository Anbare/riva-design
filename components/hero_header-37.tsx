'use client'

import Image from 'next/image'
import CTAGroup from '@/components/cta/CTAGroup'

export default function Hero() {
  return (
    <section className="w-full bg-[#F9F9F7]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh] lg:min-h-screen">
        {/* Image Section */}
        <div className="relative bg-[#D1D1D1] min-h-[400px] lg:min-h-screen">
          <Image
            src="/images/hero/hero.webp"
            alt="Artigianato del legno Riva Design"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-center px-6 py-16 lg:px-12 xl:px-20 bg-white">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] leading-tight mb-6">
              Tre decenni di maestria nel legno italiano
            </h1>
            
            <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed mb-10">
              Riva Design trasforma visioni in realtà attraverso la lavorazione artigianale e la precisione contemporanea. Ogni pezzo racconta una storia di dedizione e qualità senza compromessi.
            </p>

            <CTAGroup
              align="start"
              primary={{
                label: 'Scopri',
                href: '/atelier',
                className: 'border-[#1A2E26] lg:border-2',
              }}
              secondary={{ label: 'Contattaci', href: '/contatti#contattaci' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
