import "@/src/app/(site)/css/teampageLayout.css";
import { TeamStateProvider } from "./TeamContext";
import { Team } from "./Team";

export default async function Page() {
    return (
        <div>
            <div className="ExecutivesHeader">ASW Executives</div>
            <TeamStateProvider>
                <Team />
            </TeamStateProvider>
        </div>
    );
}
