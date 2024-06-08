"use client"

import Image from "next/image";
import {useEffect, useState} from "react";

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
        }, 3000)

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
            
            <div className="h-screen"></div>
        </>
            
    );
}

interface Props {
    className?: string,
    index?: number,
}

function Item({className,index}: Props) {
    return (
        <div className={`absolute slide-con h-full  md:right-[20%] mt-20 w-full md:max-w-4xl   flex flex-col z-20  ${className}`}>
            <div className="flex-1"></div>
            <div className={`content  `}>

                <h1  className="title ">احدث مشاريعنا</h1>
                <h1 className="topic">

                    مشروع فيلا

                 -
                    {index}
                </h1>
                {/*<div className="topic">ANIMAL</div>*/}

                <div className="des text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
                    minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
                    facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi
                    reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum
                    laudantium?
                </div>

                <div className="buttons">
                    <button>SEE MORE</button>
                    <button>SUBSCRIBE</button>
                </div>

            </div>
            <div className="flex-1"></div>

        </div>

    );
}
