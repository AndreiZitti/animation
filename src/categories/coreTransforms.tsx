import React, { useCallback } from "react";
import anime from "animejs";
import { AnimationCard } from "../lib/AnimationCard";
import { useHoverPlay } from "../lib/useHoverPlay";
import type { Category, Demo } from "../types";

const PopAndSettle: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".pop-elt",
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 1200,
            easing: "easeOutBack",
            loop: true,
            direction: "alternate",
            delay: 800,
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Pop & Settle" description="Scale + fade with overshoot" category={category} categorySlug={categorySlug}>
            <div ref={ref} style={{ width: "100%", height: 140, display: "grid", placeItems: "center" }}>
                <div className="pop-elt" style={{ width: 56, height: 56, borderRadius: 12, background: "#6366f1" }} />
            </div>
        </AnimationCard>
    );
};

const SlideAndFade: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".slide-elt",
            translateY: [24, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutCubic",
            loop: true,
            direction: "alternate",
            delay: 600,
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Slide & Fade" description="Upward slide with fade-in" category={category} categorySlug={categorySlug}>
            <div ref={ref} style={{ width: "100%", height: 140, display: "grid", placeItems: "center" }}>
                <div className="slide-elt" style={{ width: 160, height: 18, borderRadius: 8, background: "#0ea5e9" }} />
            </div>
        </AnimationCard>
    );
};

const PulseLoop: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".pulse-elt",
            scale: [1, 1.12],
            direction: "alternate",
            easing: "easeInOutSine",
            duration: 1500,
            loop: true,
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Pulse Loop" description="Subtle breathing scale yoyo" category={category} categorySlug={categorySlug}>
            <div ref={ref} style={{ width: "100%", height: 140, display: "grid", placeItems: "center" }}>
                <div className="pulse-elt" style={{ width: 80, height: 80, borderRadius: "50%", background: "#22c55e" }} />
            </div>
        </AnimationCard>
    );
};

const RotateInBadge: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".rotate-elt",
            rotate: [-12, 0],
            translateY: [8, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutQuad",
            loop: true,
            direction: "alternate",
            delay: 500,
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Rotate-in Badge" description="Tiny tilt, then settle" category={category} categorySlug={categorySlug}>
            <div ref={ref} style={{ width: "100%", height: 140, display: "grid", placeItems: "center" }}>
                <div className="rotate-elt" style={{ padding: "8px 12px", borderRadius: 999, background: "#f59e0b", color: "#111827", fontWeight: 600 }}>
                    NEW
                </div>
            </div>
        </AnimationCard>
    );
};

const demos: Demo[] = [
    { id: "pop-settle", title: "Pop & Settle", description: "Scale + fade with overshoot", Component: PopAndSettle },
    { id: "slide-fade", title: "Slide & Fade", description: "Upward slide with fade-in", Component: SlideAndFade },
    { id: "pulse-loop", title: "Pulse Loop", description: "Subtle breathing yoyo", Component: PulseLoop },
    { id: "rotate-in", title: "Rotate-in Badge", description: "Tilt + settle", Component: RotateInBadge },
];

export const CoreTransforms: Category = {
    name: "Core transforms",
    slug: "core-transforms",
    demos,
};
