"use client"

import Image from "next/image";
import {useEffect, useState} from "react";
import {Service} from "@/components/Service";
import {Information} from "@/components/Information";
import {Shareholders} from "@/components/Shareholders";

export default function Home() {

    const images = [
        "./image/11.jpg",
        "./image/33.jpg",
        "./image/44.jpg",
    ]
    const [activeImage, setActiveImage] = useState(0)
    const [pImage, setPImage] = useState(-1)

    let aa: NodeJS.Timeout;

    useEffect(() => {
        if (aa != null) {
            clearTimeout(aa);
        }
        aa = setTimeout(() => {
            setPImage(activeImage);
            setActiveImage(activeImage >= images.length - 1 ? 0 : activeImage + 1)
        }, 5000)

    }, [activeImage])

    return (
        <>
        <div className=" h-screen relative mt-[-4rem] top-0 left-0 w-full">
            {
                images.map((img, index) => (
                    <div
                        className={`h-full absolute top-0 left-0 w-screen bg-repeat-round slide
                  
                  ${activeImage == index ? 'active ' : 'inactive'}
                  ${pImage == index ? 'prev ' : "not-prev"}
                  
                                    `}
                        style={{backgroundImage: `url(${img})`}}
                        key={index}>
                        <div className="absolute  h-full w-full bg-gray-950  opacity-40"></div>
                    </div>
                ))
            }

            {images.map((img,index)=>(
                <div key={index}>

                <Item
                    index={index+1}
                    className={`
                    ${index==activeImage?'active ':"inactive"}
                    ${index==pImage?'prev':"not-prev"}
                
                `} />
                    <Item
                        index={index+1}
                        className={`
                    ${index==activeImage?' ':""}
                    ${index==pImage?'prev2':" hidden"}
                
                `} />

                </div>
            ))}



        </div>

        <Information/>
        <div className="">

            <Service></Service>
        </div>
        <Shareholders/>
            
            <div className="h-28"></div>

        </>
            
    );
}

interface Props {
    className?: string,
    index?: number,
}

function Item({className,index}: Props) {
    return (
        <div className={`absolute slide-con h-full p-2  md:right-[20%] mt-20 w-full md:max-w-2xl   flex flex-col z-20  ${className}`}>
            <div className="flex-1"></div>
            <div className={`content  `}>

                <h1  className="title text-2xl font-bold ">احدث مشاريعنا</h1>
                <h1 className="topic text-4xl font-bold">

                    مشروع فيلا

                 -
                    {index}
                </h1>
                {/*<div className="topic">ANIMAL</div>*/}

                <div className="des text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
                    minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
                    laudantium?
                </div>

                <div className="buttons p-2">
                    <button>تفاصيل اكثر</button>
                    {/*<button>حجز</button>*/}
                </div>

            </div>
            <div className="flex-1"></div>

        </div>

    );
}
