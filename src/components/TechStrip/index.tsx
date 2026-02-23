"use client";

import React from "react";
import { motion } from "framer-motion";

const TechLogos = [
    {
        name: "Antigravity",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
            </svg>
        )
    },
    {
        name: "Higgsfield.ai",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                <circle cx="8.5" cy="12" r="1.5" />
            </svg>
        )
    },
    {
        name: "OpenAI",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9066 6.0462 6.0462 0 0 0-3.9971-3.1202 6.1383 6.1383 0 0 0-5.012.9801L12 3.3944l-.7575-.62a6.1383 6.1383 0 0 0-5.012-.9801 6.0462 6.0462 0 0 0-3.9971 3.1202 5.9847 5.9847 0 0 0-.5153 4.9066l1.233.155a4.414 4.414 0 0 1 .373-3.0402 4.459 4.459 0 0 1 2.9514-2.3087 4.526 4.526 0 0 1 3.6938.7231l2.523 2.062 1.5061 1.233-1.5061 1.233-2.523 2.062a4.526 4.526 0 0 1-3.6938.7231 4.459 4.459 0 0 1-2.9514-2.3087 4.414 4.414 0 0 1-.373-3.0402l-1.233-.155a5.9847 5.9847 0 0 0 .5153 4.9066 6.0462 6.0462 0 0 0 3.9971 3.1202 6.1383 6.1383 0 0 0 5.012-.9801L12 20.6056l.7575.62a6.1383 6.1383 0 0 0 5.012.9801 6.0462 6.0462 0 0 0 3.9971-3.1202 5.9847 5.9847 0 0 0 .5153-4.9066l-1.233-.155a4.414 4.414 0 0 1-.373 3.0402 4.459 4.459 0 0 1-2.9514 2.3087 4.526 4.526 0 0 1-3.6938-.7231l-2.523-2.062-1.5061-1.233 1.5061-1.233 2.523-2.062a4.526 4.526 0 0 1 3.6938-.7231 4.459 4.459 0 0 1 2.9514 2.3087 4.414 4.414 0 0 1 .373 3.0402l1.233.155zM12 10.5l-1.5-1.233L12 8.034l1.5 1.233L12 10.5z" />
            </svg>
        )
    },
    {
        name: "LangGraph",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <circle cx="19" cy="5" r="3" />
                <circle cx="5" cy="19" r="3" />
                <path d="M14.5 9.5l2.5-2.5" />
                <path d="M9.5 14.5l-2.5 2.5" />
                <path d="M12 9v-4" />
                <circle cx="12" cy="5" r="1" fill="currentColor" />
            </svg>
        )
    },
    {
        name: "Claude",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" />
            </svg>
        )
    },
    {
        name: "ElevenLabs",
        icon: (
            <div className="flex items-center">
                <div className="flex gap-0.5 mr-2">
                    <div className="w-1 h-5 bg-white rounded-full" />
                    <div className="w-1 h-5 bg-white rounded-full" />
                </div>
                <span className="font-sans font-bold text-xl tracking-tight">ElevenLabs</span>
            </div>
        ),
        textOnly: true
    }
];

export default function TechStrip() {
    return (
        <section className="w-full py-6 md:py-10 bg-black flex flex-col items-center gap-8 overflow-hidden relative">
            <span className="text-[10px] md:text-sm font-sans font-medium text-white/40 uppercase tracking-[0.4em]">
                Nossas principais tecnologias
            </span>

            <div className="relative w-full flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(2)].map((_, setIdx) => (
                        <div key={setIdx} className="flex items-center gap-16 md:gap-32">
                            {TechLogos.map((logo, idx) => (
                                <div key={`${setIdx}-${idx}`} className="flex items-center gap-4 text-white/40 hover:text-white transition-all duration-500 group">
                                    <div className="group-hover:scale-110 group-hover:text-brand transition-transform duration-500">
                                        {!logo.textOnly && logo.icon}
                                    </div>
                                    {logo.textOnly ? (
                                        <div className="group-hover:scale-105 transition-transform duration-500">
                                            {logo.icon}
                                        </div>
                                    ) : (
                                        <span className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase group-hover:text-white transition-colors">
                                            {logo.name}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
