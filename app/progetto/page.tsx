import ProjectHero from "@/components/project-hero_portfolio-header-2";
import ProjectDetail from "@/components/project-detail_content-18";
import ProjectImages from "@/components/galleria_gallery-24";
import ProjectExcellence from "@/components/project-excellence_layout-239";
import Testimonial from "@/components/testimonial_testimonial-1";
import CTASection from "@/components/CTASection_cta-65";

export default function Page() {
    return (
        <main>
            <ProjectHero />
            <ProjectDetail />
            <ProjectImages
              title="Galleria del progetto"
              subtitle="Ogni dettaglio catturato nella luce giusta"
            />
            <ProjectExcellence />
            <Testimonial />
            <CTASection />
        </main>
    )
}