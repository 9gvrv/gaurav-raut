import {
  renderShareCard,
  shareCardAlt,
  shareCardSize,
} from "./share-card";

// Required for `output: 'export'`: static export must prerender metadata image routes.
export const dynamic = "force-static";

export const alt = shareCardAlt;
export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return renderShareCard();
}
