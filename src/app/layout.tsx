import type {Metadata, Viewport} from "next";
import "@/styles/globals.css";
import {Providers} from "@/app/providers";
import {siteConfig} from "@/config/site";
import {Image} from "@nextui-org/image";
import React from "react";
import {Navbar} from "@/components/navbar";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
export const metadata: Metadata = {
  title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`
  },

    description: siteConfig.description,
    icons: {
        icon: "./favicon.ico",
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
      <body className={`${'inter.className'} "min-h-screen bg-background font-sans antialiased"`}>

      <Providers
      >
          <div className="relative flex flex-col  ">
              <Navbar/>
              <main className=" ">
                  {children}
              </main>
              <footer className={'flex-1 pt-5 border-t'}>
                  <div className="md:flex justify-between md:max-w-7xl mx-auto pb-3 gap-3">
                      <div className=" md:flex flex-col   text-center md:text-start gap-1 text-large">
                          <h1 className="font-extrabold">روابط هامة</h1>
                          <div className="font-medium">الرئيسية</div>
                          <div className="font-medium">عن الشركة</div>
                          <div className="font-medium">مشاريعنا</div>
                          <div className="font-medium">خدماتنا</div>
                          <div className="font-medium">اتصل بنا</div>
                          <div className="font-medium">المساعدة</div>
                          <div className="font-medium">سياسة الخصوصية</div>
                      </div>

                      <div className="b  flex flex-col justify-center gap-4 p-2 md:px-10 mt-3">
                          <div className=" flex justify-center">

                              <Image
                                  width={300}
                                  alt="NextUI hero Image"
                                  src="./logo.jpeg"
                              />
                          </div>

                          <div className="   justify-center mt-1 md:mt-0">
                              <div className="bg-blue-6000 w-fit mx-auto text-center">

                                  <h1 className={'text-large font-extrabold text-center divide-y-2 divide-amber-400'}> شركة
                                      منازل العمران للتطوير والاستثمار العقاري</h1>
                                  <div className="h-[3px] bg-[#c19455] mx-2"></div>
                                  <div className="font-[600] pt-1">

                                      <h1>MANAZEL ALOMRAN FOR DEVELOPMENT AND REAL ESTATE</h1>
                                      <h1>INVESTMENT COMPANY</h1>

                                  </div>
                              </div>

                          </div>
                          <p className={'max-w-xl text-center'}>منذ لحظة تأسيسها، وعلى مدار 40 عاماً من خـبرات مؤسسيهــا
                              في مجــال العقار والاستثمــار العقـاري تواكـب الشركة النهضة العمرانيـة التي تشهدها
                              المملكـة العربية السعـــودية</p>
                      </div>

                      <div className="flex flex-col gap-1 text-center text-large">
                          <div className="font-extrabold"> تواصل معنا</div>
                          <div className="">هاتف</div>
                          <div className="">ادارة التسويق - الاستفسار</div>
                          <div className="">ادارة الأملاك</div>
                          <div className="">
                              <p>المقاولات</p>
                              <p style={{direction: 'ltr'}} className='left'>(+966) 123456789</p>
                          </div>

                      </div>
                  </div>


                  <div className="bg-mprimary text-white text-center p-2 py-4 ">جميع الحقوق محفوظة © 2024 - شركة منازل
                      العمران للتطوير والاستثمار العقاري
                  </div>
              </footer>
          </div>
          <Link href={'https://wa.me/966533307024'}
                className="fixed bg-[#25D366] text-center flex justify-center  bottom-0 z-10  h-12 w-12 rounded-full m-3">
              {/*<svg  fill="none" xmlns="http://www.w3.org/2000/svg" className={'mx-auto   self-center p-auto relative top-0'}>*/}
              {/*        <path*/}
              {/*              d="M27.7462 12.4474c2.9024.014 5.7034 1.1536 7.7986 3.1621 2.1456 2.057 3.3822 4.8152 3.4903 7.7856.1056 2.9007-.9071 5.7501-2.8279 7.9262-2.1067 2.3867-5.0371 3.7574-8.2021 3.8483a11.3615 11.3615 0 0 1-.325.0046c-1.7054 0-3.3949-.3845-4.9252-1.1209l-5.9481 1.323a.0874.0874 0 0 1-.1033-.0974l1.0048-6.0144c-.8575-1.5668-1.3361-3.3321-1.3877-5.1278-.087-3.0341 1.0127-5.9203 3.0966-8.1273 2.1606-2.2882 5.1111-3.562 8.2727-3.562h.0563Zm-.0633 1.9717a9.576 9.576 0 0 0-.2728.0039c-5.1765.1485-9.2671 4.4807-9.1186 9.6572.0454 1.5806.4907 3.1322 1.2878 4.4869l.173.2936-.7445 4.0812 4.0387-.9533.305.1587c1.3307.6924 2.8218 1.0553 4.3283 1.0553.0895 0 .1792-.0013.2687-.0039 5.1766-.1484 9.2672-4.4806 9.1187-9.6571-.1459-5.0851-4.3294-9.1225-9.3843-9.1225Zm-3.9285 3.9024c.1899.0059.3802.0113.5462.0235.2029.0146.4275.031.6265.5128.2362.5721.747 2.0004.8139 2.1453.0669.1449.1093.313.0084.5007-.1009.1873-.1521.3049-.2995.467-.1477.1623-.3111.3628-.4431.4867-.1474.1379-.3006.2879-.143.5785.1575.2907.701 1.2424 1.5255 2.0249 1.0596 1.0056 1.9093 1.3374 2.2468 1.4948.1218.0569.223.0839.3114.0839.1214 0 .2185-.0509.3112-.1448.1776-.18.712-.8036.937-1.0905.1177-.1501.2243-.2033.34-.2033.0926 0 .1911.0341.3061.08.2584.1032 1.639.8366 1.9198.9881.2808.1514.4686.2287.5363.3497.0676.1216.05.6927-.2081 1.3517-.2581.6591-1.4419 1.2661-1.9662 1.2975-.1535.0093-.3045.0307-.501.0307-.4751 0-1.2159-.1251-2.8986-.8498-2.8631-1.2329-4.6017-4.2625-4.7385-4.4571-.1365-.1949-1.1167-1.5831-1.0736-2.9873.0431-1.404.801-2.0718 1.0712-2.3493.259-.2661.5558-.334.7474-.334l.0239.0003Z"*/}
              {/*              fill="#fff"/>*/}

              {/*</svg>*/}
              <svg fill="none"  className={'m-2 '} version="1.1" id="Layer_1"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308"
                   >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                          <g id="XMLID_468_">
                              <path id="XMLID_469_"
                                   d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                                    fill="#fff" ></path>
                              <path id="XMLID_470_"
                                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                                    fill="#fff">

                              </path>
                          </g>
                      </g>
              </svg>
          </Link>

      </Providers>

      <script src='a.js'></script>
      </body>

    </html>
  );
}
