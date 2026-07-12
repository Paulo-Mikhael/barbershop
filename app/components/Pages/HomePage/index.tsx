import { ReactNode } from "react";
import HomeMain from "./HomeMain";

function HomePage({ children }: { children: ReactNode }) {
  return (
    children
  );
}

HomePage.Main = HomeMain;

export default HomePage;