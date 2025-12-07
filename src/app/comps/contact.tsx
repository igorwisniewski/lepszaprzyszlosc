"use client";
import { User, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="kontakt" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Skontaktuj się z nami</h2>
                    <p className="text-slate-600 mt-2 text-lg">Jesteśmy tu, aby pomóc. Zadzwoń lub napisz do nas.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    <div className="w-full md:w-5/12 space-y-8 mt-8">
                        <ContactItem icon={<User className="text-white" size={24} />} title="Aleksander Czajkowski" sub="Prezes Fundacji" color="bg-blue-600" />
                        <ContactItem icon={<Phone className="text-white" size={24} />} title="+48 784 719 026" sub="Telefon kontaktowy" color="bg-green-600" />
                        <ContactItem icon={<Mail className="text-white" size={24} />} title="kontakt@fundacjalepsza.pl" sub="Adres email" color="bg-blue-600" />
                        <ContactItem icon={<MapPin className="text-white" size={24} />} title="Adres siedziby" sub="ul. Zielony Trójkąt 4E/8 80-869 Gdańsk" color="bg-green-600" />
                    </div>

                    <div className="w-full md:w-7/12">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Napisz do nas</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Imię i nazwisko" className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                <input type="email" placeholder="Adres email" className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                <input type="tel" placeholder="Numer telefonu" className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                <textarea placeholder="Wiadomość" rows={4} className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                                <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg mt-2 text-lg">
                                    Wyślij wiadomość
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ContactItem = ({ icon, title, sub, color }: any) => (
    <div className="flex items-center gap-4 group">
        <div className={`${color} p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <div>
            <p className="font-bold text-slate-900 text-lg">{title}</p>
            <p className="text-slate-500">{sub}</p>
        </div>
    </div>
);