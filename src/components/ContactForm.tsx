"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h3 style={{ marginBottom: "var(--space-2)" }}>Book an Appointment</h3>
      <p style={{ marginBottom: "var(--space-8)", fontSize: "0.9375rem" }}>
        Fill in your details and we&apos;ll confirm your slot.
      </p>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input className="form-input" type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone</label>
          <input className="form-input" type="tel" id="phone" name="phone" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="service">Service</label>
        <select className="form-select" id="service" name="service">
          <option>Cosmetic Dentistry</option>
          <option>Dental Aesthetics</option>
          <option>Dental Surgery</option>
          <option>Skin Treatment</option>
          <option>Hair Care</option>
          <option>General Check-up</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          placeholder="Tell us about your concern..."
        />
      </div>
      <button
        type="submit"
        className="btn btn--primary"
        style={{ width: "100%" }}
        disabled={status !== "idle"}
      >
        {status === "idle" && "Request Appointment"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "✓ Request Sent"}
      </button>
    </form>
  );
}
