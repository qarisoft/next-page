import {Skeleton} from "@nextui-org/skeleton";
import {Card} from "@nextui-org/card";
import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';
import 'swiper/css';
import  'swiper/css/grid';
import {Autoplay} from "swiper/modules";
export const Information = () => {
    return (
        <>
            <div className="md:flex justify-around  p-4 ">
                <div className="text max-w-2xl md:p-6   ">
                    <h1 className='font-bold text-2xl m-3'>
                        عبر العمران للتطوير والاستثمار العقاري
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


                <div className="imgs   flex    md:flex-row  gap-3 justify-self-center md:p-6 w-full overflow-hidden ">

                    <Swiper
                        modules={[Grid]}
                        className={'h-full hidden md:block'}
                        breakpoints={{
                            '@0.75': {
                                spaceBetween:20,
                                slidesPerView: 1,
                            },
                            '@1.00': {
                                slidesPerView: 2,
                            },
                            '@1.5': {
                                slidesPerView: 2,
                                spaceBetween:0,
                            },
                        }}
                    grid={{rows:2,  fill:"row"}}
                    >
                        <SwiperSlide>
                            <Card className="w-60  "  radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-60  "  radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-60  "  radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-60  "  radius={'none'}>
                                <Skeleton className="">
                                    <div className="h-28 rounded-sm bg-default-300"></div>
                                </Skeleton>
                            </Card>
                        </SwiperSlide>

                    </Swiper>




                    <Swiper
                        className={'h-full  md:hidden'}
                        breakpoints={{
                            '@0.75': {
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

        </>
    );
};