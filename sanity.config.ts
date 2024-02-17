import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const sanityProjectId = process.env.SANITY_PROJECTID;

if (!sanityProjectId) {
    throw new Error(
        "SANITY_PROJECTID is not defined in the environment variables."
    );
}

const config = defineConfig({
    projectId: sanityProjectId,
    dataset: "production",
    title: "ASW Website",
    apiVersion: "2023-01-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;
