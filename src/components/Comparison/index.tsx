"use client";

import React from "react";
import { Check, X, ArrowDown, ArrowUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

const comparisonData = [
    {
        before: { text: "Gestão manual de agenda e conflitos constantes", icon: "x" },
        after: { text: "Agenda otimizada e preenchimento automático", icon: "check" },
    },
    {
        before: { text: "Perda de pacientes por falta de acompanhamento", icon: "x" },
        after: { text: "Engajamento proativo e retenção de pacientes", icon: "check" },
    },
    {
        before: { text: "Diagnósticos baseados apenas em experiência visual", icon: "down" },
        after: { text: "Análises preditivas para diagnósticos mais precisos", icon: "up" },
    },
    {
        before: { text: "Marketing genérico sem segmentação precisa", icon: "down" },
        after: { text: "Campanhas personalizadas e captação assertiva", icon: "check" },
    },
    {
        before: { text: "Custos operacionais elevados com baixa eficiência", icon: "down" },
        after: { text: "Operação enxuta com maximização de lucros", icon: "up" },
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export default function Comparison() {
    return (
        <section className="py-section-mobile md:py-section bg-transparent relative overflow-hidden">
            {/* Transparent background to show global luxury pattern */}

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-6 text-white uppercase tracking-tighter">
                        Onde você está <span className="font-serif italic capitalize text-gradient-gold lowercase">hoje?</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-0 relative"
                >
                    {/* Header Row */}
                    <div className="pb-10 px-6 flex flex-col justify-end border-b border-white/10">
                        <h3 className="text-xl md:text-2xl font-heading font-black text-white/40 leading-tight uppercase tracking-tight">
                            Antes da IA<br />
                            <span className="text-xs font-sans font-medium lowercase opacity-50">(O Jeito Antigo)</span>
                        </h3>
                    </div>

                    <div className="relative">
                        {/* THE GOLD GLOW BOX - Stronger Border */}
                        <div className="absolute -inset-x-2 -top-4 -bottom-0 rounded-t-[2rem] border-t-2 border-x-2 border-[#f4c025] bg-[#f4c025]/5 shadow-[0_0_50px_rgba(244,192,37,0.2)] z-0"></div>

                        <div className="relative z-10 p-6 md:p-10 border-b border-[#f4c025]/30">
                            <h3 className="text-xl md:text-2xl font-heading font-black text-white leading-tight uppercase tracking-tight">
                                Futuro com IA<br />
                                <span className="text-xs font-sans font-bold text-[#f4c025] lowercase tracking-wide">(GMV Educação)</span>
                            </h3>
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    {comparisonData.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Left Side (Old Way) */}
                            <motion.div
                                variants={itemVariants}
                                className={`py-8 px-6 border-b border-white/10 flex items-start gap-4 ${index === comparisonData.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <div className="mt-1 flex-shrink-0">
                                    {item.before.icon === "x" ? (
                                        <X size={20} className="text-white/20" strokeWidth={3} />
                                    ) : (
                                        <ArrowDown size={20} className="text-white/20" strokeWidth={3} />
                                    )}
                                </div>
                                <p className="font-sans text-sm md:text-base text-white/40 leading-snug">
                                    {item.before.text}
                                </p>
                            </motion.div>

                            {/* Right Side (Method GMV) */}
                            <motion.div
                                variants={itemVariants}
                                className="relative px-6 md:px-10 py-8 flex items-start gap-4 border-b border-[#f4c025]/30 last:border-b-0"
                            >
                                {/* Gold Column Background Accent */}
                                <div className="absolute -inset-x-2 inset-y-0 bg-[#f4c025]/5 border-x-2 border-[#f4c025] z-0"></div>

                                {index === comparisonData.length - 1 && (
                                    <div className="absolute -inset-x-2 bottom-0 h-4 bg-[#f4c025]/5 border-x-2 border-b-2 border-[#f4c025] rounded-b-[2rem]"></div>
                                )}

                                <div className="mt-1 flex-shrink-0 relative z-10">
                                    {item.after.icon === "check" ? (
                                        <Check size={20} className="text-[#f4c025] drop-shadow-[0_0_8px_rgba(244,192,37,0.5)]" strokeWidth={4} />
                                    ) : (
                                        <ArrowUp size={20} className="text-[#f4c025] drop-shadow-[0_0_8px_rgba(244,192,37,0.5)]" strokeWidth={4} />
                                    )}
                                </div>
                                <p className="font-heading text-sm md:text-base text-white font-black leading-snug relative z-10 uppercase tracking-tight">
                                    {item.after.text}
                                </p>
                            </motion.div>
                        </React.Fragment>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 flex justify-center px-6"
                >
                    <button className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-white text-black font-heading font-black text-lg md:text-xl rounded-full shadow-premium hover:bg-brand hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-tight">
                        Quero meu diagnóstico gratuito
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
