

import AchievementSection from "@/components/common/Achievement";
import CalenderSection from "@/components/common/Calender";
import Client from "@/components/common/Client";
import CommunitySection from "@/components/common/Community";
import Hero from "@/components/common/Hero";
import { Navbar } from "@/components/common/Navbar";
import UnlockSection from "@/components/common/Unlock";


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
    </>
  );
}
