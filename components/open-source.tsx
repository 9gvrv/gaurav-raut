import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { TechIcon } from "@/components/tech-icon";
import { profile } from "@/data/profile";

export function OpenSource() {
  const githubUrl =
    profile.socials.find((link) => link.icon === "github")?.href ??
    "https://github.com";

  return (
    <Section id="open-source" label="open source">
      <ul className="repo-list">
        {profile.repos.map((repo) => (
          <li key={repo.name} className="repo-row">
            <div className="row-main">
              <a href={repo.href} className="row-title text-link">
                {repo.name}
              </a>
              <p className="row-meta">{repo.description}</p>
            </div>
            <span className="repo-language mono">
              <TechIcon name={repo.language} />
              {repo.language}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={githubUrl}
        className="section-action text-link mono"
        rel="me noreferrer"
      >
        <GitHubIcon className="section-action-icon" />
        More on GitHub
      </a>
    </Section>
  );
}
