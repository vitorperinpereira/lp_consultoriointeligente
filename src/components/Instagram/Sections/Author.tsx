import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/SocialMedia/ui/button";
import { sectionReveal } from "./motion";

export function Author() {
    return (
        <section className="py-section-mobile md:py-section bg-black relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] opacity-40 translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 w-full rounded-2xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10" />

                        {/* Como não temos a imagem original, usamos um placeholder dourado no estilo da marca */}
                        <div className="absolute inset-0 bg-surface-dark/80 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                            <span className="text-8xl text-brand/20 font-serif italic">IN</span>
                        </div>

                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider">Isa Novaes</h3>
                            <p className="text-brand text-sm tracking-widest uppercase mt-1">Especialista GMV</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <header>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-[0.95]">
                                Afinal, quem é
                                <span className="block font-serif italic capitalize text-gradient-gold lowercase mt-2">Isa Novaes?</span>
                            </h2>
                        </header>

                        <div className="space-y-6 font-sans text-text-secondary text-base md:text-lg leading-relaxed">
                            <p>
                                Especialista em Gestão, Marketing e Vendas voltadas para o mercado odontológico. Já ajudei centenas de dentistas a estruturarem suas estratégias de marketing digital e a aumentarem o faturamento do consultório.
                            </p>
                            <p className="text-white/90 font-medium">
                                Com o GMV e suas soluções de IA, Isa está liderando a revolução das Clínicas Inteligentes, onde o marketing deixa de ser tarefa e passa a ser motor de crescimento.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            className="bg-brand text-black font-heading font-black text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 w-full sm:w-auto"
                        >
                            Quero aprender agora mesmo
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
