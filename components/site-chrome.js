import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <Link href="/" aria-label="The Golf Cart home">
          <Image src="/logo-wordmark.png" alt="The Golf Cart" width={210} height={105} priority />
        </Link>
      </div>
      <nav className="site-header__nav" aria-label="Site">
        <Link href="/">Home</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/#faqs">FAQs</Link>
        <Link href="/packages">Packages</Link>
        <Link href="/packages#contact">Contact Us</Link>
      </nav>
      <div className="site-header__actions">
        <a href="https://www.linkedin.com/company/the-golf-cart" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/thegolfcartny/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.facebook.com/thegolfcart315" target="_blank" rel="noreferrer">
          Facebook
        </a>
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
          <a href="https://www.linkedin.com/company/the-golf-cart" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/thegolfcartny/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/thegolfcart315" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
