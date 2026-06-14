import type { Metadata } from "next";
import { defaultOgImage } from "@/data/page-images";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mavorixindustrial.com"),
  title: {
    default: "MAVORIX INDUSTRIAL | Industrial Sourcing Partner in China",
    template: "%s"
  },
  description:
    "MAVORIX INDUSTRIAL helps overseas industrial buyers source reliable machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China.",
  icons: {
    icon: [
      { url: "/images/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/favicon-64.png", sizes: "64x64", type: "image/png" }
    ],
    shortcut: "/images/logo/favicon-32.png",
    apple: "/images/logo/favicon-64.png"
  },
  openGraph: {
    title: "MAVORIX INDUSTRIAL | Industrial Sourcing Partner in China",
    description:
      "MAVORIX INDUSTRIAL helps overseas industrial buyers source reliable machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China.",
    url: "https://www.mavorixindustrial.com",
    siteName: "MAVORIX INDUSTRIAL",
    images: [
      {
        url: defaultOgImage.src,
        width: defaultOgImage.width,
        height: defaultOgImage.height,
        alt: defaultOgImage.alt
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImage.src]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
