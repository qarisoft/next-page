import {siteConfig} from "@/config/site";

export const Goals = () => {
    return (
        <>
            <div className="bg-amber- w-full p-1">
                <div className="text max-w-2xl md:p-6   ">
                    <h1 className='font-bold text-2xl m-3 bg-[#f7942e] w-fit rounded-e-2xl p-1 pe-9'>
                        الأهداف
                    </h1>
                    <p className='font-medium leading-loose ps-4'>
                        {siteConfig.vision}
                    </p>
                    <ul className='mt-5 list-disc ps-8 leading-7'>
                        {
                            siteConfig.goals.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </>
    );
};