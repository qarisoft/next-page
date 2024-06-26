import { Swiper, SwiperSlide } from 'swiper/react';
import {Card, Skeleton} from "@nextui-org/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";
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
                className={ ' w-[90%] md:w-[80%]  m-3 px-10'}
                watchSlidesProgress
                breakpoints={{
                    '@0.75': {
                        slidesPerView: 1,
                        spaceBetween:20,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween:100,
                    },
                    // '@1.5': {
                    //     slidesPerView: 2,
                    // },
                }}
                // slidesPerView={1}

                autoplay={{
                    delay: 4000
                }}
                pagination={{clickable:true}}
                scrollbar
                modules={[Autoplay,Navigation,Pagination,A11y,Scrollbar]}
                onTouchStart={(swiper) => swiper.autoplay.pause()}
                onTouchEnd={(swiper) => swiper.autoplay.resume()}
                loop
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={''}>
                            <div className="w-full h-full ">

                                <img src={item}/>
                            </div>
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