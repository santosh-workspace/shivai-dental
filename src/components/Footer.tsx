"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer__brand">
            <Link href="/" className="logo">
              <img src="/logo.png" alt="Shivai Clinic" style={{ height: 50, width: "auto" }} />
              <span>Shivai Clinic</span>
            </Link>
            <p>Premium dental, skin &amp; hair care in Charholi, Pune. Crafting confident smiles with precision and care.</p>
          </div>
          <div className="footer__col">
            <h4>Explore</h4>
            <div className="footer__links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <div className="footer__links">
              <Link href="/services#cosmetic">Cosmetic Dentistry</Link>
              <Link href="/services#aesthetics">Dental Aesthetics</Link>
              <Link href="/services#skin">Skin Treatments</Link>
              <Link href="/services#hair">Hair Care</Link>
            </div>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <div className="footer__links">
              <a href="tel:+918329008701">+91 83290 08701</a>
              <a href="mailto:shivaidental@gmail.com">shivaidental@gmail.com</a>
              <Link href="/contact">Shop No 205, 2nd Floor, Parshwa Capital, Charholi Rd, Pune 411057</Link>
              <Link href="/contact">Mon–Sat 10am–2pm, 5pm–9pm</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} Shivai Clinic, Skin &amp; Hair Clinic. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </div>
    </footer>
  );
}
