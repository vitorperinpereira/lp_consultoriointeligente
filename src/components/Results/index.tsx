"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const resultsData = [
    {
        value: "+40%",
        label: "AGENDAMENTOS",
        desc: "Aumento significativo nas consultas com inteligência artificial."
    },
    {
        value: "70%",
        label: "REDUÇÃO NO-SHOW",
        desc: "Diminuição drástica das faltas com lembretes inteligentes."
    },
    {
        value: "3x",
        label: "ROI MARKETING",
        desc: "Retorno triplicado sobre o investimento em campanhas digitais."
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export default function Results() {
    return (
        <section className="py-section-mobile md:py-section bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white uppercase tracking-tighter">
                        RESULTADOS <br />
                        <span className="font-serif italic capitalize text-gradient-gold lowercase">reais</span>
                    </h2>
                    <p className="font-sans text-text-secondary text-base md:text-lg opacity-70">
                        O impacto direto da inteligência artificial no seu faturamento.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
                >
                    {resultsData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center group"
                        >
                            {/* Number Impact */}
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-brand/10 blur-[50px] rounded-full scale-150 pointer-events-none" />
                                <span className="relative z-10 text-7xl md:text-8xl font-heading font-black text-gradient-gold leading-none tracking-tighter drop-shadow-2xl">
                                    {item.value}
                                </span>
                            </div>

                            {/* Label */}
                            <h3 className="text-lg md:text-xl font-heading font-black text-gradient-gold mb-4 tracking-[0.1em] uppercase">
                                {item.label}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed opacity-80 px-4">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-10 px-6 flex justify-center"
                >
                    <button className="w-full sm:w-auto px-8 md:px-10 py-5 bg-white text-black font-black text-lg rounded-full shadow-premium hover:bg-brand transition-all duration-300 active:scale-95 uppercase tracking-tighter">
                        COMEÇAR TRANSFORMAÇÃO
                    </button>
                </motion.div>
            </div>

            {/* Ambient Depth */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
        </section>
    );
}
