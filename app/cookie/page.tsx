'use client'

import Link from 'next/link'
import { useSyncExternalStore } from 'react'

function getStoredConsent(): string | null {
  try {
    return window.localStorage.getItem('cookie_consent')
  } catch {
    return null
  }
}

export default function CookieSettingsPage() {
  const consent = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === 'undefined') return () => {}

      const onStorage = (e: StorageEvent) => {
        if (e.key === 'cookie_consent') onStoreChange()
      }
      const onCustom = () => onStoreChange()

      window.addEventListener('storage', onStorage)
      window.addEventListener('cookie_consent_change', onCustom as EventListener)

      return () => {
        window.removeEventListener('storage', onStorage)
        window.removeEventListener('cookie_consent_change', onCustom as EventListener)
      }
    },
    getStoredConsent,
    // Server snapshot: hide choice to avoid hydration mismatch.
    () => null,
  )

  const statusLabel = consent === 'true' ? 'Accettati' : consent === 'false' ? 'Rifiutati' : 'Non impostato'

  const setConsent = (value: 'true' | 'false') => {
    try {
      window.localStorage.setItem('cookie_consent', value)
    } catch {
      // ignore
    }
    try {
      window.dispatchEvent(new Event('cookie_consent_change'))
    } catch {
      // ignore
    }
  }

  const resetConsent = () => {
    try {
      window.localStorage.removeItem('cookie_consent')
    } catch {
      // ignore
    }
    try {
      window.dispatchEvent(new Event('cookie_consent_change'))
    } catch {
      // ignore
    }
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6 font-sans text-stone-800">
      <h1 className="text-4xl font-serif font-bold mb-8 text-[#1A2E26]">Impostazioni cookie</h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm">
          <strong>NOTA:</strong> Questo sito salva solo una preferenza tecnica (accetta/rifiuta) per il banner cookie.
          Non vengono usati cookie di profilazione commerciale.
        </p>

        <div className="rounded-sm border border-[#E8E6E1] bg-white p-5">
          <p className="text-sm text-[#3D4F48]">Stato attuale</p>
          <p className="mt-1 text-[#1A2E26] font-semibold">{statusLabel}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setConsent('false')}
              className="w-full sm:w-auto rounded-sm border border-[#1A2E26] px-6 py-3 text-sm font-medium text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors"
            >
              Rifiuta
            </button>
            <button
              type="button"
              onClick={() => setConsent('true')}
              className="w-full sm:w-auto rounded-sm bg-[#1A2E26] px-6 py-3 text-sm font-medium text-[#F9F9F7] hover:bg-[#2A3E36] transition-colors"
            >
              Accetta
            </button>
            <button
              type="button"
              onClick={resetConsent}
              className="w-full sm:w-auto rounded-sm border border-[#E8E6E1] bg-white px-6 py-3 text-sm font-medium text-[#1A2E26] hover:border-[#C5A059] transition-colors"
            >
              Reimposta scelta
            </button>
          </div>
        </div>

        <p className="text-base text-[#3D4F48]">
          Per maggiori dettagli consulta la{' '}
          <Link href="/privacy-policy" className="underline hover:text-[#C5A059] transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
