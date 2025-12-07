"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Heart, Users, Star } from 'lucide-react';

export default function AboutFounder() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Lewa strona (tekst)
            gsap.fromTo(".founder-left",
                { x: -50, opacity: 0 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
                    x: 0, opacity: 1, duration: 1, ease: "power3.out"
                }
            );
            // Prawa strona (zdjęcie)
            gsap.fromTo(".founder-right",
                { x: 50, opacity: 0 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
                    x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* LEWA STRONA */}
                <div className="w-full lg:w-1/2 founder-left opacity-0">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Poznaj naszego założyciela</h2>

                    <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-xl mb-8 relative">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Aleksander Czajkowski</h3>
                        <p className="text-slate-700 italic leading-relaxed">
                            &#34;Pomagam tam, gdzie codzienność staje się trudna. Z pasją wspieram seniorów, traktując każdego jak członka własnej rodziny.&#34;
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <GraduationCap className="text-blue-600" size={24} />
                            <span className="text-slate-600 font-medium">15 lat doświadczenia w opiece nad seniorami</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Heart className="text-green-600" size={24} />
                            <span className="text-slate-600 font-medium">Certyfikowany opiekun medyczny</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="text-blue-600" size={24} />
                            <span className="text-slate-600 font-medium">Ponad 200 zadowolonych rodzin</span>
                        </div>
                    </div>
                </div>

                {/* PRAWA STRONA */}
                <div className="w-full lg:w-1/2 founder-right opacity-0 flex justify-center lg:justify-end relative">
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md w-full aspect-square relative z-10">
                            <img
                                src="/images/doc.png"
                                alt="Aleksander Czajkowski"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 z-20 bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                            <Star fill="currentColor" size={32} />
                        </div>
                        <div className="absolute top-4 left-4 w-full h-full bg-slate-100 rounded-3xl -z-10"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}