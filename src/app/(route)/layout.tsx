import type { Metadata, Viewport } from "next";
import { Kantumruy_Pro } from "next/font/google";
import "@/app/_styles/globals.css";
import { TanstackProvider } from "./_components";

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#fff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Union Mobile Project",
  description: "Union Mobile Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kantumruyPro.className}`}>
        <TanstackProvider>
          <main id="app">{children}</main>
        </TanstackProvider>
      </body>
    </html>
  );
}
