import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SuperBase - Sports • Tech • Arts",
  description: "SuperBase aftercare program selection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-public-sans)" }}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
