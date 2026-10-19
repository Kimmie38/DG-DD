import type { Metadata } from "next";
import { heroBackgrounds, legacyCollege, tennis } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { PhotoButton } from "@/components/Lightbox";
import { StoryBlock } from "@/components/StoryBlock";
import { StoryNav } from "@/components/StoryNav";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const lc = legacyCollege;
  return (
    <>
      <PageHeader
        kicker="Projects"
        title="Investing where it matters most"
        intro="Schools and sport — the places where young people first discover how far they can go."
        image={heroBackgrounds.projects}
      >
        <StoryNav stories={[lc, tennis]} />
      </PageHeader>

      <article id={lc.id} className="feature" aria-labelledby={`${lc.id}-title`}>
        <div className="container feature__grid">
          <div className="feature__text">
            <p className="story__meta">
              <span className="story__kicker">{lc.kicker}</span>
              <time dateTime={lc.dateTime}>{lc.date}</time>
            </p>
            <h2 id={`${lc.id}-title`} className="feature__title">
              {lc.title}
            </h2>
            <p className="story__place">{lc.place}</p>
            {lc.quote && <blockquote className="feature__quote">“{lc.quote}”</blockquote>}
            {lc.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <div className="feature__mosaic">
            {lc.photos.slice(0, 5).map((photo, i) => (
              <PhotoButton
                key={photo.src}
                photos={lc.photos}
                index={i}
                className={`feature__tile feature__tile--${i}`}
                sizes={i === 0 ? "(max-width: 860px) 92vw, 40vw" : "(max-width: 860px) 45vw, 20vw"}
                fill
              />
            ))}
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <StoryBlock story={tennis} reverse headingLevel={2} />
        </div>
      </section>
    </>
  );
}
