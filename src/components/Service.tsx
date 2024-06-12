
import Link from "next/link"
export const Service = () => {
    return (
        <>
            <div className="w-full flex justify-center relative"
                 style={{backgroundImage: `url('./image/11.jpg')`, backgroundAttachment: 'fixed'}}>
                <div className="bg-mprimary w-full h-full absolute  opacity-75"></div>
                <div className="  flex flex-col gap-2 m-4">
                    <div className=" flex gap-2 ">
                        <ServiceItem/>
                        <ServiceItem/>
                    </div>
                    <div className="flex gap-2">
                        <ServiceItem/>
                        <ServiceItem/>
                    </div>
                    <ServiceItem/>
                </div>
            </div>
        </>
    );
};


const ServiceItem = () => {
    // @ts-ignore
    return (
        <div className='war'>
            <div className="flip-card  h-64 w-[500px] flex m-auto ">
                <div className="flip-card-inner ">
                    <div className="flip-card-front flex justify-center bg-white">
                        <div className="m-auto">

                            <span className="icon icon-healthcare font-medium"></span>
                            <h1 className={'font-bold text-2xl'}>استثمار الاراضي</h1>
                        </div>
                    </div>
                    <div className="flip-card-back  bg-mprimary text-white flex " style={{ direction:'rtl'}}>
                        <div className="m-auto text-end p-2 ">
                            <ul className='list-disc  p-2 m-2'>
                                <li>إضافة قيمة إلى الأراضي من خلال أعمال البنية التحتية والتخطيط الرئيسي قبل البيع.</li>
                                <li>امتلاك قطع أراضي استراتيجية مع رؤية طويلة الأجــل لاتجاهــــات الـتنميـــة
                                    العــمرانية في الـــمدن الـــرئيسـية.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="card0 rounded flex  w-[500px]  h-64 bg-amber-300">*/}
            {/*    <div className=" flex   justify-center  m-auto">*/}
            {/*        <div className="back">*/}

            {/*        </div>*/}
            {/*        <div className="text-center  front">*/}

            {/*                <span className="icon icon-healthcare font-medium"></span>*/}
            {/*                <h1 className={'font-bold text-2xl'}>استثمار الاراضي</h1>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};