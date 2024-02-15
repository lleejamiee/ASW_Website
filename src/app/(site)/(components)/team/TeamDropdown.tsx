"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { TeamStateContext } from "./TeamContext";
import "@/src/app/(site)/css/dropdownLayout.css";
import { DropdownComponent } from "../../ui/Dropdown";

export function TeamDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const refToggleDropdown = useRef<HTMLButtonElement>(null);
    const { state, dispatch } = useContext(TeamStateContext);

    useEffect(() => {
        addEventListener("click", handleClickOutsideDropdown);

        return () => {
            removeEventListener("click", handleClickOutsideDropdown);
        };
    });

    const handleClickOutsideDropdown = (event: MouseEvent) => {
        if (isDropdownOpen) {
            if (refToggleDropdown.current) {
                if (!refToggleDropdown.current.contains(event.target as Node)) {
                    setIsDropdownOpen(false);
                }
            }
        }
    };

    const handleSelectedYear = (year: string) => {
        dispatch({ type: "SET_SELECTED_YEAR", payload: year });
    };

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const teamYears = () => {
        const years = state.years;

        return years?.map((year) => {
            return (
                <button key={year} onClick={() => handleSelectedYear(year)}>
                    {year}
                </button>
            );
        });
    };

    return (
        <div className="ExecutiveDropdown">
            <button
                className="DropdownButton"
                ref={refToggleDropdown}
                onClick={handleToggleDropdown}
            >
                {state.selectedYear}
            </button>
            <DropdownComponent isOpen={isDropdownOpen}>
                <ul className="DropdownContent">{teamYears()}</ul>
            </DropdownComponent>
        </div>
    );
}
