"use client";

import { landing } from "@/content/landing";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const formSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
    email: z.string().email({ message: "Insira um e-mail válido." }),
    whatsapp: z.string().min(10, { message: "WhatsApp inválido." }),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
    };

    return (
        <section id="form" className="form-section">
            <div className="form-bg-gradient" />
            <div className="form-glow" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="form-card"
            >
                {/* Header */}
                <div className="form-header">
                    <h2 className="form-title">
                        {landing.form.title}
                    </h2>
                    <p className="form-subtitle">
                        {landing.form.subtitle}
                    </p>
                </div>

                {/* Form Content */}
                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="success-container"
                    >
                        <div className="success-icon-wrapper">
                            <Check size={40} />
                        </div>
                        <h3 className="success-title">Solicitação Enviada!</h3>
                        <p className="success-desc">Nossa equipe entrará em contato em breve.</p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="btn-reset"
                        >
                            Enviar nova solicitação
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="lead-form">
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                {landing.form.fields.name}
                            </label>
                            <input
                                {...register("name")}
                                id="name"
                                type="text"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder="Dr. João Silva"
                            />
                            {errors.name && (
                                <p className="error-message">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                {landing.form.fields.email}
                            </label>
                            <input
                                {...register("email")}
                                id="email"
                                type="email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                placeholder="contato@clinicamoderna.com"
                            />
                            {errors.email && (
                                <p className="error-message">{errors.email.message}</p>
                            )}
                        </div>

                        {/* WhatsApp */}
                        <div className="form-group">
                            <label htmlFor="whatsapp" className="form-label">
                                {landing.form.fields.whatsapp}
                            </label>
                            <input
                                {...register("whatsapp")}
                                id="whatsapp"
                                type="tel"
                                className={`form-input ${errors.whatsapp ? 'error' : ''}`}
                                placeholder="(11) 99999-9999"
                            />
                            {errors.whatsapp && (
                                <p className="error-message">{errors.whatsapp.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-submit"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} /> Processando...
                                </>
                            ) : (
                                <>
                                    {landing.form.fields.submit} <ArrowRight size={20} className="arrow-icon" />
                                </>
                            )}
                        </button>

                        <p className="form-footer-tip">
                            Ao enviar, você concorda com nossos termos de privacidade. Seus dados estão seguros.
                        </p>
                    </form>
                )}
            </motion.div>
        </section>
    );
}
