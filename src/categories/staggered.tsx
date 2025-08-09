import React, { useCallback } from "react";
import anime from "animejs";
import { AnimationCard } from "../lib/AnimationCard";
import { useHoverPlay } from "../lib/useHoverPlay";
import type { Category, Demo } from "../types";

const RowReveal: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".row-reveal .item",
            translateY: [12, 0],
            opacity: [0, 1],
            delay: anime.stagger(120, { from: "first" }),
            easing: "easeOutQuad",
            duration: 800,
            loop: true,
            direction: "alternate",
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Row reveal" description="List cascade using stagger(from: first)" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="row-reveal" style={{ display: "flex", gap: 8 }}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="item" style={{ width: 28, height: 28, borderRadius: 6, background: "#334155", opacity: 0 }} />
                ))}
            </div>
        </AnimationCard>
    );
};

const CenterBurst: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".center-burst .dot",
            scale: [0.6, 1],
            opacity: [0, 1],
            delay: anime.stagger(80, { from: "center" }),
            easing: "easeOutCubic",
            duration: 1200,
            loop: true,
            direction: "alternate",
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Center burst" description="Scale/opacity from center" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="center-burst" style={{ display: "grid", gridTemplateColumns: "repeat(5, 18px)", gap: 6 }}>
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="dot" style={{ width: 18, height: 18, borderRadius: 6, background: "#6366f1", opacity: 0 }} />
                ))}
            </div>
        </AnimationCard>
    );
};

const WaveAcrossGrid: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const cols = 6;
    const rows = 4;
    const play = useCallback(() => {
        anime({
            targets: ".wave-grid .cell",
            translateY: [10, 0],
            opacity: [0, 1],
            delay: anime.stagger(60, { grid: [cols, rows], from: "center" }),
            easing: "easeOutQuad",
            duration: 800,
            loop: true,
            direction: "alternate",
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Wave across grid" description="Grid-aware stagger(from: center)" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="wave-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 22px)`, gap: 8 }}>
                {Array.from({ length: cols * rows }).map((_, i) => (
                    <div key={i} className="cell" style={{ width: 22, height: 22, borderRadius: 6, background: "#0ea5e9", opacity: 0 }} />)
                )}
            </div>
        </AnimationCard>
    );
};

const ColorSweep: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".color-sweep .pill",
            backgroundColor: ["#e2e8f0", "#22c55e"],
            delay: anime.stagger(120, { from: "last" }),
            direction: "alternate",
            easing: "easeInOutSine",
            duration: 800,
            loop: true,
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Color sweep" description="Background color with stagger(from: last)" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="color-sweep" style={{ display: "flex", gap: 6 }}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="pill" style={{ width: 28, height: 12, borderRadius: 999, background: "#e2e8f0" }} />
                ))}
            </div>
        </AnimationCard>
    );
};

const demosS: Demo[] = [
    { id: "row-reveal", title: "Row reveal", description: "List cascade", Component: RowReveal },
    { id: "center-burst", title: "Center burst", description: "Scale/opacity from center", Component: CenterBurst },
    { id: "wave-grid", title: "Wave across grid", description: "Grid-aware stagger", Component: WaveAcrossGrid },
    { id: "color-sweep", title: "Color sweep", description: "BG color stagger", Component: ColorSweep },
];

export const Staggered: Category = { name: "Staggered lists & grids", slug: "staggered", demos: demosS };
