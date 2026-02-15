import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

export function usePicks(storageKey = 'picks') {
  const saved = getFromStorage(storageKey);
  const [picks, setPicks] = useState(new Set(saved || []));

  function isPicked(id) {
    return picks.has(id);
  }

  function togglePick(id) {
    const newPicks = new Set(picks);
    if (newPicks.has(id)) {
      newPicks.delete(id);
    } else {
      newPicks.add(id);
    }
    setPicks(newPicks);
  }

  useEffect(() => {
    saveToStorage(storageKey, Array.from(picks));
  }, [picks]);

  return { picks, isPicked, togglePick };
}
