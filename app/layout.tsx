import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mavorixindustrial.com"),
  title: {
    default: "MAVORIX INDUSTRIAL | Industrial Sourcing Partner in China",
    template: "%s | MAVORIX INDUSTRIAL"
  },
  description:
    "MAVORIX INDUSTRIAL helps overseas industrial buyers source reliable machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
