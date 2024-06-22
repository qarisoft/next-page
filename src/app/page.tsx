"use client"

import Image from "next/image";
import {Service} from "@/components/index/Service";
import {Information} from "@/components/Information";
import {Shareholders} from "@/components/Shareholders";
import {Achements} from "@/components/Achements";
import {Hero} from "@/components/index/Hero";
import {siteConfig} from "@/config/site";
import {useEffect, useState} from "react";
import {Intro} from "@/components/index/Intro";
const getData = async () => {
    const res = await fetch(`${siteConfig.links.backend}/home`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
        return await res.json()
}

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

    const images = [
        {
            title:'مشروع فيلا 1',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt\n' +
                '                    minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda\n' +
                '                    laudantium?',
            image:"./image/11.jpg",
        },
        {
            title:'مشروع فيلا 2',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt\n' +
                '                    minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda\n' +
                '                    laudantium?',
            image:"./image/33.jpg",
        },
        {
            title:'مشروع فيلا 3',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt\n' +
                '                    minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda\n' +
                '                    laudantium?',
            image:"./image/44.jpg",
        }
    ]


    return (
        <>

        <Hero images={images} />

            <div className="pe-2">

            <Intro title={'من نحن؟'}   description={siteConfig.intro}/>
            <Intro title={'رؤيتنا'}   description={siteConfig.vision}/>
            <Intro title={'الأهداف'}   data={siteConfig.goals}/>
            <Intro title={'القيم و المبادئ'}   data={siteConfig.morals}/>
            </div>



        <Service title={'خدماتنا'}/>
        <Achements/>
        <Shareholders/>
        </>
            
    );
}

