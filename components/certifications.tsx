import { Section } from "@/components/section";
import { profile } from "@/data/profile";

export function Certifications() {
  return (
    <Section id="certifications" label="certifications">
      <ul className="cert-list">
        {profile.certifications.map((certification) => (
          <li
            key={`${certification.name}-${certification.year}`}
            className="cert-row"
          >
            <div className="row-main">
              <a href={certification.href} className="row-title text-link">
                {certification.name}
              </a>
              <p className="row-meta">{certification.issuer}</p>
            </div>
            <span className="row-year mono">{certification.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
