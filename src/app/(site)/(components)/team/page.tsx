import "@/src/app/(site)/css/teamPageLayout.css";
import { TeamStateProvider } from "./TeamContext";
import { Team } from "./Team";

export default async function Page() {
    return (
        <div className="Background">
            <div className="ExecutivesHeader">ASW Executives</div>
            <TeamStateProvider>
                <Team />
            </TeamStateProvider>
        </div>
    );
}
