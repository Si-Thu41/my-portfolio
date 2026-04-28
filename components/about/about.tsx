import SkillAndLogo from "./skillsAndLogo"

const skills=[
    {id:1,skill:"Javascript",source:"/logo_img/js_no_bg.png"},
    {id:2,skill:"React js",source:"/logo_img/react_no_bg.png"},
    {id:3,skill:"Next js",source:"/logo_img/next_no_bg.webp"},
    {id:4,skill:"Node js",source:"/logo_img/node.png"},
    {id:5,skill:"PostgreSQL",source:"/logo_img/postgresql.png"},
    {id:6,skill:"Prisma",source:"/logo_img/prismaHD.png"},
    {id:7,skill:"REST APIs",source:"/logo_img/rest_api.png"},
    {id:8,skill:"Git",source:"/logo_img/git_no_bg.png"},
    {id:9,skill:"Docker",source:"/logo_img/docker_no_bg.png"},
    {id:10,skill:"Tailwind",source:"/logo_img/Tailwind_CSS_Logo.png"},
]
export default function About(){
    return (
        <div className="bg-tertiary text-white py-20 w-full">
    <div className="w-1/2 mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold mb-4 text-cyan-300 text-shadow-lg/50 text-shadow-cyan-400">About Me</h1>
        <p className="text-left text-text text-base/7 indent-8">I'm an ICT student and aspiring Full-Stack Developer passionate about building responsive, user-focused web applications. I primarily work with JavaScript technologies including React, Next.js, and Node.js, along with databases such as PostgreSQL using Prisma.</p>
        <p className="text-left text-text text-base/7 indent-8">I enjoy solving real-world problems by designing systems that are secure, efficient, and scalable. One of my projects, NaingAirLine, is an online flight booking platform that demonstrates my ability to design and implement full-stack applications. I’m currently seeking opportunities to contribute as a developer and continue growing in full-stack and AI-driven development.</p>
    </div>
    <h2 className="text-3xl text-center mb-8 text-cyan-300">Tech Stack</h2>
    <div className="w-4/5 mx-auto grid grid-cols-4 gap-y-5">
         {skills.map((s)=>(
        <SkillAndLogo key={s.id} skill={s.skill} source={s.source}/>
    ))}
    </div>
   
</div>
)
}