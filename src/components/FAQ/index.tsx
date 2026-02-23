"use client";

import React, { useState } from "react";
import { Plus, Minus, ShieldCheck, ArrowRight } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Como a IA ajuda minha clínica?",
            answer: "A IA otimiza desde o agendamento inteligente até a análise preditiva de faturamento, permitindo que você foque no que importa: o paciente."
        },
        {
            question: "Preciso entender de tecnologia?",
            answer: "Não. Nossa plataforma foi desenhada para ser intuitiva. Se você sabe usar o WhatsApp, conseguirá usar nossa IA."
        },
        {
            question: "Quanto tempo para ver resultados?",
            answer: "A maioria das clínicas começa a ver aumento na conversão de agendamentos já nas primeiras duas semanas de uso."
        },
        {
            question: "Como funciona o diagnóstico gratuito?",
            answer: "Analisamos seus processos atuais e mostramos exatamente onde você está perdendo dinheiro e como a IA pode estancar essas perdas."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-section-mobile md:py-section bg-transparent relative flex flex-col items-center overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48"></div>

            <div className="w-full max-w-2xl mx-auto px-6 relative z-10">

                {/* Header */}
                <header className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white uppercase tracking-tighter">
                        DÚVIDAS <span className="font-serif italic capitalize text-gradient-gold lowercase">frequentes</span>
                    </h2>
                    <p className="font-sans text-text-secondary text-base md:text-lg opacity-70">
                        O guia essencial para a transformação digital do seu consultório.
                    </p>
                </header>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`
                                    group rounded-[2rem] border p-8 transition-all duration-300 cursor-pointer shadow-premium
                                    ${isOpen
                                        ? "bg-surface-light border-brand/40 shadow-brand/5"
                                        : "bg-surface-dark border-white/5 hover:border-white/20"}
                                `}
                            >
                                <div className="flex justify-between items-center gap-6">
                                    <h3 className={`font-heading text-base md:text-lg font-black leading-tight transition-colors uppercase tracking-tight ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                                        {faq.question}
                                    </h3>

                                    <div className={`
                                        flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                                        ${isOpen ? 'bg-brand text-black shadow-brand/20' : 'bg-white/5 border border-white/10 group-hover:border-brand/50 text-brand'}
                                    `}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5" strokeWidth={3} />
                                        ) : (
                                            <Plus className="w-5 h-5" strokeWidth={3} />
                                        )}
                                    </div>
                                </div>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                    <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed opacity-90">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Support Hint */}
                <div className="mt-12 flex items-center justify-center gap-3 py-4 px-8 bg-surface-light rounded-full border border-white/5 shadow-premium">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="font-heading text-[10px] md:text-xs font-black text-white/50 uppercase tracking-[0.2em]">
                        SUPORTE ESPECIALIZADO 24/7 DISPONÍVEL
                    </p>
                </div>

                {/* Final CTA Board */}
                <div className="mt-20 text-center p-12 rounded-[3rem] bg-gradient-gold relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-2xl md:text-3xl font-heading font-black text-black mb-4 uppercase tracking-tighter">TRANSFORME SUA GESTÃO AGORA</h4>
                    <p className="text-black/70 font-sans text-sm md:text-base mb-8 max-w-sm mx-auto">Pare de perder dinheiro com processos manuais. Comece hoje.</p>

                    <div className="flex justify-center">
                        <button className="w-full sm:w-auto bg-black text-white font-heading font-black py-5 md:py-6 px-10 rounded-full text-lg shadow-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tighter flex items-center justify-center gap-3">
                            QUERO MEU DIAGNÓSTICO
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 opacity-50">
                        <ShieldCheck className="w-4 h-4 text-black" />
                        <span className="font-heading text-[10px] font-black uppercase text-black">Ambiente 100% Seguro</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
