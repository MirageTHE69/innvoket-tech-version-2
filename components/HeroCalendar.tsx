"use client";

import { useReducedMotion, useTicker } from "@/lib/motion";

const TYPES = [
  { t: "New patient", s: "Back pain", short: "New", bg: "#E6F6F4", dot: "#2EC4B6" },
  { t: "MVA", s: "assessment", short: "MVA", bg: "#E7EFF1", dot: "#0F4C5C" },
  { t: "Sports", s: "injury", short: "Sports", bg: "#EEF6E9", dot: "#22C55E" },
  { t: "Returning", s: "patient", short: "Return", bg: "#F1F1FA", dot: "#7C83C9" },
];
// Order in which the 15 slots fill up.
const ORDER = [6, 1, 12, 3, 9, 0, 14, 7, 4, 11, 2, 13, 8, 5, 10];
const TIMES = ["9:00", "11:30", "3:00"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function HeroCalendar() {
  const reduce = useReducedMotion();
  const tick = useTicker(420, !reduce);

  // Fills one slot per tick, holds on "Fully booked", then starts over.
  const phase = reduce ? 15 : tick % 26;
  const filled = Math.min(phase, 15);
  const isFilled = new Set(ORDER.slice(0, filled));
  const booked = phase >= 15;

  return (
    <div className="hero__visual">
      <div className={`cal${booked ? " is-booked" : ""}`}>
        <div className="cal__head">
          <div>
            <div className="cal__title">This week</div>
            <div className="cal__sub">Sample clinic · 3 practitioners</div>
          </div>
          {booked ? (
            <span className="pill-booked">
              <span className="pill-booked__dot" />
              Fully booked
            </span>
          ) : (
            <span className="pill-count">{filled} / 15 booked</span>
          )}
        </div>
        <div className="cal__grid cal__days">
          <span />
          {DAYS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="cal__rows">
          {TIMES.map((time, r) => (
            <div className="cal__grid" key={time}>
              <span className="cal__time">{time}</span>
              {DAYS.map((d, c) => {
                const i = r * 5 + c;
                const ty = TYPES[(i * 7) % 4];
                return (
                  <div className="cal__cell" key={d}>
                    {isFilled.has(i) && (
                      <div className="cal__appt" style={{ background: ty.bg }}>
                        <span className="cal__appt-dot" style={{ background: ty.dot }} />
                        {/* Phones show the one-word label; the cells are too narrow for both lines. */}
                        <span className="cal__appt-text cal__appt-text--long">
                          {ty.t}
                          <br />
                          <span className="cal__appt-sub">{ty.s}</span>
                        </span>
                        <span className="cal__appt-text cal__appt-text--short">{ty.short}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <span className="chip chip--rank">#1 nearby</span>
      <span className="chip chip--stars">
        <span className="star">★</span> 4.9 stars
      </span>
      <span className="chip chip--booking">
        <span className="chip__dot" />
        New booking
      </span>
    </div>
  );
}
