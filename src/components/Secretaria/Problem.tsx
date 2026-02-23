import { motion } from "framer-motion";
import { Lock, PhoneOff, CalendarX } from "lucide-react";
import { sectionReveal, sectionStagger } from "./motion";

export function Problem() {
    const problems = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Falta de Segurança",
            desc: "Sua equipe atende sem padrão, gerando desconfiança em leads que procuram o serviço."
        },
        {
            icon: <PhoneOff className="w-6 h-6" />,
            title: "Sem Confirmação",
            desc: "Pacientes marcam mas não comparecem porque o método de confirmação de presença é fraco."
        },
        {
            icon: <CalendarX className="w-6 h-6" />,
            title: "Agenda Perdida",
            desc: "Falta de proatividade para repescar orçamentos perdidos ou agendas ociosas no meio do dia."
        }
    ];

    return (
        <section className="py-section-mobile md:py-section bg-surface-dark relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <header className="mb-16 md:mb-24 text-center">
                        <motion.h2
                            variants={sectionReveal}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]"
                        >
                            Diagnóstico
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase mt-2">o cenário atual</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {problems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={sectionReveal}
                                className="group relative p-8 md:p-10 rounded-[2rem] bg-black/40 border border-white/5 hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-surface-light border border-white/10 flex items-center justify-center text-brand mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-wider mb-4 leading-tight group-hover:text-brand transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
