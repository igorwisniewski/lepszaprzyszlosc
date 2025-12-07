"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FileText, Download } from 'lucide-react';

export default function FoundationHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animacja tekstu i karty
            gsap.to(".hero-content", {
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
        <section ref={sectionRef} className="pt-32 pb-16 bg-blue-50">
            <div className="container mx-auto px-4 text-center">

                {/* Nagłówek */}
                <div className="max-w-3xl mx-auto mb-12 hero-content opacity-0 translate-y-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Nasze cele statutowe
                    </h1>
                    <p className="text-lg text-slate-600">
                        Przejrzystość to podstawa. Zobacz, jak i dla kogo działamy.
                    </p>
                </div>

                {/* Karta Główna - Statut */}
                <div className="hero-content opacity-0 translate-y-8 max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative">

                    {/* Ikona PDF */}
                    <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText size={40} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Pobierz pełny Statut</h2>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">
                        Dokument w formacie PDF. Zapoznaj się ze szczegółami naszej działalności.
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 mx-auto transition-all transform active:scale-95 shadow-lg w-full md:w-auto">
                        <Download size={20} />
                        <span>Pobierz Statut (PDF)</span>
                    </button>

                    <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <span>Rozmiar pliku: 2.4 MB</span> • <span>Ostatnia aktualizacja: Styczeń 2024</span>
                    </p>
                </div>

            </div>
        </section>
    );
}