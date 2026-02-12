"use client";

import React from "react";
import { motion } from "framer-motion";

const audienceItems = [
    {
        id: 1,
        title: "Dentistas que buscam previsibilidade de faturamento.",
        desc: "Alcance a estabilidade financeira com estratégias que garantem um fluxo de pacientes e receita constante."
    },
    {
        id: 2,
        title: "Clínicas que querem automatizar processos com IA.",
        desc: "Otimize sua operação, reduza custos e elimine tarefas repetitivas utilizando tecnologia de ponta."
    },
    {
        id: 3,
        title: "Profissionais que desejam uma secretária que realmente venda.",
        desc: "Treine sua equipe e implemente ferramentas que transformam o atendimento em vendas efetivas."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1] as any
        }
    }
};

export default function Audience() {
    return (
        <section className="py-24 bg-[#030303] relative overflow-hidden text-white">
            {/* AGGRESSIVE FUTURISTIC BACKGROUND - Circuit Overload */}

            {/* Deep Glow Foundations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f4c025]/10 blur-[150px] rounded-full -mr-64 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#C5A059]/10 blur-[150px] rounded-full -ml-64 -mb-32 pointer-events-none" />

            {/* Global Ambient Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.08)_0%,transparent_100%)] pointer-events-none" />

            {/* HIGH-DENSITY CIRCUITS - LEFT */}
            <div className="absolute left-0 top-0 bottom-0 w-[45%] opacity-50 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 300 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 80H120L180 140V300L220 340H300" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="10 5" />
                    <path d="M0 220H100L140 260V500L180 540H300" stroke="#f4c025" strokeWidth="2.5" opacity="0.7" />
                    <path d="M0 600H180L230 650V900L280 950H300" stroke="#C5A059" strokeWidth="1" />
                    <path d="M0 900H140L180 940V1050L220 1090H300" stroke="#f4c025" strokeWidth="2" strokeDasharray="15 8" opacity="0.6" />

                    {/* Vertical Connecting Lines */}
                    <path d="M120 140V220" stroke="#C5A059" strokeWidth="0.5" opacity="0.3" />
                    <path d="M180 540V600" stroke="#f4c025" strokeWidth="0.5" opacity="0.3" />

                    {/* Intersection Nodes */}
                    <circle cx="120" cy="80" r="5" fill="#C5A059" className="animate-pulse shadow-[0_0_15px_#C5A059]" />
                    <circle cx="180" cy="140" r="3" fill="#C5A059" />
                    <circle cx="140" cy="260" r="5" fill="#f4c025" className="shadow-[0_0_15px_#f4c025]" />
                    <circle cx="180" cy="540" r="6" fill="#f4c025" className="blur-[1px] shadow-[0_0_20px_#f4c025]" />
                    <circle cx="230" cy="650" r="4" fill="#C5A059" />
                    <circle cx="280" cy="950" r="5" fill="#C5A059" className="animate-pulse" />
                </svg>
            </div>

            {/* HIGH-DENSITY CIRCUITS - RIGHT */}
            <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-60 pointer-events-none scale-x-[-1]">
                <svg width="100%" height="100%" viewBox="0 0 300 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 120H150L210 180V400L260 450H300" stroke="#f4c025" strokeWidth="3" />
                    <path d="M0 350H120L160 390V600L200 640H300" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="6 6" />
                    <path d="M0 700H180L230 750V900L280 950" stroke="#f4c025" strokeWidth="1" />
                    <path d="M0 280H60L90 310V450L120 480H300" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />

                    {/* Intersection Nodes */}
                    <circle cx="150" cy="120" r="7" fill="#f4c025" className="blur-[2px] opacity-80" />
                    <circle cx="210" cy="180" r="4" fill="#f4c025" />
                    <circle cx="160" cy="390" r="6" fill="#f4c025" className="shadow-[0_0_20px_#f4c025]" />
                    <circle cx="230" cy="750" r="4" fill="#C5A059" />
                    <circle cx="280" cy="950" r="5" fill="#f4c025" className="animate-pulse shadow-[0_0_15px_#f4c025]" />
                </svg>
            </div>

            {/* Glowing Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(244,192,37,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center text-4xl md:text-5xl font-heading font-black mb-20 leading-tight tracking-tighter"
                >
                    Para quem é a<br />
                    <span className="font-serif italic capitalize bg-gradient-to-r from-[#C5A059] via-[#f4c025] to-[#FFFFFF] via-[#f4c025] to-[#C5A059] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(244,192,37,0.5)]">
                        GMV Educação?
                    </span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-16 mb-20"
                >
                    {audienceItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="flex items-start gap-6 md:gap-10 group"
                        >
                            <span className="text-5xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#C5A059] via-[#f4c025] to-[#FFFFFF] via-[#f4c025] to-[#C5A059] bg-clip-text text-transparent leading-none pt-1 drop-shadow-[0_0_40px_rgba(244,192,37,0.4)] group-hover:scale-110 transition-all duration-500 select-none">
                                {item.id}.
                            </span>
                            <div className="flex-1">
                                <motion.h3
                                    className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3 leading-tight group-hover:text-[#f4c025] transition-colors duration-300 uppercase"
                                >
                                    {item.title}
                                </motion.h3>
                                <p className="font-sans text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl border-l border-[#f4c025]/20 pl-6 group-hover:border-[#f4c025]/50 transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <button className="group relative px-10 py-5 bg-white text-black font-black text-lg md:text-xl rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all duration-300">
                        <span className="relative z-10">
                            Quero meu <span className="text-[#C5A059] group-hover:text-[#f4c025] transition-colors">diagnóstico gratuito</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
