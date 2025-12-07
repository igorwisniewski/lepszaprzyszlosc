import Hero from "@/app/comps/Hero";
import Services from "@/app/comps/Services";
import About from "@/app/comps/about";
import Donation from "@/app/comps/dontation";
import Contact from "@/app/comps/contact";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: 'Fundacja Lepsza Przyszłość | Transport i Opieka dla Seniorów',
  description: 'Zapewniamy bezpieczny transport do lekarza, pomoc w urzędach i wsparcie w codziennym życiu dla seniorów. Fundacja z sercem. Zadzwoń: 784 719 026.',
  keywords: ['transport medyczny', 'opieka nad seniorem', 'pomoc dla seniorów', 'fundacja warszawa', 'transport do lekarza', 'wolontariat seniorzy'],
  openGraph: {
    title: 'Fundacja Lepsza Przyszłość - Jesteśmy tu dla Ciebie',
    description: 'Oferujemy kompleksową pomoc dla osób starszych: od transportu po wsparcie w urzędach. Działamy z pasji, nie z obowiązku.',
    url: 'https://fundacjalepszaprzyszlosc.pl',
    siteName: 'Fundacja Lepsza Przyszłość',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function Home() {
  return (
<main>
  <Hero />
  <Services />
  <About />
  <Donation />
  <Contact />
</main>
  );
}
