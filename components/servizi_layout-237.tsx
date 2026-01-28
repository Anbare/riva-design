
import { Smartphone, BookOpen, Video, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Servizi() {
  const services = [
    {
      icon: Smartphone,
      title: 'Armadi che raccontano il vostro stile',
      description: "L'ordine e l'eleganza vivono nello stesso spazio quando la costruzione è consapevole.",
    },
    {
      icon: BookOpen,
      title: 'Living spaces di carattere',
      description: 'Tavoli, librerie, elementi architettonici che trasformano una stanza in un\'esperienza.',
    },
    {
      icon: Video,
      title: 'Soluzioni integrate',
      description: 'Quando i servizi si combinano, nasce qualcosa di straordinario.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#3D4F48] text-sm font-medium tracking-wide uppercase mb-4">
            Servizi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6 leading-tight">
            Cucine su misura per chi ha visione
          </h2>
          <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Lo spazio dove la famiglia si riunisce merita una costruzione impeccabile. Ogni dettaglio, dalla
            scelta del legno alla maniglia finale, viene considerato con cura artigianale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Icon 
                      className="w-12 h-12 text-[#1A2E26]" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A2E26] mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#3D4F48] text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/progetto"
            className="flex items-center justify-center gap-2 px-8 py-3 md:px-10 md:py-4 text-[#1A2E26] text-base font-medium bg-transparent border-2 border-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 group"
          >
            <span>Guarda un nostro progetto</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
