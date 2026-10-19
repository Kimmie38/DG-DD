import type { Metadata } from "next";
import {
  about,
  awards,
  career,
  earlierWork,
  education,
  heroBackgrounds,
  milestones,
  portraitPhotos,
  quickFacts,
} from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { PhotoButton } from "@/components/Lightbox";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker="About" title={about.heading} intro={about.lead} image={heroBackgrounds.about} />

      {/* Biography */}
      <section id="about-portrait" className="section">
        <div className="container bio">
          <aside className="bio__aside">
            <div className="about__media">
              <PhotoButton photos={portraitPhotos} index={0} sizes="(max-width: 860px) 70vw, 30vw" className="about__photo about__photo--a" />
              <PhotoButton photos={portraitPhotos} index={1} sizes="(max-width: 860px) 45vw, 18vw" className="about__photo about__photo--b" />
            </div>
            <dl className="facts">
              {quickFacts.map((f) => (
                <div key={f.label} className="facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="bio__text prose">
            <h2 className="bio__heading">Biography</h2>
            {about.paragraphs.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section section--tinted" aria-labelledby="journey-title">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2 id="journey-title">Milestones</h2>
          </header>
          <ol className="timeline" aria-label="Milestones">
            {milestones.map((m) => (
              <li key={m.title} className="timeline__item">
                <span className="timeline__year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Builder & public servant */}
      <section className="section" aria-labelledby="earlier-title">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Before DBI</p>
            <h2 id="earlier-title">Builder and public servant</h2>
          </header>
          <div className="duo">
            {earlierWork.map((w) => (
              <article key={w.title} className="duo__card">
                <p className="story__meta">
                  <span className="story__kicker">{w.kicker}</span>
                  <span>{w.period}</span>
                </p>
                <h3>{w.title}</h3>
                <ul className="ticks">
                  {w.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career + education + awards */}
      <section className="section section--tinted" aria-labelledby="career-title">
        <div className="container cv">
          <div>
            <header className="section-heading">
              <p className="eyebrow">Career</p>
              <h2 id="career-title">Roles &amp; appointments</h2>
            </header>
            <ol className="cv__list">
              {career.map((c) => (
                <li key={`${c.org}-${c.role}`} className="cv__item">
                  <span className="cv__period">{c.period}</span>
                  <div>
                    <h3 className="cv__role">{c.role}</h3>
                    <p className="cv__org">{c.org}</p>
                    {c.text && <p className="cv__text">{c.text}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="cv__side">
            <div className="panel">
              <h2 className="panel__title">Education</h2>
              <ul className="panel__list">
                {education.map((e) => (
                  <li key={e.title}>
                    <strong>{e.title}</strong>
                    {(e.school || e.year) && (
                      <span>
                        {e.school}
                        {e.school && e.year ? " · " : ""}
                        {e.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel panel--yellow">
              <h2 className="panel__title">Awards &amp; recognition</h2>
              <ul className="panel__list">
                {awards.map((a) => (
                  <li key={a.title}>
                    <strong>
                      {a.title} <span className="panel__year">{a.year}</span>
                    </strong>
                    {a.by && <span>{a.by}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
