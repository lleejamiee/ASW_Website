import { getEventYear, getEventYears } from "@/sanity/sanity-utils";
import moment from "moment";

const date = new Date();
const currentDate = moment().format("YYYY-MM-DD");
const currentYear = date.getFullYear().toString();

export const getUpcomingEvents = async () => {
    const events = await getEventYear(currentYear);

    return events?.events.filter((event) => event.date >= currentDate);
};

export const getPastEvents = async () => {
    const events = await getEventYears();

    return events.filter((event) =>
        event.events.every((dates) => dates.date < currentDate)
    );
};
