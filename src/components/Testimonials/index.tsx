"use client";

import { landing } from "@/content/landing";
import { Quote } from "lucide-react";
import "./styles.css";

export default function Testimonials() {
    return (
        <section id="depoimentos" className="testimonials-section">
            {/* Background Glow */}
            <div className="testimonials-glow" />

            <div className="testimonials-container">
                {/* Title */}
                <h2 className="testimonials-title">
                    {landing.testimonials.title}
                </h2>

                {/* Quotes Grid */}
                <div className="testimonials-grid">
                    {landing.testimonials.items.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            {/* Massive Quote Icon */}
                            <div className="quote-icon-bg">
                                <Quote size={80} fill="currentColor" strokeWidth={0} />
                            </div>

                            {/* Text */}
                            <p className="testimonial-text">
                                &ldquo;{item.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {item.author[0]}
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">
                                        {item.author}
                                    </h4>
                                    <p className="author-role">
                                        Cirurgiã-Dentista
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
