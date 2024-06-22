import {siteConfig} from "@/config/site";
interface ServiceProps {
    title: string;
    description?: string;
    data?:string[]
}
export const Service = ({title,description,data}:ServiceProps) => {
    return (
        <>
            <div className="bg-amber-30 text-center  w-full p-1">
                <h1 className={'text-mprimary  font-bold text-2xl m-3' }>{title}</h1>

                <div className="h-4"></div>

            </div>

        </>
    );
};




const ServiceItem = ({title,description,data}:ServiceProps) => {
    // @ts-ignore
    return (
        <div className='war'>
            <div className="flip-card  h-64 sm:w-[300px] md:w-[500px] flex m-auto ">
                <div className="flip-card-inner ">
                    <div className="flip-card-front flex justify-center bg-white">
                        <div className="m-auto">

                            <span className="icon icon-healthcare font-medium"></span>
                            <h1 className={'font-bold text-2xl'}>{title}</h1>
                        </div>
                    </div>
                    <div className="flip-card-back  bg-mprimary  text-white flex " style={{ direction:'rtl'}}>
                        <div className="m-auto text-end p-2 ">
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