import page from "./page-schema";
import project from "./project-schema";
import { executive, executives } from "./exec-schema";
import { event, events } from "./events-schema";
import memberSignUp from "./signup-schema";

const schemas = [
    project,
    page,
    executives,
    executive,
    events,
    event,
    memberSignUp,
];

export default schemas;
