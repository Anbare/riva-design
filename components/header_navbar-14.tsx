"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Progetti", href: "/progetti" },
  { label: "L'Atelier", href: "/atelier" },
]

const dropdownLinks = [
  { label: "Chi Siamo", href: "/atelier#chi-siamo" },
  { label: "Materiali", href: "/atelier#materiali" },
  { label: "Processo", href: "/#processo" },
  { label: "Contatti", href: "/contatti" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const hidePrimaryCta = pathname === "/contatti"

  const isDesktop = () =>
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(min-width: 1024px)").matches

  const scrollToSectionCentered = (id: string, offsetPx = 0) => {
    const tryScroll = (attempt: number) => {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        const absoluteY = rect.top + window.scrollY
        const desiredTop = Math.max(0, absoluteY - window.innerHeight / 2 + rect.height / 2 + offsetPx)
        window.scrollTo({ top: desiredTop, behavior: "smooth" })
        return true
      }
      if (attempt >= 30) return false
      window.setTimeout(() => tryScroll(attempt + 1), 50)
      return false
    }
    tryScroll(0)
  }

  // For mobile/tablet use scroll-margin-top on the target (scrollIntoView),
  // while keeping desktop behavior identical (centered scroll).
  const scrollToSectionStartOnMobile = (id: string, desktopOffsetPx = 0) => {
    const tryScroll = (attempt: number) => {
      const el = document.getElementById(id)
      if (el) {
        if (!isDesktop()) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          return true
        }
        const rect = el.getBoundingClientRect()
        const absoluteY = rect.top + window.scrollY
        const desiredTop = Math.max(0, absoluteY - window.innerHeight / 2 + rect.height / 2 + desktopOffsetPx)
        window.scrollTo({ top: desiredTop, behavior: "smooth" })
        return true
      }
      if (attempt >= 30) return false
      window.setTimeout(() => tryScroll(attempt + 1), 50)
      return false
    }
    tryScroll(0)
  }

  const handleProcessoClick = (e?: React.MouseEvent) => {
    e?.preventDefault()
    setIsDropdownOpen(false)
    setIsMenuOpen(false)

    if (pathname === "/") {
      scrollToSectionCentered("processo")
      return
    }

    try {
      window.sessionStorage.setItem("riva:scrollTo", "processo")
    } catch {
      // ignore
    }
    router.push("/#processo")
  }

  const handleMaterialiClick = (e?: React.MouseEvent) => {
    e?.preventDefault()
    setIsDropdownOpen(false)
    setIsMenuOpen(false)

    if (pathname === "/atelier") {
      scrollToSectionCentered("materiali", Math.round(window.innerHeight * 0.18))
      return
    }

    try {
      window.sessionStorage.setItem("riva:scrollTo", "materiali")
    } catch {
      // ignore
    }
    router.push("/atelier#materiali")
  }

  const handleChiSiamoClick = (e?: React.MouseEvent) => {
    e?.preventDefault()
    setIsDropdownOpen(false)
    setIsMenuOpen(false)

    if (pathname === "/atelier") {
      scrollToSectionStartOnMobile("chi-siamo", Math.round(window.innerHeight * 0.18))
      return
    }

    try {
      window.sessionStorage.setItem("riva:scrollTo", "chi-siamo")
    } catch {
      // ignore
    }
    router.push("/atelier#chi-siamo")
  }

  const cancelScheduledDropdownClose = () => {
    if (dropdownCloseTimeoutRef.current) {
      clearTimeout(dropdownCloseTimeoutRef.current)
      dropdownCloseTimeoutRef.current = null
    }
  }

  const openDropdown = () => {
    cancelScheduledDropdownClose()
    setIsDropdownOpen(true)
  }

  const scheduleCloseDropdown = () => {
    cancelScheduledDropdownClose()
    dropdownCloseTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
      dropdownCloseTimeoutRef.current = null
    }, 250)
  }

  useEffect(() => {
    return () => cancelScheduledDropdownClose()
  }, [])

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    let target: "processo" | "materiali" | "chi-siamo" | null = null

    try {
      const pending = window.sessionStorage.getItem("riva:scrollTo")
      if (pending === "processo" || pending === "materiali" || pending === "chi-siamo") {
        target = pending
        window.sessionStorage.removeItem("riva:scrollTo")
      }
    } catch {
      // ignore
    }

    if (!target) {
      if (hash === "#processo") target = "processo"
      if (hash === "#materiali") target = "materiali"
      if (hash === "#chi-siamo") target = "chi-siamo"
    }

    if (pathname === "/" && target === "processo") {
      window.setTimeout(() => scrollToSectionCentered("processo"), 0)
    }

    if (pathname === "/atelier" && target === "chi-siamo") {
      window.setTimeout(() => scrollToSectionStartOnMobile("chi-siamo", Math.round(window.innerHeight * 0.18)), 0)
    }

    if (pathname === "/atelier" && target === "materiali") {
      window.setTimeout(() => scrollToSectionCentered("materiali", Math.round(window.innerHeight * 0.18)), 0)
    }
  }, [pathname])

  return (
    <header className="w-full bg-[#F9F9F7] border-b border-[#E8E6E1]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-2xl md:text-3xl font-bold text-[#1A2E26] tracking-tight italic"
          >
            Riva Design
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#3D4F48] text-base font-normal hover:text-[#1A2E26] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                className="flex items-center gap-1 text-[#3D4F48] text-base font-normal hover:text-[#1A2E26] transition-colors duration-200"
                onClick={() => {
                  cancelScheduledDropdownClose()
                  setIsDropdownOpen(!isDropdownOpen)
                }}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Altro
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#E8E6E1] shadow-sm"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  {dropdownLinks.map((link) => (
                    link.label === "Processo" ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={handleProcessoClick}
                        className="block px-4 py-3 text-[#3D4F48] text-sm hover:bg-[#F9F9F7] hover:text-[#1A2E26] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : link.label === "Materiali" ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={handleMaterialiClick}
                        className="block px-4 py-3 text-[#3D4F48] text-sm hover:bg-[#F9F9F7] hover:text-[#1A2E26] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : link.label === "Chi Siamo" ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={handleChiSiamoClick}
                        className="block px-4 py-3 text-[#3D4F48] text-sm hover:bg-[#F9F9F7] hover:text-[#1A2E26] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-3 text-[#3D4F48] text-sm hover:bg-[#F9F9F7] hover:text-[#1A2E26] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          {!hidePrimaryCta && (
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contatti#contattaci"
                className="px-6 py-2.5 text-[#F9F9F7] text-sm font-medium bg-[#1A2E26] border-2 border-[#1A2E26] hover:bg-[#2A3E36] transition-colors duration-200 whitespace-nowrap"
              >
                Preventivo gratuito
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-[#1A2E26]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-[#E8E6E1]">
            <div className="flex flex-col pt-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-[#3D4F48] text-lg font-normal hover:text-[#1A2E26] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Dropdown */}
              <div className="space-y-3">
                <button
                  className="flex items-center gap-1 py-2 text-[#3D4F48] text-lg font-normal hover:text-[#1A2E26] transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                >
                  Altro
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {isDropdownOpen && (
                  <div className="pl-4 space-y-3 border-l-2 border-[#C5A059]">
                    {dropdownLinks.map((link) => (
                      link.label === "Processo" ? (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block py-2 text-[#3D4F48] text-base hover:text-[#1A2E26] transition-colors duration-200"
                          onClick={handleProcessoClick}
                        >
                          {link.label}
                        </Link>
                      ) : link.label === "Materiali" ? (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block py-2 text-[#3D4F48] text-base hover:text-[#1A2E26] transition-colors duration-200"
                          onClick={handleMaterialiClick}
                        >
                          {link.label}
                        </Link>
                      ) : link.label === "Chi Siamo" ? (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block py-2 text-[#3D4F48] text-base hover:text-[#1A2E26] transition-colors duration-200"
                          onClick={handleChiSiamoClick}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block py-2 text-[#3D4F48] text-base hover:text-[#1A2E26] transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTA Buttons */}
              {!hidePrimaryCta && (
                <div className="flex flex-col gap-3 pt-6">
                  <Link
                    href="/contatti#contattaci"
                    className="w-full text-center px-6 py-3 text-[#F9F9F7] text-base font-medium bg-[#1A2E26] border-2 border-[#1A2E26] hover:bg-[#2A3E36] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Preventivo gratuito
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
