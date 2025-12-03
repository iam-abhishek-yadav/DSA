function countTrapezoids(points: number[][]): number {
  const n = points.length;
  if (n < 4) return 0;

  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a === 0) return b;
    if (b === 0) return a;
    while (b) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a;
  };

  const slope = new Map<string, number>();
  const coeff = new Map<string, number>();
  const midPoint = new Map<string, number>();
  const midPointWslope = new Map<string, number>();

  let cnt = 0;

  for (let i = 0; i < n - 1; i++) {
    const x0 = points[i][0],
      y0 = points[i][1];
    for (let j = i + 1; j < n; j++) {
      const x1 = points[j][0],
        y1 = points[j][1];

      let a = y1 - y0;
      let b = x0 - x1;
      let c = y0 * x1 - y1 * x0;

      if (a === 0 && b < 0) {
        b = -b;
        c = -c;
      } else if (a < 0) {
        a = -a;
        b = -b;
        c = -c;
      }

      const gm = gcd(a, b);
      const gc = gcd(gm, c);

      const as = gm === 0 ? 0 : Math.floor(a / gm);
      const bs = gm === 0 ? 0 : Math.floor(b / gm);
      const aps = gc === 0 ? 0 : Math.floor(a / gc);
      const bps = gc === 0 ? 0 : Math.floor(b / gc);
      const cps = gc === 0 ? 0 : Math.floor(c / gc);

      const slopeKey = `${as}_${bs}`;
      const lineKey = `${aps}_${bps}_${cps}`;
      const midKey = `${x0 + x1}_${y0 + y1}`;
      const midSlopeKey = `${x0 + x1}_${y0 + y1}_${as}_${bs}`;

      const sCount = slope.get(slopeKey) || 0;
      const coeffCount = coeff.get(lineKey) || 0;
      const midCount = midPoint.get(midKey) || 0;
      const midWsCount = midPointWslope.get(midSlopeKey) || 0;

      cnt += sCount - coeffCount - midCount + midWsCount;

      slope.set(slopeKey, sCount + 1);
      coeff.set(lineKey, coeffCount + 1);
      midPoint.set(midKey, midCount + 1);
      midPointWslope.set(midSlopeKey, midWsCount + 1);
    }
  }

  return cnt;
}
