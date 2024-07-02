import EventDetails from "./EventDetail";

export default function Page({ params }: { params: { _id: string } }) {
    return (
        <>
            <EventDetails params={params} />
        </>
    );
}
