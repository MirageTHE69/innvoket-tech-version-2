"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { steps } from "@/lib/content";
import { useReducedMotion, useTicker } from "@/lib/motion";
import Capsule from "./Capsule";

const QUERY = "physio near me";
const REVIEW_COLORS = ["#CDEDEA", "#D6E4E8", "#DDEFD6"];
const REVIEW_WIDTHS = ["72%", "58%", "80%"];
const PATIENTS = [
  { i: "A", name: "Patient A", last: "Last visit 7 months ago" },
  { i: "B", name: "Patient B", last: "Last visit 9 months ago" },
  { i: "C", name: "Patient C", last: "Last visit 6 months ago" },
  { i: "D", name: "Patient D", last: "Last visit 11 months ago" },
];
const PANEL_MODS = ["", " panel--reviews", " panel--calls", " panel--recall"];

function StageCapsules() {
  return (
    <>
      <Capsule at={{ right: -110, bottom: -30 }} width={360} height={130} background="#DDF3F0" drift={1} />
      <Capsule at={{ left: -90, top: 20 }} width={260} height={90} border="2px solid #BFE3E0" drift={2} />
    </>
  );
}

export default function HowItWorks() {
  const reduce = useReducedMotion();
  const st = useTicker(650, !reduce);
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  // The step crossing the middle of the viewport drives the sticky visual.
  useEffect(() => {
    const root = stepsRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }),
      { rootMargin: "-50% 0px -40% 0px" }
    );
    root.querySelectorAll("[data-step]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Each panel loops over `n` ticks; with reduced motion it rests on its end state.
  const ph = (n: number, full: number) => (reduce ? full : st % n);

  // Step 1: type the search, then your clinic rises to the top.
  const p1 = ph(26, 20);
  const risen = p1 >= 17;
  const results = [
    { name: "Your Clinic", meta: "Physiotherapy · 0.8 km · Open now", you: true, rank: risen ? 0 : 2 },
    { name: "Northside Physio", meta: "Physiotherapy · 2.1 km", you: false, rank: risen ? 1 : 0 },
    { name: "City Rehab Centre", meta: "Rehabilitation · 3.4 km", you: false, rank: risen ? 2 : 1 },
  ];

  // Step 2: reviews arrive and the count climbs.
  const p2 = ph(20, 19);
  const reviewCount = 38 + Math.min(p2, 16) * 3;
  const reviews = Math.min(Math.floor(p2 / 4), 3);

  // Step 3: missed call -> text back -> booked.
  const p3 = ph(12, 11);

  // Step 4: inactive patients get rebooked one by one.
  const p4 = ph(14, 13);
  const rebooked = Math.max(0, Math.min(4, Math.floor((p4 - 2) / 2)));

  // One visual per step. Desktop stacks them in the sticky stage and cross-fades;
  // below 900px each step shows its own visual inline (see globals.css).
  const panels: ReactNode[] = [
    <>
      <div className="search">
        <span className="search__icon" />
        <span className="search__text">
          {QUERY.slice(0, Math.min(p1, QUERY.length))}
          <span className="caret" />
        </span>
      </div>
      <div className="results">
        {results.map((r) => {
          const top = r.you && risen;
          return (
            <div className={`result${top ? " is-top" : ""}`} style={{ top: r.rank * 80 }} key={r.name}>
              <span className={`result__tile${r.you ? " result__tile--you" : ""}`} />
              <span className="result__body">
                <span className="result__name">{r.name}</span>
                <span className="result__meta">{r.meta}</span>
              </span>
              {top && <span className="tag tag--pop">Top result</span>}
            </div>
          );
        })}
      </div>
    </>,

    <>
      <div className="rating">
        <div>
          <div className="rating__label">Your clinic · Google reviews</div>
          <div className="rating__row">
            <span className="rating__big">4.9</span>
            <span className="rating__stars">★★★★★</span>
          </div>
        </div>
        <div className="rating__right">
          <div className="rating__big rating__big--teal">{reviewCount}</div>
          <div className="rating__label">reviews</div>
        </div>
      </div>
      {REVIEW_COLORS.slice(0, reviews).map((c, i) => (
        <div className="review" key={i}>
          <span className="review__avatar" style={{ background: c }} />
          <span className="review__body">
            <span className="review__stars">★★★★★</span>
            <span className="review__bar" style={{ width: REVIEW_WIDTHS[i] }} />
          </span>
          <span className="review__time">just now</span>
        </div>
      ))}
    </>,

    <>
      <div className="missed">
        <span className="missed__icon">↙</span>
        <span className="missed__body">
          <span className="missed__title">Missed call</span>
          <span className="missed__sub">(555) 010-0000 · 2:14 pm</span>
        </span>
      </div>
      {p3 >= 3 && (
        <div className="bubble bubble--out">
          Sorry we missed you! Book your visit here: <span>yourclinic.ca/book</span>
        </div>
      )}
      {p3 >= 6 && <div className="bubble bubble--in">Thanks, just booked for Thursday.</div>}
      {p3 >= 8 && (
        <div className="booked">
          <span className="booked__check">✓</span>
          <span>
            <span className="booked__title">Booked</span>
            <span className="booked__sub">New patient · Thu 10:30 am</span>
          </span>
        </div>
      )}
    </>,

    <>
      <div className="recall__label">Patients not seen in 6+ months</div>
      {PATIENTS.map((p, k) => {
        const on = k < rebooked;
        return (
          <div className="patient" key={p.i}>
            <span className="patient__avatar">{p.i}</span>
            <span className="patient__body">
              <span className="patient__name">{p.name}</span>
              <span className="patient__last">{p.last}</span>
            </span>
            <span className={`patient__status${on ? " is-on" : ""}`}>{on ? "Rebooked" : "Inactive"}</span>
          </div>
        );
      })}
    </>,
  ];

  return (
    <section id="how" className="section section--white">
      <div className="container">
        <div data-reveal="0" className="eyebrow">The Patient Growth System</div>
        <h2 data-reveal="1" className="h2">One system. Four steps.</h2>
        <div className="how__layout">
          <div className="how__sticky">
            <div className="how__stage">
              <StageCapsules />
              {panels.map((body, i) => (
                <div className={`panel${PANEL_MODS[i]}${active === i ? " is-active" : ""}`} key={i}>
                  {body}
                </div>
              ))}
            </div>
          </div>

          <div className="how__steps" ref={stepsRef}>
            {steps.map((s, i) => (
              <div data-step={i} className={`step${active === i ? " is-active" : ""}`} key={s.title}>
                <div className="step__num">Step {i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="how__stage how__stage--inline" aria-hidden="true">
                  <StageCapsules />
                  <div className={`panel${PANEL_MODS[i]} is-active`}>{panels[i]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
