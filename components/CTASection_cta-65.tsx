import Image from 'next/image'
import CTAGroup from '@/components/cta/CTAGroup'

export default function CTASection() {
    return (
        <section className="bg-[#F9F9F7]">
            {/* CTA Header */}
            <div className="bg-white py-16 md:py-20 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2E26] mb-6 text-balance">
                        Il vostro progetto merita attenzione
                    </h2>
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Contattateci per discutere come trasformare il vostro spazio con artiganalità e precisione.
                    </p>
                    <CTAGroup
                        align="center"
                        primary={{ label: 'Contattaci', href: '/contatti', className: 'border-[#1A2E26] lg:border-2' }}
                        secondary={{ label: 'Progetti', href: '/progetti' }}
                    />
                </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#E8E6E1]">
                <Image
                    src="/images/projects/residenza_milano_2.webp"
                    alt="Dettaglio artigianale Riva Design"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </section>
    )
}
