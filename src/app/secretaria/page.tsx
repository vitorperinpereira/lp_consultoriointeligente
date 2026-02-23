"use client";

import React from 'react';
import StandardBackground from '@/components/StandardBackground';

import { Hero } from '@/components/Secretaria/Hero';
import { Problem } from '@/components/Secretaria/Problem';
import { Solution } from '@/components/Secretaria/Solution';
import { Benefits } from '@/components/Secretaria/Benefits';
import { SocialProof } from '@/components/Secretaria/SocialProof';
import { Pricing } from '@/components/Secretaria/Pricing';
import { Mentor } from '@/components/Secretaria/Mentor';
import { FAQ } from '@/components/Secretaria/FAQ';

import { Navbar } from '@/components/SocialMedia/Sections/Navbar';
import { Footer } from '@/components/SocialMedia/Sections/Footer';

export default function SecretariaPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-brand selection:text-black">
            <StandardBackground />

            <div className="relative z-10">
                <Navbar />
                <div>
                    <Hero />
                    <Problem />
                    <Solution />
                    <Benefits />
                    <SocialProof />
                    <Pricing />
                    <Mentor />
                    <FAQ />
                </div>
                <Footer />
            </div>
        </main>
    );
}
