import TeamMembers from "../(components)/team/TeamMembers";

export default function page() {
    return (
        <>
            <TeamMembers />
        </>
    );
}

export const revalidate = 10;
