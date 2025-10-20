import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/src/providers";
import Footer from "@/src/components/ui/footer";
import Navbar from "@/src/components/ui/navbar";
import { Suspense } from "react";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Philan",
  description: "Give Old Items a New Story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZHTXYQ9J07"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());

           gtag('config', 'G-ZHTXYQ9J07');
          `}
        </Script>
        <Suspense fallback={<>Loading...</>}>
          <Provider>
            <Navbar />
            {children}
            <div className="app_landing_page__px">
              <Footer />
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
