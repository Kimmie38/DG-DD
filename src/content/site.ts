/**
 * All site copy and imagery lives here. Edit this file to update the site —
 * components only read from it.
 *
 * Facts are drawn from Daser David's public Facebook posts (facebook.com/oluwadaser)
 * and press coverage. Items marked TODO should be confirmed with his office
 * before launch.
 */

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type SectionId =
  | "home-hero"
  | "about-portrait"
  | "dbi-itu-visit"
  | "dbi-itu-cisco"
  | "dbi-delegation"
  | "project-legacy-college"
  | "project-tennis"
  | "community-kanam"
  | "community-nsbs-award"
  | "community-young-leaders"
  | "community-cbm"
  | "writing-coded"
  | "moments";

export type Story = {
  id: SectionId;
  kicker: string;
  title: string;
  date: string; // human-readable
  dateTime: string; // ISO, for <time>
  place?: string;
  body: string[];
  quote?: string;
  photos: Photo[];
};

const p = (src: string, width: number, height: number, alt: string): Photo => ({
  src,
  width,
  height,
  alt,
});

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const person = {
  name: "Daser David",
  honorific: "Prince",
  role: "President/CEO, Digital Bridge Institute",
  tagline: "Building bridges between people and possibility.",
  intro:
    "Technologist, institution builder and proud son of Plateau State — dedicated to fostering sustainable communities across the continent, from tech groups to advocacy communities championing inclusivity.",
  facebook: "https://www.facebook.com/oluwadaser",
  linkedin: "https://www.linkedin.com/in/daser/",
};

export const heroPhoto = p(
  "/images/about-portrait/1.jpg",
  771,
  768,
  "Daser David addressing the press at the Digital Bridge Institute",
);

export const portraitPhotos: Photo[] = [
  p("/images/about-portrait/2.jpg", 731, 731, "Daser David in a high-visibility vest, seated at a conference table"),
  p("/images/about-portrait/3.jpg", 720, 720, "Daser David at work on a laptop covered in tech-community stickers"),
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  heading: "A life spent connecting people to technology",
  lead: "Biochemist turned software engineer, hub founder turned public servant: for more than a decade Daser David has worked to make sure young Nigerians — wherever they start — can build a future in technology.",
  paragraphs: [
    "Daser David studied Biochemistry at the University of Jos, alongside a National Diploma in Computer Science, and taught himself to build software. Early in his career he worked as an IT consultant to the Nigerian Air Force — including on UAV ground-control systems — and to the Nigeria Police and other public and private clients.",
    "In 2015 he founded nHub Nigeria in Jos, widely recognised as Northern Nigeria’s first technology innovation hub. nHub combined a tech-solutions company with a skills space for young people entering tech entrepreneurship, supported startups with training, funding and mentorship — with a deliberate focus on bringing more women into tech — and hosted HackJos, the city’s annual conference and hackathon.",
    "In December 2018 Governor Simon Bako Lalong appointed him the pioneer Director General of the Plateau State ICT Development Agency. Over four and a half years he drove the state’s digital agenda: the Code Plateau skills programme, a state ICT policy and strategic plan, automated government services, an online movement-permit system during the COVID-19 lockdown, zero right-of-way charges for broadband roll-out and expanded mobile coverage for underserved communities. In the same period he served on the Presidential Advisory Council on Technology and Creativity, co-chaired Plateau’s Open Government Partnership and sat on the World Bank NG-CARES steering committee.",
    "After returning to nHub as Director of Startup Growth and Public Policy, he was appointed President/CEO of the Digital Bridge Institute by President Bola Ahmed Tinubu on 20 August 2024, and resumed on 2 September 2024. At DBI he has led a reset of the institution — new partnerships, upgraded campuses, inclusive training for persons with disabilities and an ambition to train five million Nigerian workers in AI and digital skills.",
    "He also serves as Director of the City Boy Movement in Plateau State, and in 2026 published his first book, Coded in Grit: The nHub Story. He holds master’s degrees in Society and Development Studies (University of Abuja) and Research and Public Policy (University of Jos), and is pursuing a doctorate in Public Policy and Governance. He is married with children.",
  ],
};

export const quickFacts: { label: string; value: string }[] = [
  { label: "Current role", value: "President/CEO, Digital Bridge Institute" },
  { label: "Founded", value: "nHub Nigeria, Jos (2015)" },
  { label: "Home state", value: "Plateau State, Nigeria" },
  { label: "Based in", value: "Abuja" },
  { label: "Focus", value: "Digital skills, tech policy, startups, youth inclusion" },
];

