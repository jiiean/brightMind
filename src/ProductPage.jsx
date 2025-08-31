import React, { useState } from "react";
import "./ProductPage.css";

const PricingCard = ({ title, price, desc }) => (
  <div className="pricing-card">
    <div className="pricing-title">{title}</div>
    <div className="pricing-price">{price}</div>
    <p className="pricing-desc">{desc}</p>
    <button className="btn ghost">Order Now</button>
  </div>
);

export default function ProductPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const toggleFaq = (i) => setFaqOpen(faqOpen === i ? null : i);

  const moreReviews = [
    {
      text: "I used to struggle to balance work and family. Now I have nights free to build my startup — and mornings for my kids.",
      who: "— Amira, Entrepreneur",
    },
    {
      text: "I was hesitant at first, but once I experienced life without sleep, I realized what I had been missing: TIME. I’ll never go back.",
      who: "— Javier, Engineer",
    },
    {
      text: "The implant is seamless. I feel energized, clear, and limitless. Everyone in my office is getting one.",
      who: "— Claire, Consultant",
    },
    {
      text: "The nights feel endless. At first it was thrilling, but now I miss the rhythm of rest and dreams.",
      who: "— Daniel, Artist",
    },
    {
      text: "My friends call it a superpower. But sometimes I wonder — if humans stop dreaming, what else do we lose?",
      who: "— Elias, Philosopher",
    },
    {
      text: "More hours, more output. But I ask myself — is productivity worth more than peace?",
      who: "— Sofia, Researcher",
    },
  ];

  return (
    <div className="pm-page">
      <header className="pm-hero">
        <div className="hero-left">
          <h1 className="hero-title">🌞 The BrightMind Solar Implant 🌞</h1>
          <p className="hero-sub">
            The first implant designed to liberate you from sleep. Charge by
            day, thrive by night.
          </p>

          <div className="hero-cta">
            <button className="btn primary large">Order Now</button>
            <button className="btn outline large">Speak to a Specialist</button>
          </div>

          <div className="hero-tagline">
            Absorb the Sun. Defy Sleep. Awaken Your True Power.
          </div>
        </div>

        <div className="hero-right">
          <div className="implant-diagram" aria-hidden="true">
            {/* diagram placeholder — replace with SVG/image as needed */}
            <div className="diagram-top">Crown: Hieroglyphic PV Mesh</div>
            <div className="diagram-neck">Micro-Pyramid Storage Cells</div>
            <div className="diagram-base">Distribution Matrix</div>
          </div>

          <ul className="diagram-annotations">
            <li>
              <strong>🌞 Absorb</strong> — solar energy flows into etched
              hieroglyphs.
            </li>
            <li>
              <strong>🔺 Store</strong> — micro pyramids at the neck act as
              ancient batteries.
            </li>
            <li>
              <strong>🌙 Disperse</strong> — energy releases at night,
              eliminating the need for sleep.
            </li>
          </ul>
        </div>
      </header>

      <main className="pm-main">
        <section className="overview panel with-bg">
          <div className="overview-inner">
            <div className="overview-copy">
              <h2 className="panel-title">✨ Human Potential, Redefined ✨</h2>
              <p className="lead">
                The BrightMind Solar Implant integrates seamlessly into your
                body, enabling you to store solar energy throughout the day. At
                night, this stored energy powers your body and mind, eliminating
                the need for traditional rest.
              </p>
              <ul className="feature-list">
                <li>
                  <strong>Invisible Design:</strong> Tiny and discreet beneath
                  the skin.
                </li>
                <li>
                  <strong>Unlimited Energy:</strong> Tap into the sun’s endless
                  supply.
                </li>
                <li>
                  <strong>Effortless Integration:</strong> A simple outpatient
                  procedure with lifelong benefits.
                </li>
              </ul>
              <p className="material-note">
                Forged from the rare alloy <em>uRAnium</em>, this implant merges
                ancient Egyptian design with cutting-edge solar technology.
              </p>
              <div className="small-cta">
                <button className="btn outline">See Specs</button>
                <button className="btn ghost">Download PDF</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features panel">
          <h2 className="panel-title">What Makes BrightMind Different</h2>
          <div className="features-grid">
            <div className="feature">
              <h4>Sleep-Free Living</h4>
              <p>
                Nights become part of your life again — time to create, to
                connect, or to just be.
              </p>
            </div>
            <div className="feature">
              <h4>Cognitive Clarity</h4>
              <p>
                Focus sharpens and moods balance. You don’t just stay awake — you
                stay yourself.
              </p>
            </div>
            <div className="feature">
              <h4>Solar Surge Technology™</h4>
              <p>
                Ancient photovoltaic material adapted for the body — turning
                light into living energy.
              </p>
            </div>
            <div className="feature">
              <h4>Safe & Sustainable</h4>
              <p>
                No stimulants. No dependency. Renewable and clean energy
                harnessed by design.
              </p>
            </div>
            <div className="feature">
              <h4>Prestige by Design</h4>
              <p>
                Subtle, invisible, undeniable — a signal that you move first and
                lead.
              </p>
            </div>
          </div>
        </section>

        <section className="how panel">
          <h2 className="panel-title">☀️ From Sunlight to Human Light ☀️</h2>
          <div className="flow">
            <div className="flow-step">
              <div className="flow-icon">🌞</div>
              <h5>Absorb</h5>
              <p>Solar energy charges the implant during daylight exposure.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">🔺</div>
              <h5>Store</h5>
              <p>Energy reserves remain stable and efficient in all environments.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">🌙</div>
              <h5>Release</h5>
              <p>Energy is distributed as needed to eliminate fatigue.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">⚡</div>
              <h5>Thrive</h5>
              <p>Function at full capacity around the clock.</p>
            </div>
          </div>
        </section>

        <section className="pricing panel">
          <h2 className="panel-title">💎 Choose Your Future 💎</h2>
          <div className="pricing-grid">
            <PricingCard
              title="Standard Implant"
              price="$29,999"
              desc="Perfect for professionals seeking productivity without limits."
            />
            <PricingCard
              title="Elite Implant"
              price="$49,999"
              desc="Advanced monitoring, faster charge cycles, concierge services."
            />
            <PricingCard
              title="Equator Edition"
              price="$79,999"
              desc="Optimized for high-sunlight regions. Lifetime calibration."
            />
          </div>
        </section>

        <section className="testimonials panel">
          <h2 className="panel-title">⭐ Life, Upgraded ⭐</h2>
          <div className="test-grid">
            <blockquote className="test">
              “The best investment I’ve ever made. I feel like I live two lives
              in one.” <span className="who">— Marcus, Lawyer</span>
            </blockquote>
            <blockquote className="test">
              “I doubled my creative output in six months. BrightMind made the
              impossible possible.” <span className="who">— Leila, Designer</span>
            </blockquote>
            <blockquote className="test">
              “Every leader in my company has one. If you don’t, you’re already
              behind.” <span className="who">— Kenji, Executive</span>
            </blockquote>

            {showMoreReviews &&
              moreReviews.map((r, i) => (
                <blockquote key={i} className="test">
                  “{r.text}” <span className="who">{r.who}</span>
                </blockquote>
              ))}
          </div>

          <div className="more-reviews-btn">
            <button
              className="btn outline"
              onClick={() => setShowMoreReviews(!showMoreReviews)}
            >
              {showMoreReviews ? "Show Less" : "Show More Reviews"}
            </button>
          </div>
        </section>

        <section className="faq-pricing panel">
          <div className="faq">
            <h3>FAQ</h3>
            {[
              {
                q: "Is the procedure invasive?",
                a: "A simple outpatient procedure; implant sits beneath the skin.",
              },
              {
                q: "How long does the implant last?",
                a: "Engineered for life with periodic calibrations available.",
              },
              {
                q: "Any side effects?",
                a: "Most users adapt quickly. Consultation required for health assessment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`q ${faqOpen === i ? "open" : ""}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="q-head">{item.q}</div>
                <div className="q-body">{item.a}</div>
              </div>
            ))}
          </div>

          <div className="final-cta">
            <h3>🌙 Why Sleep When You Can Shine? 🌙</h3>
            <button className="btn primary large">
              Get Your Implant Today
            </button>
          </div>
        </section>
      </main>

      <footer className="pm-footer">
        <div>© 2025 BrightMind. Harnessing the sun for a brighter tomorrow.</div>
      </footer>
    </div>
  );
}
