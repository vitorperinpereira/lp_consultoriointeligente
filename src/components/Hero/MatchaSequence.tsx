"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 15;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXTENSION = ".jpg";
const FRAME_DIGITS = 3;

const formatFrameNumber = (num: number) => {
    return num.toString().padStart(FRAME_DIGITS, "0");
};

export default function MatchaSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Adjusted for smoother entrance/exit
    });

    const frameIndex = useTransform(scrollYProgress, [0.2, 0.8], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `/dente_img_seq/${FRAME_PREFIX}${formatFrameNumber(i)}${FRAME_EXTENSION}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Maintain aspect ratio
        const aspect = img.width / img.height;

        // Use device pixel ratio for sharp rendering
        const dpr = window.devicePixelRatio || 1;

        // Calculate logical size
        const maxWidth = Math.min(window.innerWidth * 0.9, 1024); // Cap max width
        const width = maxWidth;
        const height = width / aspect;

        // Set physical size
        canvas.width = width * dpr;
        canvas.height = height * dpr;

        // Scale context
        ctx.scale(dpr, dpr);

        // Clear and draw
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Reset transform to avoid accumulation if strict mode runs twice (though mostly safe here)
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }, [images]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const index = Math.min(Math.max(Math.round(latest), 0), FRAME_COUNT - 1);
        requestAnimationFrame(() => renderFrame(index));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded, renderFrame]);

    return (
        <div ref={containerRef} className="h-[150vh] relative w-full flex justify-center mt-12 mb-24">
            <div className="sticky top-[20vh] h-[60vh] flex items-start justify-center">
                <canvas
                    ref={canvasRef}
                    className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
                        Loading sequence...
                    </div>
                )}
            </div>
        </div>
    );
}
