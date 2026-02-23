import { Button } from "@/components/SocialMedia/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TechStrip from "@/components/TechStrip";
import SplineBackground from "@/components/SplineBackground";
import { sectionReveal, sectionStagger } from "./motion";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 md:pt-36 overflow-hidden bg-black">
            <SplineBackground
                scene="https://prod.spline.design/2EPrrHCJqSmcy2az/scene.splinecode"
                opacity={100}
                fullOpacity={true}
            />

            <div className="absolute inset-0 z-[1] pointer-events-none">
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent md:via-black/40" />
            </div>

            <motion.div
                variants={sectionStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 relative z-10 flex-grow flex items-center"
            >
                <div className="max-w-5xl mx-auto md:mx-0 text-left">
                    <motion.div
                        variants={sectionReveal}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-light/80 border border-white/10 backdrop-blur-md text-brand text-[10px] font-heading font-black tracking-[0.2em] uppercase mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_10px_#D4AF37]" />
                        Atualizado 2026
                    </motion.div>

                    <motion.h1
                        variants={sectionReveal}
                        className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.92] mb-10 uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
                    >
                        <span className="block">Instagram</span>
                        <span className="block mt-2">Lucrativo para</span>
                        <span className="block mt-4 font-serif italic capitalize text-gradient-gold lowercase py-1">
                            dentistas.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={sectionReveal}
                        className="font-sans text-base md:text-xl text-white max-w-2xl mb-12 leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
                    >
                        O método para dominar o Instagram e transformar seguidores em pacientes. Aproveite essa condição especial e transforme seu Instagram em uma vitrine de sucesso!
                    </motion.p>

                    <motion.div
                        variants={sectionReveal}
                        className="flex flex-col sm:flex-row gap-6 items-start justify-start"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-white text-black font-heading font-black text-sm md:text-base rounded-full tracking-[0.14em] uppercase shadow-[0_0_45px_rgba(255,255,255,0.25)] hover:bg-brand hover:text-black hover:-translate-y-1 transition-all duration-500"
                        >
                            Quero começar agora
                            <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="relative z-20 mt-auto border-t border-white/10">
                <TechStrip />
            </div>
        </section>
    );
}
