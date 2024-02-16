import {
    getExecutiveByYear,
    getExecutivesByAllYear,
} from "@/sanity/sanity-utils";

export const getExecutiveYears = async () => {
    const executiveYears = await getExecutivesByAllYear();

    return executiveYears;
};

export const getExecutivesByYear = async (year: string) => {
    const executives = await getExecutiveByYear(year);

    return executives;
};
