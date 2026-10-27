import type { Metadata } from "next";
import {Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: "CliniCore | Clinic Management",
  description: "Clinic Management",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={plusJakartaSans.variable}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
