import type { Metadata } from "next";
import { Mali } from "next/font/google";
import "./globals.css";

const mali = Mali({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Khaochae Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mali.className} antialiased overflow-y-hidden`}>
        {children}
      </body>
    </html>
  );
}
