import { getProject } from "@/sanity/sanity-utils";

import "@/src/app/(site)/css/homepageLayout.css";
import Image from "next/image";
import { ReactNode } from "react";
import { Project } from "@/types/Project";

interface Props {
    children: ReactNode;
}

export default async function ASWIntroduction({ children }: Props) {
    //const intro = await getProject("asw-introduction");

    return <div className="ASWIntroduction">{children}</div>;
}
