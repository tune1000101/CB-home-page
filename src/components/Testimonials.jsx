import CircularGallery from "./ui/CircularGallery";
import { TESTIMONIALS } from "../lib/content";
import Reveal from "./Reveal";

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars) {
      lines.push(line.trim());
      line = word;
    } else {
      line = `${line} ${word}`;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

// Renders a review as a self-contained SVG data URI so the WebGL gallery
// needs no remote images. Portrait 700x900 matches the gallery plane aspect
// so the cover-fit shader doesn't crop the card.
function reviewCardImage({ quote, name, role }) {
  const lines = wrapText(quote, 28);
  const lineHeight = 52;
  const textStartY = 320;
  const quoteLines = lines
    .map(
      (line, i) =>
        `<text x="64" y="${textStartY + i * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#0b1220">${escapeXml(line)}</text>`
    )
    .join("");

  const stars = Array.from({ length: 5 })
    .map(
      (_, i) =>
        `<path transform="translate(${64 + i * 40}, 190) scale(1.4)" fill="#f59e0b" d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/>`
    )
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900">
  <rect width="700" height="900" rx="32" fill="#ffffff"/>
  <rect x="2" y="2" width="696" height="896" rx="30" fill="none" stroke="#e6e9f1" stroke-width="4"/>
  <rect width="700" height="12" fill="#2563eb"/>
  <text x="58" y="160" font-family="Georgia, serif" font-size="130" fill="#2563eb" opacity="0.25">&#8220;</text>
  ${stars}
  ${quoteLines}
  <line x1="64" y1="740" x2="300" y2="740" stroke="#e6e9f1" stroke-width="3"/>
  <text x="64" y="800" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#0b1220">${escapeXml(name)}</text>
  <text x="64" y="844" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#5c6674">${escapeXml(role)}</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const GALLERY_ITEMS = TESTIMONIALS.map((t) => ({
  image: reviewCardImage(t),
  text: `${t.name} · ${t.role}`,
}));

export default function Testimonials() {
  return (
    <section className="overflow-hidden border-t border-brand-border bg-brand-surface/50 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Drag or scroll to browse — real results from real businesses.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-8" style={{ height: "560px" }}>
          <CircularGallery
            items={GALLERY_ITEMS}
            bend={3}
            textColor="#0b1220"
            borderRadius={0.05}
            font="bold 26px Inter"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </Reveal>
    </section>
  );
}
