"use client"
import { Swiper, SwiperSlide,} from 'swiper/react';
import {Service} from "@/components/index/Service";
import {Autoplay,Navigation,Pagination,Scrollbar,A11y,Grid,EffectCards,EffectCube,EffectFlip,EffectFade,EffectCoverflow,EffectCreative} from "swiper/modules";
import {Shareholders} from "@/components/Shareholders";
import {Achements} from "@/components/Achements";
import {Hero} from "@/components/index/Hero";
import {siteConfig} from "@/config/site";
import {useEffect, useState} from "react";
import {Intro} from "@/components/index/Intro";
import {Power} from "@/components/index/Power";
import 'swiper/css/bundle';
import {Spinner} from "@nextui-org/spinner";

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
            <Swiper className={'max-w-2xl mb-3 pb-8'}
                    translate={'yes'}
                    modules={[
                        EffectCube,
                        Autoplay,
                        Navigation,Pagination,Scrollbar,A11y,Grid
                    ]}
                    pagination
                    scrollbar
                    effect={'cube'}
                    speed={900}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                    }}

            slidesPerView={1}>
                <SwiperSlide  >

                    <Intro title={'من نحن؟'}   description={siteConfig.intro}/>
                </SwiperSlide>
                <SwiperSlide >
                    <Intro title={'رؤيتنا'}   description={siteConfig.vision}/>
                </SwiperSlide>
                <SwiperSlide >
                    <Intro title={'الأهداف'}   data={siteConfig.goals}/>
                </SwiperSlide>
                <SwiperSlide >
                    <Intro title={'القيم و المبادئ'}   data={siteConfig.morals}/>
                </SwiperSlide>
            </Swiper>
        </div>



        <Power title={'لماذا القوة العقارية ؟'}/>
        <Service title={'خدماتنا'}/>
        <Achements/>
        <Shareholders/>
        <div className="w-full relative">
            <div className="absolute bg-amber-30 text-center align-middle  w-full h-full flex justify-center  z-0">
                <Spinner className={'my-auto'}/>
            </div>
            <iframe className={'w-full  relative'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.483823520149!2d39.2247743!3d21.567029599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d107b0405037%3A0x20e3c5c1ae2d7034!2z2LTYsdmD2Kkg2YXZhtin2LLZhCDYp9mE2LnZhdix2KfZhiDZhNiq2LfZiNmK2LEg2YjYp9mE2KfYs9iq2KvZhdin2LEg2KfZhNi52YLYp9ix2Yo!5e0!3m2!1sen!2s!4v1719440638007!5m2!1sen!2s"
                 height="450" style={{border:0}}  loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>

    );
}

