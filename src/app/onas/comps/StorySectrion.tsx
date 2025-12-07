"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StorySection() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo(".story-left",
                { x: -50, opacity: 0 },
                { scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }, x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
            gsap.fromTo(".story-right",
                { x: 50, opacity: 0 },
                { scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }, x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white overflow-hidden min-h-screen content-center">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEWA STRONA: ZDJĘCIE Z ZIELONYM PASKIEM */}
                    <div className="w-full lg:w-1/2 story-left relative">
                        {/* Zielony pasek dekoracyjny */}
                        <div className="absolute top-4 bottom-4 -left-4 w-4 bg-green-600 rounded-l-lg z-0 hidden lg:block"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-xl h-[350px] lg:h-[450px] z-10">
                            <img
                                src="/images/whoweare.jpg"
                                alt="Opiekunka trzymająca seniora za rękę"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* PRAWA STRONA: TREŚĆ */}
                    <div className="w-full lg:w-1/2 story-right">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Kim Jesteśmy?</h2>
                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Nazywam się <strong className="text-slate-900">Aleksander Czajkowski</strong> i założyłem Fundację Lepsza Przyszłość, aby wspierać osoby starsze w codziennym życiu.
                            </p>
                            <p>
                                Naszym priorytetem jest organizacja transportu do lekarzy oraz pomoc w załatwianiu spraw urzędowych. Codziennie pomagamy chorym w domowych obowiązkach, by ich życie stało się prostsze i lżejsze.
                            </p>
                            <p>
                                Budujemy relacje oparte na pełnym zaufaniu, bo wiemy, jak ważne jest dla Was poczucie bezpieczeństwa. Jesteśmy tu, aby zapewnić Ci realne wsparcie i godną przyszłość każdego dnia.
                            </p>
                        </div>

                        <button className="mt-8 border-2 border-blue-600 text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
                            Skontaktuj się z nami
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}