export const education: { title: string; school: string; year?: string }[] = [
  { title: "Doctorate in Public Policy & Governance (in progress)", school: "" }, // TODO: add institution
  { title: "M.Sc. Society and Development Studies", school: "University of Abuja", year: "2023" },
  { title: "Master’s in Research and Public Policy", school: "University of Jos", year: "2022" },
  { title: "B.Sc. Biochemistry", school: "University of Jos" },
  { title: "National Diploma, Computer Science", school: "University of Jos" },
];

export const career: { period: string; role: string; org: string; text?: string }[] = [
  {
    period: "Sep 2024 – present",
    role: "President/CEO",
    org: "Digital Bridge Institute (DBI)",
    text: "Leads Nigeria’s ICT capacity-building institute, established by the NCC in 2004 and recognised as an ITU Centre of Excellence.",
  },
  {
    period: "2023 – 2024",
    role: "Director, Startup Growth & Public Policy",
    org: "nHub Nigeria",
    text: "Led startup-growth programmes, mentored founders and advocated for tech-sector policy.",
  },
  {
    period: "2018 – 2023",
    role: "Director General (pioneer)",
    org: "Plateau State ICT Development Agency",
    text: "Led the state’s digital transformation, including Code Plateau and e-government services.",
  },
  {
    period: "2018 – 2023",
    role: "Member",
    org: "Presidential Advisory Council on Technology & Creativity",
  },
  {
    period: "2021 – 2023",
    role: "Co-Chair",
    org: "Plateau State Open Government Partnership",
  },
  {
    period: "2021 – 2023",
    role: "Member, Steering Committee",
    org: "Plateau State World Bank NG-CARES",
  },
  {
    period: "2015 – 2018",
    role: "Founder & CEO",
    org: "nHub Nigeria",
    text: "Built Northern Nigeria’s first innovation hub and the HackJos conference and hackathon.",
  },
  {
    period: "2012 – 2014",
    role: "IT Consultant",
    org: "Nigerian Air Force",
    text: "Technology consulting, including UAV ground-control stations.",
  },
];

export const awards: { year: string; title: string; by: string }[] = [
  { year: "2026", title: "Excellence in Leadership & Impact Award", by: "National Society of Biochemistry Students, University of Jos chapter" },
  { year: "2026", title: "NIICTE VIP Award", by: "Nigerian Institute of ICT Engineers" },
  { year: "2025", title: "Commendation for youth empowerment and inclusive leadership", by: "Mupun Youths Association" },
  { year: "2020", title: "ICT Personality of the Year", by: "" }, // TODO: confirm awarding body
];

export const milestones: { year: string; title: string; text: string }[] = [
  {
    year: "2015",
    title: "Founded nHub Nigeria",
    text: "Started Northern Nigeria’s first innovation hub in Jos.",
  },
  {
    year: "2018",
    title: "Director General, Plateau ICT agency",
    text: "Pioneer DG; launched Code Plateau to train young people in digital skills.",
  },
  {
    year: "2024",
    title: "President/CEO, Digital Bridge Institute",
    text: "Appointed by President Tinubu to lead Nigeria’s ICT capacity-building institute.",
  },
  {
    year: "2026",
    title: "Author, Coded in Grit",
    text: "Told the nHub story in his first book.",
  },
];

/* ------------------------------------------------------------------ */
/* Digital Bridge Institute                                            */
/* ------------------------------------------------------------------ */

export const dbiIntro: { kicker: string; heading: string; text: string } = {
  kicker: "Digital Bridge Institute",
  heading: "Resetting Nigeria’s ICT institute for the AI age",
  text: "Established by the Nigerian Communications Commission on 20 May 2004 and recognised as an ITU Centre of Excellence, DBI trains Nigeria’s digital workforce from campuses in Abuja, Lagos, Kano, Yola and Enugu. Daser David has led it since September 2024.",
};

export const dbiStats: { value: string; label: string }[] = [
  { value: "5M", label: "Nigerian workers DBI aims to train in AI and digital skills" },
  { value: "95%", label: "National digital-literacy target his technical committee is driving by 2030" },
  { value: "5", label: "Campuses: Abuja, Lagos, Kano, Yola and Enugu" },
  { value: "49", label: "Persons with disabilities graduated in Lagos and Kano with Sightsavers" },
];

