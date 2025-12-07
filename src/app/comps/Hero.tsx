"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-anim", {
                y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pt-32 pb-16 px-4 container mx-auto min-h-screen justify-center items-center">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-6 md:p-12 rounded-3xl ">
                <div className="w-full md:w-1/2 hero-anim">
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                        <img
                            src="/images/MainHero.jpg"
                            alt="Szczęśliwa seniorka"
                            className="object-cover w-full h-full opacity-80"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col  hero-anim">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Wsparcie dla seniorów
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Transport do lekarza i pomoc w codziennych sprawach. Jesteśmy tu dla Ciebie. Nie z obowiązku, a z pasji.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-800 transition-all focus:ring-4 focus:ring-blue-300">
                            Zadzwoń
                        </button>
                        <button className="border-2 border-blue-200 text-blue-700 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all">
                            Czytaj dalej
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}