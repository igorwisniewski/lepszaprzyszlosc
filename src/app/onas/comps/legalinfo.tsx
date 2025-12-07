"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function LegalInfo() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo(".legal-anim",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16 legal-anim">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Działamy legalnie</h2>
                    <p className="text-lg text-slate-600">
                        Jesteśmy zarejestrowaną fundacją. Masz pewność, komu powierzasz bliskich.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* LEWA KOLUMNA - DANE */}
                    <div className="w-full lg:w-1/2 space-y-6 legal-anim">
                        {/* Box Główny NIP */}
                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm text-center">
                            <div className="flex items-center justify-center gap-3 mb-4 text-slate-800">
                                <CheckCircle className="text-blue-700" size={28} />
                                <h3 className="text-xl font-bold">Oficjalna rejestracja</h3>
                            </div>
                            <p className="text-slate-500 mb-2 text-sm uppercase tracking-wide">Numer identyfikacji podatkowej:</p>
                            <div className="bg-slate-200/50 py-3 px-6 rounded-lg inline-block">
                <span className="text-2xl md:text-3xl font-extrabold text-slate-700 font-mono tracking-wider">
                  NIP: 9571186907
                </span>
                            </div>
                        </div>

                        {/* Małe Boxy */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 p-6 rounded-xl flex flex-col items-center text-center border border-green-100">
                                <ShieldCheck className="text-green-600 mb-3" size={32} />
                                <h4 className="font-bold text-slate-900">Ubezpieczenie</h4>
                                <p className="text-sm text-slate-600">Pełne pokrycie OC</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center text-center border border-blue-100">
                                <FileText className="text-blue-600 mb-3" size={32} />
                                <h4 className="font-bold text-slate-900">Umowy</h4>
                                <p className="text-sm text-slate-600">Przejrzyste warunki</p>
                            </div>
                        </div>
                    </div>

                    {/* PRAWA KOLUMNA - ZDJĘCIE Certyfikatu/Biura */}
                    <div className="w-full lg:w-1/2 legal-anim">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                            <img
                                src="/images/seniorHelp.jpg"
                                alt="Certyfikat rejestracji fundacji na biurku"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}