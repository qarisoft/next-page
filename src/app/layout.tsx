import type {Metadata, Viewport} from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {Providers} from "@/app/providers";
import {siteConfig} from "@/config/site";
import {Image} from "@nextui-org/image";
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
                  <footer className={'flex-1 pt-5 border-t'}>
                      <div className="md:flex justify-between md:max-w-7xl mx-auto pb-3">
                          <div className=" md:flex flex-col   text-center md:text-start gap-1 text-large">
                              <h1 className="font-extrabold">روابط هامة</h1>
                              <div className="font-medium">الرئيسية</div>
                              <div className="font-medium">عن الشركة</div>
                              <div className="font-medium">مشاريعنا</div>
                              <div className="font-medium">خدماتنا</div>
                              <div className="font-medium">اتصل بنا</div>
                              <div className="font-medium">المساعدة</div>
                              <div className="font-medium">سياسة الخصوصية</div>
                              <div className="">..............</div>
                          </div>

                          <div className="b  flex flex-col justify-center gap-4 p-2 md:px-10">
                              <div className=" flex justify-center">

                                 <Image
                                      width={300}
                                      alt="NextUI hero Image"
                                      src="./logo.jpeg"
                                 />
                              </div>

                              <div className="   justify-center mt-1 md:mt-0">
                                    <div className="bg-blue-6000 w-fit mx-auto text-center">

                                        <h1 className={'text-large font-extrabold text-center divide-y-2 divide-amber-400'}> شركة منازل العمران للتطوير والاستثمار العقاري</h1>
                                        <div className="h-[3px] bg-[#c19455] mx-2"></div>
                                        <div className="font-[600] pt-1">

                                            <h1>ABR ALOMRAN FOR DEVELOPMENT AND REAL ESTATE</h1>
                                            <h1>INVESTMENT COMPANY</h1>

                                        </div>
                                    </div>

                              </div>
                              <p className={'max-w-xl text-center'}>منذ لحظة تأسيسها، وعلى مدار 40 عاماً من خـبرات مؤسسيهــا في مجــال العقار والاستثمــار العقـاري تواكـب الشركة النهضة العمرانيـة التي تشهدها المملكـة العربية السعـــودية</p>
                          </div>

                          <div className="flex flex-col gap-1 text-center text-large">
                              <div className="font-extrabold"> تواصل معنا</div>
                              <div className="">هاتف</div>
                              <div className="">ادارة التسويق - الاستفسار</div>
                              <div className="">ادارة الأملاك</div>
                              <div className="">
                                  <p>المقاولات</p>
                                  <p style={{ direction:'ltr' }} className='left'>(+966) 123456789</p>
                              </div>

                          </div>
                      </div>



                      <div className="bg-mprimary text-white text-center p-2 py-4 ">جميع الحقوق محفوظة © 2024 - شركة منازل العمران للتطوير والاستثمار العقاري</div>
                  </footer>
              </div>
              {/*<footer className="w-full flex items-center justify-center py-3">*/}

              {/*</footer>*/}
          {/*</div>*/}
      </Providers>


      </body>

    </html>
  );
}
