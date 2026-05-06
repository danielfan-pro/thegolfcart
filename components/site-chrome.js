"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/packages", label: "Packages" },
  { href: "/packages#contact", label: "Contact Us" }
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/the-golf-cart",
    label: "LinkedIn",
    icon: "/linkedin.svg",
    key: "linkedin"
  },
  {
    href: "https://www.instagram.com/thegolfcartny/",
    label: "Instagram",
    icon: "/instagram.svg",
    key: "instagram"
  },
  {
    href: "https://www.facebook.com/thegolfcart315",
    label: "Facebook",
    icon: "/facebook.svg",
    key: "facebook"
  }
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="site-header__nav" aria-label="Site">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__brand">
          <Link href="/" aria-label="The Golf Cart home">
            <img src="/logo-main.avif" alt="The Golf Cart" className="site-header__logo" />
          </Link>
        </div>
        <div className="site-header__actions">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="social-icon-link"
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className={`social-icon social-icon--${item.key}`}
              />
            </a>
          ))}
          <Link href="/packages" className="button button--solid button--small">
            Book Now
          </Link>
        </div>
        <button
          type="button"
          className="site-header__menuButton"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__panel">
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span />
            <span />
          </button>

          <nav className="mobile-menu__nav" aria-label="Mobile site">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <div className="mobile-menu__socials">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="social-icon-link"
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className={`social-icon social-icon--${item.key}`}
                  />
                </a>
              ))}
            </div>
            <Link href="/packages#contact" className="button button--solid mobile-menu__cta" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>The Golf Cart</h2>
          <p>
            A full mobile golf simulator experience straight to your home, event, or business.
          </p>
        </div>
        <div className="site-footer__contact">
          <a href="tel:315-727-9700">315-727-9700</a>
          <a href="mailto:thegolfcartny@gmail.com">thegolfcartny@gmail.com</a>
          <p>Serving Central New York from Syracuse and beyond.</p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© 2026 The Golf Cart</p>
      </div>
    </footer>
  );
}
