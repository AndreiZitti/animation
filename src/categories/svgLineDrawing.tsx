import React, { useCallback } from "react";
import anime from "animejs";
import { AnimationCard } from "../lib/AnimationCard";
import { useHoverPlay } from "../lib/useHoverPlay";
import type { Category, Demo } from "../types";

// Helper to prepare stroke-dash for line drawing
function prepDraw(path: SVGPathElement) {
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
}

const SignatureStroke: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const path = document.querySelector(".sig path") as SVGPathElement | null;
        if (!path) return;
        prepDraw(path);
        anime({
            targets: path,
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1600,
            easing: "easeOutSine",
            loop: true,
            direction: "alternate",
            delay: 400
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Signature stroke" description="Classic line draw" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="sig" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="220" height="80" viewBox="0 0 220 80">
                    <path d="M10,40 C40,10 60,70 90,40 S140,70 170,40 S210,10 210,40" fill="none" stroke="#0ea5e9" strokeWidth="3" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const BlueprintGrid: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const paths = document.querySelectorAll(".blueprint path");
        paths.forEach(p => prepDraw(p as SVGPathElement));
        anime({
            targets: ".blueprint path",
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(200),
            duration: 1000,
            easing: "easeOutQuad",
            loop: true,
            direction: "alternate"
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Blueprint" description="Multiple paths with stagger" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="blueprint" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="220" height="90" viewBox="0 0 220 90">
                    <path d="M10 10 H210" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <path d="M10 30 H210" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <path d="M10 50 H210" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <path d="M10 70 H210" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <path d="M40 10 V70" fill="none" stroke="#64748b" strokeWidth="2" />
                    <path d="M120 10 V70" fill="none" stroke="#64748b" strokeWidth="2" />
                    <path d="M180 10 V70" fill="none" stroke="#64748b" strokeWidth="2" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const DashedTrace: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const path = document.querySelector(".dashed path") as SVGPathElement | null;
        if (!path) return;
        const len = path.getTotalLength();
        path.style.strokeDasharray = `6 ${Math.max(4, len / 40)}`;
        path.style.strokeDashoffset = String(len);
        anime({
            targets: path,
            strokeDashoffset: [len, 0],
            duration: 1800,
            easing: "easeInOutSine",
            loop: true,
            direction: "alternate",
            delay: 300
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Dashed trace" description="Dashed line draw" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="dashed" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="220" height="90" viewBox="0 0 220 90">
                    <path d="M10,75 C40,10 80,10 110,75 S180,10 210,75" fill="none" stroke="#10b981" strokeWidth="3" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const CircuitHighlight: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const path = document.querySelector(".circuit path") as SVGPathElement | null;
        if (!path) return;
        prepDraw(path);
        anime({
            targets: path,
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1400,
            easing: "easeOutQuad",
            loop: true,
            direction: "alternate"
        });
        anime({
            targets: ".circuit glow",
            opacity: [0, 1, 0],
            duration: 1800,
            easing: "easeInOutSine",
            loop: true
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Circuit highlight" description="Line draw + subtle glow" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="circuit" style={{ width: "100%", display: "grid", placeItems: "center", position: "relative" }}>
                <svg width="220" height="90" viewBox="0 0 220 90">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="colored" />
                            <feMerge>
                                <feMergeNode in="colored" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <path d="M20 70 H60 V20 H160 V70 H200" fill="none" stroke="#f43f5e" strokeWidth="3" />
                </svg>
                <div className="glow" style={{ position: "absolute", inset: 0, filter: "url(#glow)", opacity: 0 }} />
            </div>
        </AnimationCard>
    );
};

const demosL: Demo[] = [
    { id: "signature", title: "Signature stroke", description: "Stroke-dashoffset trick", Component: SignatureStroke },
    { id: "blueprint", title: "Blueprint", description: "Multi-path stagger", Component: BlueprintGrid },
    { id: "dashed", title: "Dashed trace", description: "Dashed draw", Component: DashedTrace },
    { id: "circuit", title: "Circuit highlight", description: "Draw + glow", Component: CircuitHighlight },
];

export const SvgLineDrawing: Category = { name: "SVG line drawing", slug: "svg-line-drawing", demos: demosL };
