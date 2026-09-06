import { ReactNode } from "react";
import LoginAsideText from "./LoginAsideText";
import LoginMain from "./LoginMain";
import LoginCard from "./LoginCard";

function LoginPage({ children }: { children: ReactNode }) {
  return (
    children
  );
}

LoginPage.Main = LoginMain;
LoginPage.AsideText = LoginAsideText;
LoginPage.Card = LoginCard;

export default LoginPage;