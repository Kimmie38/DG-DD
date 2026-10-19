import type { Metadata } from "next";
import { galleryGroups, heroBackgrounds } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHeader kicker="Gallery" title="Moments along the way" intro="Photographs from across his work and community life." image={heroBackgrounds.gallery} />
      <section className="section section--tight">
        <div className="container">
          <GalleryGrid groups={galleryGroups} />
        </div>
      </section>
    </>
  );
}
