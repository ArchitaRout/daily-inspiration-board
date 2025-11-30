function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) & 0xffffffff;
  }
  return () => {
    h = (h * 1664525 + 1013904223) & 0xffffffff;
    return (h >>> 0) / 0xffffffff;
  };
}

function randomColor(rand) {
  const r = Math.floor(rand() * 255);
  const g = Math.floor(rand() * 255);
  const b = Math.floor(rand() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

export function getDailyGradient() {
  const today = new Date().toISOString().split('T')[0];
  const rand = seededRandom(today);
  const c1 = randomColor(rand);
  const c2 = randomColor(rand);
  const angle = Math.floor(rand() * 360);
  return `linear-gradient(${angle}deg, ${c1}, ${c2})`;
}
