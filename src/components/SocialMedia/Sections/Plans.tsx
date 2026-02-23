import { Check } from "lucide-react";
import { Button } from "@/components/SocialMedia/ui/button";
import { motion } from "framer-motion";
import { cardReveal, sectionReveal, sectionStagger } from "./motion";

export function Plans() {
    const plans = [
        {
            name: "Starter",
            price: "R$ 497",
            period: "/mes",
            description: "Para quem esta comecando o posicionamento com consistencia.",
            features: [
                "12 posts (Feed/Stories)",
                "Legendas estrategicas",
                "Calendario editorial basico",
                "Suporte por email",
            ],
            highlight: false,
        },
        {
            name: "Growth",
            price: "R$ 897",
            period: "/mes",
            description: "Para clinicas que querem acelerar a aquisicao de pacientes.",
            features: [
                "20 posts (Feed/Stories/Reels)",
                "Legendas com PNL avancada",
                "Calendario editorial completo",
                "Sugestao de stories diarios",
                "Suporte prioritario WhatsApp",
            ],
            highlight: true,
        },
        {
            name: "Authority",
            price: "R$ 1.497",
            period: "/mes",
            description: "Gestao completa para consolidar autoridade premium.",
            features: [
                "30 posts (conteudo diario)",
                "Roteiros para videos longos",
                "Design exclusivo premium",
                "Gestao de trafego pago (setup)",
                "Consultoria mensal de 1h",
            ],
            highlight: false,
        },
    ];

    return (
        <section id="plans" className="py-section-mobile md:py-section bg-transparent border-y border-white/10">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                        Escolha o plano
                        <span className="block font-serif italic capitalize text-gradient-gold lowercase">ideal para sua fase</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-text-secondary opacity-80">
                        Sem fidelidade contratual. Escale no seu ritmo com previsibilidade mensal.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-start"
                >
                    {plans.map((plan) => (
                        <motion.article
                            key={plan.name}
                            variants={cardReveal}
                            className={`rounded-[2rem] p-8 md:p-9 border backdrop-blur-sm transition-all duration-500 ${
                                plan.highlight
                                    ? "relative md:-translate-y-3 z-10 bg-surface-light/70 border-brand/60 shadow-[0_0_28px_rgba(197,160,89,0.2)]"
                                    : "bg-surface-dark/70 border-white/10 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(197,160,89,0.14)]"
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-black px-5 py-1 rounded-full text-[10px] font-heading font-black tracking-[0.18em] uppercase shadow-md">
                                    Mais Popular
                                </div>
                            )}

                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-heading font-black uppercase tracking-tight mb-2 text-white">{plan.name}</h3>
                                <p className="font-sans text-sm text-gray-300 mb-8 min-h-10">{plan.description}</p>

                                <div className="mb-8">
                                    <span className="text-4xl font-heading font-black text-white tracking-tight">{plan.price}</span>
                                    <span className="text-gray-400 font-serif italic">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-200">
                                        <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                                        <span className="font-sans tracking-wide leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full h-14 rounded-full font-heading font-black tracking-[0.13em] uppercase transition-all duration-300 ${
                                    plan.highlight
                                        ? "bg-brand text-black hover:bg-white"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                                }`}
                                variant={plan.highlight ? "default" : "outline"}
                            >
                                Quero este plano
                            </Button>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
