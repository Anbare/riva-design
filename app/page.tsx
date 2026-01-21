import Hero from "@/components/hero_header-37";
import LogoCarousel from "@/components/logoCarousel_logo-3";
import Specialita from "@/components/specialita_header-62";
import Servizi from "@/components/servizi_layout-237";
import ProgettiIntro from "@/components/progettiIntro_header-64";
import Galleria from "@/components/galleria_gallery-24";
import ComeLavoriamo from "@/components/comeLavoriamo_header-64";
import Processo from "@/components/processo_layout-501";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
      <Specialita />
      <Servizi />
      <ProgettiIntro />
      <Galleria />
      <ComeLavoriamo />
      <Processo />
    </main>
  );
}