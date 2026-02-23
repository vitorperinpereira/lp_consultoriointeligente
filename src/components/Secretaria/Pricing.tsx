import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/SocialMedia/ui/button";
import { sectionReveal } from "./motion";

export function Pricing() {
    return (
        <section className="py-section-mobile md:py-section bg-surface-dark relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <div className="relative bg-gradient-to-b from-surface-light border border-brand/30 p-[1px] rounded-[2rem] overflow-hidden group">
                        {/* Gold Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent group-hover:translate-x-full duration-1000 transition-transform -translate-x-full" />

                        <div className="bg-[#111] rounded-[2rem] p-8 md:p-12 text-center h-full relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[8px] sm:text-[10px] font-heading font-black tracking-[0.2em] uppercase mb-8 border border-brand/20">
                                <Check className="w-3 h-3" />
                                Vagas Limitadas
                            </div>

                            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-2">
                                Transforme sua <span className="block italic font-serif text-brand lowercase mt-1 text-3xl md:text-4xl">clínica</span>
                            </h3>
                            <p className="text-white/60 text-sm mb-8">Máquina de vendas para sua secretária</p>

                            <div className="mb-8 space-y-2">
                                <p className="text-white/50 text-sm uppercase tracking-widest font-bold">Por apenas 12x de</p>
                                <div className="text-6xl md:text-7xl font-heading font-black tracking-tighter text-white drop-shadow-md">
                                    <span className="text-3xl lg:text-4xl align-top mr-1">R$</span>
                                    20<span className="text-gradient-gold">,37</span>
                                </div>
                                <p className="text-white/40 text-sm tracking-wider mt-2">ou à vista por R$ 197,00</p>
                            </div>

                            <Button
                                size="lg"
                                className="w-full bg-brand text-black hover:bg-white font-heading font-black tracking-[0.10em] sm:tracking-[0.15em] py-6 sm:py-8 text-xs sm:text-sm uppercase rounded-xl transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                            >
                                Quero inscrever ela
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/50 text-xs mt-8">
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                                    <span>Garantia 7 dias</span>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-brand" />
                                    <span>Seguro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
