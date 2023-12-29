import React, { MouseEventHandler } from "react";

export default function XCircle(p: { onClick?: Function; className?: string }) {
  return (
    <svg
      onClick={() => {
        p.onClick && p.onClick();
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
      stroke="currentColor"
      className={`w-5 h-5 ${p.className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
