import { Team } from "./Team";
import { TeamMembers } from "../../util/fetchExecutives";

export default function Page() {
    return (
        <>
            <Team>
                <TeamMembers />
            </Team>
        </>
    );
}
