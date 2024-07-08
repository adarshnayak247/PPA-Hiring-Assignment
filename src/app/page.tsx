

import Achievement from "@/components/common/Achievement";
import Calender from "@/components/common/Calender";
import Client from "@/components/common/Client";
import Community from "@/components/common/Community";
import Customer from "@/components/common/Customer";
import Footer from "@/components/common/Footer";
import Frame16 from "@/components/common/Frame16";
import Hero from "@/components/common/Hero";

import Unlock from "@/components/common/Unlock";
import Updates from "@/components/common/Updates";


import Image from "next/image";
import NavBar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
     <NavBar/>
     <Hero/>
     <Client/>
     <Community/>
     <Unlock/>
     <Achievement/>
     <Calender/>
     <Customer/>
     <Updates/>
     <Frame16/>
     <Footer/>
    </>
  );
}
