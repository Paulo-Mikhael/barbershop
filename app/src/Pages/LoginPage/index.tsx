import { ReactNode } from "react";
import LoginAsideText from "./LoginAsideText";
import LoginMain from "./LoginMain";
import LoginCard from "./LoginCard";

function LoginBody({ children }: { children: ReactNode }) {
  return (
    children
  );
}

const LoginPage = {
  Body: LoginBody,
  Main: LoginMain,
  AsideText: LoginAsideText,
  Card: LoginCard,
}

export default LoginPage;