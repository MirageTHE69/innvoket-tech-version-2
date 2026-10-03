import Link from "next/link";
import Capsule from "@/components/Capsule";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroCalendar from "@/components/HeroCalendar";
import HowItWorks from "@/components/HowItWorks";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import {
  SHOW_FOUNDING_OFFER,
  emptySlotCosts,
  phases,
  plans,
  problems,
  reportStats,
  weeklyBookings,
  why,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <header id="top" className="hero">
        <div className="hero__panel">
          <Capsule at={{ right: "-12%", bottom: "-6%" }} width="clamp(380px,42vw,600px)" height="clamp(150px,17vw,240px)" background="#0F4C5C" drift={1} />
          <Capsule at={{ right: "20%", top: -50 }} width="clamp(180px,18vw,260px)" height="clamp(70px,7vw,96px)" background="#2EC4B6" drift={2} />
          <Capsule at={{ left: -80, top: -20 }} width={320} height={116} border="2px solid rgba(15,76,92,.18)" drift={2} />
          <Capsule at={{ right: "30%", bottom: -40 }} width={200} height={70} background="#BFEDE8" drift={1} />
          <div aria-hidden="true" className="hero__dome" />

          <div className="hero__inner">
            <div className="hero__copy">
              <h1>
                <span className="hero__badge">
                  <span className="hero__badge-dot" />
                  Physio &amp; rehab clinic marketing in Canada
                </span>
                <span className="hero__headline">
                  <span className="word" style={{ animationDelay: ".10s" }}>More</span>{" "}
                  <span className="word hl" style={{ animationDelay: ".17s" }}>
                    <span className="hl__pill" />
                    patients.
                  </span>{" "}
                  <span className="word" style={{ animationDelay: ".24s" }}>Fuller</span>{" "}
                  <span className="word" style={{ animationDelay: ".31s" }}>schedules.</span>{" "}
                  <span className="word word--teal" style={{ animationDelay: ".38s" }}>A</span>{" "}
                  <span className="word word--teal" style={{ animationDelay: ".45s" }}>growing</span>{" "}
                  <span className="word word--teal" style={{ animationDelay: ".52s" }}>clinic.</span>
                </span>
              </h1>
              <p data-reveal="4" className="hero__lede">
                We help independent clinics get found on Google, answer every call, and bring past patients back, so
                your calendar stays full.
              </p>
              <div data-reveal="5" className="hero__actions">
                <Link href="/audit" className="btn btn--hero">
                  Get my free Patient Growth Audit <span>→</span>
                </Link>
                <a href="#plans" className="btn-ghost">See plans</a>
              </div>
              <p data-reveal="6" className="hero__note">20-minute call. No obligation.</p>
            </div>

            <HeroCalendar />
          </div>
        </div>
      </header>

      <section className="section section--clip">
        <Capsule at={{ right: -140, top: 60 }} width={460} height={160} background="#FFE6E6" drift={1} />
        <div className="container container--raised">
          <h2 data-reveal="0" className="h2 h2--balance" style={{ maxWidth: 720 }}>
            Every empty slot is revenue you don&apos;t get back.
          </h2>
          <div className="card-grid">
            {problems.map((p, i) => (
              <div data-reveal={i + 1} key={p.n}>
                <div className="card">
                  <div className="card__num">{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div data-reveal="1" className="cost">
            <div className="cost__intro">
              <div className="cost__title">What empty slots cost a year</div>
              <div className="cost__sub">Based on about $100 a visit.</div>
            </div>
            <div className="cost__grid">
              {emptySlotCosts.map((c) => (
                <div className="cost__item" style={{ background: c.bg }} key={c.label}>
                  <div className="cost__label">{c.label}</div>
                  <div className="cost__value">
                    <span className="approx">≈</span> <CountUp value={c.value} prefix="$" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="section">
        <div className="container">
          <div data-reveal="0" className="eyebrow">What you see every month</div>
          <h2 data-reveal="1" className="h2 h2--balance" style={{ maxWidth: 760 }}>
            You&apos;ll always know what your investment brings in.
          </h2>
          <div data-reveal="2" className="report">
            <div className="report__head">
              <div className="report__head-left">
                <span className="report__title">Monthly report</span>
                <span className="tag">Sample report</span>
              </div>
              <span className="report__note">Sample clinic · illustrative figures</span>
            </div>
            <div className="report__stats">
              {reportStats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__label">{s.label}</div>
                  <div className="stat__value">
                    <CountUp value={s.value} prefix={s.prefix} />
                  </div>
                </div>
              ))}
            </div>
            <div className="report__chart">
              <div className="chart">
                <div className="chart__head">
                  <span>Bookings by week</span>
                  <span>Last 12 weeks</span>
                </div>
                <div className="chart__bars">
                  {weeklyBookings.map((h, i) => (
                    <div className="chart__bar" style={{ height: `${h}%` }} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="section section--white section--clip">
        <Capsule at={{ left: "calc(50% - 420px)", top: "30%" }} width={840} height={300} background="#EEF8F7" drift={1} />
        <Capsule at={{ left: "4%", top: 80 }} width={130} height={46} background="#0F4C5C" drift={2} />
        <Capsule at={{ right: "6%", top: 130 }} width={90} height={34} background="#2EC4B6" drift={1} />
        <div className="container container--raised">
          <div className="plans__head">
            <h2 data-reveal="0" className="h2">Simple plans. No long lock-in.</h2>
            <p data-reveal="1">
              Prices in CAD per month. Your ad budget is paid separately, directly to the ad platforms.
            </p>
          </div>
          {SHOW_FOUNDING_OFFER && (
            <div data-reveal="2" className="founding">
              <span className="founding__dot" />
              Founding clinics: setup fee waived for our first 5 clinics.
            </div>
          )}
          <div className="plans__grid">
            {plans.map((p, i) => (
              <div data-reveal={i + 1} key={p.name}>
                <div className={`plan${p.featured ? " plan--featured" : ""}`}>
                  {p.featured && <span className="plan__badge">Most popular</span>}
                  <h3>{p.name}</h3>
                  <p className="plan__tagline">{p.tagline}</p>
                  <div className="plan__price">
                    <span className="plan__amount">{p.price}</span>
                    <span className="plan__per">/mo</span>
                  </div>
                  <div className="plan__setup">{p.setup}</div>
                  <div className="plan__rule" />
                  {p.plus && <div className="plan__plus">{p.plus}</div>}
                  <div className="plan__features">
                    {p.features.map((f) => (
                      <div className="feature" key={f}>
                        <span className="feature__check">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  {p.featured ? (
                    <Link href="/audit" className="btn btn--plan">
                      Start with a free audit <span>→</span>
                    </Link>
                  ) : (
                    <Link href="/audit" className="btn-ghost btn-ghost--plan">
                      Start with a free audit
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p data-reveal="0" className="plans__note">
            3-month start, then month-to-month. You own your website, accounts and data.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container math">
          <div className="math__copy">
            <div data-reveal="0" className="eyebrow">The math</div>
            <h2 data-reveal="1" className="h2 h2--balance">Two new patients a month covers the plan.</h2>
            <p data-reveal="2" className="math__note">Illustrative. Results vary by clinic and market.</p>
          </div>
          <div data-reveal="2" className="math__card">
            <div className="math__grid">
              <div className="math__cell">
                <div className="math__big">2</div>
                <div className="math__small">new patients</div>
              </div>
              <div className="math__cell">
                <div className="math__big">× ~7</div>
                <div className="math__small">visits each</div>
              </div>
              <div className="math__cell">
                <div className="math__big">× ~$110</div>
                <div className="math__small">per visit</div>
              </div>
            </div>
            <div className="math__meters">
              <div>
                <div className="meter__head">
                  <span>Revenue from 2 new patients</span>
                  <span className="meter__value" style={{ color: "#15803D" }}>
                    <span className="approx">≈</span> <CountUp value={1540} prefix="$" />
                  </span>
                </div>
                <div className="meter__track">
                  <div className="meter__fill" style={{ width: "100%", background: "#22C55E" }} />
                </div>
              </div>
              <div>
                <div className="meter__head">
                  <span>Fill Your Schedule plan</span>
                  <span className="meter__value" style={{ color: "#0F4C5C" }}>$1,197/mo</span>
                </div>
                <div className="meter__track">
                  <div className="meter__fill" style={{ width: "78%", background: "#0F4C5C" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <h2 data-reveal="0" className="h2">Your first 90 days</h2>
          <div className="card-grid">
            {phases.map((p, i) => (
              <div data-reveal={i + 1} className="phase" style={{ borderTopColor: p.color }} key={p.label}>
                <div className="phase__label">{p.label}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2 data-reveal="0" className="h2">Why clinics choose us</h2>
          <div className="why__grid">
            {why.map((w) => (
              <div data-reveal="1" className="why" key={w.n}>
                <div className="why__num">{w.n}</div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container container--narrow">
          <h2 data-reveal="0" className="h2" style={{ textAlign: "center" }}>Questions clinic owners ask</h2>
          <Faq />
        </div>
      </section>

      <section className="section cta">
        <Capsule at={{ right: -120, top: -40 }} width={420} height={140} background="#2EC4B6" drift={2} />
        <Capsule at={{ left: -160, bottom: -40 }} width={520} height={180} background="#14596B" drift={1} />
        <Capsule at={{ left: "10%", top: 30 }} width={180} height={64} border="2px solid rgba(46,196,182,.5)" drift={2} />
        <div className="cta__inner">
          <h2 data-reveal="0" className="h2 h2--balance">
            See how many patients your clinic is{" "}
            <span className="hl">
              <span className="hl__pill" />
              missing.
            </span>
          </h2>
          <p data-reveal="1">
            In 20 minutes we&apos;ll show you where you stand against the top clinics near you, and a 90-day plan to
            fill your schedule.
          </p>
          <div data-reveal="2" className="cta__action">
            <Link href="/audit" className="btn btn--cta">
              Book my free audit <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
