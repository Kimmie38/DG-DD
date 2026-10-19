import type { Metadata } from "next";
import { dbiHighlights, dbiIntro, dbiStats, dbiStories, heroBackgrounds } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { StoryBlock } from "@/components/StoryBlock";
import { StoryNav } from "@/components/StoryNav";

export const metadata: Metadata = { title: "Digital Bridge Institute" };

export default function DbiPage() {
  return (
    <>
      <PageHeader kicker={dbiIntro.kicker} title={dbiIntro.heading} intro={dbiIntro.text} image={heroBackgrounds.dbi}>
        <StoryNav stories={[{ id: "dbi-impact", title: "His leadership" }, ...dbiStories]} />
      </PageHeader>

      <section id="dbi-impact" className="section" aria-labelledby="impact-title">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Since September 2024</p>
            <h2 id="impact-title">What his leadership has set in motion</h2>
          </header>
          <ul className="stats">
            {dbiStats.map((s) => (
              <li key={s.label}>
                <span className="stats__value">{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
          <ul className="highlights">
            {dbiHighlights.map((h) => (
              <li key={h.title} className="highlights__item">
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="recent-title">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">September 2026</p>
            <h2 id="recent-title">Recent moments</h2>
          </header>
          <div className="stack">
            {dbiStories.map((story, i) => (
              <StoryBlock key={story.id} story={story} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
