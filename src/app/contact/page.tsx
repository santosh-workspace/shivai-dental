import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact — Shivai Clinic",
  description:
    "Contact Shivai Clinic in Charholi, Pune. Address, phone, hours and appointment booking.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="page-hero__title">
            Get in <em className="display text-accent">touch.</em>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            We&apos;d love to hear from you. Book a consultation or ask us anything.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal className="contact-info reveal--left">
              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">Address</div>
                  <div className="contact-item__value">
                    Shop No 205, 2nd Floor, Parshwa Capital, Charholi Road, Dabhade
                    Vasti, Near Mhasoba Maharaj Mandir Chowk, Charholi, Pune 411057
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">Phone</div>
                  <div className="contact-item__value">
                    <a href="tel:+918329008701">+91 83290 08701</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">Email</div>
                  <div className="contact-item__value">
                    <a href="mailto:shivaidental@gmail.com">shivaidental@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">Hours</div>
                  <div className="contact-item__value">
                    Mon–Sat: 10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM
                    <br />
                    Sun: 10:00 AM – 2:00 PM
                  </div>
                </div>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps?q=18.655492171118492,73.90176504850388&hl=en&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivai Clinic location"
                />
              </div>
            </Reveal>

            <Reveal className="reveal--right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
