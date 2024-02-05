"use client";

import React, { createContext, useReducer } from "react";

/**
 * DropdownProps type that will go into the state
 */
export interface DropdownProps {
    selectedYear: string | null;
    years: string[] | null;
}

/**
 * Represents that state made available via reducer
 */
export type DropdownPropsState = {
    selectedYear: DropdownProps | null;
    years: string[] | null;
};

/**
 * Use map() to convert individual action into a Union.
 * The key(SET_SELECTED_YEAR) represents the action type. The value(SelectedYear) represents the payloads.
 */
export type ActionsMap = {
    SET_SELECTED_YEAR: DropdownProps;
    SET_YEARS: string[];
};

/**
 * Actions union from the map gets formed here.
 * A new map with all the possible actions keyed by the action types gets formed. Then, each of the values at those keys become an option in the union.
 * { type: SET_SELECTED_YEAR, payload: SelectedYear }
 * Anything that gets added to the ActionsMap will become an action option in the Actions Union.
 */
export type Actions = {
    [Key in keyof ActionsMap]: {
        type: Key;
        payload: ActionsMap[Key];
    };
}[keyof ActionsMap];

export const initialDropdownPropsState: DropdownPropsState = {
    selectedYear: null,
    years: null,
};

export const DropdownPropsContext = createContext<{
    state: DropdownPropsState;
    dispatch: React.Dispatch<Actions>;
}>({ state: initialDropdownPropsState, dispatch: () => undefined });

/**
 * Parent component that will provide all its component children with the access to the state and dispatch functions.
 * All children within the sam SelectedYearProvider will have the same state available to them.
 */
export const DropdownPropsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const dropdownPropsReducer = (
        state: DropdownPropsState,
        action: Actions
    ): DropdownPropsState => {
        switch (action.type) {
            case "SET_SELECTED_YEAR":
                return { ...state, selectedYear: action.payload };

            case "SET_YEARS":
                return { ...state, years: action.payload };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(
        dropdownPropsReducer,
        initialDropdownPropsState
    );

    return (
        <DropdownPropsContext.Provider value={{ state, dispatch }}>
            {children}
        </DropdownPropsContext.Provider>
    );
};
