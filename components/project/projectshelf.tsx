
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from "next/link";

type props={
    live:boolean,
    title:string,
    
    description:string,
    image:string,
    link:string,
    skills:string[]
}
export default function Shelf({live,title,description,image,link,skills}:props){
    return <Link href={link} target="_blank" prefetch={false} 
    className="text-white grid grid-cols-4 w-7/10 py-8 transition-all duration-100
  hover:bg-linear-to-r hover:from-cyan-950/60 hover:to-transparent hover:shadow-[0_0_5px_rgba(34,211,238,0.1)] rounded-lg mx-auto">
        <div className="flex w-full h-full items-center justify-center">
            <Image src={image} alt={title} width={100} height={100} className="rounded-lg "/>
        </div>

        <div className="col-span-3">
              <h2 className="text-3xl mb-5 text-cyan-300">{title} 
                <ArrowOutwardIcon className="ml-3"/>
                    {live&&  <div className="text-text inline-flex ml-8 items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-cyan-400/30  text-sm font-medium">
                    <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span> 
                    Live Demo Available
                </div>}
              </h2>
       
        <p>{description}</p>
        <div className="block mb-2">
            {skills.map((s,i)=>
            <div key={i} className="inline-block bg-sky-950  rounded-full mr-2 mt-2 px-2 py-2">
            <p className=" text-cyan-300 text-shadow-xs text-shadow-cyan-200 text-sm ">{s}</p>
            </div>)}
        </div>
        
        </div>
       
      
    </Link>
}