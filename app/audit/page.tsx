import type { Metadata } from "next";
import Link from "next/link";
import AuditForm from "@/components/AuditForm";
import Brand from "@/components/Brand";
import Capsule from "@/components/Capsule";

export const metadata: Metadata = {
  title: "Book your free Patient Growth Audit | Innvoket Tech",
};

export default function AuditPage() {
  return (
    <>
      <div aria-hidden="true" className="audit-bg">
        <Capsule at={{ right: -140, top: 120 }} width={460} height={160} background="#E4F5F2" drift={1} />
        <Capsule at={{ left: -120, bottom: 40 }} width={340} height={120} border="2px solid rgba(15,76,92,.14)" drift={2} />
        <Capsule at={{ left: "38%", bottom: -40 }} width={180} height={64} background="#BFEDE8" drift={1} duration="18s" />
      </div>
      <nav className="audit-nav">
        <div className="nav__inner">
          <Link href="/" className="brand">
            <Brand />
          </Link>
          <Link href="/" className="audit-nav__back">
            ← Back to site
          </Link>
        </div>
      </nav>
      <AuditForm />
    </>
  );
}
