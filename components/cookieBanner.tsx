'use client'

import { useSyncExternalStore } from 'react'

export default function CookieBanner() {
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
    () => {
      try {
        return window.localStorage.getItem('cookie_consent')
      } catch {
        // If storage is blocked/unavailable, treat as "not set" and show banner.
        return null
      }
    },
    // Server snapshot: hide to avoid hydration mismatch; client will re-check.
    () => 'true',
  )

  const visible = consent === null

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

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm leading-relaxed text-white/90">
            <p className="mb-2">
              Usiamo i cookie per migliorare l’esperienza sul sito. Puoi accettare o rifiutare.
            </p>
            <p className="text-xs text-white/70">
              <strong>Analitici (anonimi) / Performance:</strong> Utilizziamo Vercel Speed Insights per misurare le prestazioni del sito (Web Vitals) in modo aggregato e anonimo. Nessun cookie di marketing né tracciamento pubblicitario. 
              <a href="/privacy-policy" className="underline ml-1">Maggiori informazioni</a>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => setConsent('false')}
              className="w-full sm:w-auto rounded-sm border border-white/80 px-6 py-3 text-sm font-medium text-white hover:border-white hover:text-white transition-colors"
            >
              Rifiuta
            </button>

            <button
              type="button"
              onClick={() => setConsent('true')}
              className="w-full sm:w-auto rounded-sm bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

