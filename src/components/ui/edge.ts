export type Edge = "top" | "bottom" | "left" | "right";

/** The edge of `el` nearest to the pointer: where it came in, or where it is leaving. */
export function edgeOf(el: Element, e: { clientX: number; clientY: number }): Edge {
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const d: Record<Edge, number> = { top: y, bottom: r.height - y, left: x, right: r.width - x };
  return (Object.keys(d) as Edge[]).reduce((a, b) => (d[a] <= d[b] ? a : b));
}

/** A [top, left] CSS position `far` px outside the given edge, centred along it. */
export function offEdge(edge: Edge, far: number): [string, string] {
  if (edge === "top") return [`-${far}px`, "50%"];
  if (edge === "bottom") return [`calc(100% + ${far}px)`, "50%"];
  if (edge === "left") return ["50%", `-${far}px`];
  return ["50%", `calc(100% + ${far}px)`];
}