export const dbiHighlights: { title: string; text: string }[] = [
  {
    title: "Partnerships at home and abroad",
    text: "A strategic partnership with US-based SBTS Group to train Nigerians and open a DBI–SBTS BPO centre, plus programmes with the Ministry of Humanitarian Affairs, NOUN and Miva Open University.",
  },
  {
    title: "Inclusive digital skills",
    text: "With Sightsavers, the IT Bridge Academy trains persons with disabilities in networking, product management, digital marketing and data analysis — the second academy of its kind in Africa.",
  },
  {
    title: "New facilities",
    text: "Commissioned the Nigerian–Korean Information Access Centre at DBI headquarters with Minister Bosun Tijani, and upgraded the Abuja, Lagos, Kano, Enugu and Yola campuses.",
  },
  {
    title: "Talent City & global training",
    text: "Launched DBI Talent City and the DBI Global Training Partner Programme at the Lagos campus, and is implementing the NCC-funded NCC–DBI ADEPTI programme for higher institutions.",
  },
  {
    title: "National leadership",
    text: "Chairs the National Digital Literacy Technical Committee and the implementation committee for the Senator Oluremi Tinubu AI and Robotics Centre.",
  },
  {
    title: "Global ICT community",
    text: "Hosted the ITU’s Telecommunication Development Bureau Director, Dr. Cosmas Zavazava, and ITU digital-skills officers as DBI deepens its role as an ITU Centre of Excellence.",
  },
];

/* ------------------------------------------------------------------ */
/* Earlier work                                                        */
/* ------------------------------------------------------------------ */

export const earlierWork: { kicker: string; title: string; period: string; points: string[] }[] = [
  {
    kicker: "Entrepreneur",
    title: "nHub Nigeria",
    period: "Founded 2015 · Jos",
    points: [
      "Northern Nigeria’s first technology innovation hub",
      "Tech-solutions company and skills space for young founders",
      "Startup training, funding and mentorship, with a focus on women in tech",
      "Home of HackJos, the annual Jos conference and hackathon",
    ],
  },
  {
    kicker: "Public service",
    title: "Plateau State ICT Development Agency",
    period: "Director General · 2018 – 2023",
    points: [
      "Code Plateau: digital-skills training for thousands of young people",
      "Plateau ICT Policy and Strategic Plan, and automated government services",
      "Online movement permits during the COVID-19 lockdown",
      "Zero right-of-way charges and expanded mobile coverage for underserved communities",
    ],
  },
];

export const heroBackgrounds = {
  home: "/images/dbi-itu-cisco/1.jpg",
  about: "/images/about-portrait/3.jpg",
  dbi: "/images/dbi-itu-cisco/1.jpg",
  projects: "/images/project-legacy-college/2.jpg",
  community: "/images/community-young-leaders/3.jpg",
  writing: "/images/moments/cover-3.jpg",
  interviews: "/images/about-portrait/1.jpg",
  gallery: "/images/moments/cover-3.jpg",
};

