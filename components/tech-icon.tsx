import { getTechIcon } from "@/data/tech-icons";

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className = "" }: TechIconProps) {
  const icon = getTechIcon(name);

  if (!icon) return null;

  return (
    <span data-tech-icon className={`tech-icon ${className}`.trim()} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="size-[1em]"
      >
        <path fill="currentColor" d={icon.path} />
      </svg>
    </span>
  );
}

export function TechChip({ name }: { name: string }) {
  return (
    <span className="tech-chip">
      <TechIcon name={name} />
      <span>{name}</span>
    </span>
  );
}
