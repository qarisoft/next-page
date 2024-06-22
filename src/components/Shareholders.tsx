import { Swiper, SwiperSlide } from 'swiper/react';
import {Card, Skeleton} from "@nextui-org/react";
import 'swiper/css';

import {Autoplay,Navigation,Pagination} from "swiper/modules";
export const Shareholders = () => {
    const data=[
        './image/show/show1.jpeg',
        './image/show/show2.jpeg',
        './image/show/show3.jpeg',
        './image/show/show4.jpeg',

    ]

    return (
        <>
            <Swiper
                className={ ' w-[90%] md:w-[80%]  m-3'}

                breakpoints={{
                    '@0.75': {
                        spaceBetween:20,
                        slidesPerView: 1,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                    },
                    '@1.5': {
                        slidesPerView: 4,
                    },
                }}
                // slidesPerView={1}

                autoplay={{
                    delay: 4000
                }}
                modules={[Autoplay,Navigation,Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={''}>
                            <img src={item}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </>
    );
};


const SlideItem = ()=>{
    return (
        <Card className="w-[90%] mx-auto space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
}