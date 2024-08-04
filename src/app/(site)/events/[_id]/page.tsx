import EventDetails from "../../(components)/events/EventDetails";

export default function page({ params }: { params: { _id: string } }) {
    return (
        <>
            <EventDetails params={params} />
        </>
    );
}

export const revalidate = 10;
