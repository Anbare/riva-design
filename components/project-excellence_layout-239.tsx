import Image from 'next/image'
import Link from 'next/link'

export default function ProjectExcellence() {
    const features = [
        {
            image: '/images/projects/falegnameria_su_misura.webp',
            title: 'Falegnameria su misura',
            description: 'Ogni pezzo è stato costruito nel nostro atelier secondo le specifiche esatte dello spazio.',
        },
        {
            image: '/images/projects/materiali_pregiati.webp',
            title: 'Materiali pregiati',
            description: 'Legno stagionato naturalmente, selezionato per venatura e colore, trattato con oli biologici.',
        },
        {
            image: '/images/projects/integrazione_architettonica.webp',
            title: 'Integrazione architettonica',
            description: 'Collaborazione diretta con lo studio di architettura per una coesione totale dello spazio.',
        },
    ]

    return (
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[#3D4F48] text-sm font-medium tracking-wide uppercase mb-4">
                        Eccellenza
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6 max-w-4xl mx-auto leading-tight">
                        Cosa rende questo progetto diverso
                    </h2>
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                        Tre anni di ricerca e sviluppo. Tre artigiani dedicati al progetto. Zero compromessi sulla qualità.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            {/* Image */}
                            <div className="relative aspect-[4/3] bg-[#E8E6E1] mb-6 overflow-hidden">
                                <Image
                                    src={feature.image || "/placeholder.svg"}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A2E26] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#3D4F48] text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="flex justify-center">
                    <Link
                        href="/atelier"
                        className="px-8 py-3 md:px-10 md:py-4 text-[#1A2E26] text-base font-medium bg-transparent border-2 border-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200"
                    >
                        Scopri di più
                    </Link>
                </div>
            </div>
        </section>
    )
}
