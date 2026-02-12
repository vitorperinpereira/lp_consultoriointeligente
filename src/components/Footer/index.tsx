"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

                    {/* Brand */}
                    <div className="space-y-8 col-span-1 md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <img src="/logo.svg" alt="Rocket" className="w-10 h-10 opacity-90 drop-shadow-[0_0_10px_rgba(255,192,37,0.3)]" />
                            <span className="text-2xl font-black font-heading text-white tracking-tighter uppercase">GMV<span className="text-brand">.AI</span></span>
                        </Link>
                        <p className="font-sans text-gray-400 leading-relaxed text-sm md:text-base opacity-80 max-w-xs">
                            Tecnologia de ponta para dentistas empresários que desejam escalar com inteligência artificial e processos validados.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-surface-light border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-all duration-300 shadow-premium">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Sets */}
                    <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-10">
                        <div className="space-y-6">
                            <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] uppercase">Soluções</h4>
                            <ul className="space-y-4 text-gray-400 font-sans text-sm">
                                <li><a href="#" className="hover:text-brand transition-colors">Assistente Virtual</a></li>
                                <li><a href="#" className="hover:text-brand transition-colors">Automação de Vendas</a></li>
                                <li><a href="#" className="hover:text-brand transition-colors">Gestão Inteligente</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] uppercase">Empresa</h4>
                            <ul className="space-y-4 text-gray-400 font-sans text-sm">
                                <li><a href="#" className="hover:text-brand transition-colors">Sobre Nós</a></li>
                                <li><a href="#" className="hover:text-brand transition-colors">Casos de Sucesso</a></li>
                                <li><a href="#" className="hover:text-brand transition-colors">Contato</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-heading font-black text-white text-xs tracking-[0.2em] uppercase">Legal</h4>
                            <ul className="space-y-4 text-gray-400 font-sans text-sm">
                                <li><a href="#" className="hover:text-brand transition-colors">Termos de Uso</a></li>
                                <li><a href="#" className="hover:text-brand transition-colors">Privacidade</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-xs font-heading font-black text-white/30 tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} GMV DENTAL AI. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex items-center gap-4">
                        <p className="flex items-center gap-2">
                            MÉTODO VALIDADO <span className="text-brand opacity-50">⚡</span> DENTAL ELITE
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
