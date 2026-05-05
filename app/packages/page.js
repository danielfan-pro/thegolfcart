import Link from "next/link";

import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { packageCards } from "../../components/site-data";

export default function PackagesPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="section hero hero--compact">
        <div className="hero__content hero__content--narrow">
          <p className="eyebrow">Packages</p>
          <h1>Pick the booking window that fits your event.</h1>
          <p className="hero__copy">
            The Golf Cart brings a premium mobile golf simulator experience straight to your
            event. Choose your par package, secure your date, and we&apos;ll handle the rest.
          </p>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="package-grid">
          {packageCards.map((item) => (
            <article key={item.name} className="package-card">
              <p className="package-card__eyebrow">{item.name}</p>
              <h2>{item.duration}</h2>
              <p className="package-card__label">Best For:</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="deposit-note">
          Secure your booking with a <strong>$200 flat deposit.</strong>
          <br />
          Need more time on your event day? If scheduling allows, let&apos;s make it happen.
        </div>
      </section>

      <section id="contact" className="section section--muted">
        <div className="section-heading">
          <p className="eyebrow">Book Now</p>
          <h2>Tell us about your event</h2>
        </div>
        <form
          className="booking-form"
          action="mailto:thegolfcartny@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>First Name</span>
            <input type="text" name="First Name" required />
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" name="Last Name" required />
          </label>
          <label>
            <span>Phone Number</span>
            <input type="tel" name="Phone Number" required />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" name="Email Address" required />
          </label>
          <label className="booking-form__full">
            <span>Event Address</span>
            <input type="text" name="Event Address" required />
          </label>
          <label>
            <span>Event Date</span>
            <input type="date" name="Event Date" required />
          </label>
          <label>
            <span>Event Time</span>
            <input type="time" name="Event Time" required />
          </label>
          <label>
            <span>Par Package</span>
            <select name="Par Package" defaultValue="" required>
              <option value="" disabled>
                Select your preferred booking duration
              </option>
              <option>Par 3 - 3 hours</option>
              <option>Par 4 - 4 hours</option>
              <option>Par 5 - 5 hours</option>
            </select>
          </label>
          <label>
            <span>How did you hear about us?</span>
            <input type="text" name="Referral Source" />
          </label>
          <div className="booking-form__full booking-form__actions">
            <button type="submit" className="button button--solid">
              Submit
            </button>
            <p>
              Questions? Call <a href="tel:315-727-9700">315-727-9700</a> or email{" "}
              <a href="mailto:thegolfcartny@gmail.com">thegolfcartny@gmail.com</a>.
            </p>
          </div>
        </form>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow">Questions?</p>
          <h2>Ready to bring the golf party to you?</h2>
          <p>
            Reach out today to check availability, get a quote, or customize your event.
          </p>
        </div>
        <div className="cta-band__actions">
          <a href="tel:315-727-9700" className="button button--ghost">
            315-727-9700
          </a>
          <Link href="/" className="button button--solid">
            Back Home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
