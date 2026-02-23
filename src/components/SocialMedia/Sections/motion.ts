import { Variants } from "framer-motion";

export const sectionStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

export const cardReveal: Variants = {
    hidden: { opacity: 0, y: 34 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};
