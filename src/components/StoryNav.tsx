import type { Story } from "@/content/site";

/** Jump links to each story on a page. */
export function StoryNav({ stories }: { stories: Pick<Story, "id" | "title">[] }) {
  return (
    <nav className="story-nav" aria-label="On this page">
      <ul>
        {stories.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>{s.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
