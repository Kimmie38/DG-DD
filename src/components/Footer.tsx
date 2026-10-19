import Link from "next/link";
import { book, footerColumns, interviews, person, socials } from "@/content/site";
import { LogoMark } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((s) => s.href);
  const interview = interviews[0];

  return (
    <footer className="site-footer">
      {/* Call-to-action band */}
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-cta__kicker">New book</p>
            <p className="footer-cta__title">
              {book.title}: <em>{book.subtitle}</em>
            </p>
          </div>
          <div className="footer-cta__actions">
            <Link href="/writing" className="btn btn--green">
              About the book
            </Link>
            {interview && (
              <Link href="/interviews" className="btn btn--ghost-dark">
                Watch the interview
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__logo" aria-label={`${person.name} — home`}>
            <LogoMark size={52} />
            <span>
              <span className="site-footer__name">{person.name}</span>
              <span className="site-footer__role">{person.role}</span>
            </span>
          </Link>
          <p className="site-footer__tagline">{person.tagline}</p>
          {activeSocials.length > 0 && (
            <ul className="socials" aria-label="Social media">
              {activeSocials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={`${person.name} on ${s.label}`}>
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {footerColumns.map((col) => (
          <nav key={col.heading} className="site-footer__col" aria-label={col.heading}>
            <h2 className="site-footer__heading">{col.heading}</h2>
            <ul>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            © {year} {person.name}. All rights reserved.
          </p>
          <a href="#top-of-page" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="site-footer__watermark" aria-hidden>
        <LogoMark size={420} />
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    Facebook:
      "M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z",
    X: "M17.8 3.5h3l-6.6 7.6 7.8 10.4h-6.1l-4.8-6.3-5.5 6.3h-3l7.1-8.1L2.3 3.5h6.2l4.3 5.7 5-5.7zm-1 16.2h1.7L7.3 5.2H5.5l11.3 14.5z",
    LinkedIn:
      "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75z",
    Instagram:
      "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.8-8.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 3c-2.4 0-2.7 0-3.7.1-3.3.1-4.9 1.7-5.1 5.1C3 9.3 3 9.6 3 12s0 2.7.1 3.7c.2 3.3 1.8 4.9 5.1 5.1 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c3.3-.2 4.9-1.8 5.1-5.1.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.2-3.3-1.8-4.9-5.1-5.1C14.7 3 14.4 3 12 3z",
  };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path d={paths[name] ?? ""} fill="currentColor" />
    </svg>
  );
}
