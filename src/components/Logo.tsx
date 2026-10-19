/** The "DD" monogram: a gold D behind a white D on a green tile. */
export function LogoMark({ size = 40, title }: { size?: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className="logo-mark"
    >
      <rect width="64" height="64" rx="16" fill="var(--green-800, #15803d)" />
      <path fill="var(--yellow, #fde047)" fillRule="evenodd" d="M10 14h12a18 18 0 0 1 0 36H10zM17 21v22h5a11 11 0 0 0 0-22z" />
      <path fill="var(--green-800, #15803d)" d="M27.5 12h4v40h-4z" />
      <path fill="#ffffff" fillRule="evenodd" d="M29 14h10a18 18 0 0 1 0 36H29zM36 21v22h3a11 11 0 0 0 0-22z" />
    </svg>
  );
}

export function Logo({ name, tone = "dark" }: { name: string; tone?: "dark" | "light" }) {
  return (
    <span className={`logo logo--${tone}`}>
      <LogoMark size={40} />
      <span className="logo__name">{name}</span>
    </span>
  );
}
