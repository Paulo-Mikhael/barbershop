import { ReactNode } from "react";
import LoginCardHeader from "./LoginCardHeader";
import LoginCardForm from "./LoginCardForm";
import LoginCardFooter from "./LoginCardFooter";

function LoginCard({ children }: { children: ReactNode }) {
  return (
    <article className="flex flex-col gap-5 max-sm:w-screen max-sm:h-screen xl:min-w-157.5 xl:min-h-165 dark:bg-background bg-box xl:border xl:border-brand-darker rounded-2xl pt-12 pb-12 pr-9 pl-9 xl:mr-40">
      {children}
    </article>
  );
}

LoginCard.Header = LoginCardHeader;
LoginCard.Form = LoginCardForm;
LoginCard.Footer = LoginCardFooter;

export default LoginCard;