export default function DoveLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M20 28C20 28 8 24 8 16C8 11 12 8 16 8C18 8 19.5 8.8 20 10C20.5 8.8 22 8 24 8C28 8 32 11 32 16C32 20 28 24 20 28Z"
        fill="url(#doveGradient)"
        opacity="0.95"
      />
      {/* Wing left */}
      <path
        d="M20 18C20 18 12 15 10 10C14 10 18 13 20 18Z"
        fill="url(#doveGradient)"
        opacity="0.7"
      />
      {/* Wing right */}
      <path
        d="M20 18C20 18 28 15 30 10C26 10 22 13 20 18Z"
        fill="url(#doveGradient)"
        opacity="0.7"
      />
      {/* Tail */}
      <path
        d="M20 28C20 28 17 31 15 34C18 33 20 31 20 28Z"
        fill="url(#doveGradient)"
        opacity="0.6"
      />
      <path
        d="M20 28C20 28 23 31 25 34C22 33 20 31 20 28Z"
        fill="url(#doveGradient)"
        opacity="0.6"
      />
      {/* Olive branch */}
      <path
        d="M16 22C16 22 13 24 12 27"
        stroke="#8B6F47"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <ellipse cx="13.5" cy="24" rx="1.5" ry="1" transform="rotate(-30 13.5 24)" fill="#8B6F47" opacity="0.8" />
      <ellipse cx="12.5" cy="26" rx="1.5" ry="1" transform="rotate(-45 12.5 26)" fill="#8B6F47" opacity="0.8" />
      {/* Eye */}
      <circle cx="22" cy="13" r="1" fill="#1C1917" opacity="0.6" />

      <defs>
        <linearGradient id="doveGradient" x1="8" y1="8" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C4A97D" />
          <stop offset="100%" stopColor="#8B6F47" />
        </linearGradient>
      </defs>
    </svg>
  );
}