import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Link from "next/link";

export const metadata = {
  title: "Shivai Clinic — Premium Dental, Skin & Hair Care in Pune",
  description:
    "Shivai Clinic in Charholi, Pune offers premium cosmetic dentistry, dental aesthetics, skin treatments and hair care. Dr. Ankita Tarte, BDS. Book your appointment today.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Shivai Clinic",
    image: "https://shivaidental.com/assets/images/clinic.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No 205, 2nd Floor, Parshwa Capital, Charholi Road, Dabhade Vasti",
      addressLocality: "Charholi, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411057",
      addressCountry: "IN",
    },
    telephone: "+91-83290-08701",
    url: "https://shivaidental.com",
    priceRange: "$$",
    openingHours: "Mo-Sa 10:00-14:00,17:00-21:00; Su 10:00-14:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "49" },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grid" />
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              <Reveal>
                <span className="eyebrow">DENTAL | SKIN | HAIR</span>
              </Reveal>
              <h1 className="hero__title">
                <span className="line"><span>Crafting</span></span>
                <span className="line"><span>Confident</span></span>
                <span className="line"><span><em className="display text-accent">Smiles.</em></span></span>
              </h1>
              <Reveal>
                <p className="hero__subtitle">
                  Multispeciality Dental &amp; Cosmetic Clinic. Cosmetic dentistry, skin
                  rejuvenation and hair treatments — all under one roof in Charholi, Pune.
                </p>
              </Reveal>
              <Reveal>
                <div className="hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--lg">
                    Book Appointment
                  </Link>
                  <Link href="/services" className="btn btn--ghost btn--lg">
                    Explore Services
                  </Link>
                </div>
              </Reveal>
              <Reveal>
                <div className="hero__meta">
                  <div className="hero__meta-item">
                    <span className="hero__meta-num">
                      <CountUp value={8} suffix="+" />
                    </span>
                    <span className="hero__meta-label">Years Experience</span>
                  </div>
                  <div className="hero__meta-item">
                    <span className="hero__meta-num">
                      <CountUp value={49} suffix="" />
                    </span>
                    <span className="hero__meta-label">Patient Rating 4.9</span>
                  </div>
                  <div className="hero__meta-item">
                    <span className="hero__meta-num">
                      <CountUp value={32} suffix="+" />
                    </span>
                    <span className="hero__meta-label">Treatments Offered</span>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal className="hero__visual reveal--right">
              <div className="hero__frame">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
                  alt="Shivai Clinic clinic interior"
                  loading="eager"
                />
              </div>
              <div className="hero__badge">Charholi, Pune</div>
              <div className="hero__accent-line" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Contact Box */}
      <section style={{ background: "var(--bg-elev)", padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
            {[
              { icon: "📞", title: "Need Dental Services?", desc: "Call on : +91 83290 08701" },
              { icon: "🕐", title: "Opening Hours", desc: "Mon–Sat 10:00 AM – 9:00 PM" },
              { icon: "✉️", title: "Schedule Appointment", desc: "shivaidental@gmail.com" },
            ].map((c) => (
              <Reveal key={c.title}>
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "var(--space-6)",
                    display: "flex",
                    gap: "var(--space-4)",
                    alignItems: "center",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{c.icon}</div>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", marginBottom: "var(--space-1)" }}>{c.title}</h3>
                    <p style={{ fontSize: "0.9375rem", margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="section-head__title">
              Care as an <em className="display text-accent">art form.</em>
            </h2>
            <p className="section-head__desc lead">
              From subtle refinements to complete smile and skin transformations — every
              treatment is tailored, every detail considered.
            </p>
          </Reveal>
          <div className="grid grid-3">
            {[
              { num: "01", title: "Cosmetic Dentistry", desc: "Veneers, bonding and smile design crafted to your facial harmony.", href: "/services#cosmetic" },
              { num: "02", title: "Acne & Pimple Treatment", desc: "Targeted acne care for clearer, healthier skin.", href: "/services#acne" },
              { num: "03", title: "Hydra Facial", desc: "Deep cleansing and hydration for a radiant glow.", href: "/services#hydra" },
              { num: "04", title: "Hair Transplant", desc: "Natural-looking hair restoration by experienced specialists.", href: "/services#hair" },
              { num: "05", title: "Laser Hair Removal", desc: "Long-lasting, pain-free hair reduction.", href: "/services#laser" },
              { num: "06", title: "Botox", desc: "Smooth fine lines and wrinkles for a youthful look.", href: "/services#botox" },
            ].map((s) => (
              <Reveal key={s.num}>
                <article className="service-card">
                  <div className="service-card__num">{s.num}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <Link href={s.href} className="service-card__link">
                    Learn more →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Our Process</span>
            <h2 className="section-head__title">
              A step-by-step guide to our <em className="display text-accent">dental care.</em>
            </h2>
            <p className="section-head__desc">
              From consultation to follow-up, we make your journey simple and comfortable.
            </p>
          </Reveal>
          <div className="grid grid-3">
            {[
              { num: "01", title: "Initial Consultation", desc: "Your journey begins with an in-depth consultation. We listen to your concerns and discuss your goals." },
              { num: "02", title: "Treatment by Experts", desc: "Once the plan is finalized, our expert team proceeds with your treatment with precision and care." },
              { num: "03", title: "Follow-up Care", desc: "After treatment, we schedule follow-ups to monitor your progress and ensure lasting results." },
            ].map((p) => (
              <Reveal key={p.num}>
                <div className="service-card" style={{ textAlign: "center" }}>
                  <div className="service-card__num">{p.num}</div>
                  <h3 className="service-card__title">{p.title}</h3>
                  <p className="service-card__desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Why Choose Us</span>
            <h2 className="section-head__title">
              Care you can <em className="display text-accent">trust.</em>
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {[
              { title: "Patient-Centered Care", desc: "We focus on creating a welcoming environment where patients feel heard, comfortable, and cared for at every visit." },
              { title: "Advanced Dental Technology", desc: "We use state-of-the-art equipment to provide pain-free, accurate, and efficient treatments." },
              { title: "Highly Qualified Team", desc: "Our experienced dentists are committed to offering personalized treatment plans." },
            ].map((w) => (
              <Reveal key={w.title}>
                <div className="service-card">
                  <h3 className="service-card__title">{w.title}</h3>
                  <p className="service-card__desc">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About feature */}
      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <div className="feature-row">
            <Reveal className="feature__image reveal--left">
              <img
                src="/doctor.png"
                alt="Dr. Ankita Tarte, lead dentist"
                loading="lazy"
              />
              <div className="feature__badge">
                <div className="feature__badge-num">8+</div>
                <div className="feature__badge-label">Years of Practice</div>
              </div>
            </Reveal>
            <Reveal className="reveal--right">
              <span className="eyebrow">Meet the Doctor</span>
              <h2 style={{ margin: "var(--space-4) 0 var(--space-6)" }}>
                Dr. Ankita Sachin Tarte, <em className="display text-accent">BDS</em>
              </h2>
              <p className="lead">
                A dedicated dentist and dental surgeon with 8 years of experience, Dr.
                Ankita blends clinical precision with a gentle, patient-first approach. She
                leads Shivai Clinic&apos;s cosmetic and restorative practice.
              </p>
              <p style={{ marginTop: "var(--space-4)" }}>
                Every patient is treated as a person first — never a procedure. Our clinic
                is designed to feel calm, welcoming and reassuring.
              </p>
              <ul className="feature__list">
                <li>BDS — Dental Surgeon</li>
                <li>8 years of clinical experience</li>
                <li>Cosmetic &amp; restorative dentistry focus</li>
                <li>Patient-first, pain-minimised care</li>
              </ul>
              <div style={{ marginTop: "var(--space-8)" }}>
                <Link href="/about" className="btn btn--ghost">
                  Read Full Story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-band__grid">
            <Reveal>
              <div className="stat__num">
                <CountUp value={8} suffix="+" />
              </div>
              <div className="stat__label">Years of Practice</div>
            </Reveal>
            <Reveal>
              <div className="stat__num">
                <CountUp value={98} suffix="%" />
              </div>
              <div className="stat__label">Patient Satisfaction</div>
            </Reveal>
            <Reveal>
              <div className="stat__num">
                <CountUp value={32} suffix="+" />
              </div>
              <div className="stat__label">Treatments Offered</div>
            </Reveal>
            <Reveal>
              <div className="stat__num">
                <CountUp value={5} suffix=".0" />
              </div>
              <div className="stat__label">Patient Rating</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Transformations
            </span>
            <h2 className="section-head__title">
              See the <em className="display text-accent">difference.</em>
            </h2>
            <p className="section-head__desc">
              Real patient transformations. Every smile, uniquely designed.
            </p>
          </Reveal>
          <div className="grid grid-2" style={{ maxWidth: 900, margin: "0 auto" }}>
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
          <div className="text-center mt-8">
            <Reveal>
              <Link href="/gallery" className="btn btn--ghost">
                View Full Gallery
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Patient Stories</span>
            <h2 className="section-head__title">
              Loved by those we&apos;ve <em className="display text-accent">transformed.</em>
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {[
              { initials: "PS", name: "Priya S.", role: "Cosmetic Dentistry Patient", text: "Dr. Ankita is incredibly gentle and skilled. My veneers look completely natural — I finally smile with confidence." },
              { initials: "RK", name: "Rahul K.", role: "Skin Treatment Patient", text: "Clean, modern clinic with a warm team. The skin treatment results exceeded my expectations. Highly recommended!" },
              { initials: "AM", name: "Anjali M.", role: "Dental Aesthetics Patient", text: "Painless, precise and professional. The clinic feels more like a studio than a hospital. I actually look forward to visits." },
            ].map((t) => (
              <Reveal key={t.initials}>
                <div className="testimonial">
                  <div className="testimonial__stars">★★★★★</div>
                  <p className="testimonial__text">{t.text}</p>
                  <div className="testimonial__author">
                    <div className="testimonial__avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial__name">{t.name}</div>
                      <div className="testimonial__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container container--narrow">
          <Reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Begin Your Journey
            </span>
            <h2 style={{ margin: "var(--space-4) 0 var(--space-6)" }}>
              Your best smile is <em className="display text-accent">one consultation away.</em>
            </h2>
            <p className="lead" style={{ margin: "0 auto var(--space-8)" }}>
              Complimentary consultation. No obligation. Just clarity on what&apos;s possible.
            </p>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Book Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
