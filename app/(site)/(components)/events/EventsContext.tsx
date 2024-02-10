"use client";

import React, { createContext, useContext, useReducer } from "react";

/**
 * Represents that state made available via reducer
 */
export type EventsState = {
    selectedYear: string;
    years: string[] | null;
    _id: string;
};

/**
 * Use map() to convert individual action into a Union.
 * The key(SET_SELECTED_YEAR) represents the action type. The value(SelectedYear) represents the payloads.
 */
export type ActionsMap = {
    SET_SELECTED_YEAR: string;
    SET_YEARS: string[];
    SET_SELECTED_ID: string;
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

export const initialEventsPropsState: EventsState = {
    selectedYear: "",
    years: null,
    _id: "",
};

export const EventsPropsContext = createContext<{
    state: EventsState;
    dispatch: React.Dispatch<Actions>;
}>({ state: initialEventsPropsState, dispatch: () => undefined });

/**
 * Parent component that will provide all its component children with the access to the state and dispatch functions.
 * All children within the sam SelectedYearProvider will have the same state available to them.
 */
export const EventsPropsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const eventsPropsReducer = (
        state: EventsState,
        action: Actions
    ): EventsState => {
        switch (action.type) {
            case "SET_SELECTED_YEAR":
                return { ...state, selectedYear: action.payload };

            case "SET_YEARS":
                return { ...state, years: action.payload };

            case "SET_SELECTED_ID":
                return { ...state, _id: action.payload };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(
        eventsPropsReducer,
        initialEventsPropsState
    );

    return (
        <EventsPropsContext.Provider value={{ state, dispatch }}>
            {children}
        </EventsPropsContext.Provider>
    );
};

export const useEventsProps = () => {
    const { dispatch } = useContext(EventsPropsContext);

    const setAndReturnBoolean = (action: Actions): boolean => {
        dispatch(action);

        return true;
    };

    return {
        setAndReturnBoolean,
    };
};
