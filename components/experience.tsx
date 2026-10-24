import { profile } from "@/data/profile";
import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section id="experience" label="experience">
      <ol className="timeline">
        {profile.experience.map((entry) => (
          <li
            key={`${entry.role}-${entry.org}`}
            className="timeline-item"
            data-current={entry.current ? "true" : undefined}
          >
            <div className="entry-head">
              <h3 className="entry-title">{entry.role}</h3>
              <span className="entry-period mono">{entry.period}</span>
            </div>
            <p className="entry-org">
              <span>{entry.org}</span>
              <span className="entry-location mono">{entry.location}</span>
            </p>
            <ul className="entry-bullets">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
