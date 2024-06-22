import {siteConfig} from "@/config/site";
interface PowerProps {
    title: string;
    description?: string;
    data?:string[]
}
export const Power = ({title,description,data}:PowerProps) => {
    return (
        <>
            <div className="text-center bg-gray-100 w-full relative "
            >
                    <div className="p-3 md:grid grid-cols-2 gap-2 justify-center">
                    <div className={'textwhite  font-bold text-2xl m-3  '}>{title}</div>

                            {
                                siteConfig.power.map((value, index) => (
                                    <div key={index} className={'p-2 mb-4 bg-whit shadow rounded '}>
                                        <h1 className={'font-semibold text-xl mb-2'}>{value.title}</h1>

                                        <p className={'animate__animated'}>{value.description}</p>
                                    </div>
                                ))
                            }
                    </div>
            </div>

        </>
    );
};


const PowerItem = ({title, description, data}:PowerProps) => {
    // @ts-ignore
    return (
        <div className='war overflow-hidden text-center'>
            <div className="  h-36  sm:w-[300px] md:w-[500px] flex m-auto ">
                <div className=" ">
                    <div className=" flex justify-center bg-white">
                        <div className="m-auto">

                            {/*<span className="icon icon-healthcare font-medium"></span>*/}
                            <h1 className={'font-bold text-2xl'}>{title}</h1>
                        </div>
                    </div>
                    <div className="  bg-mprimar  text-whit flex " style={{ direction:'rtl'}}>
                        <div className="m-auto text-en my-auto align-middle flex p-2 ">
                            {
                                description && <div className={'text-center'}>{description}</div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


