import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/blocks/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hrushikesh Dongre",
  description: "Hrushikesh Dongre portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
