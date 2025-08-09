import { useEffect, useRef } from "react";

// Utility to run a provided `play` function on hover, or auto-loop if `auto=true`.
export function useHoverPlay<T extends HTMLElement>(
  play: () => void,
  opts?: { auto?: boolean }
) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (opts?.auto) {
      play();
      return;
    }

    const onEnter = () => play();
    el.addEventListener("mouseenter", onEnter);
    return () => el.removeEventListener("mouseenter", onEnter);
  }, [play, opts?.auto]);

  return ref;
}
