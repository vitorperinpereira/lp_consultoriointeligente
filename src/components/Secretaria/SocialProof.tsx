import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { sectionReveal, sectionStagger } from "./motion";

export function SocialProof() {
    const testimonials = [
        {
            name: "Dra. Ana Silva",
            role: "Dentista Geral",
            content: "O treinamento mudou completamente a postura da minha secretária. Hoje ela vende e agenda com muito mais segurança!",
            stars: 5,
        },
        {
            name: "Dr. Carlos Souza",
            role: "Ortodontista",
            content: "Incrível como pequenos ajustes na comunicação fizeram a taxa de comparecimento disparar. Recomendo demais!",
            stars: 5,
        },
        {
            name: "Dra. Beatriz Lima",
            role: "Implantodontista",
            content: "Minha secretária se sente muito mais valorizada e motivada. O retorno sobre o investimento foi imediato.",
            stars: 5,
        }
    ];

    return (
        <section className="py-section-mobile md:py-section bg-surface-dark relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2" />
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
                            Depoimentos
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase mt-2">de dentistas</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={sectionReveal}
                                className="p-8 rounded-[2rem] bg-black/40 border border-white/5 relative backdrop-blur-md hover:border-brand/40 transition-colors group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <Quote className="w-10 h-10 text-brand/10 absolute top-8 right-8 group-hover:text-brand/20 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(item.stars)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-brand fill-brand" />
                                    ))}
                                </div>

                                <p className="text-text-secondary italic mb-8 leading-relaxed relative z-10">
                                    "{item.content}"
                                </p>

                                <div className="pt-6 border-t border-white/10 relative z-10">
                                    <p className="text-white font-heading font-black tracking-wider uppercase text-sm mb-1">{item.name}</p>
                                    <p className="text-brand text-xs font-bold tracking-widest uppercase">{item.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
