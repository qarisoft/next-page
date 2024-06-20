import {Skeleton} from "@nextui-org/skeleton";
import {Card} from "@nextui-org/card";
import { Swiper, SwiperSlide,} from 'swiper/react';
import 'swiper/css';
import  'swiper/css/grid';
import {Autoplay} from "swiper/modules";
export const Information = () => {
    return (
        <>
            <div className="md:flex justify-around  p-4 ">
                <div className="text max-w-2xl md:p-6   ">
                    <h1 className='font-bold text-2xl m-3'>
                        منازل العمران للتطوير والاستثمار العقاري
                    </h1>
                    <p className='font-medium leading-loose ps-4'>
                        لم تكن مسيرة شركة عبر العمران للتطوير والاستثمـار العقاري وليدة لحظة التــأسيس، بل هي ممتـدة
                        عبــر زمن يتجاوز 40 عاماً من خـبرات مؤسسيهــا في مجــال العقار والاستثمـــار العقـاري وصولاً إلى
                        التطــوير الذي واكب النهضة العمرانية التي تشهدها المملكة العربية السعـــودية، بقيــادة خادم
                        الحرمين الشريفين وسمو ولي العهد تحقيقاً لأهداف رؤية 2030.
                    </p>
                    <ul className='mt-5 list-disc ps-8 leading-7'>
                        <li>

                            نواكب النهضة والتطور العمراني الذي تشهدها المملكة العربية السعـــودية.
                        </li>
                        <li>

                            إيجاد فرص حقيقية للاستثمار العقاري.
                        </li>
                        <li>

                            نلبي احتياجــــات مختلــف الشرائح الاجتماعية.
                        </li>
                        <li>

                            تطوير الأراضي الخام وتقديمها بأسعـــار منـافسة في مواقع حيوية ومميزة.
                        </li>
                    </ul>

                </div>


                <div className="imgs   flex    md:flex-row  gap-3 justify-self-center md:p-6 w-full  ">


                    <div className="hidden md:flex md:gap-2">
                        <div className="">

                            <Card className="w-60  " radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                            <div className="h-5"></div>
                            <Card className="w-60  " radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                            <div className="h-5"></div>
                        </div>

                        <div className="">

                            <Card className="w-60  " radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                            <div className="h-5"></div>
                            <Card className="w-60  " radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                        </div>
                    </div>




                    <div className="md:hidden">

                        <Swiper
                            className={'h-full flex-1 m-2 md:hidden'}
                            modules={[Autoplay]}
                            breakpoints={{
                                '@0.75': {
                                    slidesPerView: 1,
                                },
                                '@1': {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Card className="w-[90%] mx-auto "  radius={'none'}>
                                    <Skeleton className="">
                                        <div className="h-36 rounded-sm bg-default-300"></div>
                                    </Skeleton>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="w-[90%] mx-auto "  radius={'none'}>
                                    <Skeleton className="">
                                        <div className="h-36 rounded-sm bg-default-300"></div>
                                    </Skeleton>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="w-[90%] mx-auto "  radius={'none'}>
                                    <Skeleton className="">
                                        <div className="h-36 rounded-sm bg-default-300"></div>
                                    </Skeleton>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="w-[90%] mx-auto "  radius={'none'}>
                                    <Skeleton className="">
                                        <div className="h-36 rounded-sm bg-default-300"></div>
                                    </Skeleton>
                                </Card>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </div>
            </div>

        </>
    );
};