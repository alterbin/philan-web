import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/src/providers";
import Footer from "@/src/components/ui/footer";
import Navbar from "@/src/components/ui/navbar";
import { Suspense } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metas } from "@/src/utils/metas";
import { PwaInstallPromptClient } from "@/src/components/pwa-install-prompt/client-wrapper";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Optimal",
  description: "Give Old Items a New Story",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Optimal",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Metas />
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Suspense fallback={<div>Loading...</div>}>
          <Provider>
            <Navbar />
            {children}
            <div className="app_landing_page__px">
              <Footer />
            </div>
            <PwaInstallPromptClient />
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}