export type ProjectImage={
    path:string
    description?:string
    overlay?:boolean
}

export type Project={
    title:string
    images:ProjectImage[]
    description?:string
    video?:string
}


export const projects:Project[]=[

    {
        title:'الربوة',
        description:'',
        images:[

            {
                path:"./image/projects/rabwa/3.jpg",
                overlay:true
            },
            {
                path:"./image/projects/rabwa/4.jpg",
                overlay:true
            },
            {
                path:"./image/projects/rabwa/5.jpg"
            },
            {
                path:"./image/projects/rabwa/6.jpg"
            },
            {
                path:"./image/projects/rabwa/7.jpg"
            },
            {
                path:"./image/projects/rabwa/8.jpg"
            },
            {
                path:"./image/projects/rabwa/9.jpg"
            },
            {
                path:"./image/projects/rabwa/10.jpg"
            },
        ],
    },
    {
        title:'',
        description:'',
        images:[

            {
                path:"./image/projects/rabwa/1.jpg"
            },
            {
                path:"./image/projects/rabwa/2.jpg"
            },
            {
                path:"./image/projects/rabwa/11.jpg"
            },
            {
                path:"./image/projects/rabwa/12.jpg"
            },
            {
                path:"./image/projects/rabwa/13.jpg"
            },
            
        ],
    },
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