export const dbiStories: Story[] = [
  {
    id: "dbi-itu-visit",
    kicker: "Partnership",
    title: "Welcoming the ITU to DBI",
    date: "29 September 2026",
    dateTime: "2026-09-29",
    place: "DBI Headquarters, Abuja",
    body: [
      "Daser David received Ms. Robyn Fysh, Senior Digital Skills Officer at the International Telecommunication Union, at the Digital Bridge Institute — a visit focused on expanding digital-skills training across Nigeria.",
    ],
    photos: [
      p("/images/dbi-itu-visit/2.jpg", 1024, 1280, "Daser David shakes hands with ITU Senior Digital Skills Officer Robyn Fysh"),
      p("/images/dbi-itu-visit/1.jpg", 1280, 779, "Daser David and Robyn Fysh in conversation with DBI officials"),
      p("/images/dbi-itu-visit/3.jpg", 1280, 952, "Daser David, Robyn Fysh and a DBI colleague pose together"),
      p("/images/dbi-itu-visit/4.jpg", 1024, 1280, "Daser David and Robyn Fysh standing side by side"),
      p("/images/dbi-itu-visit/5.jpg", 1280, 952, "Group photograph during the ITU visit to DBI"),
    ],
  },
  {
    id: "dbi-itu-cisco",
    kicker: "Training",
    title: "Closing the ITU–CISCO training",
    date: "30 September 2026",
    dateTime: "2026-09-30",
    body: [
      "He joined participants at the closing ceremony of a three-day ITU–CISCO training convened by the Digital Bridge Institute, celebrating the trainees and the partners behind the programme.",
    ],
    photos: [
      p("/images/dbi-itu-cisco/1.jpg", 1280, 853, "Participants working on laptops during the ITU–CISCO training"),
      p("/images/dbi-itu-cisco/2.jpg", 1280, 853, "Robyn Fysh addresses participants at the closing ceremony"),
      p("/images/dbi-itu-cisco/3.jpg", 1280, 909, "Daser David and Robyn Fysh at the high table"),
    ],
  },
  {
    id: "dbi-delegation",
    kicker: "Delegation",
    title: "Leading a DBI delegation",
    date: "30 September 2026",
    dateTime: "2026-09-30",
    body: [
      "Alongside the visiting ITU guest, Daser David led a delegation from the Digital Bridge Institute on a working visit to partners and stakeholders.", // TODO: name the host organisation
    ],
    photos: [
      p("/images/dbi-delegation/1.jpg", 1280, 895, "The DBI delegation with their hosts"),
      p("/images/dbi-delegation/3.jpg", 1280, 950, "Delegates in a meeting around a conference table"),
      p("/images/dbi-delegation/2.jpg", 1032, 1280, "Daser David seated during the visit"),
      p("/images/dbi-delegation/4.jpg", 905, 1280, "A host official seated during the delegation’s visit"),
      p("/images/dbi-delegation/5.jpg", 1039, 1280, "Robyn Fysh speaks during the meeting"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const legacyCollege: Story = {
  id: "project-legacy-college",
  kicker: "Education",
  title: "Daser Legacy College, Kagu",
  date: "9 October 2026",
  dateTime: "2026-10-09",
  place: "Kagu, Pankshin LGA, Plateau State", // TODO: confirm LGA
  quote: "A new chapter for rural education.",
  body: [
    "Daser Legacy College brings quality secondary education closer to the children of Kagu and its neighbouring communities, so that where a child is born no longer decides how far they can go.",
    "Community leaders, parents and pupils gathered for the opening, with learning materials presented to the new school.", // TODO: add enrolment figures, curriculum, how to support
  ],
  photos: [
    p("/images/project-legacy-college/4.jpg", 2000, 1992, "Daser David with the first pupils of Daser Legacy College in their uniforms"),
    p("/images/project-legacy-college/1.jpg", 1502, 2000, "Ribbon-cutting at the opening of Daser Legacy College"),
    p("/images/project-legacy-college/2.jpg", 1080, 810, "Community members gathered under the trees for the ceremony"),
    p("/images/project-legacy-college/3.jpg", 810, 1080, "Learning materials being presented at the college"),
    p("/images/project-legacy-college/5.jpg", 810, 1080, "Guests in front of the new college building"),
    p("/images/project-legacy-college/6.jpg", 1502, 2000, "Daser David displays school uniforms for the pupils"),
    p("/images/project-legacy-college/7.jpg", 1502, 2000, "Residents of Kagu at the college opening"),
  ],
};

export const tennis: Story = {
  id: "project-tennis",
  kicker: "Sport & youth",
  title: "Growing tennis talent in Plateau",
  date: "2023 – 2026",
  dateTime: "2026-10-22",
  place: "Rayfield Tennis Club, Jos",
  body: [
    "A keen player himself, Daser David has championed tennis as a pathway for young people — from the Rayfield Tennis Club Open Championship in December 2023 to the City Boy Jos Tennis Championship, 22–31 October 2026.",
    "The championship’s goal: the discovery and development of young talent and tennis in Plateau State. Talent today, champions tomorrow.",
  ],
  photos: [
    p("/images/project-tennis/4.jpg", 2000, 1252, "Poster for the City Boy Jos Tennis Championship, 22–31 October 2026, Rayfield Tennis Club"),
    p("/images/project-tennis/1.jpg", 1280, 853, "Daser David on court with a tennis racket"),
    p("/images/project-tennis/2.jpg", 1280, 853, "Players and officials on the tennis court"),
    p("/images/project-tennis/3.jpg", 1080, 1080, "Poster for the Rayfield Tennis Club 2023 Open Tennis Championship"),
  ],
};

/* ------------------------------------------------------------------ */
/* Community                                                           */
/* ------------------------------------------------------------------ */

export const communityStories: Story[] = [
  {
    id: "community-kanam",
    kicker: "Home",
    title: "Chairman of the Occasion, KADA Day 2026",
    date: "29 August 2026",
    dateTime: "2026-08-29",
    place: "Dengi, Kanam LGA",
    body: [
      "He served as Chairman of the Occasion at the Kanam Development Association (KADA) Day 2026, celebrating the people, culture and progress of Kanam.",
    ],
    photos: [
      p("/images/community-kanam/1.jpg", 960, 1280, "Daser David speaks from the podium at KADA Day 2026"),
      p("/images/community-kanam/2.jpg", 960, 1280, "Daser David greets a traditional ruler under the Sarkin Kanam canopy"),
      p("/images/community-kanam/3.jpg", 960, 1280, "Daser David with a traditional ruler at KADA Day"),
      p("/images/community-kanam/4.jpg", 868, 1018, "Daser David seated beside a community elder"),
    ],
  },
  {
    id: "community-nsbs-award",
    kicker: "Recognition",
    title: "Excellence in Leadership & Impact Award",
    date: "1 October 2026",
    dateTime: "2026-10-01",
    place: "University of Jos",
    body: [
      "The National Society of Biochemistry Students (NSBS), University of Jos chapter, honoured him for exemplary leadership, inspiring service and meaningful impact on society.",
    ],
    photos: [
      p("/images/community-nsbs-award/2.jpg", 782, 1080, "Award plaque from NSBS University of Jos chapter: Excellence in Leadership & Impact, 2026"),
      p("/images/community-nsbs-award/1.jpg", 512, 410, "Receiving the award at the NSBS dinner"),
      p("/images/community-nsbs-award/3.jpg", 810, 1080, "Daser David arriving with students"),
    ],
  },
  {
    id: "community-young-leaders",
    kicker: "Generation",
    title: "A new generation of leadership",
    date: "20 August 2026",
    dateTime: "2026-08-20",
    place: "Victoria Gowon Auditorium, New Government House, Jos",
    quote: "Young people have a place at the table.",
    body: [
      "He attended the inauguration of two young Plateau indigenes, Prince Miaphen and Hon. Yobo, as commissioners in the State Executive Council — an investment, in his words, in an entire generation.",
    ],
    photos: [
      p("/images/community-young-leaders/2.jpg", 810, 1080, "Daser David with the newly inaugurated commissioners and guests"),
      p("/images/community-young-leaders/1.jpg", 810, 1080, "Daser David congratulates a new commissioner"),
      p("/images/community-young-leaders/3.jpg", 810, 1080, "A crowd gathered for the inauguration"),
      p("/images/community-young-leaders/4.jpg", 810, 1080, "Daser David arriving at the event"),
    ],
  },
  {
    id: "community-cbm",
    kicker: "Movement",
    title: "City Boy Movement, Plateau State",
    date: "20 January 2026",
    dateTime: "2026-01-20",
    body: [
      "As Director of the City Boy Movement in Plateau State, he led the chapter on a courtesy and familiarisation visit, and continues to mobilise students and young people across every local government area.",
    ],
    photos: [
      p("/images/community-cbm/2.jpg", 2000, 1565, "Daser David presents a City Boy Movement hat and scarf"),
      p("/images/community-cbm/1.jpg", 1429, 2000, "Daser David speaks at a City Boy Movement event"),
      p("/images/community-cbm/4.jpg", 2000, 1530, "Presentation of City Boy Movement regalia"),
      p("/images/community-cbm/3.jpg", 2000, 1625, "Exchange of City Boy Movement regalia"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Writing                                                             */
/* ------------------------------------------------------------------ */

export const book = {
  id: "writing-coded" as const,
  title: "Coded in Grit",
  subtitle: "The nHub Story",
  strapline: "How a Broken City Built Northern Nigeria’s First Innovation Hub",
  publisher: "Fortham",
  announced: "2 October 2026",
  quote:
    "After three years of trying to make sense of this narrative, I can finally say: the journey is complete.",
  text: "Daser David’s first book tells the story of nHub — how a group of young people in Jos built a home for technology and talent in a city many had written off.",
  cover: p("/images/writing-coded/1.jpg", 806, 1080, "Cover of Coded in Grit: The nHub Story by Daser David"),
  link: "", // TODO: add purchase / pre-order link
};

/* ------------------------------------------------------------------ */
/* Other moments (gallery only)                                        */
/* ------------------------------------------------------------------ */

export const moments: Photo[] = [
  p("/images/moments/cover-3.jpg", 1049, 699, "Daser David celebrating with members of the tech community"),
  p("/images/moments/cover-1.jpg", 2000, 1344, "Daser David in conversation with a guest"),
  p("/images/moments/cover-2.jpg", 1080, 608, "An official at work in his office"),
  p("/images/moments/independence-day-1.jpg", 1600, 2000, "Independence Day greeting from Daser David"),
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export type GalleryGroup = { id: SectionId; label: string; photos: Photo[] };

export const galleryGroups: GalleryGroup[] = [
  { id: "project-legacy-college", label: "Legacy College", photos: legacyCollege.photos },
  { id: "dbi-itu-visit", label: "ITU visit", photos: dbiStories[0].photos },
  { id: "dbi-itu-cisco", label: "ITU–CISCO", photos: dbiStories[1].photos },
  { id: "dbi-delegation", label: "Delegation", photos: dbiStories[2].photos },
  { id: "community-kanam", label: "Kanam", photos: communityStories[0].photos },
  { id: "community-nsbs-award", label: "NSBS award", photos: communityStories[1].photos },
  { id: "community-young-leaders", label: "Young leaders", photos: communityStories[2].photos },
  { id: "community-cbm", label: "City Boy Movement", photos: communityStories[3].photos },
  { id: "project-tennis", label: "Tennis", photos: tennis.photos },
  { id: "moments", label: "Moments", photos: [...portraitPhotos, ...moments] },
];

/* ------------------------------------------------------------------ */
/* Interviews                                                          */
/* ------------------------------------------------------------------ */

export type Interview = {
  youtubeId: string;
  title: string;
  show: string;
  showUrl: string;
  summary: string;
};

export const interviews: Interview[] = [
  {
    youtubeId: "uNCnRkwJ4uc",
    title: "David Daser: Building More Than Businesses | The Future of Tech and Innovation",
    show: "JUST START with Timothy Kunat",
    showUrl: "https://www.youtube.com/@JUSTSTART_podcast",
    summary:
      "A conversation on building more than businesses — the people, communities and institutions behind Nigeria’s tech future, and what it takes to just start.",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavLink = { href: string; label: string; description?: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

/** Top navigation. "Home" is the logo; the three work pages sit under one menu. */
export const nav: NavItem[] = [
  { href: "/about", label: "About" },
  {
    label: "Work",
    children: [
      { href: "/dbi", label: "Digital Bridge Institute", description: "ITU partnership, training & delegations" },
      { href: "/projects", label: "Projects", description: "Daser Legacy College & tennis" },
      { href: "/community", label: "Community", description: "Kanam, NSBS, young leaders, CBM" },
    ],
  },
  { href: "/writing", label: "Writing" },
  { href: "/interviews", label: "Interviews" },
  { href: "/gallery", label: "Gallery" },
];

/** Footer link columns. */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/writing", label: "Coded in Grit" },
    ],
  },
  {
    heading: "Work",
    links: [
      { href: "/dbi", label: "Digital Bridge Institute" },
      { href: "/projects", label: "Projects" },
      { href: "/community", label: "Community" },
    ],
  },
  {
    heading: "Media",
    links: [
      { href: "/interviews", label: "Interviews" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
];

/** Social profiles. Leave a URL empty to hide it. */
export const socials: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://www.facebook.com/oluwadaser" },
  { label: "X", href: "https://x.com/oluwadaser" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daser/" },
  { label: "Instagram", href: "" }, // TODO
];

/** Cards on the home page linking to each section page. */
export const pageCards: { href: string; kicker: string; title: string; text: string; photo: Photo }[] = [
  {
    href: "/dbi",
    kicker: "Digital Bridge Institute",
    title: "Opening Nigeria to global digital partners",
    text: "Hosting the ITU, closing the ITU–CISCO training and leading DBI delegations.",
    photo: dbiStories[0].photos[0],
  },
  {
    href: "/projects",
    kicker: "Projects",
    title: "Daser Legacy College & tennis for young talent",
    text: "A new school for rural children in Kagu and a tennis championship for Plateau’s youth.",
    photo: legacyCollege.photos[0],
  },
  {
    href: "/community",
    kicker: "Community",
    title: "Rooted in Plateau",
    text: "Kanam, the University of Jos, a new generation of leaders and the City Boy Movement.",
    photo: communityStories[0].photos[0],
  },
  {
    href: "/writing",
    kicker: "Writing",
    title: "Coded in Grit: The nHub Story",
    text: "How a broken city built Northern Nigeria’s first innovation hub.",
    photo: book.cover,
  },
];
