export function formatPopulation(value) {
  const n = Number(value);
  return new Intl.NumberFormat('en-US').format(n);
}
