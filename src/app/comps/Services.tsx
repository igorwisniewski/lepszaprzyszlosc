"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, FileText, Calendar, Heart } from 'lucide-react';

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {

            // Używamy .batch() - to najlepsza metoda do gridów/list
            // Animuje elementy dopiero gdy faktycznie wejdą w ekran
            ScrollTrigger.batch(".service-card", {
                onEnter: (elements) => {
                    gsap.fromTo(elements,
                        {
                            opacity: 0,
                            y: 60
                        },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.15,
                            duration: 0.8,
                            ease: "power3.out",
                            overwrite: "auto" // zapobiega konfliktom animacji
                        }
                    );
                },
                once: true, // WAŻNE: Animacja odpala się tylko raz. Nie zniknie przy scrollowaniu.
                start: "top 95%" // Odpala wcześnie, gdy tylko element muśnie dół ekranu
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-white  content-center md:mb-30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nasze Usługi</h2>
                    <p className="text-lg text-slate-600">Kompleksowe wsparcie dla seniorów w codziennym życiu</p>
                </div>

                {/* Dodano klasę opacity-0, żeby nie mignęło przed załadowaniem JS, GSAP to obsłuży */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        icon={<Car size={32} />}
                        title="Transport"
                        desc="Bezpieczny transport do lekarza i ośrodków dziennego pobytu"
                        color="bg-blue-700"
                    />
                    <ServiceCard
                        icon={<FileText size={32} />}
                        title="Umówienie wizyt"
                        desc="Pomoc w umawianiu wizyt lekarskich i załatwianiu spraw"
                        color="bg-green-600"
                    />
                    <ServiceCard
                        icon={<Calendar size={32} />}
                        title="Pomoc w urzędach"
                        desc="Wsparcie administracyjne i załatwianie formalności"
                        color="bg-blue-700"
                    />
                    <ServiceCard
                        icon={<Heart size={32} />}
                        title="Codzienna pomoc"
                        desc="Wsparcie w codziennych czynnościach i sprawach życiowych"
                        color="bg-green-600"
                    />
                </div>
            </div>
        </section>
    );
}

// Sub-komponent
const ServiceCard = ({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
    // WAŻNE: opacity-0 na start (GSAP zmieni to na 1).
    // Jeśli JS by padł, można usunąć opacity-0, ale w Next.js to bezpieczne.
    <div className="service-card opacity-0 bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group     ">
        <div className={`${color} text-white p-5 rounded-full mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);