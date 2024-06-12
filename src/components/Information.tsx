import {Skeleton} from "@nextui-org/skeleton";
import {Card} from "@nextui-org/card";
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


                <div className="imgs  md:flex  gap-3 justify-self-center md:p-6">
                    <div className="flex flex-col gap-3">

                        <Card className="w-60  "  radius={'none'}>
                            <Skeleton className="">
                                <div className="h-28 rounded-sm bg-default-300"></div>
                            </Skeleton>
                        </Card>
                        <Card className="w-60 h-28  " radius={'none'} >
                            <Skeleton className="rounded-sm">
                                <div className="max-h-28 h-28 rounded-sm bg-default-300"></div>
                            </Skeleton>
                        </Card>
                    </div>


                    <div className="flex flex-col gap-2">

                        <Card className="w-72 " radius={'sm'} >
                            <Skeleton className="rounded-sm">
                                <div className="h-32 rounded-sm bg-default-300"></div>
                            </Skeleton>
                        </Card>
                        <Card className="w-72 " radius={'sm'} >
                            <Skeleton className="rounded-sm">
                                <div className="h-40 rounded-sm bg-default-300"></div>
                            </Skeleton>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    );
};