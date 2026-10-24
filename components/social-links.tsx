import type { ComponentType, SVGProps } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "@/components/icons";
import type { SocialIcon, SocialLink } from "@/data/profile";

const socialIcons: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: MailIcon,
};

type SocialLinksProps = {
  links: SocialLink[];
  label?: string;
  compact?: boolean;
};

export function SocialLinks({
  links,
  label = "Social links",
  compact = false,
}: SocialLinksProps) {
  return (
    <nav
      aria-label={label}
      className={`social-links ${compact ? "social-links-compact" : ""}`.trim()}
    >
      {links.map((link) => {
        const Icon = socialIcons[link.icon];
        const isExternal = link.href.startsWith("http");

        return (
          <a
            key={link.label}
            href={link.href}
            className="social-link text-link"
            rel={isExternal ? "me noreferrer" : undefined}
          >
            <Icon className="social-icon" />
            <span>{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
