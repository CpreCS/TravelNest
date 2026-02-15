export function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

export function sampleSize(arr, n) {
  if (!arr || n <= 0) return [];
  if (n >= arr.length) return arr;
  return shuffle(arr).slice(0, n);
}
