"use client";

import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

// Dane do FAQ
const faqData = [
    {
        q: "1. Jak zamówić transport?",
        a: "Zadzwoń do nas pod numer 784 719 026. Ustalimy termin i bezpiecznie zawieziemy Cię na miejsce."
    },
    {
        q: "2. Komu dokładnie pomagacie?",
        a: "Pomagamy seniorom (60+), osobom przewlekle chorym oraz osobom z niepełnosprawnościami, które potrzebują wsparcia w codziennym funkcjonowaniu."
    },
    {
        q: "3. Czy pomagacie w urzędach?",
        a: "Tak, nasi wolontariusze i pracownicy pomagają w wypełnianiu wniosków, składaniu dokumentów i reprezentują podopiecznych w urzędach."
    },
    {
        q: "4. Czy pomoc jest płatna?",
        a: "Działamy jako fundacja non-profit. Podstawowa pomoc jest bezpłatna, natomiast koszty transportu pokrywane są z darowizn lub symbolicznych opłat na pokrycie paliwa."
    },
    {
        q: "5. Jak mogę wesprzeć Fundację?",
        a: "Możesz przekazać darowiznę na nasze konto bankowe lub dołączyć do nas jako wolontariusz. Każda pomoc ma znaczenie!"
    },
    {
        q: "6. Gdzie działacie?",
        a: "Nasza główna siedziba znajduje się w Warszawie, ale działamy na terenie całego województwa mazowieckiego."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLElement>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            // 1. Animacja Nagłówka (używamy .to dla stabilności)
            // Element ma startowo klasę opacity-0, my go tylko pokazujemy.
            gsap.to(".faq-header-anim", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%", // Odpala wcześniej, gdy sekcja jest lekko widoczna
                    once: true
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });

            // 2. Animacja Pytań (Batch - ładuje elementy partiami)
            // Idealne rozwiązanie, gdy lista jest długa
            ScrollTrigger.batch(".faq-item", {
                onEnter: (elements) => {
                    gsap.to(elements, {
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        duration: 0.6,
                        ease: "power3.out",
                        overwrite: true
                    });
                },
                once: true, // Zostają widoczne na zawsze po załadowaniu
                start: "top 95%" // Odpala niemal natychmiast po pojawieniu się na dole ekranu
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white min-h-[500px]">
            <div className="container mx-auto px-4 max-w-3xl">

                {/* Header: Dodałem klasy startowe 'opacity-0 translate-y-8' */}
                <div className="text-center mb-12 faq-header-anim opacity-0 translate-y-8">
                    <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-700 inline-block pb-2 mb-4">
                        Najczęściej Zadawane Pytania
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Poznaj odpowiedzi na najczęściej padające pytania
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            // WAŻNE: Tu też klasy startowe 'opacity-0 translate-y-8'.
                            // Jeśli GSAP nie zadziała, element będzie ukryty - ale GSAP zadziała :)
                            className={`faq-item opacity-0 translate-y-8 border rounded-xl overflow-hidden transition-all duration-300 ${
                                openIndex === index
                                    ? 'border-green-600 bg-green-50/30 shadow-md'
                                    : 'border-green-600/50 bg-white hover:border-green-600'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-lg text-slate-800 pr-4">{item.q}</span>
                                <ChevronDown
                                    className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-green-100 mt-2">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}