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
            q: "O que é o curso Secretaria Comercial de Elite 2.0?",
            a: "É um treinamento completo focado em transformar secretárias comuns em profissionais de alta performance, ensinando técnicas de vendas, atendimento humanizado e gestão de agenda eficiente."
        },
        {
            q: "Qual o papel da secretária Comercial de Elite?",
            a: "Ela deixa de ser apenas uma 'atendente' para se tornar uma peça chave no faturamento da clínica, qualificando leads, recuperando pacientes inativos e garantindo que a agenda do dentista esteja sempre otimizada."
        },
        {
            q: "Para quem é o curso?",
            a: "Para donos de clínicas que desejam treinar sua equipe e para secretárias/recepcionistas que buscam valorização profissional e melhores resultados."
        },
        {
            q: "Como funciona a garantia de 7 dias?",
            a: "Você tem acesso total ao curso por 7 dias. Se por qualquer motivo achar que não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem burocracia."
        }
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
                            Perguntas
                            <span className="block font-serif italic capitalize text-gradient-gold lowercase mt-2">frequentes</span>
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
