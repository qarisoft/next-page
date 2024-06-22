
interface IntroProps {
    title: string;
    description?: string;
    data?:string[]
}
export const Intro = ({title,description,data}:IntroProps) => {
    return (
        <>
            <div className="bg-amber-  p-1 m-2 me-0 border shadow ">
                <div className="text max-w-2xl md:p-6   ">
                    <h1 className='font-bold text-2xl mb-2 -ms-1 bg-[#f7942e] w-fit rounded-e-2xl p-1 pe-9'>
                        {title}
                    </h1>
                    {
                        description &&
                        <p className='font-medium leading-loose ps-4'>
                            {description}
                        </p>
                    }

                    <ul className='mt-5 list-disc ps-8 leading-7'>
                        {
                            data &&
                            data.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </>
    );
};