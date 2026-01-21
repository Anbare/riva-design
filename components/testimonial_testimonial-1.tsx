import Image from 'next/image'

interface TestimonialProps {
  quote?: string
  author?: string
  role?: string
  avatarUrl?: string
  logoUrl?: string
}

export default function Testimonial({
  quote = "Riva Design ha trasformato la nostra visione in realtà. Ogni dettaglio parla di maestria e dedizione.",
  author = "Marco Rossini",
  role = "Collezionista, Milano",
  avatarUrl = "/images/projects/collezionista.webp",
  logoUrl,
}: TestimonialProps) {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        {logoUrl && (
          <div className="flex justify-center mb-12">
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt="Logo cliente"
              width={120}
              height={40}
              className="h-10 w-auto opacity-80"
            />
          </div>
        )}

        {/* Quote */}
        <blockquote className="text-center mb-12">
          <p className="text-[#1A2E26] text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mx-auto">
            &quot;{quote}&quot;
          </p>
        </blockquote>

        {/* Author Info */}
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="mb-4 relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-[#E8E6E1] flex items-center justify-center">
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={author}
              fill
              className="object-cover object-[50%_20%] scale-110"
              sizes="80px"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center">
            <p className="text-[#1A2E26] font-semibold text-base md:text-lg mb-1">
              {author}
            </p>
            <p className="text-[#3D4F48] text-sm md:text-base">
              {role}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
