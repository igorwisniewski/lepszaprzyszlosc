"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Pancerne animacje - używamy .to na elementach z klasą opacity-0
            gsap.to(".cta-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%", // Startuje, gdy góra sekcji jest przy 85% ekranu
                    once: true
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-blue-800 text-white">
            <div className="container mx-auto px-4 text-center">

                {/* Nagłówek i Tekst */}
                <div className="max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="cta-content opacity-0 translate-y-8 text-3xl md:text-4xl font-bold">
                        Skontaktuj się z nami
                    </h2>
                    <p className="cta-content opacity-0 translate-y-8 text-lg text-blue-100 leading-relaxed">
                        Potrzebujesz pomocy dla siebie lub bliskich? Zadzwoń już dziś i umów bezpłatną konsultację.
                    </p>
                </div>

                {/* Box z telefonem */}
                <div className="cta-content opacity-0 translate-y-8 inline-flex flex-col md:flex-row items-center gap-4 bg-white/10 border border-white/20 backdrop-blur-sm p-6 rounded-2xl mb-10 hover:bg-white/20 transition-all duration-300">
                    <div className="bg-white/20 p-3 rounded-full">
                        <Phone size={28} fill="currentColor" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm text-blue-100 uppercase tracking-wider font-medium">Zadzwoń teraz:</p>
                        <p className="text-2xl md:text-3xl font-bold font-mono">+48 784 719 026</p>
                    </div>
                </div>

                {/* Przyciski */}
                <div className="cta-content opacity-0 translate-y-8 flex flex-col md:flex-row justify-center gap-4">
                    <Link href="/kontakt">
                        <button className="w-full md:w-auto bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg">
                            Skontaktuj się z nami
                        </button>
                    </Link>

                    <Link href="/fundacja">
                        <button className="w-full md:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg">
                            Dowiedz się więcej
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}