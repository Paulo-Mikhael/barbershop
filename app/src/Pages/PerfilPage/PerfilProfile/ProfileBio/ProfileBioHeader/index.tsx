import { ReactNode } from "react";
import BioHeaderTitle from "./BioHeaderTitle";
import BioHeaderButton from "./BioHeaderButton";

function ProfileBioHeader({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      {children}
    </div>
  );
}

ProfileBioHeader.Title = BioHeaderTitle;
ProfileBioHeader.Button = BioHeaderButton;

export default ProfileBioHeader;