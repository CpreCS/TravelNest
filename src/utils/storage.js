export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const data = localStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(data);
}

