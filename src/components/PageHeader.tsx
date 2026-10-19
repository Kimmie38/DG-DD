import Image from "next/image";
import type { ReactNode } from "react";
import { DropText } from "./DropText";

/** Background photo with a green wash and a subtle tech-grid overlay. */
export function HeroBackdrop({ src, priority = true }: { src: string; priority?: boolean }) {
  return (
    <div className="backdrop" aria-hidden>
      <Image src={src} alt="" fill sizes="100vw" priority={priority} className="backdrop__img" />
      <span className="backdrop__wash" />
      <span className="backdrop__grid" />
    </div>
  );
}

/** Title band at the top of every inner page. */
export function PageHeader({
  kicker,
  title,
  intro,
  image,
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`page-header ${image ? "page-header--image" : ""}`}>
      {image && <HeroBackdrop src={image} />}
      <div className="container page-header__inner">
        <p className="eyebrow eyebrow--on-dark">{kicker}</p>
        <h1 className="page-header__title">
          <DropText text={title} delay={150} />
        </h1>
        {intro && <p className="page-header__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
