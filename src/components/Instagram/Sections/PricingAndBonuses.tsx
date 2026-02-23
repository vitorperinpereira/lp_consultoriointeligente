import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/SocialMedia/ui/button";
import { sectionReveal, sectionStagger } from "./motion";

export function PricingAndBonuses() {
    const bonuses = [
        {
            title: "Os 10 Mandamentos dos Stories Lucrativos",
            desc: "Como transformar seus Stories em um canal de atração, conexão e conversão, com linguagem e exemplos adaptados pra Odontologia.",
        },
        {
            title: "Instagram Estratégico para Dentistas",
            desc: "Um guia adaptado do que há de melhor em Marketing de Conteúdo, totalmente focado na rotina e nas necessidades de quem trabalha com odontologia.",
        },
        {
            title: "Treinamento de Stories que Convertem",
            desc: "Descubra como criar Stories envolventes, feitos para gerar engajamento e atrair a atenção do seu publico diariamente.",
        },
    ];

    return (
        <section className="py-section-mobile md:py-section bg-surface-dark relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-24"
                >
                    {/* BÔNUS SECTION */}
                    <div className="text-center">
                        <motion.h2 variants={sectionReveal} className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-12">
                            E ainda multiplicamos
                            <span className="block mt-2 font-serif italic text-gradient-gold lowercase">os bônus!</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {bonuses.map((bonus, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={sectionReveal}
                                    className="bg-black/50 border border-white/5 rounded-2xl p-8 hover:border-brand/30 transition-colors text-left"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                                        <Star className="w-5 h-5 fill-brand/20" />
                                    </div>
                                    <span className="text-xs font-black tracking-[0.2em] text-brand uppercase mb-3 block">Bônus {idx + 1}</span>
                                    <h3 className="text-white font-heading font-bold text-lg mb-3 leading-tight uppercase tracking-wide">
                                        {bonus.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {bonus.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* PRICING SECTION */}
                    <motion.div variants={sectionReveal} className="max-w-xl mx-auto">
                        <div className="relative bg-gradient-to-b from-surface-light border border-brand/30 p-[1px] rounded-[2rem] overflow-hidden group">
                            {/* Gold Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent group-hover:translate-x-full duration-1000 transition-transform -translate-x-full" />

                            <div className="bg-[#111] rounded-[2rem] p-8 md:p-12 text-center h-full relative z-10 flex flex-col items-center">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[10px] font-heading font-black tracking-[0.2em] uppercase mb-8 border border-brand/20">
                                    <Check className="w-3 h-3" />
                                    Garantia de 7 dias
                                </div>

                                <h3 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-2">
                                    Acesso <span className="text-brand">Anual</span>
                                </h3>
                                <p className="text-white/60 text-sm mb-8 font-serif italic">Essa é a oportunidade que vai mudar a sua vida!</p>

                                <div className="mb-8 space-y-2">
                                    <p className="text-white/50 text-sm uppercase tracking-widest font-bold">Por apenas 9x de</p>
                                    <div className="text-6xl md:text-7xl font-heading font-black tracking-tighter text-white drop-shadow-md">
                                        <span className="text-3xl lg:text-4xl align-top mr-1">R$</span>
                                        19<span className="text-gradient-gold">,31</span>
                                    </div>
                                    <p className="text-white/40 text-sm tracking-wider mt-2">ou à vista por R$ 147,00</p>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full bg-brand text-black hover:bg-white font-heading font-black tracking-[0.15em] py-6 text-sm uppercase rounded-xl transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                                >
                                    Quero aproveitar a oferta
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
