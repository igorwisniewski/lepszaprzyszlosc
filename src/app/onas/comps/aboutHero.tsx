"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutHero() {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".header-anim",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-20  bg-slate-100 text-center px-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="header-anim text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    Twój zaufany opiekun
                </h1>
                <p className="header-anim text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                    Pomagamy tam, gdzie codzienność staje się trudna. Zapewniamy wsparcie i opiekę dla seniorów.
                </p>
            </div>
        </section>
    );
}