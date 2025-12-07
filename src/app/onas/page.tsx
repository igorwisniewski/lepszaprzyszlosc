// app/components/AboutUs.tsx


import AboutHero from "@/app/onas/comps/aboutHero";
import AboutFounder from "@/app/onas/comps/aboutFounder";
import AboutValues from "@/app/onas/comps/aboutValues";
import LegalInfo from "@/app/onas/comps/legalinfo";
import StorySection from "@/app/onas/comps/StorySectrion";
import FAQ from "@/app/onas/comps/faq";
import CTA from "@/app/onas/comps/CTA";

export default function AboutUs() {
    return (
        <div className="bg-white overflow-hidden">
            <AboutHero />
            <AboutFounder />
            <AboutValues />
            <LegalInfo/>
            <StorySection/>
            <FAQ/>
            <CTA/>
        </div>
    );
}