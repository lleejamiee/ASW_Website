import { getProjects } from "@/sanity/sanity-utils";

//export const revalidate = 60;

export default async function Home() {
    const projects = await getProjects();

    //console.log("projects: ", projects);

    return (
        <div className="max-w-5x1 mx-auto">
            <h1>ASW Website</h1>
            {projects.map((project) => (
                <div key={project.name}>{project.name}</div>
            ))}
        </div>
    );
}
