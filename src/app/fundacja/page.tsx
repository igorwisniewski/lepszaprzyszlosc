import FoundationHero from "@/app/fundacja/comps/FoundationHero";
import DocumentsGrid from "@/app/fundacja/comps/DocumentsGrid";
import SupportDetails from "@/app/fundacja/comps/SupportDetails";
import CTA from "@/app/onas/comps/CTA";

import type { Metadata } from 'next';

// ... importy komponentów ...

export const metadata: Metadata = {
    title: 'Dokumenty i Cele Statutowe | Fundacja Lepsza Przyszłość',
    description: 'Przejrzystość to nasza podstawa. Pobierz statut fundacji, sprawozdania finansowe i poznaj nasze cele. Sprawdź dane KRS i NIP.',
    keywords: ['statut fundacji', 'sprawozdanie finansowe', 'cele statutowe', 'KRS fundacji', 'NIP fundacji', 'dokumenty do pobrania'],
    openGraph: {
        title: 'O Fundacji - Nasze dokumenty i misja',
        description: 'Zobacz jak działamy legalnie i transparentnie. Pobierz statut i sprawozdania Fundacji Lepsza Przyszłość.',
        url: 'https://fundacjalepszaprzyszlosc.pl/fundacja',
    },
};


export default function FoundationPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-200">


            {/* 1. Nagłówek i Statut */}
            <FoundationHero />

            {/* 2. Lista Dokumentów */}
            <DocumentsGrid />

            {/* 3. Dane do Wsparcia */}
            <SupportDetails />

            {/* 4. Wezwanie do działania (recykling komponentu) */}
            <CTA />

        </main>
    );
}