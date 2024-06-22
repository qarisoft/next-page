import {siteConfig} from "@/config/site";
interface PowerProps {
    title: string;
    description?: string;
    data?:string[]
}
export const Power = ({title,description,data}:PowerProps) => {
    return (
        <>
            <div className="text-center  w-full relative "
                 style={{
                backgroundImage: `url('./image/11.jpg')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center'
                }}
            >
                {/*<div className="bg-mprimary w-full h-full bsolute  opacity-75 z-0  p-1 pt-3">*/}

                {/*<div className="z-50  top-0 left-0 ">*/}

                <div className=" relative  w-full h-full  ">
                    <div className="absolute h-full w-full bg-mprimary opacity-50"></div>
                    <div className="p-3 md:grid grid-cols-2 gap-2 justify-center">
                    <div className={'text-white  font-bold text-2xl m-3  relative'}>{title}</div>

                            {
                                siteConfig.power.map((value, index) => (
                                    <div key={index} className={'p-2'}>
                                        <PowerItem title={value.title} description={value.description}/>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                {/*</div>*/}
                {/*</div>*/}



            </div>

        </>
    );
};


const PowerItem = ({title, description, data}:PowerProps) => {
    // @ts-ignore
    return (
        <div className='war overflow-hidden text-center'>
            <div className="flip-card  h-36  sm:w-[300px] md:w-[500px] flex m-auto ">
                <div className="flip-card-inner ">
                    <div className="flip-card-front flex justify-center bg-white">
                        <div className="m-auto">

                            {/*<span className="icon icon-healthcare font-medium"></span>*/}
                            <h1 className={'font-bold text-2xl'}>{title}</h1>
                        </div>
                    </div>
                    <div className="flip-card-back  bg-mprimary  text-white flex " style={{ direction:'rtl'}}>
                        <div className="m-auto text-en my-auto align-middle flex p-2 ">
                            {
                                description && <div className={'text-center'}>{description}</div>
                            }
                            <ul className='list-disc  p-2 m-2'>
                                {
                                    data && data.map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};