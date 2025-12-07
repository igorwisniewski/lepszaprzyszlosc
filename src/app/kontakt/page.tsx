import Contact from "@/app/comps/contact";
import Donation from "@/app/comps/dontation";


export default function Kontakt() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-200">
            <Contact/>
            <Donation/>
        </main>
    );
}