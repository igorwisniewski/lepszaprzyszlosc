"use client";

export default function Donation() {
    return (
        <section className="py-16 bg-white border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Wesprzyj naszą misję</h2>
                    <p className="text-slate-600 text-lg">Każda wpłata pomaga nam nieść pomoc potrzebującym seniorom</p>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm mb-8 text-center">
                    <p className="font-semibold text-slate-700 mb-4 text-lg">Numer konta bankowego</p>
                    <div className="bg-white border-2 border-blue-200 text-blue-600 font-mono text-xl md:text-2xl py-4 px-6 rounded-lg inline-block w-full max-w-2xl overflow-x-auto">
                        00 0000 0000 0000 0000 0000 0000
                    </div>
                    <p className="text-sm text-slate-400 mt-2">Fundacja Lepsza Przyszłość</p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 md:p-12 rounded-2xl text-center text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Formularz darowizny online</h3>
                        <p className="opacity-90 mb-8">Wkrótce dostępny bezpieczny system płatności online</p>
                        <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow hover:bg-slate-100 transition-colors">
                            Powiadom mnie o uruchomieniu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}