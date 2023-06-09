import Header from "@/components/Header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";

const spacegr = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "EduRed",
  description:
    "Education digital platform for red book of Turkmenistan and natural reserves",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spacegr.className} bg-BG`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
