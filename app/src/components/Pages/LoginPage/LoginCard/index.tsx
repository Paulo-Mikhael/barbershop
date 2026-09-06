import { ReactNode } from "react";
import LoginCardHeader from "./LoginCardHeader";

function LoginCard({ children }: { children: ReactNode }) {
  return (
    <article className="w-157.5 h-165 dark:bg-background bg-box border border-brand-darker rounded-2xl mr-40 pt-12 pb-12 pr-9 pl-9">
      {children}
    </article>
  );
}

LoginCard.Header = LoginCardHeader;

export default LoginCard;