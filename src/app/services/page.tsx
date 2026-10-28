import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Services — Shivai Clinic",
  description:
    "Multispeciality Dental & Cosmetic Clinic in Charholi, Pune. Cosmetic dentistry, skin treatments, hair transplant, botox, fillers and more.",
};

const treatments = [
  { id: "cosmetic", title: "Cosmetic Treatments", desc: "Smile design, veneers, bonding and contouring for a confident smile.", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80" },
  { id: "acne", title: "Acne & Pimple Treatment", desc: "Targeted acne care for clearer, healthier skin.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" },
  { id: "tan", title: "Tan & Stretch Mark Removal", desc: "Reduce tan and stretch marks for even-toned skin.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
  { id: "hydra", title: "Hydra Facial", desc: "Deep cleansing and hydration for a radiant glow.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" },
  { id: "vampire", title: "Vampire Facial", desc: "PRP-based rejuvenation for youthful, glowing skin.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
  { id: "peels", title: "Skin Tightening & Chemical Peels", desc: "Firm and brighten skin with advanced peels.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" },
  { id: "fillers", title: "Dermal Fillers", desc: "Restore volume and contour for a natural, youthful look.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
  { id: "hair", title: "Hair Transplant", desc: "Natural-looking hair restoration by experienced specialists.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80" },
  { id: "antiage", title: "Anti Ageing", desc: "Treatments to reduce fine lines and restore youth.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" },
  { id: "laser", title: "Laser Hair Removal & Photo Facial", desc: "Long-lasting hair reduction and skin rejuvenation.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
  { id: "omega", title: "Omega Facial & Microneedling", desc: "Boost collagen and glow with microneedling.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" },
  { id: "botox", title: "Botox", desc: "Smooth fine lines and wrinkles for a youthful look.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
  { id: "threads", title: "Facial Threads", desc: "Non-surgical lift for a firmer, youthful appearance.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1 className="page-hero__title">
            Our <em className="display text-accent">services.</em>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            Multispeciality Dental &amp; Cosmetic Clinic — comprehensive dental, skin and
            hair care under one roof.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {treatments.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 100}>
                <div className="service-card" id={t.id}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      marginBottom: "var(--space-4)",
                      background: "var(--bg-elev)",
                    }}
                  >
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="service-card__title" style={{ fontSize: "1.25rem" }}>
                    {t.title}
                  </h3>
                  <p className="service-card__desc">{t.desc}</p>
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
              Ready to begin? <em className="display text-accent">Book a visit.</em>
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
