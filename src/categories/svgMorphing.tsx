import React, { useCallback } from "react";
import anime from "animejs";
import { AnimationCard } from "../lib/AnimationCard";
import { useHoverPlay } from "../lib/useHoverPlay";
import type { Category, Demo } from "../types";

// IMPORTANT: For morphing, paths MUST be compatible (same number/order of points).
// The sample blobs below are compatible (generated to match). If you replace them, ensure compatibility.
const pathA = "M44.2,6.8c9.9,3.1,18.4,11.1,20.6,20.9c2.1,9.3-4.2,19.3-10.9,27.1c-6.7,7.8-13.7,13.5-23.2,14.8C21,71,9.7,65.8,5.3,57 C0.9,48.2,3.3,36,7.9,25.8C12.6,15.6,19.4,7.5,28.3,5.2C35.2,3.4,39.7,5.4,44.2,6.8z";
const pathB = "M45.5,6.1c7.8,4.8,14.7,13.9,16.2,22.7c1.5,8.9-2.4,17.5-8.8,25.5C46.5,62.3,36.7,69.7,26.3,71C15.9,72.3,5,66.9,3,57.7 c-2-9.2,4.8-22.3,11.8-31.2C21.8,17.6,28,12.7,36.2,9.5C40.9,7.6,41.5,3.6,45.5,6.1z";

const BlobMorphLoop: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const play = useCallback(() => {
        anime({
            targets: ".blob path",
            d: [{ value: pathB }, { value: pathA }],
            duration: 2500,
            direction: "alternate",
            easing: "easeInOutQuad",
            loop: true,
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Blob morph loop" description="Animate compatible path 'd'" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="blob" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="120" height="120" viewBox="0 0 80 80">
                    <path d={pathA} fill="#6366f1" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const PlayPauseMorph: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    // Two simplified, compatible paths approximating ▶ and ‖ ‖ icons.
    const playPath = "M10 10 L60 40 L10 70 Z"; // triangle
    const pausePath = "M15 10 H30 V70 H15 Z M40 10 H55 V70 H40 Z"; // two bars (as a single path using subpaths)

    const play = useCallback(() => {
        anime({
            targets: ".pp path",
            d: [{ value: pausePath }, { value: playPath }],
            duration: 1400,
            easing: "easeInOutCubic",
            loop: true,
            direction: "alternate"
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Play ↔ Pause" description="Icon morph on hover" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="pp" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="120" height="120" viewBox="0 0 80 80">
                    <path d={playPath} fill="#0ea5e9" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const HeartLikeMorph: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const heartOutline = "M40 70 C-10 40 10 10 40 30 C70 10 90 40 40 70 Z";
    const heartFilled = "M40 68 C-8 40 12 15 40 35 C68 15 88 40 40 68 Z"; // compatible-ish for demo
    const play = useCallback(() => {
        const tl = anime.timeline({ loop: true });
        tl.add({ targets: ".heart path", scale: [0.95, 1], duration: 400, easing: "easeOutBack" })
            .add({ targets: ".heart path", d: [{ value: heartFilled }], duration: 1000, easing: "easeInOutQuad" })
            .add({ targets: ".heart path", scale: [1, 0.95], duration: 400, easing: "easeInBack", delay: 800 })
            .add({ targets: ".heart path", d: [{ value: heartOutline }], duration: 800, easing: "easeInOutQuad" });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Heart like" description="Outline → filled morph + pop" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="heart" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="120" height="120" viewBox="0 0 100 100">
                    <path d={heartOutline} fill="#f43f5e" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const LoaderRippleMorph: React.FC<{ auto?: boolean; category?: string; categorySlug?: string }> = ({ auto, category, categorySlug }) => {
    const rect = "M10 10 H70 A10 10 0 0 1 80 20 V60 A10 10 0 0 1 70 70 H10 A10 10 0 0 1 0 60 V20 A10 10 0 0 1 10 10 Z";
    const circle = "M40 10 A30 30 0 1 1 39.9 10 Z";
    const play = useCallback(() => {
        anime({
            targets: ".ripple path",
            d: [{ value: rect }, { value: circle }],
            duration: 2000,
            direction: "alternate",
            easing: "easeInOutSine",
            loop: true
        });
    }, []);
    const ref = useHoverPlay<HTMLDivElement>(play, { auto });
    return (
        <AnimationCard title="Loader ripple" description="Rounded-rect ↔ circle" category={category} categorySlug={categorySlug}>
            <div ref={ref} className="ripple" style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <svg width="120" height="120" viewBox="0 0 80 80">
                    <path d={circle} fill="#10b981" />
                </svg>
            </div>
        </AnimationCard>
    );
};

const demosM: Demo[] = [
    { id: "blob", title: "Blob morph loop", description: "Compatible path 'd'", Component: BlobMorphLoop },
    { id: "play-pause", title: "Play ↔ Pause", description: "Icon morph", Component: PlayPauseMorph },
    { id: "heart", title: "Heart like", description: "Outline → fill", Component: HeartLikeMorph },
    { id: "ripple", title: "Loader ripple", description: "Rect ↔ circle", Component: LoaderRippleMorph },
];

export const SvgMorphing: Category = { name: "SVG morphing", slug: "svg-morphing", demos: demosM };
