import Image from 'next/image'

interface ProjectHeroProps {
    title: string
    description: string
    tags: string[]
    imageSrc: string
    imageAlt: string
}

export default function ProjectHero({
    title = "Residenza Milano",
    description = "Spazi interni dove la tradizione artigianale incontra l'architettura contemporanea",
    tags = ["Legno massello", "Interni su misura", "Residenziale"],
    imageSrc = "/placeholder.svg?height=600&width=1400",
    imageAlt = "Residenza Milano - Progetto realizzato"
}: Partial<ProjectHeroProps>) {
    return (
        <section className="bg-[#F9F9F7]">
            {/* Hero Image */}
            <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#E8E6E1]">
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Content Section */}
            <div className="bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20 lg:py-24 text-center">
                    {/* Title */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6 md:mb-8">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-[#E8E6E1] text-[#1A2E26] text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
