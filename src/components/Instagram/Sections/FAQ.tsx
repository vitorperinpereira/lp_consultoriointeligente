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
            q: "Emite certificado?",
            a: "Sim, ao concluir o curso você recebe um certificado digital.",
        },
        {
            q: "Posso assistir o conteúdo até que dia?",
            a: "O acesso é válido por 1 ano, podendo ver e rever as aulas quantas vezes quiser.",
        },
        {
            q: "Posso pagar por boleto ou PIX?",
            a: "Claro! A plataforma oferece diversas opções de pagamento para facilitar a sua vida.",
        },
        {
            q: "Posso baixar as aulas?",
            a: "Não é possível baixar, mas você pode acessá-las online de onde estiver.",
        },
        {
            q: "Posso parcelar a compra?",
            a: "Sim, em até 12 vezes no cartão de crédito.",
        },
        {
            q: "Funciona para recém formados?",
            a: "Com certeza! O método foi criado para todos os níveis de experiência na odontologia.",
        },
    ];

    return (
        <section className="py-section-mobile md:py-section bg-transparent relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <header className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-[0.95]">
                            Ainda está com
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase mt-2">dúvidas?</span>
                        </h2>
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
