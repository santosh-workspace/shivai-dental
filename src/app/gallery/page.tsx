import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Gallery — Shivai Clinic",
  description:
    "Before and after transformations and clinic photos from Shivai Clinic, Charholi, Pune.",
};

const gallery = [
  { src: "/gallery1.png", label: "Clinic" },
  { src: "/gallery2.png", label: "Treatment" },
  { src: "/gallery3.png", label: "Result" },
  { src: "/gallery4.png", label: "Smile" },
  { src: "/gallery5.png", label: "Care" },
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
          <h1 className="page-hero__title">
            Our <em className="display text-accent">gallery.</em>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            Real transformations from real patients. Every smile, uniquely designed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Before &amp; After</span>
            <h2 className="section-head__title">
              See the <em className="display text-accent">difference.</em>
            </h2>
          </Reveal>
          <div className="grid grid-2" style={{ marginBottom: "var(--space-16)" }}>
            <Reveal>
              <div className="gallery-item" style={{ aspectRatio: "4/3" }}>
                <img src="/before.png" alt="Before" loading="lazy" />
                <span className="gallery-item__label">Before</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="gallery-item" style={{ aspectRatio: "4/3" }}>
                <img src="/after.png" alt="After" loading="lazy" />
                <span className="gallery-item__label">After</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="section-head" delay={100}>
            <span className="eyebrow">Clinic &amp; Results</span>
            <h2 className="section-head__title">
              A closer <em className="display text-accent">look.</em>
            </h2>
          </Reveal>
          <div className="gallery-grid reveal is-visible">
            {gallery.map((g) => (
              <Reveal key={g.src}>
                <div className="gallery-item">
                  <img src={g.src} alt={g.label} loading="lazy" />
                  <span className="gallery-item__label">{g.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-elev)", textAlign: "center" }}>
        <div className="container container--narrow">
          <Reveal>
            <h2 style={{ marginBottom: "var(--space-6)" }}>
              Want results like these? <em className="display text-accent">Book a visit.</em>
            </h2>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
