"use client"
import {Service} from "@/components/index/Service";
import {Shareholders} from "@/components/Shareholders";
import {Achievements} from "@/components/Achements";
import {Hero} from "@/components/index/Hero";
import {siteConfig} from "@/config/site";
import {useEffect, useState} from "react";
import {Power} from "@/components/index/Power";
import 'swiper/css/bundle';
import {Map} from "@/components/Map";
import {About} from "@/components/index/About";
import { ProjectItem } from "@/types";
import {Project, projects} from "@/config/projects";
const getData = async () => {
    const res = await fetch(`${siteConfig.links.backend}/projects`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
        return await res.json()
}
export default function Home( ) {
    const [data, setData] = useState<Project[]>([]);
    useEffect(() => {
        if (data.length==0){
            getData().then((a)=>{
                setData(a)
            })
        }
    }, [data]);

    const dataList=(projectList:Project[]):ProjectItem[]=>{
        let a: ProjectItem[]=[]
        for (let index = 0; index < projectList.length; index++) {
            const project = projectList[index];
            for (let i = 0; i < project.images.length; i++) {
                a.push({
                    image:project.images[i],
                    title:project.title,
                    description:project.description
                })

                
            }
            
        }
        return a
    }

    return (
        <>
            {data.length>0?(

            <Hero images={dataList(data)} />
            ):(
                <div className="" style={{height:'90vh', backgroundImage:"url('./image/11.jpg')"}}>loading...</div>
            )}
        <About/>
        <Power title={'لماذا القوة العقارية ؟'}/>
        <Service title={'خدماتنا'}/>
        <Achievements/>
        <Shareholders/>
        <Map/>
        </>

    );
}

