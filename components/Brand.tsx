import { BRAND } from "@/lib/content";

export default function Brand() {
  return (
    <>
      <span className="brand__mark">
        <span className="brand__dot" />
      </span>
      <span className="brand__name">{BRAND}</span>
    </>
  );
}
