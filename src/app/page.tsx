"use client"

import Image from "next/image";
import {Service} from "@/components/Service";
import {Information} from "@/components/Information";
import {Shareholders} from "@/components/Shareholders";
import {Achements} from "@/components/Achements";
import {Hero} from "@/components/index/Hero";

export default function Home() {

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
        <Information/>
        <div className="">

            <Service></Service>
        </div>
            <Achements/>
        <Shareholders/>
            
            {/*<div className="h-28"></div>*/}

        </>
            
    );
}

