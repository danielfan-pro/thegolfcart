import Link from "next/link";

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
  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Site">
        <Link href="/">Home</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/#faqs">FAQs</Link>
        <Link href="/packages">Packages</Link>
        <Link href="/packages#contact">Contact Us</Link>
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
    </header>
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
        <div className="site-footer__links">
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
      </div>
    </footer>
  );
}
