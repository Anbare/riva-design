'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [toastOpen, setToastOpen] = useState(false)
  const toastTimerRef = useRef<number | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  const isDesktop = () =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 1024px)').matches

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
    }
  }, [])

  const scrollToSectionCentered = (id: string, offsetPx = 0) => {
    const tryScroll = (attempt: number) => {
      const el = document.getElementById(id)
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

  const scrollToSectionTop = (id: string, topOffsetPx = 24) => {
    const tryScroll = (attempt: number) => {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        const absoluteY = rect.top + window.scrollY
        const desiredTop = Math.max(0, absoluteY - topOffsetPx)
        window.scrollTo({ top: desiredTop, behavior: 'smooth' })
        return true
      }
      if (attempt >= 30) return false
      window.setTimeout(() => tryScroll(attempt + 1), 50)
      return false
    }
    tryScroll(0)
  }

  // Used for anchors that rely on scroll-margin-top (mobile/tablet).
  const scrollToSectionStart = (id: string) => {
    const tryScroll = (attempt: number) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      if (attempt >= 30) return false
      window.setTimeout(() => tryScroll(attempt + 1), 50)
      return false
    }
    tryScroll(0)
  }

  const smartScroll = (
    e: React.MouseEvent | undefined,
    {
      targetPathname,
      id,
      offsetPx = 0,
      align = 'center',
    }: { targetPathname: string; id: string; offsetPx?: number; align?: 'center' | 'top' },
  ) => {
    e?.preventDefault()

    if (pathname === targetPathname) {
      // On mobile/tablet, let scroll-margin-top handle header overlap for specific anchors.
      if (!isDesktop() && (id === 'portfolio' || id === 'chi-siamo')) {
        scrollToSectionStart(id)
        return
      }
      if (align === 'top') {
        scrollToSectionTop(id, 24)
      } else {
        scrollToSectionCentered(id, offsetPx)
      }
      return
    }

    try {
      window.sessionStorage.setItem('riva:scrollTo', id)
    } catch {
      // ignore
    }

    router.push(`${targetPathname}#${id}`)
  }

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    let targetId: string | null = null

    try {
      const pending = window.sessionStorage.getItem('riva:scrollTo')
      if (pending) {
        targetId = pending
        window.sessionStorage.removeItem('riva:scrollTo')
      }
    } catch {
      // ignore
    }

    if (!targetId && hash) {
      targetId = hash.replace('#', '')
    }

    if (!targetId) return

    const offsetNudge = Math.round(window.innerHeight * 0.18)

    if (pathname === '/' && targetId === 'processo') {
      window.setTimeout(() => scrollToSectionCentered('processo', 0), 0)
    }

    if (pathname === '/atelier' && targetId === 'chi-siamo') {
      window.setTimeout(() => {
        if (!isDesktop()) scrollToSectionStart('chi-siamo')
        else scrollToSectionCentered('chi-siamo', offsetNudge)
      }, 0)
    }

    if (pathname === '/atelier' && targetId === 'materiali') {
      window.setTimeout(() => scrollToSectionCentered('materiali', offsetNudge), 0)
    }

    if (pathname === '/progetti' && targetId === 'portfolio') {
      window.setTimeout(() => {
        if (!isDesktop()) scrollToSectionStart('portfolio')
        else scrollToSectionCentered('portfolio', offsetNudge)
      }, 0)
    }

    if (pathname === '/progetti' && targetId === 'domande') {
      window.setTimeout(() => scrollToSectionTop('domande', 24), 0)
    }

    if (pathname === '/contatti' && targetId === 'contattaci') {
      window.setTimeout(() => scrollToSectionTop('contattaci', 24), 0)
    }
  }, [pathname])

  return (
    <footer className="bg-[#F9F9F7] border-t border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        {/* Toast (fake submit feedback) */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className={[
            'fixed bottom-6 right-6 z-50',
            'transition-all duration-200',
            toastOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none',
          ].join(' ')}
        >
          <div className="flex items-start gap-3 rounded-md border border-[#E8E6E1] bg-white px-4 py-3 shadow-lg">
            <div className="mt-0.5 h-2 w-2 rounded-full bg-[#2F7D32]" />
            <div className="text-sm text-[#1A2E26]">
              <p className="font-medium">Iscrizione completata</p>
              <p className="text-[#3D4F48]">Grazie! Ti abbiamo aggiunto alla newsletter.</p>
            </div>
            <button
              type="button"
              onClick={() => setToastOpen(false)}
              className="ml-2 text-[#3D4F48] hover:text-[#1A2E26] transition-colors"
              aria-label="Chiudi notifica"
            >
              ×
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 md:mb-24">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block mb-6 font-serif text-2xl md:text-3xl font-bold text-[#1A2E26] tracking-tight italic"
            >
              Riva Design
            </Link>
            <p className="text-[#3D4F48] text-sm leading-relaxed mb-6 max-w-md">
              Rimani aggiornato con le nostre ultime creazioni e innovazioni.
            </p>
            <form
              className="flex flex-col gap-3 mb-4 max-w-md"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                if (!form.checkValidity()) {
                  form.reportValidity()
                  return
                }

                // Fake submit: no network requests, no real data sending.
                setEmail('')
                setToastOpen(true)
                if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
                toastTimerRef.current = window.setTimeout(() => setToastOpen(false), 3500)
              }}
            >
              <input
                type="email"
                placeholder="inserisci@tuaemail.com"
                className="w-full px-5 py-4 border border-[#E8E6E1] bg-white text-[#1A2E26] placeholder:text-[#3D4F48]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-base"
                required
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-base font-medium"
              >
                Iscriviti
              </button>
            </form>
            <p className="text-[#3D4F48] text-xs leading-relaxed max-w-md">
              Iscrivendoti accetti la nostra politica sulla privacy e consenti di ricevere comunicazioni da Riva Design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#1A2E26] font-semibold text-sm mb-4">Navigazione</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/progetti" className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/atelier" className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200">
                  L&apos;Atelier
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200">
                  Contatti
                </Link>
              </li>
              <li>
                <Link
                  href="/atelier#chi-siamo"
                  onClick={(e) =>
                    smartScroll(e, {
                      targetPathname: '/atelier',
                      id: 'chi-siamo',
                      offsetPx: Math.round(window.innerHeight * 0.18),
                    })
                  }
                  className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  Chi siamo
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#1A2E26] font-semibold text-sm mb-4">Risorse</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/progetti#portfolio"
                  onClick={(e) =>
                    smartScroll(e, {
                      targetPathname: '/progetti',
                      id: 'portfolio',
                      offsetPx: Math.round(window.innerHeight * 0.18),
                    })
                  }
                  className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#processo"
                  onClick={(e) =>
                    smartScroll(e, {
                      targetPathname: '/',
                      id: 'processo',
                      offsetPx: 0,
                    })
                  }
                  className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  Processi
                </Link>
              </li>
              <li>
                <Link
                  href="/atelier#materiali"
                  onClick={(e) =>
                    smartScroll(e, {
                      targetPathname: '/atelier',
                      id: 'materiali',
                      offsetPx: Math.round(window.innerHeight * 0.18),
                    })
                  }
                  className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  Materiali
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti#contattaci"
                  onClick={(e) =>
                    smartScroll(e, {
                      targetPathname: '/contatti',
                      id: 'contattaci',
                      align: 'top',
                    })
                  }
                  className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  Contattaci
                </Link>
              </li>
              <li>
                <Link
                  href="/progetti#domande"
                  onClick={(e) =>
                    smartScroll(e, {
                      targetPathname: '/progetti',
                      id: 'domande',
                      align: 'top',
                    })
                  }
                  className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  Domande
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#1A2E26] font-semibold text-sm mb-4">Seguici</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-10 md:mb-12">
          <h2 className="font-serif text-[#1A2E26] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none">
            Ebanisteria Riva & Figli
          </h2>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E8E6E1] mb-6"></div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[#3D4F48] text-sm">
            © 2025 Riva Design. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link
              href="/privacy-policy"
              className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200 underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termini-servizio"
              className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200 underline"
            >
              Termini di servizio
            </Link>
            <Link
              href="/cookie"
              className="text-[#3D4F48] text-sm hover:text-[#C5A059] transition-colors duration-200 underline"
            >
              Impostazioni cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
