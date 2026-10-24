import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      data-section={id}
      aria-labelledby={`${id}-label`}
      className={`section-shell ${className}`.trim()}
    >
      <div className="section-rail">
        <h2 id={`${id}-label`} className="section-label">
          {label}
        </h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
