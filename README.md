# Daser David — website

A multi-page site built with Next.js (App Router) and TypeScript to tell Daser David's story, in green and gold with a “DD” monogram.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, links to each section, latest interview, gallery preview |
| `/about` | Biography and milestones |
| `/dbi` | Digital Bridge Institute: ITU visit, ITU–CISCO training, delegation |
| `/projects` | Daser Legacy College, tennis |
| `/community` | Kanam, NSBS award, young leaders, City Boy Movement |
| `/writing` | *Coded in Grit: The nHub Story* |
| `/interviews` | Video interviews (YouTube; loads the player only when clicked) |
| `/gallery` | All photos, filterable by section, with a full-screen viewer |

## Navigation & footer

The top menu is the `nav` list in `site.ts`. It has five items: About, Work (a dropdown for DBI, Projects and Community), Writing, Interviews and Gallery. The header shows only the DD logo, which links home.

The footer columns are in `footerColumns` and the social icons are in `socials`. Social links with an empty URL are hidden, so fill in X or Instagram to show them. Facebook and LinkedIn are already set.

## Hero background images

Every hero section has a background photo with a green tint and a faint grid pattern laid over it. Photos are chosen per page in `heroBackgrounds` in `site.ts`. They currently use his own photos.

To use a stock photo instead (for example from Unsplash):

1. Put the file in `public/images/hero/`.
2. Point the page's entry in `heroBackgrounds` at it, e.g. `"/images/hero/tech.jpg"`.

## Animation

All animation uses CSS and a small script, with no extra libraries.

- **Page load:** heading words drop in one by one (`DropText`), hero photos slide in and the main portrait floats gently, background photos slowly zoom with a drifting grid over them, and the logo and menu drop into place.
- **On scroll:** `ScrollAnimator.tsx` makes headings drop in, story photos slide in from the side, and cards, timelines and gallery photos rise in one after another. The DBI numbers count up.
- **Home page:** two rows of photos slide past in opposite directions (`PhotoMarquee`) and pause on hover.
- **Turning effects on or off:** to change which elements animate, edit the `RULES` list in `ScrollAnimator.tsx`. Visitors whose device is set to reduce motion see no animation.

## Logo

- `public/logo-dd.svg` is the monogram file.
- `src/app/icon.svg` is the browser favicon.
- `src/components/Logo.tsx` is the in-page version.
- Theme colours are at the top of `globals.css`. Green is `--green-800` (#15803d) and yellow is `--yellow` (#fde047).

## Adding an interview

Add an entry to `interviews` in `site.ts`. The `youtubeId` is the part after `youtu.be/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | **All copy, dates and photo lists.** Edit this file to change what the site says. |
| `public/images/<section-id>/` | Photos, grouped by section ID (resized to a 2000px max edge) |
| `src/components/` | One component per section, plus `StoryBlock` (a dated story with photos) and `Lightbox` (the photo viewer) |
| `src/app/globals.css` | All styling. Colour and spacing tokens are at the top. |

### Section IDs → anchors

Every story has an anchor on its page. For example, `/projects#project-legacy-college` jumps straight to that story.

`home-hero` · `about-portrait` · `dbi-itu-visit` · `dbi-itu-cisco` · `dbi-delegation` · `project-legacy-college` · `project-tennis` · `community-kanam` · `community-nsbs-award` · `community-young-leaders` · `community-cbm` · `writing-coded` · `moments` (gallery only)

### Adding a photo

1. Put the file in `public/images/<section-id>/`.
2. Add a `p("/images/<section-id>/n.jpg", width, height, "alt text")` line to that section's `photos` array in `site.ts`.

   The first photo in a section's list is its lead image.

## Confirm before launch

Search `site.ts` for `TODO`:

- the organisation the DBI delegation visited on 30 September 2026
- the LGA for Kagu (currently Pankshin)
- Legacy College details: enrolment, how to support
- the purchase link for *Coded in Grit*
- which body gave the 2020 ICT Personality of the Year award
- where he is studying for his doctorate

The copy comes from his public Facebook posts and press coverage (TheCable, Techpoint Africa and IT Edge News).
