import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const poppinsFonts = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExamPaperHub – Previous Year Papers for Final Exam Success",
  description:
    "Access thousands of final year exam papers from top universities across various subjects. Search, download, and prepare confidently with ExamPaperHub – your go-to resource for academic success.",
  openGraph: {
    images:
      "http://res.cloudinary.com/dakddv1pm/image/upload/v1746276103/posts/zan4ctonv0n0efq0ppad.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en">
        <body
          className={`${poppinsFonts.className} ${geistMono.variable} antialiased`}
        >
            <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RL3V9F5XCF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RL3V9F5XCF');
          `}
        </Script>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
