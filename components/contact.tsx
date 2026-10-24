import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/profile";

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    profile.contact.subject,
  )}`;

  return (
    <Section id="contact" label="contact">
      <p className="contact-lede">{profile.contact.lede}</p>
      <p className="contact-copy">{profile.contact.copy}</p>

      <div className="contact-actions">
        <a
          href={mailto}
          className="email-button"
          aria-label={`Email ${profile.name} at ${profile.email}`}
        >
          {profile.contact.cta}
        </a>
        <span className="email-address mono">{profile.email}</span>
      </div>

      <SocialLinks
        links={profile.socials}
        label="Contact social links"
        compact
      />
    </Section>
  );
}
