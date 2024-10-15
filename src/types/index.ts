// import { ProjectImage } from "@/config/projects";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProjectImage={
  path:string
  description?:string
  overlay?:boolean
}
export type ProjectItem = {

  title?:string,
  description?:string,
  image:ProjectImage,

}