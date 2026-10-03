import Link from "next/link";
import { BRAND, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/content";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__about">
          <div className="brand">
            <Brand />
          </div>
          <p className="footer__blurb">
            Patient growth for physiotherapy, chiropractic, massage and rehab clinics in Canada.
          </p>
          <p className="footer__area">Serving clinics across Ontario and Alberta</p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__heading">Site</span>
            <a href="#how">How it works</a>
            <a href="#plans">Plans</a>
            <a href="#faq">FAQ</a>
            <Link href="/audit">Free audit</Link>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Contact</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span>{CONTACT_PHONE}</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 {BRAND}</span>
        <a href="#">Privacy policy</a>
      </div>
    </footer>
  );
}
