import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { faqs, featuredEvents, heroHighlights, testimonials } from "../components/site-data";

function StepIcon({ kind }) {
  if (kind === "handshake") {
    return (
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="20.002 51.999 160.005 96"
        aria-hidden="true"
        className="step__iconSvg step__iconSvg--handshake"
      >
        <path
          fill="#010101"
          d="M179.649 99.924c-.653-1.822-1.683-3.508-2.551-5.249-1.216-2.438-2.452-4.868-3.657-7.312-1.456-2.953-2.875-5.926-4.336-8.876-1.208-2.441-2.478-4.852-3.683-7.293-1.485-3.009-2.921-6.042-4.396-9.054-1.264-2.581-2.577-5.139-3.823-7.729-.785-1.631-2.936-2.839-4.333-2.268a31 31 0 0 0-3.221 1.562c-2.714 1.498-5.407 3.036-8.105 4.566-1.429.81-2.872 1.597-4.262 2.468-1.697 1.063-2.161 3.006-1.253 4.813.417.829.833 1.663 1.188 2.52.292.706-.013 1.203-.76 1.273-1.649.157-3.226-.215-4.708-.89-1.952-.89-3.855-1.891-5.788-2.823-1.908-.921-3.847-1.775-5.737-2.73-3.054-1.541-6.162-2.829-9.589-3.352-3.585-.547-7.037-.164-10.429.977-1.408.473-2.733.404-4.119-.071-3.276-1.123-6.615-1.144-9.861-.022-1.841.637-3.571 1.636-5.287 2.587-3.052 1.69-6.106 3.389-9.069 5.232-2.676 1.663-5.456 2.16-8.489 1.413-1.004-.247-1.129-.481-.674-1.448.447-.949.91-1.891 1.378-2.829.763-1.535.26-3.679-1.204-4.566-2.323-1.405-4.693-2.73-7.058-4.066-2.283-1.291-4.606-2.515-6.868-3.841-2.797-1.641-4.912-.784-6.16 1.605-.678 1.299-1.272 2.642-1.928 3.953-1.205 2.411-2.444 4.805-3.637 7.222-1.735 3.517-3.429 7.055-5.161 10.574-1.876 3.816-3.769 7.623-5.662 11.431-2 4.021-4.064 8.01-5.991 12.066-.747 1.575-.559 3.622 1.18 4.72 1.79 1.131 3.643 2.165 5.484 3.214 2.693 1.533 5.424 3.002 8.095 4.573 2.484 1.46 4.285.935 5.715-1.033.73-1.004 1.208-2.199 1.758-3.328.482-.99.666-1.047 1.596-.476 1.983 1.217 3.986 2.401 5.969 3.617 1.528.937 3.019 1.936 4.566 2.839.844.494.8.953.345 1.732-1.488 2.55-1.475 5.222.006 7.718 1.405 2.367 3.546 3.758 6.421 3.775 1.012.006 1.175.226 1.148 1.257-.04 1.607.099 3.132.943 4.601 1.649 2.871 5.859 4.86 9.117 3.315.836-.396 1.138-.175 1.501.658.332.763.722 1.522 1.207 2.194 1.389 1.926 3.416 2.882 5.675 3.009 1.344.075 2.776-.35 4.071-.82.991-.361 1.322-.415 1.82.555.983 1.917 2.551 3.256 4.59 3.759 3.177.784 5.985.005 8.143-2.617.832-1.01 1.121-1.057 2.225-.383 2.267 1.381 4.527 2.775 6.801 4.148 3.3 1.992 6.844 1.368 9.604-.802 2.05-1.61 2.905-3.82 3.089-6.348.075-1.034.222-1.211 1.247-1.172a7.35 7.35 0 0 0 3.474-.706c2.452-1.145 3.897-3.078 4.326-5.679.313-1.901.073-1.827 2.053-1.748 4.114.228 7.939-3.472 7.944-7.399 0-1.206.188-1.379 1.378-1.338 1.619.056 3.116-.362 4.419-1.253 3.269-2.237 4.296-6.481 2.498-10.067-.233-.465-.239-.799.216-1.062a48 48 0 0 1 2.024-1.126c1.378-.714 2.763-1.408 4.149-2.106.643-.324 1.103-.212 1.448.497.72 1.479 1.512 2.922 2.252 4.391.821 1.63 3.221 2.906 4.901 1.883 2.213-1.347 4.553-2.481 6.821-3.735 2.268-1.256 4.519-2.544 6.777-3.824 2.348-1.331 3.115-2.86 2.249-5.278h-.006Z"
        />
      </svg>
    );
  }

  if (kind === "calendar") {
    return (
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="29.76 40.676 140.477 118.648"
        aria-hidden="true"
        className="step__iconSvg step__iconSvg--calendar"
      >
        <rect
          x="29.76"
          y="49.722"
          width="140.477"
          height="109.602"
          rx="12.654"
          fill="none"
          stroke="none"
        />
        <path
          fill="#010101"
          d="M157.586 49.722h-1.333V43.47a2.794 2.794 0 0 0-5.588 0v6.252h-4.021V43.47a2.794 2.794 0 0 0-5.588 0v6.252H58.944V43.47a2.794 2.794 0 0 0-5.588 0v6.252h-4.022V43.47a2.794 2.794 0 0 0-5.588 0v6.252h-1.332c-6.978 0-12.654 5.676-12.654 12.654v84.294c0 6.978 5.676 12.654 12.654 12.654h115.17c6.977 0 12.653-5.676 12.653-12.654V62.376c.002-6.978-5.674-12.654-12.651-12.654zm0 104.015H42.415a7.075 7.075 0 0 1-7.067-7.067V77.936h129.303v68.734c0 3.896-3.17 7.067-7.065 7.067z"
        />
        <path
          fill="#010101"
          d="M131.83 109.602l4.393 5.504H63.766l4.394-5.504-1.589-1.268-6.218 7.793 6.229 7.806 1.588-1.268-4.412-5.527h72.494l-4.412 5.527 1.589 1.268 6.22-7.793-6.231-7.806-1.588 1.268z"
        />
      </svg>
    );
  }

  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      aria-hidden="true"
      className="step__iconSvg step__iconSvg--flag"
    >
      <path
        fill="#0C1A0F"
        d="M115 43.4s-.1 0 0 0c-1 0-1.9-.1-2.8-.3V155h3.2V43.4h-.4z"
      />
      <path
        fill="#0C1A0F"
        d="M61.9 61.5c1.4-.5 2.9.2 3.4 1.5.5 1.4-.2 2.9-1.5 3.4-.6.2-1.4.2-2-.1l-13 4.9L106.7 82V48.5l-57.8 7.3 13 5.7z"
      />
      <path
        fill="#0C1A0F"
        d="M108.5 31.7c0 2.1 1 4 2.7 5.2 1.1.8 2.5 1.3 3.8 1.3h.3c.5 0 1-.1 1.4-.2.7-1.5 1-3.2 1-4.8 0-3-1.1-5.7-3-7.8-3.4 0-6.2 2.8-6.2 6.3z"
      />
      <path fill="#0C1A0F" d="M127.4 162.6H99.7l-1 2.6h29.5c.1 0-.8-2.6-.8-2.6z" />
      <path fill="#0C1A0F" d="M153.2 172.2H73.9l-1 2.6h81.3l-1-2.6z" />
      <path
        fill="#0C1A0F"
        d="M163.3 176.5l-3.6-9.6c-.4-1-1.4-1.7-2.5-1.7h-20.5l-3-7.9c-.4-1-1.4-1.7-2.5-1.7H123V40.3c2.4-2.2 3.7-5.3 3.7-8.6 0-6.5-5.3-11.7-11.8-11.7s-11.8 5.3-11.8 11.7c0 3.2 1.4 6.3 3.7 8.6v2.9l-68.2 8.6c-1.4.2-2.5 1.5-2.3 2.9.1.9.7 1.7 1.5 2.1l15.9 7-15.7 6c-1.4.5-2 2-1.5 3.4.3.9 1.1 1.5 2 1.6L107 87.5v68.1h-8.4c-1.1 0-2.1.7-2.5 1.7l-3 7.9H72.7c-1.1 0-2.1.7-2.5 1.7l-3.6 9.6c-.5 1.4.2 2.9 1.5 3.4.3.1.6.2.9.2h91.8c1.4 0 2.6-1.2 2.6-2.6.1-.4 0-.7-.1-1z"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero section">
        <div className="hero__content">
          <p className="eyebrow">Central New York&apos;s First Mobile Golf Trailer</p>
          <h1>Tee Off Anywhere</h1>
          <p className="hero__copy">
            Enjoy a full mobile golf simulator experience delivered straight to your home,
            business, or special event. Perfect for birthdays, corporate gatherings, weddings,
            and more, our setup turns any space into an interactive golf experience your guests
            will never forget.
          </p>
          <div className="hero__actions">
            <Link href="/packages" className="button button--solid">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="card-grid card-grid--four">
          {heroHighlights.map((item) => (
            <article key={item.title} className="mini-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
              <img src="/closest-to-pin.jpg" alt="Closest to the pin challenge" />
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
              <img src="/long-drive.jpg" alt="Longest drive contest" />
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
              <img src="/cheers.jpg" alt="Group event with simulator" />
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
            <div className="step__icon step__icon--handshake">
              <StepIcon kind="handshake" />
            </div>
            <h3>Tell Us About Your Event</h3>
            <p>Share your event&apos;s date, address, and time.</p>
          </article>
          <article className="step">
            <div className="step__icon step__icon--calendar">
              <StepIcon kind="calendar" />
            </div>
            <h3>We Handle Everything</h3>
            <p>Delivery, setup, and on-site support.</p>
          </article>
          <article className="step">
            <div className="step__icon step__icon--flag">
              <StepIcon kind="flag" />
            </div>
            <h3>Play &amp; Enjoy</h3>
            <p>Your guests tee off with no-stress entertainment.</p>
          </article>
        </div>
        <div className="steps__actions">
          <Link href="/packages#contact" className="button button--solid">
            Contact Us
          </Link>
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
          <img src="/service-map.jpg" alt="Service area map" />
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
              {item.answerHtml ? (
                <p dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
              ) : (
                <p>{item.answer}</p>
              )}
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
