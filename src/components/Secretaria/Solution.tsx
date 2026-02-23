import { motion } from "framer-motion";
import { Brain, Rocket, Network } from "lucide-react";
import { sectionReveal, sectionStagger } from "./motion";

export function Solution() {
    const modules = [
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Mentalidade de Elite",
            subtitle: "Módulo 01",
            desc: "Desenvolva a mentalidade de alta performance para maximizar resultados e liderar com confiança."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Vendas Consultivas",
            subtitle: "Módulo 02",
            desc: "Domine técnicas avançadas de vendas para transformar leads em pacientes fiéis."
        },
        {
            icon: <Network className="w-6 h-6" />,
            title: "Gestão e Eficiência",
            subtitle: "Módulo 03",
            desc: "Otimize processos, gerencie a agenda com precisão e elimine gargalos operacionais."
        }
    ];

    return (
        <section className="py-section-mobile md:py-section bg-black relative overflow-hidden">
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
                            Conteúdo do
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase mt-2">treinamento</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {modules.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={sectionReveal}
                                className="group bg-surface-dark border border-white/5 hover:border-brand/40 transition-colors p-8 rounded-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <div className="scale-150 transform group-hover:scale-[1.8] group-hover:rotate-12 transition-all duration-700">
                                        {item.icon}
                                    </div>
                                </div>

                                <span className="text-brand text-[10px] font-heading font-black tracking-[0.2em] uppercase block mb-4">
                                    {item.subtitle}
                                </span>

                                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-4 leading-tight group-hover:text-brand transition-colors duration-300 relative z-10">
                                    {item.title}
                                </h3>

                                <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed relative z-10">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
