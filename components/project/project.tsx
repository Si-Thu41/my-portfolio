import Shelf from "./projectshelf";
import Link from "next/link";
import projects from "./projects.json";  // Import the JSON data

export default function Project() {
    return (
        <div className="bg-primary min-h-screen py-10">
            <h1 className="text-4xl text-center mb-10 text-cyan-300 text-shadow-lg/50 text-shadow-cyan-400">
                Projects
            </h1>
            {/* Map over the projects object values and render Shelf components */}
            {Object.values(projects).map((project) => (
                <Shelf
                    key={project.id}  // Use id as the unique key
                    title={project.title}
                    live={project.live}  // Pass the live property
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    skills={project.skills}  // Pass skills if needed
                />
            ))}
            <div className="flex justify-center mt-10">
                  <Link href="https://github.com/Si-Thu41" target="_blank" className="  text-white bg-green-700 py-3 px-3 rounded-md">
                Go to my github
            </Link>
            </div>
        </div>
    );
}