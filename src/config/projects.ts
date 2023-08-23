export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  mainBadge: string;
  badges: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Quanta AI",
    description:
      "Quanta is AI with a lot of possibilities, from generating text to creating images and more",
    image: "/projects/quanta.png",
    link: "https://quanta-ai-next.vercel.app/",
    github: "https://github.com/lucabrx/quanta-ai-next",
    mainBadge: "NextJS",
    badges: ["TypeScript", "TailwindCSS", "OpenAI", "Clerk", "S3", "Drizzle"],
  },
  {
    id: 2,
    title: "Web Dev Tools",
    description:
      "Collection of tools for web developers and design, with ability to send us your tool for showcase",
    image: "/projects/web-dev-tools.png",
    link: "https://wd-tool.vercel.app/",
    github: "https://github.com/lucabrx/wd-tool",
    mainBadge: "NextJS",
    badges: ["TypeScript", "TailwindCSS", "NextAuth", "Drizzle", "S3"],
  },
  {
    id: 3,
    title: "VoxPopuli - Blog",
    description:
      "Blog with ability to create,edit,delete post and fresh news from around the world with comments",
    image: "/projects/vox-populi.png",
    link: "https://vox-populiv3.vercel.app/",
    github: "https://github.com/lucabrx/vox-populiv3",
    mainBadge: "NextJS",
    badges: ["TypeScript", "Drizzle", "TailwindCSS", "NextAuth", "Planetscale"],
  },
  {
    id: 4,
    title: "IconAi - Icon Generator",
    description:
      "Generate icons with OpenAi, saving them to S3 and displaying them on the website with community",
    image: "/projects/icon-ai.png",
    link: "https://icon-ai-ughw.vercel.app/",
    github: "https://github.com/lucabrx/iconAi",
    mainBadge: "NextJS",
    badges: ["TypeScript", "TailwindCSS", "OpenAI", "NextAuth", "S3", "Prisma"],
  },
  {
    id: 98,
    title: "Airbnb Clone",
    description:
      "Airbnb clone with authentication ,ability to create property or to book place to stay and more ",
    image: "/projects/air-bnb.png",
    link: "https://airbnb-clone-zeta-lime.vercel.app/",
    github: "https://github.com/lucabrx/airbnb-clone",
    mainBadge: "NextJS",
    badges: ["TypeScript", "TailwindCSS", "NextAuth", "Prisma"],
  },
  {
    id: 99,
    title: "Jimmy - Fitness Coach",
    description:
      "Fitness coach landing page with framer animations,moderen design and responsive",
    image: "/projects/jimmy-dzomlia.png",
    link: "https://fitness-coach-jimmy-dzomlia.vercel.app/",
    github: "https://github.com/lucabrx/fitness-coach-jimmy-dzomlia",
    mainBadge: "NextJS",
    badges: ["TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 100,
    title: "Daflix - Netflix Clone",
    description:
      "Netflix clone with authentication and movies, just in white and blue colour version",
    image: "/projects/daflix.png",
    link: "https://daflix-nine.vercel.app/",
    github: "https://github.com/lucabrx/daflix",
    mainBadge: "NextJS",
    badges: ["TypeScript", "Prisma", "TailwindCSS", "NextAuth"],
  },
];
