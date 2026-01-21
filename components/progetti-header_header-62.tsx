import CTAGroup from '@/components/cta/CTAGroup'

export default function ProgettiHeader() {
    return (
      <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[#3D4F48] text-sm md:text-base font-medium mb-4 md:mb-6">
            Progetti
          </p>
  
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A2E26] mb-6 md:mb-8 leading-tight">
            Progetti su misura
          </h1>
  
          {/* Description */}
          <p className="text-[#3D4F48] text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
            Ogni pezzo racconta una storia di precisione e dedizione artigianale
          </p>
  
          {/* CTA Buttons */}
          <CTAGroup
            align="center"
            primary={{ label: 'Scopri', href: '/progetto' }}
            secondary={{ label: 'Contattaci', href: '/contatti#contattaci' }}
          />
        </div>
      </section>
    )
  }
  