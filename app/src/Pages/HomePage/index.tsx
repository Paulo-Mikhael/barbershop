import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import HomePlans from "./HomePlans";
import HomeFaq from "./HomeFaq";
import HomeFooter from "./HomeFooter";

function HomeBody({ children }: { children: ReactNode }) { return children; }

const HomePage = {
  Body: HomeBody,
  Main: HomeMain,
  About: HomeAbout,
  Plans: HomePlans,
  Faq: HomeFaq,
  Footer: HomeFooter,
}

export default HomePage;