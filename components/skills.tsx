import { Section } from "@/components/section";
import { TechChip } from "@/components/tech-icon";
import { profile } from "@/data/profile";

export function Skills() {
  return (
    <Section id="skills" label="skills">
      <div className="skill-groups">
        {profile.skills.map((group) => (
          <div key={group.label} className="skill-row">
            <h3 className="skill-label">{group.label}</h3>
            <ul className="tech-list" aria-label={`${group.label} skills`}>
              {group.items.map((skill) => (
                <li key={skill}>
                  <TechChip name={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
