"use client";

import React from "react";
import Image from "next/image";

export default function Solutions() {
    return (
        <section className="py-section-mobile md:py-section bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 z-10 relative">

                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white uppercase tracking-tighter">
                        NOSSAS <span className="font-serif italic capitalize text-gradient-gold">Soluções</span>
                    </h2>
                    <p className="font-sans text-text-secondary text-base md:text-lg max-w-2xl mx-auto opacity-70">
                        Estratégias validadas para transformar seu consultório em uma máquina de vendas e fidelização.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-surface-dark border border-white/10 hover:border-brand/40 transition-all duration-500 shadow-premium">
                        <Image
                            src="/solucao-secretaria.jpg.png"
                            alt="Secretária Comercial de Elite"
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                            <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 leading-tight uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                <span className="text-white block">Secretária</span>
                                <span className="text-gradient-gold">Comercial de Elite</span>
                            </h3>
                            <p className="font-sans text-sm md:text-base text-gray-200 leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                                Transforme sua recepção em área comercial. Treine sua secretária para conduzir o paciente, gerar conexão e preparar o fechamento.
                            </p>
                        </div>
                    </div>

                    <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-surface-dark border border-white/10 hover:border-brand/40 transition-all duration-500 shadow-premium">
                        <Image
                            src="/solucao-instagram.jpg.png"
                            alt="Instagram Lucrativo para Dentistas"
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                            <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 leading-tight uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                <span className="text-white block">Instagram</span>
                                <span className="text-gradient-gold">Lucrativo</span>
                            </h3>
                            <p className="font-sans text-sm md:text-base text-gray-200 leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                                Seu perfil precisa vender, não só postar. Aprenda a transformar seguidores em pacientes com estratégia clara e conteúdo certo.
                            </p>
                        </div>
                    </div>

                    <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-surface-dark border border-white/10 hover:border-brand/40 transition-all duration-500 shadow-premium">
                        <Image
                            src="/solucao-midias.jpg.png"
                            alt="Produção e Gestão de Mídias Sociais"
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                            <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 leading-tight uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                <span className="text-white block">Gestão de</span>
                                <span className="text-gradient-gold">Mídias Sociais</span>
                            </h3>
                            <p className="font-sans text-sm md:text-base text-gray-200 leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                                Conteúdo estratégico feito para seu consultório. Nada genérico. Cada post é pensado para seu modelo de clínica e público.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
