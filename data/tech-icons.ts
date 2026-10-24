import type { SimpleIcon } from "simple-icons";
import {
  siCelery,
  siDocker,
  siFastapi,
  siGithubactions,
  siKubernetes,
  siLangchain,
  siLinux,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPytest,
  siPython,
  siReact,
  siRedis,
  siSqlalchemy,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const technologyIcons = new Map<string, SimpleIcon>([
  ["python", siPython],
  ["fastapi", siFastapi],
  ["node.js", siNodedotjs],
  ["postgresql", siPostgresql],
  ["redis", siRedis],
  ["sqlalchemy", siSqlalchemy],
  ["celery", siCelery],
  ["pytest", siPytest],
  ["langchain", siLangchain],
  ["mcp", siModelcontextprotocol],
  ["model context protocol", siModelcontextprotocol],
  ["typescript", siTypescript],
  ["react", siReact],
  ["next.js", siNextdotjs],
  ["tailwind css", siTailwindcss],
  ["docker", siDocker],
  ["kubernetes", siKubernetes],
  ["github actions", siGithubactions],
  ["linux", siLinux],
]);

export function getTechIcon(name: string): SimpleIcon | undefined {
  return technologyIcons.get(name.trim().toLowerCase());
}
