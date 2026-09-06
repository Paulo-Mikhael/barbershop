import { ReactNode } from "react";
import LoginAsideText from "./LoginAsideText";
import LoginMain from "./LoginMain";

function LoginPage({ children }: { children: ReactNode }) {
  return (
    children
  );
}

LoginPage.Main = LoginMain;
LoginPage.AsideText = LoginAsideText;

export default LoginPage;