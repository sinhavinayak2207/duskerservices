import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dusker | Next-level AI Training Company",
  description: "Dusker: AI training, evaluation, and deployment for the future.",
  icons: {
    icon: [
      {
        url: "https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg?v=" + Date.now(),
        sizes: "32x32",
        type: "image/jpeg",
      },
    ],
    shortcut: "https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg?v=" + Date.now(),
    apple: "https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg?v=" + Date.now(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg" type="image/jpeg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
