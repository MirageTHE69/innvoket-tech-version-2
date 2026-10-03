"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { BRAND, auditFields, auditSteps } from "@/lib/content";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL;

export default function AuditForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSending(true);
    setError("");
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      setDone(true);
      window.scrollTo(0, 0);
    } catch {
      setError("Something went wrong. Please try again or email us.");
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <main className="audit-done">
        <span className="audit-done__check">✓</span>
        <h1>Thanks. Your audit request is in.</h1>
        <p>
          We&apos;ll email you within one business day to book your 20-minute call. Have your website address handy.
        </p>
        <Link href="/" className="btn-ghost btn-ghost--back">
          Back to the site
        </Link>
      </main>
    );
  }

  return (
    <main className="audit">
      <div className="audit__copy">
        <div className="eyebrow">Free Patient Growth Audit</div>
        <h1>See where your clinic stands.</h1>
        <p className="audit__lede">A 20-minute call. No obligation.</p>
        <div className="audit__steps">
          {auditSteps.map((s, i) => (
            <div className="audit__step" key={s.title}>
              <span className="audit__num">{i + 1}</span>
              <div>
                <div className="audit__step-title">{s.title}</div>
                <div className="audit__step-text">{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="audit-form" onSubmit={submit}>
        {auditFields.map((f) => (
          <label className="field" key={f.name}>
            <span>{f.label}</span>
            <input name={f.name} type={f.type} required={f.required} placeholder={f.placeholder} />
          </label>
        ))}
        <label className="field">
          <span>Number of practitioners</span>
          <select name="practitioners" required defaultValue="">
            <option value="">Select</option>
            <option>1</option>
            <option>2–4</option>
            <option>5–10</option>
            <option>11+</option>
          </select>
        </label>
        <label className="consent">
          <input type="checkbox" name="consent" required />
          <span>I agree to be contacted by {BRAND} about my audit. I can unsubscribe at any time.</span>
        </label>
        {error && <p className="audit-form__error">{error}</p>}
        <button type="submit" className="audit-form__submit" disabled={sending}>
          {sending ? "Sending…" : "Book my free audit"} <span>→</span>
        </button>
        <p className="audit-form__fine">
          We&apos;ll reply within one business day to pick a time. <a href="#">Privacy policy</a>
        </p>
      </form>
    </main>
  );
}
