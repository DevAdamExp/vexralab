import type { CSSProperties } from "react";

// Server-safe entry: the observer lives in a client module, the stagger helper does not.
export { Seen } from "./SeenClient";

/** Stagger index for .rise / .fade / .wipe children. */
export const i = (n: number, extra?: CSSProperties) => ({ "--i": n, ...extra }) as CSSProperties;
