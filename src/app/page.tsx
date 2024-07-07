

import Client from "@/components/common/Client";
import CommunitySection from "@/components/common/Community";
import Hero from "@/components/common/Hero";
import { Navbar } from "@/components/common/Navbar";


import Image from "next/image";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Client/>
     <CommunitySection/>
    </>
  );
}
