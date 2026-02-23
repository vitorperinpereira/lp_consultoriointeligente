import { Calendar, PenTool, BarChart3, Clock, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, sectionReveal, sectionStagger } from "./motion";

export function Features() {
    const features = [
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Calendario estrategico",
            description: "Planejamento mensal focado em datas comerciais e procedimentos de alto valor.",
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Design premium",
            description: "Artes sofisticadas que reforcam autoridade e filtram pacientes por valor percebido.",
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Legendas com PNL",
            description: "Copywriting persuasivo para conversar com dores, desejo e tomada de decisao.",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Economia de tempo",
            description: "Aprove e poste em minutos enquanto o operacional de criacao fica com a equipe GMV.",
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Foco em conversao",
            description: "Cada post tem objetivo comercial claro: direct, WhatsApp e agendamento qualificado.",
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Relatorios claros",
            description: "Leitura simples dos indicadores para decidir rapido sem depender de dashboard complexo.",
        },
    ];

    return (
        <section className="py-section-mobile md:py-section bg-transparent border-t border-white/10">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-brand font-heading font-black tracking-[0.2em] uppercase text-xs mb-4 block">O que voce recebe</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                        Sistema completo de
                        <span className="block font-serif italic capitalize text-gradient-gold lowercase">conteudo odontologico</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed opacity-80">
                        Estrutura criativa, editorial e comercial no mesmo fluxo para manter constancia com qualidade.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature) => (
                        <motion.article
                            key={feature.title}
                            variants={cardReveal}
                            className="group rounded-[2rem] bg-surface-dark/70 border border-white/10 p-8 md:p-9 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(197,160,89,0.14)]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-3">{feature.title}</h3>
                            <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
