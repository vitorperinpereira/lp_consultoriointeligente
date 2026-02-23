import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/SocialMedia/ui/accordion";
import { motion } from "framer-motion";
import { sectionReveal } from "./motion";

export function FAQ() {
    const faqs = [
        {
            q: "Preciso enviar fotos da clinica?",
            a: "Ajuda muito. Temos banco premium para complementar, mas fotos reais elevam confianca e conversao.",
        },
        {
            q: "Serve para qualquer especialidade?",
            a: "Sim. O metodo atende ortodontia, implantodontia, HOF, endodontia, odontopediatria e clinica geral.",
        },
        {
            q: "Como funciona a aprovacao?",
            a: "Voce recebe um painel mensal com as pecas e ajusta com comentarios objetivos antes de publicar.",
        },
        {
            q: "Existe fidelidade contratual?",
            a: "Nao. O plano e mensal e voce pode interromper quando fizer sentido para sua estrategia.",
        },
    ];

    return (
        <section className="py-section-mobile md:py-section bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <header className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                            Duvidas
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase">frequentes</span>
                        </h2>
                        <p className="font-sans text-base md:text-lg text-text-secondary opacity-80">
                            Respostas objetivas para voce decidir com clareza e velocidade.
                        </p>
                    </header>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="group !border rounded-[1.75rem] border-white/10 bg-surface-dark/70 backdrop-blur-sm px-6 transition-all duration-500 hover:border-brand/40 data-[state=open]:border-brand/40 data-[state=open]:shadow-[0_0_24px_rgba(197,160,89,0.14)]"
                            >
                                <AccordionTrigger className="py-6 text-left text-sm md:text-base font-heading font-black uppercase tracking-[0.08em] text-white hover:text-brand hover:no-underline">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
