"use client";

import { Navbar } from "@/components/SocialMedia/Sections/Navbar";

import StandardBackground from "@/components/StandardBackground";
import { Hero } from "@/components/SocialMedia/Sections/Hero";
import { Problem } from "@/components/SocialMedia/Sections/Problem";
import { Solution } from "@/components/SocialMedia/Sections/Solution";
import { Features } from "@/components/SocialMedia/Sections/Features";
import { HowItWorks } from "@/components/SocialMedia/Sections/HowItWorks";
import { Proof } from "@/components/SocialMedia/Sections/Proof";
import { Plans } from "@/components/SocialMedia/Sections/Plans";
import { FAQ } from "@/components/SocialMedia/Sections/FAQ";
import { Footer } from "@/components/SocialMedia/Sections/Footer";

export default function SocialMediaPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-brand selection:text-black">
            <StandardBackground />

            <div className="relative z-10">
                <Navbar />
                <div>
                    <Hero />
                    <Problem />
                    <Solution />
                    <Features />
                    <HowItWorks />
                    <Proof />
                    <Plans />
                    <FAQ />
                </div>
                <Footer />
            </div>
        </main>
    );
}
