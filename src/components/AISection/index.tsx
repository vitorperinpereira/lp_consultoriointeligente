"use client";

import React from "react";
import { Check, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function AISection() {
    return (
        <section className="py-section-mobile md:py-section bg-black relative overflow-hidden">

            {/* Ambient Background Glow - High Energy */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Visual: High-Speed Atomic AI Processor */}
                    <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">

                        {/* 3D Atom System */}
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>

                            {/* --- THE CHIP (Nucleus) --- */}
                            <motion.div
                                className="relative z-20 w-32 h-32 bg-black border border-brand/50 rounded-2xl shadow-[0_0_60px_rgba(244,192,37,0.5)] flex items-center justify-center overflow-hidden"
                                animate={{ boxShadow: ["0 0 40px rgba(244,192,37,0.3)", "0 0 80px rgba(244,192,37,0.7)", "0 0 40px rgba(244,192,37,0.3)"] }}
                                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} // Pulsing Fast like a CPU clock
                            >
                                {/* Circuit Lines Texture */}
                                <div className="absolute inset-0 opacity-30" style={{
                                    backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(197, 160, 89, 0.2) 50%), linear-gradient(0deg, transparent 50%, rgba(197, 160, 89, 0.2) 50%)`,
                                    backgroundSize: '8px 8px'
                                }} />

                                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />

                                {/* Core Text */}
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                    <Cpu className="w-8 h-8 text-brand animate-pulse" />
                                    <span className="text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-brand to-brand-dark tracking-tighter">IA</span>
                                </div>

                                {/* Corner Accents (Chip legs) */}
                                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-brand"></div>
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-brand"></div>
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-brand"></div>
                                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-brand"></div>
                            </motion.div>


                            {/* --- ATOMIC ORBITS (Electrons) --- */}

                            {/* Orbit 1: Horizontal X-Axis - High Speed */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-brand/40 border-t-white mix-blend-screen"
                                style={{ rotateX: 75 }}
                                animate={{ rotateZ: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white] -translate-x-1/2 -translate-y-1/2"></div>
                            </motion.div>

                            {/* Orbit 2: Diagonal 1 - High Speed */}
                            <motion.div
                                className="absolute inset-4 rounded-full border border-brand/30 border-r-brand mix-blend-screen"
                                style={{ rotateX: 75, rotateY: 60 }}
                                animate={{ rotateZ: -360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-1/2 right-0 w-2 h-2 bg-brand rounded-full shadow-[0_0_15px_#f4c025] translate-x-1/2 -translate-y-1/2"></div>
                            </motion.div>

                            {/* Orbit 3: Diagonal 2 - High Speed */}
                            <motion.div
                                className="absolute inset-8 rounded-full border border-brand/30 border-l-white mix-blend-screen"
                                style={{ rotateX: 75, rotateY: -60 }}
                                animate={{ rotateZ: 360 }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_white] -translate-x-1/2 translate-y-1/2"></div>
                            </motion.div>

                            {/* Outer Energy Field */}
                            <motion.div
                                className="absolute -inset-10 rounded-full border border-dashed border-white/5"
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                            />

                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-left lg:pl-10">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-surface-light border border-white/10 text-brand text-[10px] font-black mb-8 tracking-[0.2em] uppercase">
                            TECNOLOGIA PROPRIETÁRIA
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 leading-[1.1] text-white uppercase tracking-tighter">
                            A IA É O SEU <br />
                            <span className="font-serif italic capitalize text-gradient-gold drop-shadow-md lowercase">novo sócio</span>
                        </h2>

                        <p className="font-sans text-text-secondary text-lg md:text-xl mb-10 leading-relaxed opacity-80 max-w-xl">
                            Enquanto você foca no mocho, nossa tecnologia cuida de todo o resto.
                            Um sistema treinado especificamente para a odontologia empresarial.
                        </p>

                        <div className="space-y-4 mb-12">
                            {[
                                "Atendimento humanizado e personalizado 24/7.",
                                "Aprendizado contínuo com base nos seus dados.",
                                "Integração total com seus sistemas atuais."
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-surface-light border border-white/5 hover:border-brand/30 transition-all duration-300">
                                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-brand" strokeWidth={3} />
                                    </div>
                                    <span className="font-heading text-white font-bold text-sm md:text-base tracking-tight uppercase">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="px-10 py-5 bg-white text-black font-black text-lg rounded-full hover:bg-brand transition-all duration-300 shadow-premium active:scale-95 uppercase tracking-tighter">
                            CONHECER TECNOLOGIA
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
