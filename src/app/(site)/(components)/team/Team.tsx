"use client";

import { useContext, useEffect, useState } from "react";
import {
    getExecutiveYears,
    getExecutivesByYear,
} from "../../util/fetchExecutives";
import { TeamStateContext } from "./TeamContext";
import { Executive } from "@/types/Executive";
import Image from "next/image";
import LinkedIn from "@/src/app/(site)/assets/photos/LinkedIn.png";
import Link from "next/link";
import { TeamDropdown } from "./TeamDropdown";

export function Team() {
    const { state, dispatch } = useContext(TeamStateContext);
    const [team, setTeam] = useState<Executive[]>();
    const [heads, setHeads] = useState<Executive[]>();

    useEffect(() => {
        const fetchYears = async () => {
            const fetchedYears = (await getExecutiveYears())?.map(
                (year) => year.year
            );
            const sortedYears = fetchedYears.sort().reverse();

            if (sortedYears) {
                dispatch({ type: "SET_YEARS", payload: sortedYears });
            }
        };

        fetchYears();
    }, []);

    useEffect(() => {
        const fetchTeam = async () => {
            const fetchedTeam = await getExecutivesByYear(state.selectedYear);

            const filteredHeads = fetchedTeam.executives.slice(0, 2);
            const filteredTeam = fetchedTeam.executives.slice(2);
            setHeads(filteredHeads);
            setTeam(filteredTeam);
        };

        fetchTeam();
    }, [state.selectedYear]);

    return (
        <>
            <div className="HeaderContainer">
                <div className="TeamHeader">Team of {state.selectedYear}</div>
                {state.years && <TeamDropdown />}
            </div>
            {team && heads && (
                <div className="ExecContainer">
                    <div className="Heads">
                        {heads.map((head) => (
                            <div key={head._id} className="ExecDetail">
                                <div className="ExecImage">
                                    <Image
                                        src={head.image}
                                        alt="President"
                                        fill={true}
                                    />
                                </div>
                                <div className="ExecName">{head.name}</div>
                                <div>{head.role}</div>
                                <Link href={head.url} target="_blank">
                                    <Image
                                        src={LinkedIn}
                                        alt="LinkedIn"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="ExecList">
                        {team.map((team) => (
                            <div key={team._id} className="ExecDetail">
                                <div className="ExecImage">
                                    <Image
                                        src={team.image}
                                        alt="President"
                                        fill={true}
                                    />
                                </div>
                                <div className="ExecName">{team.name}</div>
                                <div>{team.role}</div>
                                <Link href={team.url} target="_blank">
                                    <Image
                                        src={LinkedIn}
                                        alt="LinkedIn"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
