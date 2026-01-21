'use client'

import type { MouseEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import CTAGroup from '@/components/cta/CTAGroup'

type Cta = {
  label: string
  href: string
}

interface SpecialitaProps {
  eyebrow?: string
  title?: string
  description?: string
  preCtaText?: string
  primaryCta?: Cta
  secondaryCta?: Cta
}

export default function Specialita({
  eyebrow = "Specialità",
  title = "Tre categorie di eccellenza",
  description = `Ogni progetto richiede una soluzione unica. Riva Design offre cucine, armadi e spazi living
            costruiti secondo le esigenze specifiche di chi sa riconoscere la qualità.`,
  preCtaText,
  primaryCta = { label: "Progetti", href: "/progetti" },
  secondaryCta = { label: "Contattaci", href: "/contatti#contattaci" },
}: SpecialitaProps) {
  const pathname = usePathname()
  const router = useRouter()

  const scrollToMateriali = () => {
    const offsetPx = Math.round(window.innerHeight * 0.18) // same as header "Materiali"

    const tryScroll = (attempt: number) => {
      const el = document.getElementById('materiali')
      if (el) {
        const rect = el.getBoundingClientRect()
        const absoluteY = rect.top + window.scrollY
        const desiredTop = Math.max(0, absoluteY - window.innerHeight / 2 + rect.height / 2 + offsetPx)
        window.scrollTo({ top: desiredTop, behavior: 'smooth' })
        return true
      }
      if (attempt >= 30) return false
      window.setTimeout(() => tryScroll(attempt + 1), 50)
      return false
    }

    tryScroll(0)
  }

  const handlePrimaryClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!primaryCta.href.includes('#materiali')) return
    e.preventDefault()

    if (pathname === '/atelier') {
      scrollToMateriali()
      return
    }

    try {
      window.sessionStorage.setItem('riva:scrollTo', 'materiali')
    } catch {
      // ignore
    }
    router.push('/atelier#materiali')
  }

  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[#3D4F48] text-sm md:text-base font-medium mb-4 tracking-wide">
          {eyebrow}
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6 leading-tight">
          {title}
        </h2>

        {/* Body text */}
        {description?.trim() ? (
          <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            {description}
          </p>
        ) : null}

        {preCtaText?.trim() ? (
          <p className="text-[#3D4F48] text-sm md:text-base font-medium mb-6">
            {preCtaText}
          </p>
        ) : null}

        {/* CTAs */}
        <CTAGroup
          align="center"
          primary={{
            label: primaryCta.label,
            href: primaryCta.href,
            onClick: handlePrimaryClick,
            className: 'border-[#1A2E26] lg:border-2',
          }}
          secondary={{ label: secondaryCta.label, href: secondaryCta.href }}
        />
      </div>
    </section>
  )
}
  