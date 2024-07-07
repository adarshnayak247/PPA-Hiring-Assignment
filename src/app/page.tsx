

import AchievementSection from "../components/common/Achievement";
import CalenderSection from "../components/common/Calender";
import Client from "../components/common/Client";
import CommunitySection from "../components/common/Community";
import CustomerSection from "../components/common/Customer";
import Footer from "../components/common/footer";
import Frame16 from "../components/common/Frame16";
import Hero from "../components/common/Hero";
import { Navbar } from "../components/common/Navbar";
import UnlockSection from "../components/common/Unlock";
import UpdatesSection from "../components/common/Updates";


import Image from "next/image";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Client/>
     <CommunitySection/>
     <UnlockSection/>
     <AchievementSection/>
     <CalenderSection/>
     <CustomerSection/>
     <UpdatesSection/>
     <Frame16/>
     <Footer/>
    </>
  );
}
