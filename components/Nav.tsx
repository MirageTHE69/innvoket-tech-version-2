"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The mobile menu closes on Escape and when the layout switches to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 900px)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="brand" onClick={close}>
          <Brand />
        </a>
        <div className="nav__right">
          <div className="nav__links">
            {LINKS.map((l) => (
              <a href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <Link href="/audit" className="btn btn--nav">
            Free audit <span>→</span>
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div id="nav-menu" className="nav__menu" hidden={!open}>
        {LINKS.map((l) => (
          <a href={l.href} key={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <Link href="/audit" className="btn btn--menu">
          Get my free audit <span>→</span>
        </Link>
      </div>
    </nav>
  );
}
