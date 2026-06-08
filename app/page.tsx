type Link = {
  label: string;
  href: string;
};

type Project = {
  num: string;
  name: string;
  desc: string;
  tech: string;
  link: Link;
};

type ContactItem = {
  label: string;
  value: string;
  href: string;
};

type PortfolioData = {
  name: string;
  title: string;
  status: string;
  links: Link[];
  stack: string[];
  projects: Project[];
  contact: ContactItem[];
};

const data: PortfolioData = {
  name: "Gaurav Raut",
  title: "Full-stack engineer — APIs, interfaces & the things in between",
  status: "Available for work · Mumbai",
  links: [
    { label: "github.com/9gvrv", href: "https://github.com/9gvrv" },
    { label: "linkedin.com/in/gaurav", href: "https://www.linkedin.com/in/gaurav-raut-27071b2b6?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { label: "gaurav@dev.", href: "mailto:gauravraut9124@gmail.com" },
  ],
  stack: [
    "TypeScript", "React", "Node.js", "PostgreSQL",
    "Linux", "Docker", "Express", "GraphQL", "Python",
    "git", 
  ],
  projects: [
    {
      num: "01",
      name: "Plana",
      desc: "Plana is a Trello-inspired workboard application currently under development, designed to help individuals and teams organize projects through boards, lists, and task card",
      tech: "React · Node · Express · Postgres",
      link: { label: "github ↗", href: "https://github.com/9gvrv/plana" },
    },
    {
      num: "02",
      name: "cartify",
      desc: "Cartify is a frontend-focused shopping cart application built using React and TypeScript, designed to simulate core e-commerce workflows including product browsing, cart management, and a multi-step checkout process",
      tech: "React · Typescript · React Router · fetch api",
      link: { label: "github ↗", href: "https://github.com/9gvrv/cart" },
    },
    {
      num: "03",
      name: "stdout",
      desc: "A minimal blog-style message board built with Node.js, Express, PostgreSQL, and EJS.",
      tech: "JavaScript · Expresss · ejs · postgres",
      link: { label: "github ↗", href: "https://github.com/9gvrv/Stdout" },
    },
  ],
  contact: [
    { label: "Email", value: "gaurav@dev.io", href: "mailto:gauravraut9124@gmail.com" },
    { label: "Resume", value: "PDF ↗", href: "https://drive.google.com/file/d/1AVzftKExVPXqnhueMjweKM1PhhBe9YPJ/view?usp=sharing" },
    { label: "Twitter", value: "@gaurav", href: "https://x.com/GauravRaut26834" },
  ],
};

const fraunces = { fontFamily: "'Fraunces', serif" } as const;

function HeroLinks({ links }: { links: Link[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-xs text-neutral-500 no-underline border-b border-neutral-300 pb-px hover:text-neutral-900 hover:border-neutral-900 transition-colors duration-150"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-14">
      {stack.map((s) => (
        <span
          key={s}
          className="text-xs px-2.5 py-1 border border-neutral-200 rounded-sm text-neutral-500"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function ContactRow({ items }: { items: ContactItem[] }) {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map((c) => (
        <div key={c.label} className="text-xs">
          <span className="block text-[11px] text-neutral-300 uppercase tracking-wider mb-1">
            {c.label}
          </span>
          <a
            href={c.href}
            className="text-neutral-900 no-underline border-b border-neutral-200 pb-px hover:border-neutral-900 transition-colors duration-150"
          >
            {c.value}
          </a>
        </div>
      ))}
    </div>
  );
}


export default function Portfolio() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap');`}</style>

      <div className="font-mono text-neutral-900 min-h-screen bg-white px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-5xl mx-auto">
          {/* Nav */}
          <header className="flex items-center justify-between mb-24">
            <span
              className={`text-lg font-semibold tracking-tight`}
              style={fraunces}
            >
              {data.name}
            </span>

            <nav className="flex gap-6 text-xs text-neutral-500">
              <a href="#projects" className="hover:text-neutral-900">
                Work
              </a>
              <a href="#contact" className="hover:text-neutral-900">
                Contact
              </a>
            </nav>
          </header>

          {/* Hero */}
          <section className="mb-16 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-6">
              {data.status}
            </p>

            <h1
              className="text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-6"
              style={fraunces}
            >
              {data.name}
            </h1>

            <p className="max-w-2xl text-base text-neutral-500 leading-relaxed mb-8">
              {data.title}
            </p>

            <HeroLinks links={data.links} />
          </section>

          {/* Stack */}
          <section className="mb-16">
            <p className="text-[12px] tracking-[0.25em] uppercase text-neutral-400 mb-5">
              Stack
            </p>

            <div className="max-w-4xl">
              <StackTags stack={data.stack} />
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-10">
              Works
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
              {data.projects.map((project) => (
                <div key={project.num} className="space-y-4">
                  <p className="text-[11px] text-neutral-300">
                    {project.num}
                  </p>

                  <h3
                    className="text-2xl leading-tight font-semibold"
                    style={fraunces}
                  >
                    {project.name}
                  </h3>

                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {project.desc}
                  </p>

                  <p className="text-[11px] text-neutral-400">
                    {project.tech}
                  </p>

                  <a
                    href={project.link.href}
                    className="inline-block text-xs border-b border-neutral-300 pb-px"
                  >
                    {project.link.label}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-10">
              Education
            </p>

            <div className="max-w-4xl space-y-12">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3
                    className="text-2xl font-semibold leading-tight mb-2"
                    style={fraunces}
                  >
                    Bachelor of Engineering in Computer Engineering
                  </h3>

                  <p className="text-sm text-neutral-500 mb-2">
                    Mumbai University
                  </p>

                  <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                    Focused on software engineering, operating systems, databases,
                    computer networks, machine learning, and distributed systems.
                  </p>
                </div>

                <div className="text-sm text-neutral-400 whitespace-nowrap">
                  2022 — 2026
                </div>
              </div>

              {/* <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3
                    className="text-2xl font-semibold leading-tight mb-2"
                    style={fraunces}
                  >
                    Higher Secondary Education
                  </h3>

                  <p className="text-sm text-neutral-500 mb-2">
                    RJ Jhunj
                  </p>

                  <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                    Studied Mathematics, Physics, Chemistry, and Computer Science.
                  </p>
                </div>

                <div className="text-sm text-neutral-400 whitespace-nowrap">
                  2020 — 2022
                </div>
              </div> */}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="border-t border-neutral-100 pt-12 pb-8"
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-8">
              Get In Touch
            </p>

            <ContactRow items={data.contact} />
          </section>
        </div>
      </div>
    </>
  );
}