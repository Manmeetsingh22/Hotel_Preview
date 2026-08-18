import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Aura Grand Resort & Luxury Suites | 5-Star Haven",
  description:
    "Experience bespoke luxury at Aura Grand Resort & Suites. Discover lavish standard, deluxe, and presidential suites, Michelin-grade dining, tranquil spa retreats, and world-class conference facilities.",
  keywords: "luxury hotel, 5 star resort, executive suites, spa, fine dining, conference hall, luxury vacation",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-[#E8DFD1] selection:text-[#5E471C] flex flex-col antialiased">
        <ToastProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
