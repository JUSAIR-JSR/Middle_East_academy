import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Middle East Academy",
  description: "Best training academy for Fire & Safety, Industrial Safety, and more.",
  metadataBase: new URL("https://www.middleeastacademy.com"), // ✅ Replace with your actual domain
  openGraph: {
    title: "Middle East Academy",
    description: "Enhance your skills with industry-recognized certifications.",
    url: "https://www.middleeastacademy.com",
    siteName: "Middle East Academy",
    images: [
      {
        url: "https://www.middleeastacademy.com/og-image.jpg", // ✅ Replace with your OG image URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/images/MEA CIRCLE LOGO.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/images/MEA CIRCLE LOGO.png" sizes="512x512" />
  <link rel="apple-touch-icon" href="/images/MEA CIRCLE LOGO.png" />
</head>

      <body>{children}</body>
    </html>
  );
}
