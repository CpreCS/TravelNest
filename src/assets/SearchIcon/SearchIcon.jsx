import React from 'react';

export default function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
   >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 104.384 9.02l3.048 3.048a.75.75 0 101.06-1.06l-3.048-3.048A5.5 5.5 0 009 3.5zm0 1.5a4 4 0 110 8 4 4 0 010-8z"
        clipRule="evenodd"
      />
    </svg>
  );
}
