/**
 * All site copy and links live here.
 *
 * This file is scaffolded. Values wrapped in [SQUARE BRACKETS] are explicit
 * placeholders: employment history, project names, links, dates, outcomes and
 * certifications are examples, not claims. Replace them before publishing.
 * The `email` and `siteUrl` constants below are used as-is: every mailto
 * link, metadata URL, sitemap entry and robots rule derives from them.
 */

export type SocialIcon = "github" | "linkedin" | "x" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  icon?: "github";
};

export type Project = {
  title: string;
  year: string;
  problem: string;
  outcome: string;
  stack: string[];
  architecture?: string;
  links: ProjectLink[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  href: string;
};

export type Repo = {
  name: string;
  description: string;
  language: string;
  href: string;
};

export type Profile = {
  name: string;
  handle: string;
  role: string;
  description: string;
  bio: string;
  location: string;
  email: string;
  siteUrl: string;
  now: string;
  socials: SocialLink[];
  experience: ExperienceEntry[];
  projects: Project[];
  skills: SkillGroup[];
  certifications: Certification[];
  repos: Repo[];
  contact: {
    lede: string;
    copy: string;
    cta: string;
    subject: string;
  };
};

const email = "gauravraut9124@gmail.com";

/**
 * Canonical site origin. Trailing slashes are stripped when the profile is
 * built, so metadata, sitemap and robots URLs never contain a double slash.
 */
const siteUrl = "https://gaurav-raut.pages.dev";

export const profile: Profile = {
  name: "Gaurav Raut",
  handle: "[gvrv]",
  role: "Learning Web Devlopment, Backend, AI.",
  description:
    "Backend and AI engineer building retrieval pipelines, agent runtimes, and the APIs around them.",
  bio: "I'm a developer learning by building things, exploring new technologies, and figuring out how software works under the hood. I work across web development, backend systems, and AI, with a focus on understanding the fundamentals rather than just making things work. Most of what I know comes from experimenting, solving problems, and being curious about what I don't know yet.",
  location: "[Mumbai, India]",
  email,
  siteUrl: siteUrl.replace(/\/+$/, ""),
  now: "Currently building Ragnest, and spending most of my time on adding features that probably nobody use.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/9gvrv",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gaurav111",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/slopsoap",
      icon: "x",
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      icon: "mail",
    },
  ],
  experience: [
    {
      role: "[Role title] Senior Backend Engineer",
      org: "[PLACEHOLDER] Company",
      location: "[Remote]",
      period: "[2024 – present]",
      current: true,
      bullets: [
        "Owned [PLACEHOLDER] service from [starting state] to [measurable outcome].",
        "Reduced [metric] by [amount] by [specific engineering change].",
        "Led [PLACEHOLDER] migration with [team size] engineers and [scope].",
      ],
    },
    {
      role: "[Role title] AI Engineer",
      org: "[PLACEHOLDER] Startup",
      location: "[City]",
      period: "[2022 – 2024]",
      bullets: [
        "Built retrieval and evaluation infrastructure for [PLACEHOLDER] product.",
        "Shipped [PLACEHOLDER] agent workflow used by [audience or team].",
        "Cut [latency or cost metric] from [before] to [after].",
      ],
    },
    {
      role: "[Role title] Software Engineer",
      org: "[PLACEHOLDER] Company",
      location: "[City]",
      period: "[2020 – 2022]",
      bullets: [
        "Delivered [PLACEHOLDER] backend feature for [product or customer].",
        "Improved reliability of [PLACEHOLDER] through [specific change].",
      ],
    },
  ],
  projects: [
    {
      title: "[RAGNEST] A Multi-Tenant RAG Application",
      year: "[2026]",
      problem: "Finding and extracting relevant information from multiple documents is time-consuming and inefficient.",
      outcome:
        "RAGNest lets users upload, organize, and query documents within shared workspaces to get relevant, context-aware answers grounded in their documents.",
      stack: ["Python", "FastAPI", "PostgreSQL", "TypeScript", "Next.js", "Docker"],
      architecture:
        "FastAPI API / multi-tenant Postgres document store / Next.js client / Docker",
      links: [
        { label: "Live site", href: "https://example.com" },
        {
          label: "Source",
          href: "https://github.com/9gvrv/ragnest",
          icon: "github",
        },
      ],
    },
    {
      title: "[Plana] Application to plan your projects and stuff",
      year: "[2026]",
      problem: "Managing tasks and planning projects can become disorganized without a clear view of tasks, priorities, and progress.",
      outcome:
        "Organize tasks into boards and lists, manage workflows, and plan projects efficiently with drag-and-drop functionality.",
      stack: ["TypeScript", "Next.js", "Express.js", "PostgreSQL"],
      architecture:
        "Next.js drag-and-drop client / Express REST API / Postgres boards + tasks",
      links: [
        { label: "Live site", href: "https://example.com" },
        {
          label: "Source",
          href: "https://github.com/9gvrv/plana",
          icon: "github",
        },
      ],
    },
    {
      title: "[UPTIME-MONITOR] Web vitals monitoring",
      year: "[2025]",
      problem: "Manually monitoring API availability and diagnosing downtime is unreliable and time-consuming.",
      outcome:
        "Track URLs, trigger health checks, measure response latency, identify failures, and review historical uptime data.",
      stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
      architecture:
        "FastAPI health-check service / SQLAlchemy on Postgres / latency + uptime history per target",
      links: [
        {
          label: "Source",
          href: "https://github.com/9gvrv/uptime-monitor",
          icon: "github",
        },
      ],
    },
    {
      title: "[RESEARCH AGENT] Your fellow research assistant",
      year: "[2025]",
      problem: "Researching a topic requires manually searching multiple sources, extracting relevant information, and verifying where the information comes from.",
      outcome:
        "Research by searching the web when needed, processing relevant sources, and generating structured, LLM-powered answers with citations.",
      stack: ["Python", "SearXNG", "web scraping", "openai"],
      architecture:
        "SearXNG metasearch / scraped-source pipeline / OpenAI synthesis with citations",
      links: [
        { label: "Live site", href: "https://example.com" },
        {
          label: "Source",
          href: "https://github.com/9gvrv/research-agent",
          icon: "github",
        },
      ],
    },
  ],
  skills: [
    {
      label: "Backend",
      items: [
        "Python",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "SQLAlchemy",
        "Celery",
      ],
    },
    {
      label: "AI / ML",
      items: ["RAG", "Agentic systems"],
    },
    {
      label: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      label: "Infra / tools",
      items: ["Docker", "GitHub Actions", "Linux"],
    },
  ],
  certifications: [
    {
      name: "Web Developer Bootcamp",
      issuer: "Udemy",
      year: "[2025]",
      href: "https://www.udemy.com/certificate/UC-c9f61370-4393-4738-a144-00318cd9aa5e/",
    },
    {
      name: "Next.js App Router",
      issuer: "Vercel",
      year: "[2026]",
      href: "https://drive.google.com/file/d/1ALzdZK0L7-p5UoNiUiiZjjE-Xg1lxSlO/view?usp=sharing",
    },
  ],
  repos: [
    {
      name: "[repo-01]",
      description: "[One-line description of an open-source project.]",
      language: "Python",
      href: "https://github.com/[handle]/[repo]",
    },
    {
      name: "[repo-02]",
      description: "[One-line description of an open-source project.]",
      language: "TypeScript",
      href: "https://github.com/[handle]/[repo]",
    },
    {
      name: "[repo-03]",
      description: "[One-line description of an open-source project.]",
      language: "Python",
      href: "https://github.com/[handle]/[repo]",
    },
  ],
  contact: {
    lede: "Have a role in mind, or a anything to discuss?",
    copy: "Email is the fastest way to reach me. I am happy to discuss about collabrations and contributions.",
    cta: "Email Me",
    subject: "Hello from your portfolio",
  },
};
