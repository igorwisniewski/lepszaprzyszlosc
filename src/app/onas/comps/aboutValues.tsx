"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Clock, Handshake } from 'lucide-react';
import ValueCard from './ValueCard'; // Importujemy sub-komponent

export default function AboutValues() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            ScrollTrigger.batch(".value-card", {
                onEnter: (elements) => {
                    gsap.fromTo(elements,
                        { y: 60, opacity: 0 },
                        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)", overwrite: "auto" }
                    );
                },
                once: true,
                start: "top 95%"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-slate-50 mt-12 min-h-screen content-center">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Nasza misja i wartości</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Zapewniamy profesjonalną opiekę i transport dla seniorów z najwyższą dbałością o komfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Heart size={28} className="text-blue-600" fill="currentColor" />}
                        bg="bg-blue-100"
                        title="Empatia"
                        desc="Rozumiemy potrzeby seniorów. Każde działanie wykonujemy z sercem i troską."
                    />
                    <ValueCard
                        icon={<Clock size={28} className="text-green-700" />}
                        bg="bg-green-100"
                        title="Punktualność"
                        desc="Zawsze na czas. Możesz na nas liczyć w każdej sytuacji i o każdej porze."
                    />
                    <ValueCard
                        icon={<Handshake size={28} className="text-blue-600" />}
                        bg="bg-blue-100"
                        title="Wsparcie"
                        desc="Oferujemy kompleksowe wsparcie w transporcie i codziennych czynnościach."
                    />
                </div>
            </div>
        </section>
    );
}