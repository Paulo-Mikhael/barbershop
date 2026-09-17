import { ReactNode } from "react";
import ProfileBioBody from "./ProfileBioBody";
import ProfileBioHeader from "./ProfileBioHeader";

function ProfileBio({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}

ProfileBio.Body = ProfileBioBody;
ProfileBio.Header = ProfileBioHeader;

export default ProfileBio;