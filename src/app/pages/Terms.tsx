import LegalPage from "../components/LegalPage";
import { terms } from "../content/legal";

export default function Terms() {
  return <LegalPage doc={terms} other={{ to: "/privacy", label: "Privacy Policy" }} />;
}
