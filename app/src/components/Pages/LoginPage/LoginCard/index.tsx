import { ReactNode } from "react";
import LoginCardHeader from "./LoginCardHeader";
import LoginCardForm from "./LoginCardForm";

function LoginCard({ children }: { children: ReactNode }) {
  return (
    <article className="flex flex-col gap-5 w-157.5 h-165 dark:bg-background bg-box border border-brand-darker rounded-2xl mr-40 pt-12 pb-12 pr-9 pl-9">
      {children}
    </article>
  );
}

LoginCard.Header = LoginCardHeader;
LoginCard.Form = LoginCardForm;

export default LoginCard;