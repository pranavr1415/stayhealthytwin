import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stay Healthy Twin",
  description: "The Hub for every gym twin",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
    >
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
