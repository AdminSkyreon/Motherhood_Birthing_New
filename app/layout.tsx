import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import "../styles/below-fold.css";
import "../styles/page.css";

export const metadata: Metadata = {
  title: "Motherhood Hospitals",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const themeVars = {
  "--h-hero-tagline-size": "40px",
  "--h-hero-tagline-size-mobile": "clamp(26px, 6.8vw, 34px)",
  "--h-hero-tagline-color": "#0057A4",
  "--h-hero-emphasis-color": "#DB5070",
  "--h-doctor-card-width": "210px",
  "--h-doctor-card-width-mobile": "210px",
  "--h-doctor-card-padding": "24px 18px 18px",
  "--h-doctor-card-border-radius": "20px",
  "--h-doctor-card-footer-min-height": "auto",
  "--h-doctor-avatar-size": "96px",
  "--h-doctor-avatar-margin-bottom": "14px",
  "--h-doctor-avatar-initial-scale": "0.32",
  "--h-doctor-name-size": "18px",
  "--h-doctor-name-size-mobile": "18px",
  "--h-doctor-name-margin-bottom": "4px",
  "--h-doctor-name-line-height": "1.2",
  "--h-doctor-body-size": "14px",
  "--h-doctor-body-size-mobile": "14px",
  "--h-doctor-body-line-height": "1.5",
  "--h-doctor-credentials-margin-bottom": "5px",
  "--h-doctor-location-margin-bottom": "8px",
  "--h-doctor-btn-padding": "10px 10px",
  "--h-doctor-btn-font-size": "14px",
  "--h-doctor-experience-size": "13px",
  "--h-doctor-experience-weight": "700",
  "--h-doctor-experience-margin-bottom": "4px",
  "--h-doctor-name-max-lines": "2",
  "--h-doctor-credentials-max-lines": "2",
  "--h-section-title-size": "clamp(23px, 2.8vw, 39px)",
  "--h-section-title-size-mobile": "clamp(25px, 5.8vw, 35px)",
} as CSSProperties;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full antialiased ${montserrat.className}`} style={themeVars}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
