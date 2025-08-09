import React, { useCallback } from "react";
import anime from "animejs";
import { AnimationCard } from "../lib/AnimationCard";
import { useHoverPlay } from "../lib/useHoverPlay";
import type { Category, Demo } from "../types";

const HeroEntrance: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const tl = anime.timeline({ autoplay: false, loop: true });
        tl.add({ targets: ".hero .bg", opacity: [0, 1], duration: 600, easing: "linear" })
            .add({ targets: ".hero .title", translateY: [20, 0], opacity: [0, 1], duration: 800, easing: "easeOutCubic" }, "-=100")
            .add({ targets: ".hero .subtitle", translateY: [14, 0], opacity: [0, 1], duration: 700, easing: "easeOutCubic" }, "-=400")
            .add({ targets: ".hero .cta", scale: [0.9, 1], opacity: [0, 1], duration: 600, easing: "easeOutBack" }, "-=400")
            .add({ targets: ".hero .bg", opacity: [1, 0], duration: 600, easing: "linear", delay: 1000 })
            .add({ targets: ".hero .title", translateY: [0, -20], opacity: [1, 0], duration: 400, easing: "easeInCubic" }, "-=500")
            .add({ targets: ".hero .subtitle", translateY: [0, -14], opacity: [1, 0], duration: 400, easing: "easeInCubic" }, "-=350")
            .add({ targets: ".hero .cta", scale: [1, 0.9], opacity: [1, 0], duration: 400, easing: "easeInBack" }, "-=350");
        tl.play();
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Hero entrance" description="Multi-step timeline with overlaps" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="hero" style={{ width: "100%", position: "relative", overflow: "hidden" }}>
                <div className="bg" style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#eef2ff,#e0f2fe)", opacity: 0 }} />
                <div style={{ position: "relative", padding: 16 }}>
                    <div className="title" style={{ fontWeight: 700, fontSize: 18, opacity: 0 }}>Welcome</div>
                    <div className="subtitle" style={{ color: "#475569", marginTop: 4, opacity: 0 }}>Let's build something cool</div>
                    <button className="cta" style={{ marginTop: 10, padding: "6px 10px", borderRadius: 8, background: "#6366f1", color: "white", border: 0, opacity: 0 }}>Get started</button>
                </div>
            </div>
        </AnimationCard>
    );
};

const CardFlipSequence: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const tl = anime.timeline({ autoplay: false, loop: true });
        tl.add({ targets: ".flip .card", rotateY: [0, 180], duration: 1000, easing: "easeInOutCubic" })
            .add({ targets: ".flip .content", opacity: [0, 1], translateY: [8, 0], duration: 600, easing: "easeOutQuad" }, "-=500")
            .add({ targets: ".flip .card", rotateY: [180, 360], duration: 1000, easing: "easeInOutCubic", delay: 800 })
            .add({ targets: ".flip .content", opacity: [1, 0], translateY: [0, -8], duration: 400, easing: "easeInQuad" }, "-=600");
        tl.play();
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Card flip sequence" description="RotateY then reveal content" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="flip" style={{ perspective: 800 }}>
                <div className="card" style={{ width: 160, height: 96, borderRadius: 12, background: "#111827", color: "white", display: "grid", placeItems: "center", transformStyle: "preserve-3d" }}>
                    FRONT
                </div>
                <div className="content" style={{ marginTop: 8, opacity: 0, color: "#475569" }}>Details appear here</div>
            </div>
        </AnimationCard>
    );
};

const ToastSequence: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const tl = anime.timeline({ autoplay: false, loop: true });
        tl.add({ targets: ".toast .panel", translateY: [40, 0], opacity: [0, 1], duration: 800, easing: "easeOutBack" })
            .add({ targets: ".toast .bar", width: ["100%", "0%"], duration: 2000, easing: "linear" })
            .add({ targets: ".toast .panel", translateY: [0, -20], opacity: [1, 0], duration: 600, easing: "easeInQuad" })
            .add({ targets: ".toast .bar", width: ["0%", "100%"], duration: 0 });
        tl.play();
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Toast" description="Enter → progress → exit" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="toast" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <div className="panel" style={{ minWidth: 180, borderRadius: 10, padding: 10, background: "#0f172a", color: "white", opacity: 0 }}>
                    Saved ✓
                    <div className="bar" style={{ marginTop: 8, height: 4, width: "100%", background: "#22c55e", borderRadius: 999 }} />
                </div>
            </div>
        </AnimationCard>
    );
};

const ModalSequence: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        const tl = anime.timeline({ autoplay: false, loop: true });
        tl.add({ targets: ".modal .scrim", opacity: [0, 1], duration: 400, easing: "linear" })
            .add({ targets: ".modal .panel", opacity: [0, 1], scale: [0.96, 1], translateY: [18, 0], duration: 600, easing: "easeOutCubic" }, "-=100")
            .add({ targets: ".modal .scrim", opacity: [1, 0], duration: 400, easing: "linear", delay: 1200 })
            .add({ targets: ".modal .panel", opacity: [1, 0], scale: [1, 0.96], translateY: [0, 18], duration: 400, easing: "easeInCubic" }, "-=300");
        tl.play();
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Modal in" description="Scrim + panel settle" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="modal" style={{ position: "relative", width: "100%", height: 140, background: "#f8fafc" }}>
                <div className="scrim" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", opacity: 0 }} />
                <div className="panel" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 180, borderRadius: 12, background: "white", padding: 12, opacity: 0 }}>
                    Modal content
                </div>
            </div>
        </AnimationCard>
    );
};

const demosT: Demo[] = [
    { id: "hero", title: "Hero entrance", description: "Overlapped timeline", Component: HeroEntrance },
    { id: "flip", title: "Card flip sequence", description: "RotateY + reveal", Component: CardFlipSequence },
    { id: "toast", title: "Toast", description: "Enter → progress → exit", Component: ToastSequence },
    { id: "modal", title: "Modal in", description: "Scrim + panel", Component: ModalSequence },
];

export const Timelines: Category = { name: "Timelines & choreographies", slug: "timelines", demos: demosT };
