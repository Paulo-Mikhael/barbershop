import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";

function HomePage({ children }: { children: ReactNode }) {
  return (
    children
  );
}

HomePage.Main = HomeMain;
HomePage.About = HomeAbout;

export default HomePage;