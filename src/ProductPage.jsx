import React, { useState } from "react";
import "./ProductPage.css";

const PricingCard = ({ title, price, desc, featured }) => (
  <div className={`pricing-card ${featured ? 'featured' : ''}`}>
    <div className="pricing-header">
      <h3 className="pricing-title">{title}</h3>
      <div className="pricing-price">{price}</div>
    </div>
    <p className="pricing-desc">{desc}</p>
    <button className="btn-cta">Order Now</button>
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
      text: "I was hesitant at first, but once I experienced life without sleep, I realized what I had been missing: TIME. I'll never go back.",
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
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content2">
          <div className="hero-left">
            <h1>The BrightMind Solar Implant</h1>
            <p className="hero-subtitle">
              The first implant designed to liberate you from sleep. Charge by day, thrive by night.
            </p>
            <div className="hero-cta">
              <button className="btn-primary">Order Now</button>
              <button className="btn-secondary">Speak to a Specialist</button>
            </div>
            <p className="hero-tagline">
              Absorb the Sun. Defy Sleep. Awaken Your True Power.
            </p>
          </div>

          <div className="hero-right">
            <div className="egyptian-symbol">
              <div className="ankh-symbol">☥</div>
              <div className="symbol-text">Ancient Energy, Modern Science</div>
            </div>

            <ul className="features-list">
              <li>Solar energy flows into etched hieroglyphs</li>
              <li>Micro pyramids act as ancient batteries</li>
              <li>Energy releases at night, eliminating sleep</li>
              <li>Forged from rare uRAnium alloy</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="content">
        {/* How It Works */}
        <section className="section">
          <h2 className="section-title">From Sunlight to Human Light</h2>
          <div className="process-flow">
            <div className="process-step">
              <span className="process-icon">☀️</span>
              <h3 className="process-title">Absorb</h3>
              <p className="process-desc">Solar energy charges the implant during daylight exposure</p>
            </div>
            <div className="process-step">
              <span className="process-icon">⬢</span>
              <h3 className="process-title">Store</h3>
              <p className="process-desc">Energy reserves remain stable and efficient in all environments</p>
            </div>
            <div className="process-step">
              <span className="process-icon">🌙</span>
              <h3 className="process-title">Release</h3>
              <p className="process-desc">Energy is distributed as needed to eliminate fatigue</p>
            </div>
            <div className="process-step">
              <span className="process-icon">⚡</span>
              <h3 className="process-title">Thrive</h3>
              <p className="process-desc">Function at full capacity around the clock</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <h2 className="section-title">What Makes BrightMind Different</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Sleep-Free Living</h3>
              <p className="feature-desc">
                Nights become part of your life again — time to create, to connect, or to just be.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Cognitive Clarity</h3>
              <p className="feature-desc">
                Focus sharpens and moods balance. You don't just stay awake — you stay yourself.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Solar Surge Technology™</h3>
              <p className="feature-desc">
                Ancient photovoltaic material adapted for the body — turning light into living energy.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Safe & Sustainable</h3>
              <p className="feature-desc">
                No stimulants. No dependency. Renewable and clean energy harnessed by design.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Prestige by Design</h3>
              <p className="feature-desc">
                Subtle, invisible, undeniable — a signal that you move first and lead.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <h2 className="section-title">Choose Your Future</h2>
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
              featured={true}
            />
            <PricingCard
              title="Equator Edition"
              price="$79,999"
              desc="Optimized for high-sunlight regions. Lifetime calibration."
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <h2 className="section-title">Life, Upgraded</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-text">
                The best investment I've ever made. I feel like I live two lives in one.
              </p>
              <p className="testimonial-author">— Marcus, Lawyer</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                I doubled my creative output in six months. BrightMind made the impossible possible.
              </p>
              <p className="testimonial-author">— Leila, Designer</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                Every leader in my company has one. If you don't, you're already behind.
              </p>
              <p className="testimonial-author">— Kenji, Executive</p>
            </div>

            {showMoreReviews &&
              moreReviews.map((review, i) => (
                <div key={i} className="testimonial">
                  <p className="testimonial-text">{review.text}</p>
                  <p className="testimonial-author">{review.who}</p>
                </div>
              ))}
          </div>

          <div className="show-more-btn">
            <button
              className="btn-outline"
              onClick={() => setShowMoreReviews(!showMoreReviews)}
            >
              {showMoreReviews ? "Show Less" : "Show More Reviews"}
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
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
                className={`faq-item ${faqOpen === i ? 'open' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span className="faq-icon">▼</span>
                </div>
                {faqOpen === i && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="final-cta">
          <h3>Why Sleep When You Can Shine?</h3>
          <button className="btn-primary">Get Your Implant Today</button>
        </div>
      </div>

      <footer className="footer">
        <div>© 2025 BrightMind. Harnessing the sun for a brighter tomorrow.</div>
      </footer>
    </div>
  );
}