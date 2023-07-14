
export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    mainBadge: string;
    badges: string[];
}

export const projects: Project[] = [
    {   
        id: 1,
        title: "Vox Populi Blog-News Portal...",
        description: "Uploading images, rich markdown editor, comments and more.",
        image: "/projects/vox-populi-full.png",
        link: "https://vox-populiv3.vercel.app/",
        github: "https://github.com/lucabrx/vox-populiv3",
        mainBadge: "Next.js",
        badges: [ "Typescript", "TailwindCSS", "MySQL"]
    },
    {
        id: 2,
        title: "Icon AI - AI Dall-E Generated",
        description: "AI generated icons with Dall-E API and tRPC for full type safety.",
        image: "/projects/icon-gen-full.png",
        link: "https://icon-ai-ughw.vercel.app/",
        github: "https://github.com/lucabrx/iconAi",
        mainBadge: "Next.js",
        badges: [ "Typescript", "TailwindCSS", "tRPC", "Prisma"]

    },
    {
        id: 3,
        title: "Fitness Trainer Homepage - JD",
        description: "Fitness trainer homepage with a login form, it will be updated later.",
        image: "/projects/fitness-t-full.png",
        link: "https://fitness-coach-jimmy-dzomlia.vercel.app/",
        github: "https://github.com/lucabrx/fitness-coach-jimmy-dzomlia",
        mainBadge: "Next.js",
        badges: [ "Typescript", "TailwindCSS", "Prisma"]
    },
    {
        id: 4,
        title: "Chatnik - Chat App with Socket",
        description: "Chat app with a login form and a chat page with socket (pusher).",
        image: "/projects/chatnik-full.png",
        link: "https://chatnik.vercel.app",
        github: "https://github.com/lucabrx/chatnik",
        mainBadge: "Next.js",
        badges: [ "Typescript", "PusherAPI", "Redis", "TailwindCSS"]
    },
    {
        id: 5,
        title: "Web Dev Tools and Favorites list",
        description: "Web dev tools for design and coding, planetscale and drizzle.",
        image: "/projects/wd-tools-full.png",
        github: "https://github.com/lucabrx/wd-tool",
        link: "https://wd-tool.vercel.app/",
        mainBadge: "Next.js",
        badges: [ "Typescript", "TailwindCSS", "Planetscale", "Drizzle"]
    },
    {
        id: 6,
        title: "Daflix - Netflix Clone (better clone)",
        description: "Netflix clone with a login form and a movie page with few movies.",
        image: "/projects/daflix-full.png",
        github: "https://github.com/lucabrx/daflix",
        badges: [ "Typescript", "TailwindCSS", "Prisma", "CockroachDB"],
        link:"https://daflix-nine.vercel.app/",
        mainBadge: "Next.js",
    },
    {
        id: 7,
        title: "Airbnb Clone - Reservation App",
        description: "Airbnb clone with a login form and a reservation page with few houses.",
        image: "/projects/airbnb-full.png",
        github: "https://github.com/lucabrx/airbnb-clone",
        link: "https://airbnb-clone-zeta-lime.vercel.app/",
        mainBadge: "Next.js",
        badges: [ "Typescript", "TailwindCSS", "Prisma"]
    }
]