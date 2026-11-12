export function advanceLeafY(y: number, speed: number, delta: number, height: number, margin: number) {
  const next = y + speed * delta;
  return next > height + margin ? -margin + (next - height - margin) % (height + 2 * margin) : next;
}

export function leafX(origin: number, elapsed: number, phase: number) {
  return origin + Math.sin(elapsed / 1.6 + phase) * 22;
}

export function leafScreenY(pageY: number, scrollY: number) {
  return pageY - scrollY;
}

export function advanceSummerY(y: number, speed: number, delta: number, height: number, margin: number) {
  const next = y - speed * delta * 0.4;
  return next < -margin ? height + margin - (-margin - next) % (height + 2 * margin) : next;
}
