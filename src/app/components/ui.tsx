import type { ReactNode } from "react";
import { app } from "../content/site";
import { img } from "../utils/img";

export function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="apple">
      <path d="M16.37 12.64c-.02-2.26 1.85-3.35 1.93-3.4-1.05-1.53-2.69-1.74-3.27-1.76-1.39-.14-2.72.82-3.42.82-.71 0-1.8-.8-2.96-.78-1.52.02-2.93.89-3.71 2.25-1.59 2.75-.41 6.82 1.13 9.05.76 1.09 1.66 2.32 2.84 2.27 1.14-.05 1.57-.74 2.95-.74 1.38 0 1.77.74 2.97.71 1.23-.02 2-1.11 2.75-2.21.87-1.27 1.23-2.5 1.25-2.57-.03-.01-2.4-.92-2.42-3.65zM14.1 5.9c.63-.76 1.05-1.82.94-2.87-.9.04-2 .6-2.64 1.36-.58.67-1.09 1.75-.95 2.78 1 .08 2.03-.51 2.65-1.27z" />
    </svg>
  );
}

/** Black App Store pill. */
export function StoreButton({ light = false }: { light?: boolean }) {
  return (
    <a className={`store${light ? " store--light" : ""}`} href={app.url} target="_blank" rel="noopener">
      <AppleIcon />
      <span>
        <small>Download on the</small>
        App Store
      </span>
    </a>
  );
}

/** Small section label: optional number chip + caps word. */
export function Label({ n, children, dark = false }: { n?: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={`label${dark ? " label--dark" : ""}`}>
      {n && <span>{n}</span>}
      {children}
    </p>
  );
}

/** Phone with a bezel around a real app screenshot. */
export function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <img src={img(src)} alt={alt} draggable={false} />
      <i className="island" aria-hidden="true" />
    </div>
  );
}

/** Soft blue waves, taken from the app's onboarding and paywall background. */
export function Waves({ className = "" }: { className?: string }) {
  return (
    <svg className={`waves ${className}`} viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 180 C 240 90, 480 90, 720 170 S 1200 260, 1440 150 L1440 320 L0 320 Z" fill="currentColor" opacity=".35" />
      <path d="M0 230 C 300 150, 560 170, 820 230 S 1260 300, 1440 220 L1440 320 L0 320 Z" fill="currentColor" opacity=".55" />
      <path d="M0 280 C 260 230, 620 250, 900 285 S 1300 320, 1440 290 L1440 320 L0 320 Z" fill="currentColor" />
    </svg>
  );
}
