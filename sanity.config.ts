import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "b51fwwd4",
    dataset: "production",
    title: "ASW Website",
    apiVersion: "2023-01-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;
