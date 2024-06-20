import {useEffect, useState} from "react";
import 'animate.css'
interface Obj{
    title: string;
    description: string;
    image: string;
}
interface HeroProps {
    images:Obj[]
}
export const Hero = ({images}:HeroProps)=>{


    const [activeI,setImage] = useState(0)
    const [activeII,setII] = useState(-1)

    let aa: NodeJS.Timeout | null;
    useEffect(() => {
        if (images.length<=1){
            return;
        }
        if (aa==null){

            aa = setTimeout(()=>{
                    setII(activeI);
                    setImage(i=>i >=  images.length -1   ? 0 : i+1);
                    return;
            },6000)
        }
    }, [activeI]);


    return (
        <div className=" h-screen relative mt-[-4rem] top-0 left-0 w-full">

            {/*<div className="bg-amber-300 p-7 absolute top-50  mt-20  left-0 z-50 ">activeI: {activeI} activeII: {activeII}</div>*/}

            {images.map((i, index) => (
                <div key={index}>
                    <div
                        className={`absolute w-full h-full bg-mprimary bg-repeat-round slide-m 
                        ${index == activeI ? '' : 'hidden'} `}
                        style={{backgroundImage: `url(${i.image})`}}>
                    </div>
                    <div
                        className={`absolute w-full h-full bg-mprimary bg-repeat-round slide-m1  
                        ${index == activeII ? ' animate__animated animate__fadeOut ' : 'hidden'}`}
                        style={{backgroundImage: `url(${i.image})`}}>
                    </div>
                    
                    <div className="h-full w-full absolute top-0 left-0 bg-gray-800 opacity-15 overlay-color"></div>


                    <div className="absolute w-full h-full  flex justify-center items-center slide-c">
                        <Item data={i} className={`animate__animate ${index == activeI ? 'fdInDown' : ''}`}
                              c={index == activeI ? 'nh' : 'hidden'} n={activeI}/>
                    </div>
                    <div className="absolute w-full h-full  flex justify-center items-center slide-c1 ">
                        <Item data={i}
                              c={index == activeII ? 'animate__animated animate__fadeOutRight' : 'hidden'} n={activeI}/>
                    </div>
                    <div className="absolute w-full h-full  flex justify-center items-center slide-c2 ">
                        <Item data={i}
                              c={index == activeII ? 'animate__animated animate__fadeOutDown' : 'hidden'} n={activeI}/>
                    </div>


                </div>

            ))}

        </div>
    );
}


interface Props {
    className?: string;
    data: Obj;
    n?: number;
    c?: string;
}

function Item({className, c, data, n}: Props) {
    return (

        <div className={`  max-w-2xl px-2 ${c}    mx-auto   sc`}>

            <h1 className={`text-[#b79d41] text-3xl font-bold   ad-1 ${className}`}>احدث مشاريعنا</h1>
                <div className="h-14"></div>
                <h1 className={`text-[#d7d7d7] text-5xl md:text-8xl font-bold mb-5  ad-2 ${className}`}>
                    {data.title}
                </h1>
                <div className="h-2"></div>
                <div className={` text-white mt-2  ad-3  ${className}`}>
                    {data.description}
                </div>

                <div className={`bg-white w-fit rounded-md mt-2   p-2 ad-4  ${className}`}>
                    <button>تفاصيل اكثر</button>
                </div>

            </div>
    );
}
