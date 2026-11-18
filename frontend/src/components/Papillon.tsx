export function Papillon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Le papillon de l'espoir, symbole d'Imagine for Margo"
    >
      <path
        d="M24 14C21 6 10 4 6 10c-3 4.5 0 11 8 13-8 2-11 8.5-8 13 4 6 15 4 18-4"
        fill="var(--cerise)"
      />
      <path
        d="M24 14c3-8 14-10 18-4 3 4.5 0 11-8 13 8 2 11 8.5 8 13-4 6-15 4-18-4"
        fill="var(--or)"
      />
      <rect x="22.5" y="11" width="3" height="26" rx="1.5" fill="var(--encre)" />
    </svg>
  );
}
