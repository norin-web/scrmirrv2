import LegalPage from "../components/LegalPage";
import { privacy } from "../content/legal";

export default function Privacy() {
  return <LegalPage doc={privacy} other={{ to: "/terms", label: "Terms of Use" }} />;
}
