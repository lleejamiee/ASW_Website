import { useContext, useEffect, useRef, useState } from "react";
import { DropdownComponent } from "./DropdownComponent";
import { DropdownPropsContext } from "./DropdownContext";

export const Dropdown: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const refToggleDropdown = useRef<HTMLButtonElement>(null);
    const { state } = useContext(DropdownPropsContext);

    const eventYears = () => {
        const years = state.years;
        console.log("Event years", state.years);

        return years?.map((year) => <li key={year}>{year}</li>);
    };

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
                Year
            </button>
            <DropdownComponent isOpen={isDropdownOpen}>
                <ul className="DropdownContent">{eventYears()}</ul>
            </DropdownComponent>
        </div>
    );
};
