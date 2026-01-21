'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type GalleriaProps = {
  title?: string
  subtitle?: string
}

interface GalleryImage {
  id: number
  src: string
  alt: string
  width: number
  height: number
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/placeholder.svg?height=800&width=1200',
    alt: 'Cucina su misura in noce canaletto',
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Libreria a parete in rovere',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: '/placeholder.svg?height=700&width=900',
    alt: 'Armadio su misura camera da letto',
    width: 900,
    height: 700,
  },
  {
    id: 4,
    src: '/placeholder.svg?height=650&width=850',
    alt: 'Tavolo da pranzo in legno massello',
    width: 850,
    height: 650,
  },
  {
    id: 5,
    src: '/placeholder.svg?height=750&width=950',
    alt: 'Mobile living contemporaneo',
    width: 950,
    height: 750,
  },
  {
    id: 6,
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Boiserie e parete attrezzata',
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: '/placeholder.svg?height=800&width=1100',
    alt: 'Cucina isola centrale legno scuro',
    width: 1100,
    height: 800,
  },
  {
    id: 8,
    src: '/placeholder.svg?height=700&width=900',
    alt: 'Cabina armadio su misura',
    width: 900,
    height: 700,
  },
]

export default function Galleria({
  title = 'Galleria',
  subtitle = 'Scopri tra i nostri lavori più significativi',
}: GalleriaProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let rafId = 0

    const updateIndexFromScroll = () => {
      const container = scrollRef.current
      if (!container) return

      const items = itemRefs.current
      if (!items.length) return

      const targetX = container.scrollLeft + container.clientWidth / 2

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (!item) continue
        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(itemCenter - targetX)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      }

      setCurrentIndex((prev) => (prev === closestIndex ? prev : closestIndex))
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        updateIndexFromScroll()
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    // Sync once on mount (e.g. if restored scroll position)
    updateIndexFromScroll()

    return () => {
      el.removeEventListener('scroll', onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  const goToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    const target = itemRefs.current[index]
    if (!container || !target) return

    const left = target.offsetLeft + target.offsetWidth / 2 - container.clientWidth / 2
    container.scrollTo({ left, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 bg-[#F9F9F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-4">
            {title}
          </h2>
          <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="relative">
        {/* Desktop Navigation Buttons */}
        <div className="hidden md:block">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#F9F9F7] border-2 border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#F9F9F7] disabled:hover:text-[#1A2E26] transition-colors duration-200 shadow-lg"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === galleryImages.length - 1}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#F9F9F7] border-2 border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#F9F9F7] disabled:hover:text-[#1A2E26] transition-colors duration-200 shadow-lg"
            aria-label="Immagine successiva"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6 px-6 lg:px-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className="flex-shrink-0 snap-center w-[85vw] md:w-[70vw] lg:w-[60vw] relative group"
            >
              <div className="relative aspect-[4/3] bg-[#E8E6E1] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 60vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-[#1A2E26] bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 md:p-6 text-[#F9F9F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-base md:text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex justify-center mt-6 gap-1.5">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                scrollToIndex(index)
              }}
              className="p-2"
              aria-label={`Vai all'immagine ${index + 1}`}
            >
              <span
                aria-hidden="true"
                className={`block h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-[#1A2E26]' : 'w-2 bg-[#C5A059]'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <span className="text-[#1A2E26] font-medium text-lg">
          {currentIndex + 1}
        </span>
        <span className="text-[#3D4F48]">/</span>
        <span className="text-[#3D4F48]">{galleryImages.length}</span>
      </div>
    </section>
  )
}
