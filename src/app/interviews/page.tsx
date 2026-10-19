import type { Metadata } from "next";
import { heroBackgrounds, interviews } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { VideoEmbed } from "@/components/VideoEmbed";

export const metadata: Metadata = { title: "Interviews" };

export default function InterviewsPage() {
  return (
    <>
      <PageHeader
        kicker="Interviews"
        title="In his own words"
        intro="Conversations on technology, innovation and building for the next generation."
        image={heroBackgrounds.interviews}
      />
      <section className="section">
        <div className="container stack">
          {interviews.map((iv) => (
            <article key={iv.youtubeId} className="interview" aria-labelledby={`iv-${iv.youtubeId}`}>
              <VideoEmbed id={iv.youtubeId} title={iv.title} />
              <div className="interview__text">
                <p className="eyebrow">
                  <a href={iv.showUrl} target="_blank" rel="noreferrer">
                    {iv.show}
                  </a>
                </p>
                <h2 id={`iv-${iv.youtubeId}`}>{iv.title}</h2>
                <p>{iv.summary}</p>
                <a
                  className="btn btn--green"
                  href={`https://www.youtube.com/watch?v=${iv.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
