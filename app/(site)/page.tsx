import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

//export const revalidate = 60;

export default async function Home() {
    const projects = await getProjects();

    console.log("projects: ", projects);

    return (
        <div className="max-w-5x1 mx-auto">
            <h1>ASW Website test</h1>
            {projects.map((project) => (
                <div key={project.name}>{project.name}
                {project.image && ( 
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={250}
                        height={100}
                        />
                    )}
                    </div>
                
            ))}
        </div>
    );
}
