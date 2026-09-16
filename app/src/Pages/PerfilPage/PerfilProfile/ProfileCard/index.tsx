import { ReactNode } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileUsername from "./ProfileUsername";

function ProfileCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative mt-6 min-h-61.25 overflow-hidden rounded-lg border border-brand-default bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-brand bg-cover bg-center" />

      <div className="relative z-10 flex h-full min-h-61.25 items-center px-7">
        {children}
      </div>
    </div>
  );
}

ProfileCard.Avatar = ProfileAvatar;
ProfileCard.Username = ProfileUsername;

export default ProfileCard;