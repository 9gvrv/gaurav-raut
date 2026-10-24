import { profile } from "@/data/profile";
import { Section } from "@/components/section";

export function Now() {
  return (
    <Section id="now" label="now">
      <div className="now-card">
        <p>{profile.now}</p>
      </div>
    </Section>
  );
}
