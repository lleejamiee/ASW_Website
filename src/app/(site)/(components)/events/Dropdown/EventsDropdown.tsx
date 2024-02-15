import { useContext, useEffect, useRef, useState } from "react";
import { DropdownComponent } from "../../../ui/Dropdown";
import { EventsPropsContext } from "../EventsContext";
import "@/src/app/(site)/css/dropdownLayout.css";

export const EventsDropdown: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const refToggleDropdown = useRef<HTMLButtonElement>(null);
    const { state, dispatch } = useContext(EventsPropsContext);

    useEffect(() => {
        addEventListener("click", handleClickOutsideDropdown);

        return () => {
            removeEventListener("click", handleClickOutsideDropdown);
        };
    });

    const eventYears = () => {
        const years = state.years;

        return years?.map((year) => (
            <button key={year} onClick={() => handleSelectedYear(year)}>
                {year}
            </button>
        ));
    };

    const handleSelectedYear = (year: string) => {
        dispatch({ type: "SET_SELECTED_YEAR", payload: year });
    };

    const handleClickOutsideDropdown = (event: MouseEvent) => {
        if (isDropdownOpen) {
            if (refToggleDropdown.current) {
                if (!refToggleDropdown.current.contains(event.target as Node)) {
                    setIsDropdownOpen(false);
                }
            }
        }
    };

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className="Dropdown">
            <button
                className="DropdownButton"
                ref={refToggleDropdown}
                onClick={handleToggleDropdown}
            >
                {state.selectedYear === "" ? (
                    <>Year</>
                ) : (
                    <>{state.selectedYear}</>
                )}
            </button>
            <DropdownComponent isOpen={isDropdownOpen}>
                <ul className="DropdownContent">{eventYears()}</ul>
            </DropdownComponent>
        </div>
    );
};
