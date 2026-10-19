import type { Metadata } from "next";
import { communityStories, heroBackgrounds } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { StoryBlock } from "@/components/StoryBlock";
import { StoryNav } from "@/components/StoryNav";

export const metadata: Metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        kicker="Community"
        title="Rooted in Plateau"
        intro="From Kanam to the University of Jos, showing up for the people and places that shaped him."
        image={heroBackgrounds.community}
      >
        <StoryNav stories={communityStories} />
      </PageHeader>
      <section className="section">
        <div className="container card-grid">
          {communityStories.map((story) => (
            <StoryBlock key={story.id} story={story} layout="card" headingLevel={2} />
          ))}
        </div>
      </section>
    </>
  );
}
