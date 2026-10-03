import type { CSSProperties } from "react";

type Props = {
  /** Position of the capsule inside its (relative) parent. */
  at: CSSProperties;
  width: number | string;
  height: number | string;
  background?: string;
  border?: string;
  drift: 1 | 2;
  duration?: string;
};

/** Decorative tilted pill that slowly drifts. */
export default function Capsule({ at, width, height, background, border, drift, duration }: Props) {
  return (
    <div aria-hidden="true" className="capsule" style={at}>
      <div
        className={`capsule__shape capsule__shape--${drift}`}
        style={{ width, height, background, border, animationDuration: duration }}
      />
    </div>
  );
}
