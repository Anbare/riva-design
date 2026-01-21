import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cucina contemporanea',
    description: 'Legno massello e finiture su misura per questa residenza milanese',
    image: '/images/portfolio/Cucina_contemporanea.webp',
    tags: ['Cucine', 'Lusso', 'Residenziale'],
    slug: 'cucina-contemporanea',
  },
  {
    id: 2,
    title: 'Armadio walk-in',
    description: 'Spazi organizzati con eleganza e funzionalità in una villa sul lago',
    image: '/images/portfolio/Armadio_walk-in.webp',
    tags: ['Armadi', 'Personalizzato', 'Interni'],
    slug: 'armadio-walk-in',
  },
  {
    id: 3,
    title: 'Salotto esclusivo',
    description: 'Mobili in noce canaletto per uno spazio di ricezione privato',
    image: '/images/portfolio/Salotto_esclusivo.webp',
    tags: ['Living', 'Design', 'Artigianato'],
    slug: 'salotto-esclusivo',
  },
]

export default function PortfolioGrid() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="portfolio" className="text-center mb-12 md:mb-16 scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-0">
          <p className="text-[#3D4F48] text-sm font-medium mb-3 tracking-wide">
            Galleria
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-4">
            Opere realizzate con cura
          </h2>
          <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Scopri i nostri lavori più significativi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#E8E6E1] overflow-hidden mb-6">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A2E26] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#3D4F48] text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white border border-[#E8E6E1] text-[#1A2E26] text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href="/progetto"
                  className="inline-flex items-center gap-2 text-[#1A2E26] font-medium hover:text-[#C5A059] transition-colors duration-200 group/link"
                >
                  <span>Vedi progetto</span>
                  <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
