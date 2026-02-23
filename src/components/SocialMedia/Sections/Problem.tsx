import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, sectionReveal, sectionStagger } from "./motion";

export function Problem() {
    const problems = [
        {
            title: "Ciclo da artezinha",
            description: "Horas no Canva com posts que nao geram conversa nem novos pacientes particulares.",
        },
        {
            title: "Agencia generica",
            description: "Conteudo pronto de internet, sem contexto clinico e sem posicionamento de autoridade.",
        },
        {
            title: "Inconstancia cronica",
            description: "Publica por alguns dias, para por semanas e perde alcance junto com relevancia.",
        },
    ];

    return (
        <section id="problem" className="py-section-mobile md:py-section bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-brand font-heading font-black tracking-[0.2em] uppercase text-xs mb-4 block">O Cenario Atual</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
                        Por que o Instagram
                        <span className="block font-serif italic capitalize text-gradient-gold lowercase">nao converte?</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed opacity-80">
                        A maioria dos dentistas tenta resolver o marketing sem metodo ou contrata quem nao entende de odontologia.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 md:gap-8"
                >
                    {problems.map((item) => (
                        <motion.article
                            key={item.title}
                            variants={cardReveal}
                            className="group rounded-[2rem] bg-surface-dark/70 border border-white/10 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(197,160,89,0.14)]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center mb-6 text-brand transition-transform duration-500 group-hover:scale-110">
                                <AlertTriangle size={22} />
                            </div>
                            <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-3">{item.title}</h3>
                            <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">{item.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
