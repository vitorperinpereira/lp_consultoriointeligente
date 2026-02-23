import { motion } from "framer-motion";
import { cardReveal, sectionReveal, sectionStagger } from "./motion";

const roboticDentistry = "/socialmedia/robotic-dentistry.png";

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Diagnostico de perfil",
            description: "Analisamos seu posicionamento atual e definimos a linha editorial ideal da especialidade.",
        },
        {
            number: "02",
            title: "Producao e aprovacao",
            description: "Voce recebe agenda e pecas do mes, aprova com ajustes rapidos e sem retrabalho.",
        },
        {
            number: "03",
            title: "Escala com consistencia",
            description: "Publicacao recorrente com estrategia comercial enquanto sua equipe foca no atendimento.",
        },
    ];

    return (
        <section id="how-it-works" className="py-section-mobile md:py-section bg-transparent border-y border-white/10 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.1] mix-blend-screen pointer-events-none"
                style={{
                    backgroundImage: `url(${roboticDentistry})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-brand font-heading font-black tracking-[0.2em] uppercase text-xs mb-4 block">Workflow</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                        Processo simples,
                        <span className="block font-serif italic capitalize text-gradient-gold lowercase">execucao premium</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed opacity-80">
                        Fluxo desenhado para reduzir friccao e manter qualidade de marca em cada publicacao.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 md:gap-8 relative max-w-6xl mx-auto"
                >
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent -z-10" />

                    {steps.map((step) => (
                        <motion.article key={step.number} variants={cardReveal} className="relative group">
                            <div className="w-24 h-24 mx-auto mb-5 relative">
                                <div className="absolute inset-0 bg-brand/10 blur-xl rounded-full group-hover:bg-brand/30 transition-colors" />
                                <div className="relative w-full h-full bg-black border border-brand/40 rounded-full flex items-center justify-center text-3xl font-heading font-black text-brand shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-500">
                                    {step.number}
                                </div>
                            </div>

                            <div className="text-center px-6 py-8 rounded-[2rem] bg-surface-dark/70 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(197,160,89,0.14)]">
                                <h3 className="text-sm md:text-base font-heading font-black mb-3 text-white uppercase tracking-[0.12em]">{step.title}</h3>
                                <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
