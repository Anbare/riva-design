import Link from 'next/link'
import type { MouseEventHandler } from 'react'

type CTAConfig = {
  label: string
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}

export default function CTAGroup({
  primary,
  secondary,
  align = 'center',
  className,
}: {
  primary: CTAConfig
  secondary?: CTAConfig
  align?: 'start' | 'center' | 'end'
  className?: string
}) {
  const containerAlign =
    align === 'start'
      ? 'items-stretch lg:items-center lg:justify-start'
      : align === 'end'
        ? 'items-stretch lg:items-center lg:justify-end'
        : 'items-stretch lg:items-center lg:justify-center'

  const baseButton = [
    'inline-flex items-center justify-center text-center',
    'w-full lg:w-auto',
    'min-h-12 lg:min-h-0',
    'px-8 py-3 md:px-10 md:py-4',
    'text-base font-medium',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7]',
  ].join(' ')

  const primaryClasses = [
    baseButton,
    'bg-[#1A2E26] text-[#F9F9F7] hover:bg-[#2A3E36]',
    // Under <lg keep border-box height consistent with outline variant, without affecting desktop visuals.
    'border-2 border-transparent lg:border-0',
    primary.className ?? '',
  ].join(' ')

  const secondaryClasses = [
    baseButton,
    'bg-transparent text-[#1A2E26] border-2 border-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7]',
    secondary?.className ?? '',
  ].join(' ')

  return (
    <div className={['flex flex-col gap-4 w-full lg:w-auto lg:flex-row', containerAlign, className ?? ''].join(' ')}>
      <Link href={primary.href} onClick={primary.onClick} className={primaryClasses}>
        {primary.label}
      </Link>

      {secondary ? (
        <Link href={secondary.href} onClick={secondary.onClick} className={secondaryClasses}>
          {secondary.label}
        </Link>
      ) : null}
    </div>
  )
}

