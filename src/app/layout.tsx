import type {Metadata, Viewport} from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {Providers} from "@/app/providers";
import {siteConfig} from "@/config/site";
// import {Navbar} from "@nextui-org/react";
import React from "react";
import {Navbar} from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`
  },

    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ar" dir="rtl" >
      <body className={`${inter.className} "min-h-screen bg-background font-sans antialiased"`}>

      <Providers
      >

          {/*<div className=" ">*/}

              <div className="relative flex flex-col  ">
                  <Navbar/>
                  <main className=" ">
                      {children}
                  </main>
              </div>
              {/*<footer className="w-full flex items-center justify-center py-3">*/}

              {/*</footer>*/}
          {/*</div>*/}
      </Providers>


      </body>

    </html>
  );
}
