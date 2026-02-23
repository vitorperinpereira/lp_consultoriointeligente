
import Header from "@/components/Header";
import StandardBackground from "@/components/StandardBackground";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import AISection from "@/components/AISection";
import Results from "@/components/Results";
import Comparison from "@/components/Comparison";
import Audience from "@/components/Audience";
import Founders from "@/components/Founders";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-x-hidden selection:bg-brand selection:text-black">
      {/* Global Luxury Background Pattern */}
      <StandardBackground />

      <div className="relative z-10">
        <Header />

        <Hero />
        <section id="solucoes"><Solutions /></section>
        <section id="ia"><AISection /></section>
        <section id="resultados"><Results /></section>
        <div className="bg-black/40 backdrop-blur-[2px]">
          <Comparison />
        </div>
        <Audience />
        <Founders />
        <section id="faq"><FAQ /></section>

        <Footer />
      </div>
    </main>
  );
}
