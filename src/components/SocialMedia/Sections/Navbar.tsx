import { useState, useEffect } from "react";
import { Button } from "@/components/SocialMedia/ui/button";
import { cn } from "@/components/SocialMedia/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Problema", href: "#problem" },
        { name: "Solucao", href: "#solution" },
        { name: "Fluxo", href: "#how-it-works" },
        { name: "Planos", href: "#plans" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-black/65 backdrop-blur-xl border-white/10 py-4"
                    : "bg-transparent border-transparent py-7"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between gap-4">
                <Link href="/socialmedia" className="text-2xl font-heading font-black tracking-tight uppercase text-white hover:opacity-90 transition-opacity">
                    GMV<span className="font-serif italic lowercase text-brand">.social</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-heading font-black tracking-[0.15em] uppercase text-white/70 hover:text-brand transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="rounded-full border-white/20 text-white hover:bg-white/10 px-5 font-heading font-black tracking-[0.12em] uppercase text-xs transition-all duration-300"
                            >
                                Escritorio Inteligente
                            </Button>
                        </Link>
                        <Button className="rounded-full bg-white text-black hover:bg-brand px-5 font-heading font-black tracking-[0.12em] uppercase text-xs transition-all duration-300">
                            Comecar Agora
                        </Button>
                    </div>
                </div>

                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Abrir menu"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-heading font-black tracking-[0.12em] uppercase text-white hover:text-brand"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3">
                        <Link href="/" className="w-full">
                            <Button
                                variant="outline"
                                className="w-full rounded-full border-white/20 text-white hover:bg-white/10 uppercase tracking-[0.12em] font-heading font-black"
                            >
                                Escritorio Inteligente
                            </Button>
                        </Link>
                        <Button className="w-full rounded-full bg-brand text-black uppercase tracking-[0.12em] font-heading font-black">
                            Comecar Agora
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
