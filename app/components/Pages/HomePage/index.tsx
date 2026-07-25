import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import HomePlans from "./HomePlans";
import HomeFaq from "./HomeFaq";

function HomePage({ children }: { children: ReactNode }) {
  return (
    children
  );
}

HomePage.Main = HomeMain;
HomePage.About = HomeAbout;
HomePage.Plans = HomePlans;
HomePage.Faq = HomeFaq;

export default HomePage;