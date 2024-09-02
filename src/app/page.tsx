"use client"
// import { Swiper, SwiperSlide,} from 'swiper/react';
import {Service} from "@/components/index/Service";
// import {Autoplay,Navigation,Pagination,Scrollbar,A11y,Grid,EffectCards,EffectCube,EffectFlip,EffectFade,EffectCoverflow,EffectCreative} from "swiper/modules";
import {Shareholders} from "@/components/Shareholders";
import {Achievements} from "@/components/Achements";
import {Hero} from "@/components/index/Hero";
import {siteConfig} from "@/config/site";
import {useEffect, useState} from "react";
// import {Intro} from "@/components/index/Intro";
import {Power} from "@/components/index/Power";
import 'swiper/css/bundle';
// import {Spinner} from "@nextui-org/spinner";
import {Map} from "@/components/Map";
import {About} from "@/components/index/About";

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
        <About/>
        <Power title={'لماذا القوة العقارية ؟'}/>
        <Service title={'خدماتنا'}/>
        <Achievements/>
        <Shareholders/>
        <Map/>
        </>

    );
}

