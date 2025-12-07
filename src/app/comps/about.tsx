"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Rejestracja wewnątrz efektu dla bezpieczeństwa
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".about-anim", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true // Animacja wykona się tylko raz
                },
                x: -30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="fundacja" ref={sectionRef} className="py-20 bg-slate-50 min-h-screen content-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Lewa kolumna: Zdjęcie */}
                    <div className="w-full lg:w-1/2 about-anim">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/images/aboutMain.jpeg"
                                alt="Seniorzy grający w gry planszowe"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Prawa kolumna: Tekst */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 about-anim">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">O Fundacji</h2>

                        {/* --- NOWY PARAGRAF (2-4 ZDANIA) --- */}
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Od lat tworzymy społeczność opartą na wzajemnym szacunku i trosce, wierząc, że jesień życia powinna być czasem spokoju, a nie walki z codziennymi trudnościami.
                            Rozumiemy, że proste czynności, takie jak wizyta u lekarza czy wyjście do urzędu, mogą stać się wyzwaniem, dlatego nasi wolontariusze służą pomocą każdego dnia.
                            Naszym celem jest nie tylko wsparcie logistyczne, ale przede wszystkim walka z samotnością poprzez obecność i rozmowę.
                            Każdy uśmiech na twarzy naszych podopiecznych to dla nas dowód na to, że nasza praca ma głęboki sens.
                        </p>
                        {/* ---------------------------------- */}

                        <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-blue-600 mt-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Zaufanie i bezpieczeństwo</h3>
                            <p className="text-slate-600 mb-4">Działamy w oparciu o najwyższe standardy etyczne i profesjonalizm.</p>
                            <p className="font-mono text-blue-800 font-semibold bg-blue-100 inline-block px-3 py-1 rounded">NIP: 9571186907</p>
                        </div>

                        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl max-w-max">
                            <ShieldCheck className="text-blue-700" size={32} />
                            <div>
                                <p className="font-bold text-slate-900">Zarejestrowana organizacja</p>
                                <p className="text-sm text-slate-500">Oficjalnie działamy jako fundacja non-profit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}