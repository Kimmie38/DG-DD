import type { Photo } from "@/content/site";
import { PhotoButton } from "./Lightbox";

const ROW_HEIGHT = 220;

/** Two rows of photos sliding endlessly in opposite directions. Pauses on hover. */
export function PhotoMarquee({ photos }: { photos: Photo[] }) {
  const half = Math.ceil(photos.length / 2);
  const rows = [photos.slice(0, half), photos.slice(half)];

  return (
    <div className="marquee">
      {rows.map((row, r) => (
        <div key={r} className={`marquee__row ${r === 1 ? "marquee__row--reverse" : ""}`}>
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div key={copy} className="marquee__set" aria-hidden={copy === 1 || undefined} inert={copy === 1 || undefined}>
                {row.map((photo, i) => (
                  <div
                    key={photo.src}
                    className="marquee__item"
                    style={{ width: Math.round((ROW_HEIGHT * photo.width) / photo.height), height: ROW_HEIGHT }}
                  >
                    <PhotoButton photos={row} index={i} sizes="320px" className="marquee__btn" fill />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
