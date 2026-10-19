import Image from "next/image";
import Link from "next/link";
import { heroBackgrounds, heroPhoto, interviews, milestones, pageCards, person, galleryGroups } from "@/content/site";
import { HeroBackdrop } from "@/components/PageHeader";
import { VideoEmbed } from "@/components/VideoEmbed";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { DropText } from "@/components/DropText";

export default function HomePage() {
  const interview = interviews[0];
  // Two photos from each gallery group, skipping event posters.
  const highlights = galleryGroups
    .flatMap((g) => g.photos.slice(0, 2))
    .filter((ph) => !/poster|greeting|plaque/i.test(ph.alt));

  return (
    <>
      {/* Hero */}
      <section id="home-hero" className="hero" aria-labelledby="hero-title">
        <HeroBackdrop src={heroBackgrounds.home} />
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="eyebrow eyebrow--on-dark">{person.role}</p>
            <h1 id="hero-title" className="hero__title">
              <span className="hero__honorific">{person.honorific}</span>
              <DropText text={person.name} delay={250} />
            </h1>
            <p className="hero__tagline">{person.tagline}</p>
            <p className="hero__intro">{person.intro}</p>
            <div className="hero__actions">
              <Link className="btn btn--yellow" href="/about">
                His story
              </Link>
              <Link className="btn btn--outline-light" href="/interviews">
                Watch the interview
              </Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__frame">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={heroPhoto.width}
                height={heroPhoto.height}
                sizes="(max-width: 860px) 90vw, 44vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="hero__strip" aria-label="Milestones">
            {milestones.map((m) => (
              <li key={m.title}>
                <span className="hero__year">{m.year}</span>
                <span className="hero__mtitle">{m.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Explore */}
      <section className="section" aria-labelledby="explore-title">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Explore</p>
            <h2 id="explore-title">The work, the people, the places</h2>
          </header>
          <ul className="page-cards">
            {pageCards.map((card) => (
              <li key={card.href}>
                <Link href={card.href} className="page-card">
                  <span className="page-card__img">
                    <Image src={card.photo.src} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 280px" />
                  </span>
                  <span className="page-card__body">
                    <span className="page-card__kicker">{card.kicker}</span>
                    <span className="page-card__title">{card.title}</span>
                    <span className="page-card__text">{card.text}</span>
                    <span className="page-card__more" aria-hidden>
                      Read more →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Interview */}
      <section className="section section--green" aria-labelledby="interview-title">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--on-dark">Latest interview</p>
            <h2 id="interview-title" className="on-dark">
              {interview.title.split("|")[1]?.trim() ?? interview.title}
            </h2>
            <p className="muted-on-dark">
              On <em>{interview.show}</em>. {interview.summary}
            </p>
            <Link href="/interviews" className="btn btn--yellow">
              All interviews
            </Link>
          </div>
          <VideoEmbed id={interview.youtubeId} title={interview.title} />
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section" aria-labelledby="moments-title">
        <div className="container">
          <header className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 id="moments-title">Moments along the way</h2>
            </div>
            <Link href="/gallery" className="btn btn--green">
              View the gallery
            </Link>
          </header>
        </div>
        <PhotoMarquee photos={highlights} />
      </section>
    </>
  );
}
