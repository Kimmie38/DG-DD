"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Photo } from "@/content/site";

type LightboxState = { photos: Photo[]; index: number } | null;
type Ctx = { open: (photos: Photo[], index: number) => void };

const LightboxContext = createContext<Ctx | null>(null);

export function useLightbox(): Ctx {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used inside <LightboxProvider>");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback((photos: Photo[], index: number) => {
    setState({ photos, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const step = useCallback((delta: number) => {
    setState((s) => (s ? { ...s, index: (s.index + delta + s.photos.length) % s.photos.length } : s));
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (state && !dialog.open) dialog.showModal();
    if (!state && dialog.open) dialog.close();
  }, [state]);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, step]);

  const photo = state ? state.photos[state.index] : null;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label="Photo viewer"
      >
        {photo && state && (
          <figure className="lightbox__figure">
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="100vw"
              className="lightbox__img"
            />
            <figcaption className="lightbox__caption">
              <span>{photo.alt}</span>
              <span className="lightbox__count">
                {state.index + 1} / {state.photos.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
          ×
        </button>
        {state && state.photos.length > 1 && (
          <>
            <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">
              ‹
            </button>
            <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Next photo">
              ›
            </button>
          </>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}

/** A clickable image that opens the shared lightbox. */
export function PhotoButton({
  photos,
  index,
  sizes,
  className,
  priority,
  fill,
}: {
  photos: Photo[];
  index: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  const { open } = useLightbox();
  const photo = photos[index];
  return (
    <button
      type="button"
      className={`photo-btn ${className ?? ""}`}
      onClick={() => open(photos, index)}
      aria-label={`View photo: ${photo.alt}`}
    >
      {fill ? (
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} />
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={priority}
        />
      )}
    </button>
  );
}
