import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comfort book",
  description: "Qulaylik bilan xarid qiling Kitob va Sovg'alar",
  keywords: "comfort books, kitoblar, kitob, kitob-dokoni, Kitob va Sovg'alar",
  creator: "Mayoq uz",
  applicationName: "Comfort books",
  category: "book store, kitob dokoni, online market",
  robots: ""
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}