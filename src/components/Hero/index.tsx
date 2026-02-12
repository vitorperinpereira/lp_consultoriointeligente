"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion, Variants } from "framer-motion";
import "../../app/globals.css";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-start py-section-mobile md:py-section bg-black overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                className="container mx-auto px-6 z-10 text-center max-w-6xl relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-light border border-white/10 backdrop-blur-md mb-12">
                    <img src="/logo.svg" alt="GMV Dental IA Logo" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,192,37,0.4)]" />
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand uppercase">Exclusivo para Dentistas</span>
                </motion.div>

                {/* Headline - Staggered Lines */}
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] mb-10 uppercase drop-shadow-2xl">
                    <motion.span variants={itemVariants} className="block">
                        FAZEMOS DO SEU
                    </motion.span>
                    <motion.span variants={itemVariants} className="block mt-2">
                        CONSULTÓRIO UM DOS
                    </motion.span>

                    <motion.span variants={itemVariants} className="block mt-4 font-serif italic capitalize text-gradient-gold drop-shadow-lg lowercase py-2">
                        mais inteligentes e lucrativos
                    </motion.span>
                </h1>

                {/* Subheadline */}
                <motion.p variants={itemVariants} className="font-sans text-base md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed opacity-80">
                    Implemente inteligência artificial no seu atendimento, vendas e gestão.
                    Aumente seu faturamento enquanto recupera seu tempo livre.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex justify-center mb-12">
                    <a href="#form" className="group relative px-12 py-6 bg-white text-black font-black text-xl rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,192,37,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 overflow-hidden">
                        <div className="absolute inset-0 bg-brand/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        <span className="flex items-center gap-3 relative z-10">
                            COMEÇAR AGORA
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                        </span>
                    </a>
                </motion.div>

                {/* Animated Marquee Banner */}
                <motion.div
                    variants={itemVariants}
                    className="w-[100vw] relative left-1/2 -translate-x-1/2 py-6 mb-16 overflow-hidden border-y border-white/10 bg-white/[0.03] backdrop-blur-sm"
                >
                    <div className="flex whitespace-nowrap">
                        <motion.div
                            className="flex items-center gap-12 px-6"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Duplicate content for seamless loop */}
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="flex items-center gap-12">
                                    <span className="text-sm md:text-base font-heading font-black text-white uppercase tracking-[0.4em]">TECNOLOGIA DE PONTA PARA DENTISTAS</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                    <span className="text-sm md:text-base font-heading font-black text-white uppercase tracking-[0.4em]">IA QUE GERA LUCRO REAL</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    {/* Fades for smooth edge transition */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                </motion.div>

                {/* VSL (Video Sales Letter) */}
                <motion.div
                    variants={itemVariants}
                    className="relative w-full aspect-video max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-surface-dark shadow-[0_0_50px_rgba(244,192,37,0.1)] overflow-hidden z-20"
                >
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/6XpPkbUlkVI?autoplay=0&rel=0&modestbranding=1&vq=hd1080"
                        title="GMV VSL"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

            </motion.div>
        </section>
    );
}
