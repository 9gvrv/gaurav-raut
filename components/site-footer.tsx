import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="frame footer-inner">
        <p className="mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#main-content" className="text-link mono">
          Back to top
        </a>
      </div>
    </footer>
  );
}
