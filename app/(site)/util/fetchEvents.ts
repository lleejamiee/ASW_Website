import { getEventYear, getEventYears } from "@/sanity/sanity-utils";

const date = new Date();
const currentDate =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
const currentYear = date.getFullYear.toString();

export const getUpcomingEvents = async () => {
    const events = await getEventYear(currentYear);

    return events?.events.filter((event) => event.date >= currentDate);
};

export const getPastEvents = async () => {
    const events = await getEventYears();

    return events.filter((event) =>
        event.events.filter((event) => event.date < currentDate)
    );
};
