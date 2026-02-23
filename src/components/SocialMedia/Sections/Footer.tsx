import { motion } from "framer-motion";
import { sectionReveal } from "./motion";

export function Footer() {
    return (
        <footer className="bg-transparent text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-10 mb-10 text-center md:text-left"
                >
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-heading font-black tracking-tight uppercase text-white mb-5">
                            GMV<span className="font-serif italic lowercase text-brand">.social</span>
                        </h2>
                        <p className="font-sans text-gray-400 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
                            Estrategia e operacao de conteudo para dentistas que querem escalar com consistencia e autoridade.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading font-black mb-5 text-xs text-brand uppercase tracking-[0.2em]">Produto</h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-sans">
                            <li><a href="#how-it-works" className="hover:text-brand transition-colors">Como funciona</a></li>
                            <li><a href="#plans" className="hover:text-brand transition-colors">Planos</a></li>
                            <li><a href="#solution" className="hover:text-brand transition-colors">Metodologia</a></li>
                            <li><a href="#problem" className="hover:text-brand transition-colors">Diagnostico</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-black mb-5 text-xs text-brand uppercase tracking-[0.2em]">Legal</h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-sans">
                            <li><a href="#" className="hover:text-brand transition-colors">Termos de uso</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Contato</a></li>
                        </ul>
                    </div>
                </motion.div>

                <div className="pt-6 border-t border-white/10 text-center text-xs text-white/30 font-heading font-black tracking-widest uppercase">
                    © {new Date().getFullYear()} GMV Social IA. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
