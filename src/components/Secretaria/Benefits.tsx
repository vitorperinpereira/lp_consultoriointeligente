import { motion } from "framer-motion";
import { Users, PhoneCall, PhoneForwarded, CalendarCheck } from "lucide-react";
import { sectionReveal, sectionStagger } from "./motion";

export function Benefits() {
    const benefits = [
        { icon: <Users className="w-6 h-6" />, title: "Liderar com clareza" },
        { icon: <PhoneForwarded className="w-6 h-6" />, title: "WhatsApp em Vendas" },
        { icon: <PhoneCall className="w-6 h-6" />, title: "Garantir cada ligação" },
        { icon: <CalendarCheck className="w-6 h-6" />, title: "Agendar com autoridade" }
    ];

    return (
        <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
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
                            className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]"
                        >
                            Com o curso de elite <span className="text-gradient-gold lowercase font-serif italic block mt-2">você vai</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={sectionReveal}
                                className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-black/40 backdrop-blur-sm border border-white/5 hover:border-brand/40 transition-all duration-300 text-center h-full"
                            >
                                <div className="w-14 h-14 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-brand mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_0_15px_rgba(197,160,89,0.1)] group-hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-white">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
