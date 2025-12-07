"use client";
import { Heart } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-blue-600">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <Heart size={20} className="text-blue-500" fill="currentColor" />
                        <span className="font-bold text-lg">Fundacja Lepsza Przyszłość</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                        Wspieramy seniorów w codziennym życiu, oferując kompleksową pomoc i troskę.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Kontakt</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li>Aleksander Czajkowski</li>
                        <li>+48 784 719 026</li>
                        <li>kontakt@fundacjalepsza.pl</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Informacje prawne</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li>NIP: 9571186907</li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors"><Link href="polityka-prywatnosci">Polityka prywatności</Link></li>
                        <li className="mt-4 opacity-50">&copy; 2025 Fundacja Lepsza Przyszłość</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}