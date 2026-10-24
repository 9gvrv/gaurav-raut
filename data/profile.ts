/**
 * All site copy and links live here.
 *
 * This file is scaffolded. Values wrapped in [SQUARE BRACKETS] are explicit
 * placeholders: employment history, project names, links, dates and
 * certifications are examples, not claims. Replace them before publishing.
 * The email address is also a placeholder and is used by the working mailto
 * links, so swap it for the real address.
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
  };
};

export const profile: Profile = {
  name: "Gaurav Raut",
  handle: "[handle]",
  role: "Full-stack engineer focused on backend systems and AI.",
  description:
    "Backend and AI engineer building retrieval pipelines, agent runtimes, and the APIs around them.",
  bio: "I build the parts of AI products that have to hold up in production: retrieval pipelines, agent runtimes, and the APIs around them. My work sits mostly in Python, TypeScript, and the infrastructure that keeps both honest. I care about systems that stay legible when they fail.",
  location: "[City, Country]",
  email: "hello@example.com",
  siteUrl: "https://example.com",
  now: "Currently building [PLACEHOLDER], and spending most of my time on agent evaluation, retrieval quality, and tool-use reliability.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/[handle]",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/[handle]",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/[handle]",
      icon: "x",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      icon: "mail",
    },
  ],
  experience: [
    {
      role: "Senior Backend Engineer",
      org: "[PLACEHOLDER] Company",
      location: "[Remote]",
      period: "2024 – present",
      current: true,
      bullets: [
        "Owned [PLACEHOLDER] service from [starting state] to [measurable outcome].",
        "Reduced [metric] by [amount] by [specific engineering change].",
        "Led [PLACEHOLDER] migration with [team size] engineers and [scope].",
      ],
    },
    {
      role: "AI Engineer",
      org: "[PLACEHOLDER] Startup",
      location: "[City]",
      period: "2022 – 2024",
      bullets: [
        "Built retrieval and evaluation infrastructure for [PLACEHOLDER] product.",
        "Shipped [PLACEHOLDER] agent workflow used by [audience or team].",
        "Cut [latency or cost metric] from [before] to [after].",
      ],
    },
    {
      role: "Software Engineer",
      org: "[PLACEHOLDER] Company",
      location: "[City]",
      period: "2020 – 2022",
      bullets: [
        "Delivered [PLACEHOLDER] backend feature for [product or customer].",
        "Improved reliability of [PLACEHOLDER] through [specific change].",
      ],
    },
  ],
  projects: [
    {
      title: "[PROJECT 01] Agent runtime",
      year: "2026",
      problem: "Long-running agents needed durable tool calls without losing traceability.",
      outcome: "A typed orchestration layer with retries, audit logs, and per-run budgets.",
      stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      architecture:
        "FastAPI control plane / worker queue / Postgres event log / MCP tool adapters",
      links: [
        { label: "Live site", href: "https://example.com" },
        {
          label: "Source",
          href: "https://github.com/[handle]/[repo]",
          icon: "github",
        },
      ],
    },
    {
      title: "[PROJECT 02] Retrieval evaluation harness",
      year: "2026",
      problem: "RAG changes were hard to compare without a repeatable baseline.",
      outcome: "A harness that scores retrieval and answer quality across every commit.",
      stack: ["Python", "PostgreSQL", "pgvector", "Pytest"],
      architecture:
        "Ingest -> chunk -> hybrid retrieval -> judged evals; results stored per commit",
      links: [
        { label: "Live site", href: "https://example.com" },
        {
          label: "Source",
          href: "https://github.com/[handle]/[repo]",
          icon: "github",
        },
      ],
    },
    {
      title: "[PROJECT 03] Internal API platform",
      year: "2025",
      problem: "Teams kept rebuilding auth, pagination, and rate limits from scratch.",
      outcome: "One documented service template with shared middleware and typed contracts.",
      stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
      architecture:
        "Node services behind a typed gateway; OpenAPI as the shared contract",
      links: [
        {
          label: "Source",
          href: "https://github.com/[handle]/[repo]",
          icon: "github",
        },
      ],
    },
    {
      title: "[PROJECT 04] Operations console",
      year: "2025",
      problem: "Operators lacked a readable view of [PLACEHOLDER] workflows.",
      outcome: "A compact Next.js console with server-side data fetching and clear empty states.",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PostgreSQL"],
      architecture:
        "Next.js App Router / server components / Postgres read models",
      links: [
        { label: "Live site", href: "https://example.com" },
        {
          label: "Source",
          href: "https://github.com/[handle]/[repo]",
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
      items: ["RAG", "Agentic systems", "MCP", "LangChain", "Evals"],
    },
    {
      label: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      label: "Infra / tools",
      items: ["Docker", "Kubernetes", "GitHub Actions", "Linux"],
    },
  ],
  certifications: [
    {
      name: "[Certification name]",
      issuer: "[Issuer]",
      year: "2026",
      href: "https://example.com/verify",
    },
    {
      name: "[Certification name]",
      issuer: "[Issuer]",
      year: "2025",
      href: "https://example.com/verify",
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
    lede: "Have a role in mind, or a system that needs building?",
    copy: "Email is the fastest way to reach me. I am happy to talk through backend architecture, agentic systems, or the unglamorous parts of making them reliable.",
  },
};
