"use client";

import moment from "moment";
import React, { createContext, useReducer } from "react";

const currentYear = moment().year();

export type TeamState = {
    selectedYear: string;
    years: string[] | null;
};

export type ActionsMap = {
    SET_SELECTED_YEAR: string;
    SET_YEARS: string[];
};

export type Actions = {
    [Key in keyof ActionsMap]: {
        type: Key;
        payload: ActionsMap[Key];
    };
}[keyof ActionsMap];

export const initialTeamState: TeamState = {
    selectedYear: currentYear.toString(),
    years: null,
};

export const TeamStateContext = createContext<{
    state: TeamState;
    dispatch: React.Dispatch<Actions>;
}>({ state: initialTeamState, dispatch: () => undefined });

export const TeamStateProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const teamStateReducer = (state: TeamState, action: Actions): TeamState => {
        switch (action.type) {
            case "SET_SELECTED_YEAR":
                return { ...state, selectedYear: action.payload };

            case "SET_YEARS":
                return { ...state, years: action.payload };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(teamStateReducer, initialTeamState);

    return (
        <TeamStateContext.Provider value={{ state, dispatch }}>
            {children}
        </TeamStateContext.Provider>
    );
};
