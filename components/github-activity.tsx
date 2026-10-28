import { Section } from "@/components/section";
import { GithubCalendar } from "@/components/github-calendar";
import { GitHubIcon } from "@/components/icons";
import { profile } from "@/data/profile";

/**
 * Extracts the GitHub account name from the profile's GitHub social link so
 * the graph and the link below it always reference the same account.
 */
function githubUsername(href: string): string | null {
  try {
    const segments = new URL(href).pathname.split("/").filter(Boolean);
    return segments.pop() ?? null;
  } catch {
    return null;
  }
}

export function GithubActivity() {
  const githubUrl =
    profile.socials.find((link) => link.icon === "github")?.href ??
    "https://github.com";
  const username = githubUsername(githubUrl);

  return (
    <Section id="github-activity" label="github activity">
      {username && (
        <div className="github-calendar">
          <GithubCalendar username={username} />
        </div>
      )}

      <a href={githubUrl} className="section-action text-link mono" rel="me noreferrer">
        <GitHubIcon className="section-action-icon" />
        More on GitHub
      </a>
    </Section>
  );
}
