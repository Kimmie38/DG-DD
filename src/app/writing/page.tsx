import type { Metadata } from "next";
import Image from "next/image";
import { book, heroBackgrounds, person } from "@/content/site";
import { HeroBackdrop } from "@/components/PageHeader";
import { DropText } from "@/components/DropText";

export const metadata: Metadata = { title: "Writing — Coded in Grit" };

export default function WritingPage() {
  return (
    <section id={book.id} className="book book--image" aria-labelledby="writing-title">
      <HeroBackdrop src={heroBackgrounds.writing} />
      <div className="container book__grid">
        <div className="book__cover">
          <Image
            src={book.cover.src}
            alt={book.cover.alt}
            width={book.cover.width}
            height={book.cover.height}
            sizes="(max-width: 860px) 70vw, 32vw"
            priority
          />
        </div>
        <div className="book__text">
          <p className="eyebrow eyebrow--on-dark">Writing</p>
          <h1 id="writing-title" className="book__title">
            <DropText text={book.title} delay={200} />
            <span className="book__subtitle">{book.subtitle}</span>
          </h1>
          <p className="book__strapline">{book.strapline}</p>
          <blockquote className="book__quote">
            <p>“{book.quote}”</p>
            <footer>
              — {person.name}, <time dateTime="2026-10-02">{book.announced}</time>
            </footer>
          </blockquote>
          <p>{book.text}</p>
          <p className="book__publisher">Published by {book.publisher}</p>
          {book.link && (
            <a className="btn btn--yellow" href={book.link} target="_blank" rel="noreferrer">
              Get the book
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
