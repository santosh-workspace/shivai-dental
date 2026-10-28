import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "About — Shivai Clinic",
  description:
    "Meet Dr. Ankita Tarte and the team behind Shivai Clinic in Charholi, Pune.",
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="page-hero__title">
            A clinic built on <em className="display text-accent">care.</em>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            We believe dental and aesthetic care should be transformative, not transactional.
            Every detail — from the calm of our rooms to the precision of a restoration — is
            considered.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <Reveal className="feature__image reveal--left">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                alt="Shivai Clinic clinic"
                loading="lazy"
              />
            </Reveal>
            <Reveal className="reveal--right">
              <span className="eyebrow">Our Philosophy</span>
              <h2 style={{ margin: "var(--space-4) 0 var(--space-6)" }}>
                Where medicine meets <em className="display text-accent">care.</em>
              </h2>
              <p className="lead">
                Shivai Clinic, Skin &amp; Hair Clinic was founded on a simple idea: that your
                smile, skin and hair are central to your confidence, and their care deserves
                both clinical rigour and a gentle touch.
              </p>
              <p style={{ marginTop: "var(--space-4)" }}>
                We reject the rushed, conveyor-belt model of care. Each patient receives a
                personalised treatment plan, a dedicated clinician, and the time they deserve.
              </p>
              <p style={{ marginTop: "var(--space-4)" }}>
                Our clinic in Charholi is intentionally calm and welcoming — because healing
                begins the moment you walk through the door.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Doctor</span>
            <h2 className="section-head__title">
              Dr. Ankita Sachin Tarte, <em className="display text-accent">BDS</em>
            </h2>
          </Reveal>
          <div className="feature-row feature-row--reverse">
            <Reveal className="feature__image reveal--right">
              <img
                src="/doctor.png"
                alt="Dr. Ankita Tarte"
                loading="lazy"
              />
              <div className="feature__badge">
                <div className="feature__badge-num">BDS</div>
                <div className="feature__badge-label">Dental Surgeon</div>
              </div>
            </Reveal>
            <Reveal className="reveal--left">
              <p className="lead">
                Dr. Ankita Sachin Tarte is a dedicated dentist and dental surgeon with 8 years
                of clinical experience. She leads Shivai Clinic&apos;s cosmetic and restorative
                practice with a focus on pain-minimised, patient-first care.
              </p>
              <p style={{ marginTop: "var(--space-4)" }}>
                Her expertise spans cosmetic dentistry, dental aesthetics, restorative
                treatments and oral surgery — always with a gentle hand and an artist&apos;s eye
                for natural results.
              </p>
              <ul className="feature__list">
                <li>BDS — Dental Surgeon</li>
                <li>8 years of clinical experience</li>
                <li>Cosmetic &amp; restorative dentistry</li>
                <li>Skin &amp; hair treatment coordination</li>
                <li>Patient-first, pain-minimised approach</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Our Values
            </span>
            <h2 className="section-head__title">
              What we <em className="display text-accent">stand for.</em>
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {[
              { title: "Precision", desc: "Sub-millimetre accuracy in every restoration. We use modern techniques and quality materials for lasting results." },
              { title: "Honesty", desc: "We recommend only what you need. No upselling, no pressure — just clear, evidence-based advice." },
              { title: "Comfort", desc: "Gentle techniques, a calm environment and a caring team. Your comfort is our priority, not an afterthought." },
            ].map((v) => (
              <Reveal key={v.title}>
                <div className="service-card">
                  <h3 className="service-card__title">{v.title}</h3>
                  <p className="service-card__desc">{v.desc}</p>
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
              Ready to meet us? <em className="display text-accent">Book a visit.</em>
            </h2>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Schedule Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
