'use client'

import { useEffect, useRef } from 'react'

const logos = [
  { name: 'Studio Associati Milano', width: 140 },
  { name: 'Arch. Bernini & Partners', width: 160 },
  { name: 'Design Studio Torino', width: 130 },
  { name: 'Minotti Architetti', width: 145 },
  { name: 'Venezia Design Lab', width: 155 },
  { name: 'Contemporary Studio', width: 150 },
  { name: 'Atelier Roma', width: 135 },
  { name: 'Studio Architettura Como', width: 165 },
]

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-16 md:py-20 bg-[#F9F9F7] border-y border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[#1A2E26] text-2xl md:text-3xl font-serif font-semibold mb-12 md:mb-16">
          Scelti dai migliori studi di architettura
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F9F7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9F9F7] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-8 md:px-10"
              >
                <div className="text-[#1A2E26] font-semibold text-lg md:text-xl whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
