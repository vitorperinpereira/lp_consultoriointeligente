"use client";

import React from "react";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Founders() {
    return (
        <section className="py-section-mobile md:py-section bg-black relative flex flex-col items-center overflow-hidden">

            {/* Background pattern nuance */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-pattern"></div>

            <div className="max-w-2xl mx-auto px-6 w-full relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white uppercase tracking-tighter">
                        NOSSOS <span className="font-serif italic capitalize text-gradient-gold lowercase">Fundadores</span>
                    </h2>
                    <p className="font-sans text-text-secondary text-base md:text-lg opacity-70">
                        Liderança e tecnologia unidas para transformar o mercado odontológico.
                    </p>
                </div>

                {/* Founder 1: Isa Novaes */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20 group">
                    <div className="relative w-full md:w-1/2 aspect-[4/5] bg-surface-dark overflow-hidden rounded-[2rem] shadow-premium photo-frame">
                        <img
                            src="/isa.jpeg"
                            alt="Isa Novaes"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Decorative Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />

                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand/20 m-6 rounded-tr-2xl group-hover:border-brand/50 transition-colors" />
                    </div>

                    <div className="w-full md:w-1/2 space-y-5 pt-4">
                        <h3 className="text-3xl font-heading font-black text-gradient-gold uppercase tracking-tighter">Isa Novaes</h3>
                        <div className="h-0.5 w-12 bg-brand/50 rounded-full"></div>
                        <p className="font-sans text-sm md:text-base leading-relaxed text-gray-300 opacity-90">
                            Isa já viu de perto o que destrói clínicas: agenda instável, secretária perdida e dentista sem lucro. Na GMV, ela organiza gestão, atendimento e vendas para você deixar de ser refém do sistema.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand/40 text-brand transition-all">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand/40 text-brand transition-all">
                                <Instagram className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Founder 2: Vitor Perin - Reverse Layout */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 mb-24 group">
                    <div className="relative w-full md:w-1/2 aspect-[4/5] bg-surface-dark overflow-hidden rounded-[2rem] shadow-premium photo-frame">
                        <img
                            src="/vitor.png"
                            alt="Vitor Perin"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-brand/20 m-6 rounded-bl-2xl group-hover:border-brand/50 transition-colors" />
                    </div>

                    <div className="w-full md:w-1/2 space-y-5 text-left md:text-right pt-4 flex flex-col md:items-end">
                        <h3 className="text-3xl font-heading font-black text-gradient-gold uppercase tracking-tighter">Vitor Perin</h3>
                        <div className="h-0.5 w-12 bg-brand/50 rounded-full"></div>
                        <p className="font-sans text-sm md:text-base leading-relaxed text-gray-300 opacity-90">
                            Especialista em IA aplicada à odontologia, transforma precificação e atendimento em armas invisíveis. Vitor é o arquiteto das ferramentas que viram munição contra a mediocridade.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand/40 text-brand transition-all">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand/40 text-brand transition-all">
                                <Instagram className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center p-10 rounded-[2.5rem] bg-surface-light border border-white/5 shadow-premium mb-12">
                    <h4 className="text-xl font-heading font-black text-gradient-gold mb-6 uppercase tracking-[0.2em]">O PORQUÊ DA GMV</h4>
                    <p className="font-sans text-base md:text-lg leading-relaxed text-gray-200 opacity-80 max-w-lg mx-auto">
                        Isa conhecia as dores. Vitor criou as armas. Juntos, fundaram a GMV para liderar a revolução das dentistas empresárias.
                    </p>
                </div>

                <a href="#form" className="group w-full bg-white text-black py-6 px-10 rounded-full font-heading font-black text-center text-lg shadow-premium hover:bg-brand transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-tighter active:scale-95">
                    QUERO MEU DIAGNÓSTICO GRATUITO
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>

            </div>
        </section>
    );
}
