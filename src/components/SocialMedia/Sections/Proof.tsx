import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cardReveal, sectionReveal, sectionStagger } from "./motion";

const dentalDashboard = "/socialmedia/dental-dashboard.png";

const testimonials = [
    {
        quote: "A sofisticacao visual elevou nossa percepcao de valor. O paciente premium passou a chegar mais preparado.",
        author: "Dr. Rafael Mendes",
        role: "Implantodontista",
        stats: "+45% ticket medio",
    },
    {
        quote: "Nao e so post bonito. O branding ficou mais estrategico e nosso posicionamento mudou de nivel.",
        author: "Dra. Juliana Costa",
        role: "Ortodontista",
        stats: "3x mais pacientes private",
    },
];

export function Proof() {
    return (
        <section className="py-section-mobile md:py-section bg-transparent relative overflow-hidden border-t border-white/10">
            <div className="absolute top-1/2 left-0 w-1/3 h-full bg-brand/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                        Resultados
                        <span className="block font-serif italic capitalize text-gradient-gold lowercase">mensuraveis</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-text-secondary opacity-80 max-w-2xl mx-auto">
                        Dados reais de clinicas que elevaram padrao de marca e performance comercial no digital.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                    <div className="space-y-6">
                        {testimonials.map((item) => (
                            <motion.article
                                key={item.author}
                                variants={cardReveal}
                                className="rounded-[2rem] bg-surface-dark/70 border border-white/10 p-8 md:p-9 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(197,160,89,0.14)]"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1 text-brand">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-heading font-black tracking-widest uppercase text-brand border border-brand/30 px-2 py-1 rounded-full">
                                        {item.stats}
                                    </span>
                                </div>
                                <p className="text-lg md:text-xl text-gray-200 mb-8 font-serif italic leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <div className="w-12 h-12 rounded-full border border-brand/50 p-0.5">
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-black text-white text-sm tracking-wide uppercase">{item.author}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-sans">{item.role}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div variants={cardReveal} className="relative">
                        <div className="relative rounded-[2rem] bg-surface-dark/80 border border-white/10 p-3 backdrop-blur-sm shadow-[0_0_24px_rgba(197,160,89,0.12)]">
                            <Image
                                src={dentalDashboard}
                                alt="Dashboard de resultados"
                                width={1400}
                                height={900}
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="w-full h-auto object-cover rounded-[1.4rem] opacity-85 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                            />

                            <div className="absolute -bottom-5 left-6 right-6 p-6 rounded-2xl bg-black/95 border border-white/10 shadow-2xl">
                                <div className="grid grid-cols-3 gap-6 divide-x divide-white/10">
                                    <div className="text-center">
                                        <div className="text-3xl font-serif italic text-white mb-1">+145%</div>
                                        <div className="text-[10px] text-brand uppercase tracking-widest font-heading font-black">Engajamento</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-serif italic text-white mb-1">+3x</div>
                                        <div className="text-[10px] text-brand uppercase tracking-widest font-heading font-black">Pacientes</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-serif italic text-white mb-1">-12h</div>
                                        <div className="text-[10px] text-brand uppercase tracking-widest font-heading font-black">Operacional</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
