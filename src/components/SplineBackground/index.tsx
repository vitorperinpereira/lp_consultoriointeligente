"use client";

import React, { useEffect, useState } from 'react';

interface SplineBackgroundProps {
    scene: string;
    opacity?: number;
    yellowTint?: boolean;
    fullOpacity?: boolean;
}

interface SplineViewerProps extends React.HTMLAttributes<HTMLElement> {
    url: string;
    "loading-anim-type"?: string;
    hint?: string;
}

const SplineViewer = "spline-viewer" as React.ElementType<SplineViewerProps>;
const SPLINE_SCRIPT_SRC = "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
const SPLINE_SCRIPT_SELECTOR = `script[src="${SPLINE_SCRIPT_SRC}"]`;

export default function SplineBackground({
    scene,
    opacity = 70,
    yellowTint = false,
    fullOpacity = false
}: SplineBackgroundProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const isScriptPresent = typeof document !== "undefined" && Boolean(document.querySelector(SPLINE_SCRIPT_SELECTOR));
    const isReady = isLoaded || isScriptPresent;

    useEffect(() => {
        if (document.querySelector(SPLINE_SCRIPT_SELECTOR)) {
            return;
        }

        const script = document.createElement('script');
        script.type = 'module';
        script.src = SPLINE_SCRIPT_SRC;
        script.async = true;
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Overlay to ensure text legibility and make it subtle - Only if not fullOpacity */}
            {!fullOpacity && (
                <>
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
                </>
            )}

            {/* Yellow Tint Overlay Option B */}
            {yellowTint && (
                <div className="absolute inset-0 bg-brand/10 mix-blend-color z-20 pointer-events-none" />
            )}

            {/* Loading Fallback */}
            {!isReady && <div className="absolute inset-0 bg-black z-0" />}

            <div
                className="w-full h-full scale-110 transition-opacity duration-1000"
                style={{ opacity: fullOpacity ? 1 : opacity / 100 }}
            >
                <SplineViewer
                    url={scene}
                    loading-anim-type="spinner-small-dark"
                    hint="any"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {/* Additional Vignette - Only if not fullOpacity */}
            {!fullOpacity && <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] z-20" />}
        </div>
    );
}
