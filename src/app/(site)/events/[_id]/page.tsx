import EventDetails from "../../(components)/Events/EventDetails";

export default function page({ params }: { params: { _id: string } }) {
    return (
        <>
            <EventDetails params={params} />
        </>
    );
}
