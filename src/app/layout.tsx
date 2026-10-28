import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shivai Clinic — Premium Dental, Skin & Hair Care in Pune",
  description:
    "Shivai Clinic in Charholi, Pune offers premium cosmetic dentistry, dental aesthetics, skin treatments and hair care. Dr. Ankita Tarte, BDS. Book your appointment today.",
  keywords: [
    "dental clinic Pune",
    "cosmetic dentist Charholi",
    "dental implants Pune",
    "teeth whitening",
    "veneers",
    "skin treatment Pune",
    "hair clinic Pune",
  ],
  openGraph: {
    title: "Shivai Clinic — Premium Care in Pune",
    description: "Cosmetic dentistry, skin & hair treatments under one roof. Charholi, Pune.",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${onest.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
