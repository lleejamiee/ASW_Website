import EventDetails from "../../(components)/Events/EventDetails";

export default function Page({ params }: { params: { _id: string } }) {
    return (
        <>
            <EventDetails params={params} />
        </>
    );
}
