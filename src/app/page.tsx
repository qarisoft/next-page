"use client"
import { Swiper, SwiperSlide,} from 'swiper/react';
// import Image from "next/image";
import {Service} from "@/components/index/Service";
import {Autoplay,Navigation,Pagination,Scrollbar,A11y,Grid,EffectCards,EffectCube,EffectFlip,EffectFade,EffectCoverflow,EffectCreative} from "swiper/modules";
// import {Information} from "@/components/Information";
import {Shareholders} from "@/components/Shareholders";
import {Achements} from "@/components/Achements";
import {Hero} from "@/components/index/Hero";
import {siteConfig} from "@/config/site";
import {useEffect, useState} from "react";
import {Intro} from "@/components/index/Intro";
import {Power} from "@/components/index/Power";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'swiper/css/grid';
// const getData = async () => {
//     const res = await fetch(`${siteConfig.links.backend}/home`)
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }
//         return await res.json()
// }

export default function Home( ) {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     if (data.length==0){
    //         getData().then((a)=>{
    //             setData(a)
    //             console.log(a)
    //         })
    //     }
    // }, [data]);



    return (
        <>

        <Hero images={siteConfig.index} />
        <div className="flex justify-center">
        </div>
        <div className="pe-2 min-h-[40vh] relative mt-0" style={{ backgroundImage:"url('./image/11.jpg')", backgroundRepeat:"no-repeat" ,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
            <style>

            </style>
            <div className="absolute h-full w-full bg-mprimary opacity-75">

            </div>
            <h1 className={'relative z-10 text-center font-semibold py-3 text-xl text-white border-b-1 mx-4'}>عن الشركة</h1>
            <Swiper className={''}

                    modules={[Autoplay,Navigation,Pagination,Scrollbar,A11y,Grid]}
                    pagination
                    scrollbar={{

                    }}
                    breakpoints={{
                        '@0.75': {
                            slidesPerView: 1,
                            spaceBetween:10,


                        },
                        '@1': {
                            slidesPerView: 1,
                            // cardsEffect:{
                            //
                            // },
                        },
                    }}


                    loop={true}
                    autoplay={{
                        delay: 4000,

                    }}

            slidesPerView={1}>
                <SwiperSlide className={'my-auto h-full bg-amber- '} >

                    <Intro title={'من نحن؟'}   description={siteConfig.intro}/>
                </SwiperSlide>
                <SwiperSlide className={'my-auto'}>
                    <Intro title={'رؤيتنا'}   description={siteConfig.vision}/>
                </SwiperSlide>
                <SwiperSlide className={'my-auto'}>
                    <Intro title={'الأهداف'}   data={siteConfig.goals}/>
                </SwiperSlide>
                <SwiperSlide className={'my-auto'}>
                    <Intro title={'القيم و المبادئ'}   data={siteConfig.morals}/>
                </SwiperSlide>
            </Swiper>
        </div>



        <Power title={'لماذا القوة العقارية ؟'}/>
        <Service title={'خدماتنا'}/>
        <Achements/>
        <Shareholders/>
        </>
            
    );
}

