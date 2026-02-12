"use client";

import { landing } from "@/content/landing";
import "./styles.css";

export default function Stats() {
    return (
        <section id="stats" className="stats-section">
            {/* Background Gradient */}
            <div className="stats-bg-gradient" />

            <div className="stats-container">
                {/* Number */}
                <h2 className="stats-number">
                    {landing.stats.number}
                </h2>

                {/* Text */}
                <p className="stats-text">
                    {landing.stats.text}
                </p>
            </div>
        </section>
    );
}
