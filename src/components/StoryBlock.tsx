import type { Story } from "@/content/site";
import { PhotoButton } from "./Lightbox";

/**
 * A dated story with a lead photo and up to three thumbnails.
 * `layout="wide"` puts text beside the photos; "card" stacks them.
 */
export function StoryBlock({
  story,
  layout = "wide",
  reverse = false,
  headingLevel = 3,
}: {
  story: Story;
  layout?: "wide" | "card";
  reverse?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const thumbs = story.photos.slice(1, 4);
  const more = story.photos.length - 1 - thumbs.length;

  return (
    <article
      id={story.id}
      className={`story story--${layout} ${reverse ? "story--reverse" : ""}`}
      aria-labelledby={`${story.id}-title`}
    >
      <div className="story__media">
        <PhotoButton
          photos={story.photos}
          index={0}
          className="story__lead"
          sizes={layout === "wide" ? "(max-width: 860px) 92vw, 55vw" : "(max-width: 860px) 92vw, 45vw"}
          fill
        />
        {thumbs.length > 0 && (
          <div className="story__thumbs" style={{ gridTemplateColumns: `repeat(${thumbs.length}, 1fr)` }}>
            {thumbs.map((photo, i) => (
              <div key={photo.src} className="story__thumb-wrap">
                <PhotoButton photos={story.photos} index={i + 1} className="story__thumb" sizes="(max-width: 860px) 30vw, 14vw" fill />
                {more > 0 && i === thumbs.length - 1 && (
                  <span className="story__more" aria-hidden>
                    +{more}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="story__text">
        <p className="story__meta">
          <span className="story__kicker">{story.kicker}</span>
          <time dateTime={story.dateTime}>{story.date}</time>
        </p>
        <Heading id={`${story.id}-title`} className="story__title">
          {story.title}
        </Heading>
        {story.place && <p className="story__place">{story.place}</p>}
        {story.quote && <blockquote className="story__quote">“{story.quote}”</blockquote>}
        {story.body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </article>
  );
}
