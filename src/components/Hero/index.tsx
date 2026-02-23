"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import TechStrip from "../TechStrip";
import SplineBackground from "../SplineBackground";
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
        <section className="relative min-h-[90vh] flex flex-col items-center justify-start py-section-mobile md:py-section bg-transparent overflow-hidden">

            {/* Spline 3D Background */}
            <SplineBackground
                scene="https://prod.spline.design/2EPrrHCJqSmcy2az/scene.splinecode"
                opacity={100}
                fullOpacity={true}
            />

            {/* Background Glows shifted to match 3D lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-brand/10 blur-[150px] rounded-full pointer-events-none z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black z-[1] pointer-events-none" />

            {/* Premium Contrast Overlay - Ensures text is the hero */}
            <div className="absolute inset-0 bg-black/40 z-[2] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[2] pointer-events-none" />

            <motion.div
                className="container mx-auto px-6 z-10 text-center max-w-6xl relative z-[10]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-light border border-white/10 backdrop-blur-md mb-6">
                    <Image src="/logo.svg" alt="GMV Dental IA Logo" width={20} height={20} className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,192,37,0.4)]" />
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand uppercase">Exclusivo para Dentistas</span>
                </motion.div>

                {/* Headline - Staggered Lines with extra contrast */}
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] mb-10 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    <motion.span variants={itemVariants} className="block">
                        FAZEMOS DO SEU
                    </motion.span>
                    <motion.span variants={itemVariants} className="block mt-2">
                        CONSULTÓRIO UM DOS
                    </motion.span>

                    <motion.span variants={itemVariants} className="block mt-4 font-serif italic capitalize text-gradient-gold drop-shadow-[0_0_20px_rgba(244,192,37,0.3)] lowercase py-2">
                        mais inteligentes e lucrativos
                    </motion.span>
                </h1>

                {/* Subheadline with improved contrast */}
                <motion.p variants={itemVariants} className="font-sans text-base md:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-medium">
                    Implemente inteligência artificial no seu atendimento, vendas e gestão.
                    Aumente seu faturamento enquanto recupera seu tempo livre.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex justify-center mb-12 px-6">
                    <a href="#form" className="w-full sm:w-auto group relative px-8 md:px-12 py-5 md:py-6 bg-white text-black font-black text-lg md:text-xl rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,192,37,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 overflow-hidden text-center">
                        <div className="absolute inset-0 bg-brand/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        <span className="flex items-center justify-center gap-3 relative z-10">
                            COMEÇAR AGORA
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                        </span>
                    </a>
                </motion.div>

                {/* TechStrip - Core Technologies */}
                <motion.div variants={itemVariants} className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-8">
                    <TechStrip />
                </motion.div>
            </motion.div>
        </section>
    );
}
