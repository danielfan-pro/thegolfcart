import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { faqs, featuredEvents, heroHighlights, testimonials } from "../components/site-data";

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero section">
        <div className="hero__content">
          <p className="eyebrow">Central New York&apos;s First Mobile Golf Trailer</p>
          <h1>Tee Off Anywhere</h1>
          <p className="hero__copy">
            A full mobile golf simulator experience straight to your home, event, or business.
            Book us for birthdays, corporate events, fundraisers, weddings, tailgates, and weekend
            hangouts.
          </p>
          <div className="hero__actions">
            <Link href="/packages" className="button button--solid">
              Book Now
            </Link>
            <a href="#about" className="button button--ghost">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero__logoWrap">
          <Image
            src="/logo-main.png"
            alt="The Golf Cart"
            width={540}
            height={320}
            className="hero__logo"
            priority
          />
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="card-grid card-grid--four">
          {heroHighlights.map((item) => (
            <article key={item.title} className="mini-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link href="/packages">Get Started →</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Experiences</p>
          <h2>Bring the golf party anywhere</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-card__image">
              <Image src="/closest-to-pin.jpg" alt="Closest to the pin challenge" fill />
            </div>
            <div className="feature-card__body">
              <h3>Host closest to the pin!</h3>
              <p>
                Step up, take your shot, and compete to land the ball closest to the pin.
                Precision and control will decide the winner.
              </p>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-card__image">
              <Image src="/long-drive.jpg" alt="Longest drive contest" fill />
            </div>
            <div className="feature-card__body">
              <h3>Host longest drive contests!</h3>
              <p>
                Compete in high-energy longest drive contests where golfers battle to hit the
                farthest shot down the fairway.
              </p>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-card__image">
              <Image src="/cheers.jpg" alt="Group event with simulator" fill />
            </div>
            <div className="feature-card__body">
              <h3>Play full rounds of 9 or 18</h3>
              <p>
                Play full rounds of 9 or 18 holes for a complete and immersive golf experience,
                perfect for players of all skill levels.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <p className="eyebrow">How It Works</p>
          <h2>Easy setup, real event energy</h2>
        </div>
        <div className="steps">
          <article className="step">
            <span>01</span>
            <h3>Tell Us About Your Event</h3>
            <p>Share your event&apos;s date, address, and time.</p>
          </article>
          <article className="step">
            <span>02</span>
            <h3>We Handle Everything</h3>
            <p>Delivery, setup, and on-site support.</p>
          </article>
          <article className="step">
            <span>03</span>
            <h3>Play &amp; Enjoy</h3>
            <p>Your guests tee off with no-stress entertainment.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Mobile Golf Entertainment For</p>
          <h2>Any crowd that wants something memorable</h2>
        </div>
        <div className="pill-grid">
          {featuredEvents.map((item) => (
            <div key={item} className="pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section section--map">
        <div className="map-copy">
          <p className="eyebrow">Our Service Area</p>
          <h2>We service Central New York.</h2>
          <p>
            Currently, our standard coverage is roughly a 30 mile radius around Syracuse, NY.
          </p>
          <p>
            Need us outside that area? We&apos;re happy to travel to accommodate your event for an
            additional travel fee.
          </p>
          <p>
            No matter the location, we deliver our signature Tee Off Anywhere experience wherever
            your event takes place.
          </p>
        </div>
        <div className="map-card">
          <Image src="/service-map.jpg" alt="Service area map" fill />
        </div>
      </section>

      <section id="faqs" className="section section--muted">
        <div className="section-heading">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>What people usually ask before they book</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Client&apos;s Reviews</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonial">
              <p>{item.quote}</p>
              <footer>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
