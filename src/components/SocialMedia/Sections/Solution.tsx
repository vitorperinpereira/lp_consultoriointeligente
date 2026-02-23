import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, sectionReveal, sectionStagger } from "./motion";

const holographicAnalysis = "/socialmedia/holographic-analysis.png";

const highlights = [
    "Conteudos tecnicamente precisos",
    "Neuromarketing aplicado",
    "Design system proprietario",
    "Targeting por especialidade",
];

export function Solution() {
    return (
        <section id="solution" className="py-section-mobile md:py-section bg-transparent relative border-y border-white/10 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    <motion.div variants={sectionReveal} className="relative group order-2 md:order-1">
                        <div className="aspect-square rounded-[2rem] border border-white/10 bg-surface-dark/80 backdrop-blur-sm relative overflow-hidden shadow-[0_0_24px_rgba(197,160,89,0.12)]">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${holographicAnalysis})` }}
                            />

                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                <div className="absolute top-6 left-6 border-l border-t border-brand/50 w-8 h-8" />
                                <div className="absolute bottom-6 right-6 border-r border-b border-brand/50 w-8 h-8" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                            </div>

                            <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-brand/30 max-w-[230px] shadow-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                                    <span className="text-[10px] uppercase tracking-widest text-brand font-heading font-black">Analise finalizada</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>Engagement</span>
                                        <span className="text-white font-mono">98.5%</span>
                                    </div>
                                    <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                                        <div className="h-full bg-brand w-[98.5%]" />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>Conversao</span>
                                        <span className="text-white font-mono">Alta</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={sectionReveal} className="order-1 md:order-2 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light/70 border border-white/10 text-brand text-[10px] font-heading font-black tracking-[0.2em] uppercase mb-6">
                            <span className="w-1 h-1 rounded-full bg-brand" />
                            Estrategia orientada a dados
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                            Conteudo que vira
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase">autoridade e venda</span>
                        </h2>

                        <p className="font-sans text-base md:text-lg text-gray-300 mb-7 leading-relaxed md:border-l-2 md:border-brand/30 md:pl-6">
                            O GMV Social IA combina criacao e analise para mapear comportamento do paciente ideal,
                            ajustar narrativa e manter consistencia com foco em conversao real.
                        </p>

                        <motion.div variants={sectionStagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {highlights.map((item) => (
                                <motion.div
                                    key={item}
                                    variants={cardReveal}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-surface-dark/70 border border-white/10 hover:border-brand/40 transition-all duration-500"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                                    <span className="text-xs md:text-sm font-heading font-black text-gray-200 tracking-[0.06em] uppercase">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
