"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryGroup } from "@/content/site";
import { useLightbox } from "./Lightbox";

const ALL = "all";

export function GalleryGrid({ groups }: { groups: GalleryGroup[] }) {
  const [filter, setFilter] = useState<string>(ALL);
  const { open } = useLightbox();

  const photos = useMemo(
    () => (filter === ALL ? groups.flatMap((g) => g.photos) : groups.find((g) => g.id === filter)?.photos ?? []),
    [filter, groups],
  );

  return (
    <>
      <div className="chips" role="group" aria-label="Filter photos">
        {[{ id: ALL, label: "All" }, ...groups].map((g) => (
          <button key={g.id} type="button" className="chip" aria-pressed={filter === g.id} onClick={() => setFilter(g.id)}>
            {g.label}
          </button>
        ))}
      </div>
      <p className="gallery-count" aria-live="polite">
        {photos.length} photos
      </p>
      <ul className="masonry">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button type="button" className="photo-btn" onClick={() => open(photos, i)} aria-label={`View photo: ${photo.alt}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 600px) 46vw, (max-width: 1100px) 31vw, 300px"
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
