import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="frame site-header-inner">
        <span className="handle" aria-label={`Handle ${profile.handle}`}>
          <span className="handle-at" aria-hidden="true">
            @
          </span>
          {profile.handle}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
