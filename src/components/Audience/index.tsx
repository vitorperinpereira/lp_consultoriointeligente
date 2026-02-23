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
            ease: [0.33, 1, 0.68, 1] as [number, number, number, number]
        }
    }
};

export default function Audience() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden text-white">
            {/* AGGRESSIVE PREMIUM GOLD GLOWS */}

            {/* Top Right Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full -mr-32 -mt-32 pointer-events-none opacity-60" />

            {/* Bottom Left Glow */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full -ml-32 -mb-32 pointer-events-none opacity-40" />

            {/* Central Glow behind text to make it "pop" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-brand/[0.03] blur-[120px] rounded-full pointer-events-none" />

            {/* Subtle Golden Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center text-4xl md:text-5xl font-heading font-black mb-20 leading-tight tracking-tighter"
                >
                    Para quem é a<br />
                    <span className="font-serif italic capitalize text-gradient-gold drop-shadow-[0_0_30px_rgba(244,192,37,0.4)] block mt-2">
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
                    className="flex justify-center px-6"
                >
                    <button className="w-full sm:w-auto group relative px-8 md:px-10 py-5 bg-white text-black font-black text-lg md:text-xl rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all duration-300">
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
