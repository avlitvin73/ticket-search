"use client";

import FilmProvider from "@/redux/FilmProvider";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Билетопоиск",
  description: "Крупнейший сервис о кино в рунете",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <FilmProvider>
          <Header />
            {children}
          <Footer />
        </FilmProvider>
      </body>
    </html>
  );
}
