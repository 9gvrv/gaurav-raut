import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { TechChip } from "@/components/tech-icon";
import { profile } from "@/data/profile";

export function Projects() {
  return (
    <Section id="projects" label="projects">
      <div className="project-list">
        {profile.projects.map((project) => (
          <article key={project.title} className="project">
            <div className="project-head">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-year mono">{project.year}</span>
            </div>

            <dl className="project-brief">
              <dt>problem</dt>
              <dd>{project.problem}</dd>
              <dt>outcome</dt>
              <dd>{project.outcome}</dd>
            </dl>

            {project.architecture ? (
              <p className="arch-note">
                <span className="arch-label mono">arch</span>
                <span>{project.architecture}</span>
              </p>
            ) : null}

            <div className="project-foot">
              <ul
                className="tech-list"
                aria-label={`${project.title} technologies`}
              >
                {project.stack.map((technology) => (
                  <li key={technology}>
                    <TechChip name={technology} />
                  </li>
                ))}
              </ul>

              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="project-link text-link mono"
                    aria-label={`${project.title}: ${link.label}`}
                  >
                    {link.icon === "github" ? (
                      <GitHubIcon className="project-link-icon" />
                    ) : null}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
