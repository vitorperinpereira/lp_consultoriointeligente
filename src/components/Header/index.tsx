"use client";

import { landing } from "@/content/landing";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import "./styles.css";

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-wrapper">
                {/* LOGO */}
                <Link href="/" className="logo-box">
                    <Image src="/logo.svg" alt="GMV Dental Logo" width={40} height={40} className="logo-img" />
                    <span className="logo-text">
                        GMV<span className="logo-text-highlight">.AI</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="header-nav">
                    {landing.header.items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & MOBILE MENU */}
                <div className="header-actions">
                    <Link
                        href="/socialmedia"
                        className="btn-cta-header"
                    >
                        {landing.header.cta}
                        <ArrowRight size={14} className="arrow-header" />
                    </Link>

                    <button className="btn-mobile-menu" aria-label="Abrir menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}

