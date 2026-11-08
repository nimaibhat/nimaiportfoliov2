// Every project on the homepage. To give one its own page at /p/<id>:
//   1. add the next unused `id` here (never reuse or renumber one), and
//   2. write src/content/projects/<id>.md (images go in static/images/projects/).
export interface Project {
  id?: number;
  name: string;
  description: string;
  href?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Lantern",
    href: "https://github.com/nimaibhat/lantern",
    image: "/images/projects/lantern/landing.jpg",
    description: "Dementia home safety, built on one scan of the real home. 3rd at Hack OHI/O 2026.",
  },
  {
    name: "Repurpose",
    href: "https://github.com/nimaibhat/repurpose",
    image: "/images/projects/repurpose.png",
    description: "Finding which FDA drugs can be repurposed for cancer with AI. 1st at Hack/AI 2026.",
  },
  {
    name: "void",
    href: "https://github.com/nimaibhat/void",
    image: "/images/projects/void.png",
    description: "Real-time grid intelligence for power emergencies, with $ back for citizens.",
  },
  {
    name: "ding!",
    href: "https://joinding.com/",
    image: "/images/projects/ding.png",
    description: "An AI intelligence layer for dining.",
  },
  {
    name: "chkpnt",
    image: "/images/projects/chkpnt.jpeg",
    description: "Tying digital commitments to physical actions with NFC checkpoints. 1st at Lovable x BDAA 2025.",
  },
  {
    name: "Medimoji",
    href: "https://github.com/nimaibhat/medimoji",
    image: "/images/projects/medimoji.png",
    description: "Visualizing medical concepts for those who need it. Most Technical at Hack OHI/O 2025.",
  },
  {
    name: "Belonging Passport",
    href: "https://devpost.com/software/ymca-future-for-data-2025",
    image: "/images/projects/belongingpassport.jpeg",
    description: "Reducing loneliness with the YMCA of Greater Cincinnati. 1st at Future of Data 2025.",
  },
];
