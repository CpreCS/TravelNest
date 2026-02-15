import React, { useState } from 'react';

export default function PickButton({ isPicked, onToggle }) {
  const [justAdded, setJustAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const wasPicked = isPicked;
    onToggle?.();
    if (!wasPicked) {
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1000);
    } else {
      setJustAdded(false);
    }
  };

  const base = 'inline-flex items-center justify-center whitespace-nowrap min-w-[120px] px-3 py-1.5 rounded-md font-medium transition shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2';

  if (!isPicked) {
    return (
      <button
        type="button"
        className={`${base} bg-red-600 text-white hover:bg-red-500`}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-pressed={false}
      >
        + Add to Picks
      </button>
    );
  }

  if (justAdded) {
    return (
      <button
        type="button"
        className={`${base} bg-green-600 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-black/30`}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-pressed={true}
      >
        Added ✓
      </button>
    );
  }

  return (
    <button
      type="button"
      className={
        `${base} ${hovered ? 'bg-red-600 text-white shadow-2xl shadow-black/50' : 'bg-green-600 text-white'} `
      }
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-pressed={true}
    >
      {hovered ? (
        <span>- Remove</span>
      ) : (
        <span>Added ✓</span>
      )}
    </button>
  );
}
