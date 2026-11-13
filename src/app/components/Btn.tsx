import type { ReactNode } from "react";
import { Link } from "react-router";
import { CircleArrowDown, Mail } from "lucide-react";
import { app, site } from "../content/site";

export const AppleLogo = () => (
  <svg className="apple" viewBox="0 0 384 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
    />
  </svg>
);

// The coloured layer that rises from the bottom on hover.
const Fill = () => <span className="fill" aria-hidden="true" />;

/** Black App Store badge: "Download on the / App Store". */
export function StoreBadge({ className = "" }: { className?: string }) {
  return (
    <a className={`badge ${className}`} href={app.url} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
      <Fill />
      <AppleLogo />
      <span className="badge__txt">
        <small>Download on the</small>
        <b>App Store</b>
      </span>
    </a>
  );
}

/** Header button: "Download App" with the circled arrow. */
export function DownloadBtn({ className = "" }: { className?: string }) {
  return (
    <a className={`dl ${className}`} href={app.url} target="_blank" rel="noopener noreferrer">
      <Fill />
      <span>Download App</span>
      <CircleArrowDown size={22} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}

/** Thin outlined email button (FAQ footer, Support, Contact). */
export function MailBtn({ className = "", email = site.email }: { className?: string; email?: string }) {
  return (
    <a className={`mailbtn ${className}`} href={`mailto:${email}`}>
      <span>{email}</span>
      <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}

/** Full-width dark button (Duo card, forms). */
export function Btn({
  children,
  to,
  href,
  type = "button",
  className = "",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}) {
  const cls = `btn ${className}`;
  const inner = (
    <>
      <Fill />
      {href?.startsWith("https://apps.apple.com") && <AppleLogo />}
      <span>{children}</span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  return <button type={type} className={cls}>{inner}</button>;
}
