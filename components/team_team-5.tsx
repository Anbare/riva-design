import Image from 'next/image'
import { Linkedin, Twitter, Dribbble } from 'lucide-react'

interface TeamMember {
    name: string
    role: string
    description: string
    avatar: string
    linkedin?: string
    twitter?: string
    dribbble?: string
}

const teamMembers: TeamMember[] = [
    {
        name: 'Giuseppe Riva',
        role: 'Fondatore e maestro',
        description: 'Ha iniziato con un\'ascia e una visione. Oggi guida ogni progetto con la stessa passione del primo giorno.',
        avatar: '/placeholder.svg?height=120&width=120',
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
    },
    {
        name: 'Marco Rossi',
        role: 'Direttore creativo',
        description: 'Trasforma i sogni degli architetti in realtà. Conosce il legno come un musicista conosce il suo strumento.',
        avatar: '/placeholder.svg?height=120&width=120',
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
    },
    {
        name: 'Francesca Moretti',
        role: 'Capo artigiana',
        description: 'Ventitré anni nel laboratorio. Le sue mani sanno quello che la mente non può ancora immaginare.',
        avatar: '/placeholder.svg?height=120&width=120',
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
    },
    {
        name: 'Andrea Bianchi',
        role: 'Ingegnere di precisione',
        description: 'Unisce la tecnologia moderna alla saggezza artigianale. Ogni millimetro conta nel suo mondo.',
        avatar: '/placeholder.svg?height=120&width=120',
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
    },
    {
        name: 'Giulia Ferrari',
        role: 'Project manager',
        description: 'Coordina il caos con eleganza. Niente sfugge al suo sguardo attento e alla sua decisione.',
        avatar: '/placeholder.svg?height=120&width=120',
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
    },
    {
        name: 'Luca Colombo',
        role: 'Maestro falegname',
        description: 'Porta la tradizione nel futuro. Ogni pezzo che esce dalle sue mani è una dichiarazione d\'amore.',
        avatar: '/placeholder.svg?height=120&width=120',
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
    },
]

export default function Team() {
    return (
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[#3D4F48] text-sm font-medium mb-3">Persone</p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-4">
                        Il nostro team
                    </h2>
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
                        Maestri artigiani, designer e visionari che lavorano insieme
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            {/* Avatar */}
                            <div className="mb-4 flex justify-center">
                                <div className="relative w-24 h-24 rounded-full bg-[#E8E6E1] overflow-hidden">
                                    <Image
                                        src={member.avatar || "/placeholder.svg"}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="text-[#1A2E26] text-xl font-bold mb-1">
                                {member.name}
                            </h3>
                            <p className="text-[#3D4F48] text-sm font-medium mb-3">
                                {member.role}
                            </p>
                            <p className="text-[#3D4F48] text-sm leading-relaxed mb-4">
                                {member.description}
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-3">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        className="text-[#1A2E26] hover:text-[#C5A059] transition-colors duration-200"
                                        aria-label={`${member.name} su LinkedIn`}
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a
                                        href={member.twitter}
                                        className="text-[#1A2E26] hover:text-[#C5A059] transition-colors duration-200"
                                        aria-label={`${member.name} su Twitter`}
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                )}
                                {member.dribbble && (
                                    <a
                                        href={member.dribbble}
                                        className="text-[#1A2E26] hover:text-[#C5A059] transition-colors duration-200"
                                        aria-label={`${member.name} su Dribbble`}
                                    >
                                        <Dribbble className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center pt-8">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E26] mb-4">
                        Stiamo cercando
                    </h3>
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                        Artigiani e designer appassionati che vogliono lasciare un segno
                    </p>
                    <a
                        href="mailto:collaborazione@rivadesign.it"
                        className="inline-block px-8 py-3 md:px-10 md:py-4 text-[#1A2E26] text-base font-medium bg-transparent border-2 border-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200"
                    >
                        Unisciti a noi
                    </a>
                </div>
            </div>
        </section>
    )
}
