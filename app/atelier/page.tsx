import Specialita from "@/components/specialita_header-62"
import TimelineStoria from "@/components/timeline-storia_timeline-18"
import Gallery from "@/components/galleria_gallery-24"
import VantaggiVertical from "@/components/vantaggi-vertical_layout-356"
import Team from "@/components/team_team-5"

export default function Page() {
  return (
    <main>
      <Specialita
        eyebrow="Artigianato"
        title="Dove nasce il legno"
        description="Tre decenni di tradizione e precisione moderna in ogni pezzo che creiamo"
        primaryCta={{ label: "Scopri", href: "/atelier#materiali" }}
        secondaryCta={{ label: "Progetti", href: "/progetti" }}
      />
      <section>
        <TimelineStoria />
      </section>
      <Gallery
        title="Lo spazio"
        subtitle="Dove gli artigiani trasformano il legno in opere senza tempo"
      />
      <section id="materiali">
        <Specialita
          eyebrow="Materiali"
          title={"Il legno scelto con cura da\nfornitori selezionati in tutta\nEuropa"}
          description=""
          preCtaText="Scopri"
          primaryCta={{ label: "Progetti", href: "/progetti" }}
          secondaryCta={{ label: "Contattaci", href: "/contatti#contattaci" }}
        />
      </section>
      <VantaggiVertical />
      <Team />
    </main>
  )
}
