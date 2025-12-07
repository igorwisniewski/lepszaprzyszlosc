"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileBarChart, Users, Gavel, ExternalLink } from 'lucide-react';

export default function DocumentsGrid() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            ScrollTrigger.batch(".doc-card", {
                onEnter: (elements) => {
                    gsap.to(elements, { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "back.out(1.7)" });
                },
                once: true,
                start: "top 90%"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Dodatkowe dokumenty</h2>
                    <p className="text-slate-600">Sprawozdania i dokumenty organizacyjne</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {/* Karta 1: Sprawozdanie */}
                    <DocumentCard
                        icon={<FileBarChart size={24} className="text-blue-600" />}
                        bg="bg-blue-100"
                        title="Sprawozdanie 2023"
                        meta="PDF • 1.2 MB"
                    />

                    {/* Karta 2: Zarząd */}
                    <DocumentCard
                        icon={<Users size={24} className="text-green-600" />}
                        bg="bg-green-100"
                        title="Zarząd i Rada"
                        meta="PDF • 0.8 MB"
                    />

                    {/* Karta 3: Regulamin */}
                    <DocumentCard
                        icon={<Gavel size={24} className="text-purple-600" />}
                        bg="bg-purple-100"
                        title="Regulamin"
                        meta="PDF • 0.5 MB"
                    />

                </div>
            </div>
        </section>
    );
}

// Sub-komponent karty
function DocumentCard({ icon, bg, title, meta }: { icon: any, bg: string, title: string, meta: string }) {
    return (
        <div className="doc-card opacity-0 translate-y-8 bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer group flex items-center gap-4">
            <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <div className="flex-grow">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{meta}</p>
            </div>
            <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={18} />
            </div>
        </div>
    );
}