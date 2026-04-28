import Image from "next/image";

export default function SkillAndLogo({skill, source}:{skill:string,source:string}){
    return <div className="text-center w-full flex flex-col items-center gap-3">
        <h1 className="text-cyan-100 ">{skill}</h1>
        <div className="w-full">
            <Image src={source} alt={skill} width={100} height={100} className="mx-auto"/>
        </div>
    </div>
}