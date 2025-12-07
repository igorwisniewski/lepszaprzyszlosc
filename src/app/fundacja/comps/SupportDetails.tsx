"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Landmark, Info } from 'lucide-react';

export default function SupportDetails() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.to(".support-anim", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-12 support-anim opacity-0 translate-y-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Wesprzyj naszą działalność</h2>
                    <p className="text-slate-600">Każda wpłata pomaga nam realizować statutowe cele</p>
                </div>

                <div className="support-anim opacity-0 translate-y-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                        {/* LEWA STRONA: Przelew */}
                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Landmark className="text-blue-600" size={24} />
                                <h3 className="font-bold text-slate-900 text-lg">Dane do przelewu</h3>
                            </div>

                            <div className="space-y-4 text-sm text-slate-600">
                                <div>
                                    <p className="text-slate-400 text-xs uppercase mb-1">Nazwa:</p>
                                    <p className="font-semibold text-slate-900">Fundacja Lepsza Przyszłość</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs uppercase mb-1">Nr konta:</p>
                                    <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-slate-800 text-base md:text-lg tracking-wider select-all">
                                        12 3456 7890 1234 5678 9012 3456
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs uppercase mb-1">Tytuł:</p>
                                    <p className="font-semibold text-slate-900">Darowizna na cele statutowe</p>
                                </div>
                            </div>
                        </div>

                        {/* PRAWA STRONA: Info Prawne */}
                        <div className="p-8 md:p-10 bg-slate-50/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Info className="text-green-600" size={24} />
                                <h3 className="font-bold text-slate-900 text-lg">Informacje prawne</h3>
                            </div>

                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span>KRS:</span>
                                    <span className="font-mono font-medium text-slate-900">0000123456</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span>NIP:</span>
                                    <span className="font-mono font-medium text-slate-900">123-456-78-90</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span>REGON:</span>
                                    <span className="font-mono font-medium text-slate-900">123456789</span>
                                </li>
                                <li className="pt-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">
                    Organizacja Pożytku Publicznego
                  </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}