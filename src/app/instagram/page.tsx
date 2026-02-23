"use client";

import { Navbar } from "@/components/SocialMedia/Sections/Navbar";

import StandardBackground from "@/components/StandardBackground";
import { Hero } from "@/components/Instagram/Sections/Hero";
import { TargetAudience } from "@/components/Instagram/Sections/TargetAudience";
import { Author } from "@/components/Instagram/Sections/Author";
import { PricingAndBonuses } from "@/components/Instagram/Sections/PricingAndBonuses";
import { FAQ } from "@/components/Instagram/Sections/FAQ";
import { Footer } from "@/components/SocialMedia/Sections/Footer";

export default function InstagramPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-brand selection:text-black">
            <StandardBackground />

            <div className="relative z-10">
                <Navbar />
                <div>
                    <Hero />
                    <TargetAudience />
                    <Author />
                    <PricingAndBonuses />
                    <FAQ />
                </div>
                <Footer />
            </div>
        </main>
    );
}
