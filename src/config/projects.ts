import {ProjectImage} from "@/types";


export type Project={
    title:string
    images:ProjectImage[]
    description?:string
    video?:string
}


export const projects:Project[]=[


    {
        title:'المروه',
        description:'',
        images:[

            {
                path:"./image/hero/marwah1.jpeg"
            },
            {
                path:"./image/hero/marwah2.jpeg"
            },
            {
                path:"./image/hero/marwah3.jpeg"
            },
            {
                path:"./image/hero/marwah4.jpeg"
            },
            {
                path:"./image/hero/marwah5.jpeg"
            }
            
            
        ],
    },
]
