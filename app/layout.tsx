import { Roboto, Instrument_Serif, Syne, Space_Grotesk, Newsreader } from "next/font/google";
import Navbar from "@/sections/navbar/Navbar";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "400"
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${syne.variable} ${spaceGrotesk.variable} ${robotoSans.variable} ${newsreader.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
