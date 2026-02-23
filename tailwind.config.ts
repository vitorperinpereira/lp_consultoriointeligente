import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0A", // Rich Black (Stitch)
                foreground: "#FFFFFF",
                primary: "#C5A059",    // Metallic Gold (Stitch Founder)
                brand: {
                    DEFAULT: "#f4c025",  // Brighter Gold (Stitch FAQ)
                    light: "#F5E0A3",    // Light Gold
                    dark: "#C5A059",     // Metallic Dark Gold
                },
                surface: {
                    DEFAULT: "#0B0B0D", // Darker Surface (Stitch FAQ Body)
                    light: "#1A1A1A",
                    dark: "#050505",
                },
                text: {
                    primary: "#FFFFFF",
                    secondary: "#D1D5DB", // Gray 300
                    muted: "#9CA3AF",     // Gray 400
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],       // Body font
                heading: ["var(--font-montserrat)", "sans-serif"], // Title font
                serif: ["var(--font-playfair)", "serif"],        // Luxury Italic font
                display: ["var(--font-montserrat)", "sans-serif"],
            },
            boxShadow: {
                'gold-glow': '0 0 20px rgba(197, 160, 89, 0.15)', // Based on primary color
                'gold-glow-lg': '0 0 40px rgba(197, 160, 89, 0.25)',
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
            },
            spacing: {
                'section': '2.5rem',
                'section-mobile': '1.5rem',
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #F5E0A3 50%, #C5A059 100%)', // Metallic Gold Gradient
                'surface-gradient': 'linear-gradient(to bottom, #0A0A0A, #0B0B0D)',
                'card-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)',
            }
        },
    },
    plugins: [],
};
export default config;
