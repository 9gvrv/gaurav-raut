import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section
      data-section="intro"
      aria-labelledby="intro-title"
      className="hero"
    >
      <h1 id="intro-title" className="hero-name">
        {profile.name}
      </h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-bio">{profile.bio}</p>
      <div className="hero-meta">
        <span className="mono">{profile.location}</span>
      </div>
      <SocialLinks links={profile.socials} />
    </section>
  );
}
