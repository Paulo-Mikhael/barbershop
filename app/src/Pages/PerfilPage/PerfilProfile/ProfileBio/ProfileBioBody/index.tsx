import { ReactNode } from "react";
import BioBodyText from "./BioBodyText";
import BioBodyEvent from "./BioBodyEvent";

function ProfileBioBody({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-typo-700 bg-box p-6">
      {children}
    </div>
  );
}

ProfileBioBody.Text = BioBodyText;
ProfileBioBody.Event = BioBodyEvent;

export default ProfileBioBody;