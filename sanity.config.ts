import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    // I can do //@ts-ignore
    projectId: "b51fwwd4", //or do as string on this line
    dataset: "production",
    title: "ASW Website",
    apiVersion: "2023-01-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;
