import { Swiper, SwiperSlide } from 'swiper/react';
import {Card, Skeleton} from "@nextui-org/react";
import 'swiper/css';
import {Autoplay} from "swiper/modules";
export const Shareholders = () => {
    const data=[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,9,10,11,12
    ]

    return (
        <>
            <Swiper
                className={'md:w-[80%]'}
                spaceBetween={5}
                breakpoints={{

                    '@0.75': {
                        // width: 576,
                        spaceBetween:20,
                        slidesPerView: 1,
                    },
                    '@1.00': {
                        // width: 768,
                        slidesPerView: 2,
                    },

                    '@1.5': {
                        slidesPerView: 5,

                    },


                }}
                // slidesPerView={1}

                autoplay={{
                    delay: 3000
                }}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SlideItem/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </>
    );
};


const SlideItem = ()=>{
    return (
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
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