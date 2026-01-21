'use client'

import { useEffect, useId, useRef, type ReactNode } from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: string
  description?: string
  children?: ReactNode
  footer?: ReactNode
}

export default function Modal({ open, onClose, title, eyebrow, description, children, footer }: ModalProps) {
  const titleId = useId()
  const descriptionId = useId()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return

    // Focus the close button for basic accessibility
    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)

    // Prevent background scrolling while modal is open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      />

      {/* Panel */}
      <div className="relative h-full w-full overflow-y-auto">
        <div className="min-h-full w-full px-4 py-6 sm:px-6 sm:py-10 flex items-center justify-center">
          <div className="w-full max-w-2xl rounded-sm border border-[#E8E6E1] bg-[#F9F9F7] shadow-sm">
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-[#E8E6E1]">
              <div className="min-w-0">
                {eyebrow ? (
                  <p className="text-[#3D4F48] text-xs font-medium uppercase tracking-wide">{eyebrow}</p>
                ) : null}
                <h2 id={titleId} className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#1A2E26] leading-tight">
                  {title}
                </h2>
                {description ? (
                  <p id={descriptionId} className="mt-3 text-[#3D4F48] text-base leading-relaxed">
                    {description}
                  </p>
                ) : null}
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Chiudi modal"
                className={[
                  'shrink-0 rounded-sm border border-[#E8E6E1] bg-white px-3 py-2 text-[#1A2E26]',
                  'hover:border-[#C5A059] hover:text-[#C5A059] transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
                ].join(' ')}
              >
                ×
              </button>
            </div>

            <div className="p-5 sm:p-6">{children}</div>

            {footer ? (
              <div className="p-5 sm:p-6 border-t border-[#E8E6E1]">{footer}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

