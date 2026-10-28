import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";

export const metadata = {
  title: "FAQ — Shivai Clinic",
  description:
    "Frequently asked questions about treatments, appointments and care at Shivai Clinic, Charholi, Pune.",
};

const faqs = [
  { q: "Do I need an appointment?", a: "Yes, we recommend booking in advance to ensure minimal waiting time. Walk-ins are welcome subject to availability." },
  { q: "Are treatments painful?", a: "We use modern, gentle techniques and offer anaesthesia where needed. Most patients report little to no discomfort." },
  { q: "How long does teeth whitening take?", a: "In-clinic whitening takes about 60–90 minutes. Take-home kits are customised and used over 1–2 weeks." },
  { q: "Do you treat children?", a: "Yes, we offer paediatric dental care in a calm, friendly environment." },
  { q: "What payment methods do you accept?", a: "Cash, UPI, debit/credit cards and major digital wallets." },
  { q: "Is parking available?", a: "Yes, parking is available near the clinic in Charholi." },
];

export default function Faq() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>FAQ</span>
          </div>
          <h1 className="page-hero__title">
            Frequently asked <em className="display text-accent">questions.</em>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            Everything you need to know before your first visit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-elev)", textAlign: "center" }}>
        <div className="container container--narrow">
          <Reveal>
            <h2 style={{ marginBottom: "var(--space-6)" }}>
              Still have questions? <em className="display text-accent">Ask us.</em>
            </h2>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
