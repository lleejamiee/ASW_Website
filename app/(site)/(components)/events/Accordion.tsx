"use client";

import { Events } from "@/types/Events";
import { useState } from "react";
import "@/app/(site)/css/eventsPageLayout.css";

// To understand the use of Props: https://stackoverflow.com/questions/59969756/not-assignable-to-type-intrinsicattributes-intrinsicclassattributes-react-js
interface AccordionProps {
    eventYears: Events[];
}

export const Accordion = ({ eventYears }: AccordionProps) => {
    const [open, setOpen] = useState(false);

    const yearsSorted = eventYears
        .map((year) => Number(year.year))
        .sort()
        .reverse();

    return (
        <div className="Container">
            {yearsSorted.map((year) => (
                <div key={year} className="AccordionContainer">
                    <button className="Accordion hover:Accordion">
                        {year}
                    </button>
                </div>
            ))}
        </div>
    );
};
