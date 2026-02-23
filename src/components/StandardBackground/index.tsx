import React from 'react';

export default function StandardBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
            {/* 1. Lateral Ambient Glows (Left & Right) */}
            <div className="absolute top-0 left-0 w-[400px] h-full bg-brand/5 blur-[100px] opacity-30 mix-blend-screen" />
            <div className="absolute top-0 right-0 w-[400px] h-full bg-brand/5 blur-[100px] opacity-30 mix-blend-screen" />

            {/* 2. Vertical Golden Beams (The "Lines") */}
            <div className="absolute top-0 left-[2rem] md:left-[10%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#C5A059] to-transparent shadow-[0_0_30px_2px_rgba(197,160,89,0.25)] opacity-40" />
            <div className="absolute top-0 right-[2rem] md:right-[10%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#C5A059] to-transparent shadow-[0_0_30px_2px_rgba(197,160,89,0.25)] opacity-40" />

            {/* 3. Horizontal Subtle Line (Crossing) */}
            <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
        </div>
    );
}
