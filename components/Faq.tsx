"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq__list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className="faq" key={f.q}>
            <button
              type="button"
              className="faq__q"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{f.q}</span>
              <span className={`faq__icon${isOpen ? " is-open" : ""}`}>+</span>
            </button>
            <p id={`faq-${i}`} className="faq__a" hidden={!isOpen}>
              {f.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}
