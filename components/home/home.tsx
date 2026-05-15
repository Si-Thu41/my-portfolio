import Image from "next/image";
import Typing from "./typing";

export default function HomePage(){
    return <div className="min-h-screen bg-primary ">
        <div className="grid grid-cols-2 pt-20 w-7/10 mx-auto mb-50">{/*Profile Banner */}
           
            
        <div className="relative w-fit mx-auto">
            {/* Outer soft glow */}
            <div className="absolute inset-0 rounded-full bg-conic from-cyan-500 to-cyan-300  blur-xl scale-107 opacity-70" />

            {/* Inner tight glow */}
            <div className="absolute inset-0 rounded-full bg-conic from-cyan-500 to-cyan-300 to-50% blur-md scale-105" />

            {/* Actual sharp ring + image */}
            <div className="relative p-[3px] rounded-full bg-conic from-cyan-500 to-cyan-300 w-fit">
                <div className="relative w-60 h-60  rounded-full overflow-hidden">
                <Image src="/home_profile.jpg" alt="Profile" fill className="object-cover scale-125 -translate-x-7 -translate-y-4 "/>
                </div>
            </div>
        </div>
         <div className="flex flex-col text-center items-start justify-center">
                <h1 className="text-white text-6xl mb-3">Si Thu Naing</h1>
                <p className="text-gray-200 text-3xl ">ICT Student | Full Stack Developer</p>
                <Typing />
            </div>
        </div>
        
        <p className="text-white text-2xl text-center">Bachelor of Science (Information and Communication Technology)</p>
        <p className="text-white opacity-85  text-xl text-center">Rangsit University</p>
       
    </div>
}