"use client";

import React from 'react';

interface ValueCardProps {
    icon: React.ReactNode;
    bg: string;
    title: string;
    desc: string;
}

export default function ValueCard({ icon, bg, title, desc }: ValueCardProps) {
    return (
        <div className="value-card opacity-0 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-start text-left h-full">
            <div className={`w-14 h-14 ${bg} rounded-full flex items-center justify-center mb-6`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {desc}
            </p>
        </div>
    );
}