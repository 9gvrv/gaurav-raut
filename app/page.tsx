import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { GithubActivity } from "@/components/github-activity";
import { Hero } from "@/components/hero";
import { Now } from "@/components/now";
import { OpenSource } from "@/components/open-source";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { profile } from "@/data/profile";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    description: profile.bio,
    sameAs: profile.socials
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
    knowsAbout: profile.skills.flatMap((group) => group.items),
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="frame" tabIndex={-1}>
        <Hero />
        <Now />
        {/*<Experience />*/}
        <Projects />
        <Skills />
        <Certifications />
        <GithubActivity />
        {/*<OpenSource />*/}
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
