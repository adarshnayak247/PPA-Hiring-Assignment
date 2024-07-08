"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Hero() {
  const carouselItems = [
    {
      mainHead: "Lessons and insights",
      secondHead: "from 8 years",
      para: "Where to grow your business as a photographer: site or social media?",
      btnText: "Register",
      imgSrc: "/Illustration.svg",
    },
    {
      mainHead: "Pass and insights",
      secondHead: "from 8 years",
      para: "Where to grow your business as a photographer: site or social media?",
      btnText: "Register",
      imgSrc: "/Illustration.svg",
    },
    {
      mainHead: "Lessons and insights",
      secondHead: "from 8 years",
      para: "Where to grow your business as a photographer: site or social media?",
      btnText: "Register",
      imgSrc: "/Illustration.svg",
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-[96px] md:px-[9rem] px-[4rem] dark:bg-[#020817]">
      <Carousel>
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex justify-between flex-col-reverse gap-6 md:flex-row items-center"
            >
              <div>
                <h2 className="font-semibold leading-[76px] text-3xl md:text-5xl lg:text-[64px] text-[#000000] dark:text-[#4D4D4D]">
                  {item.mainHead}
                  <span className="block text-[#4CAF4F]">
                    {item.secondHead}
                  </span>
                </h2>
                <p className="text-[#717171] text-md py-4">{item.para}</p>
                <div className="flex gap-[1.75rem] items-center mt-[1 rem]">
                  <Button className="bg-[#4CAF4F] text-[#FFFFFF] rounded-tl-[4px]font-inter text-[14px] font-medium leading-[20px] text-center ">
                    {item.btnText}
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src={item.imgSrc}
                  alt="Guy with phone surrounded by action icons"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="flex justify-center mt-[4rem]">
        <Image
          src="/Ellipse 5.svg"
          width={10}
          height={10}
          className="bg-[#4CAF4F] rounded-full mx-1"
          alt="Dots"
        />
        <Image
          src="/Ellipse 5.svg"
          width={10}
          height={10}
          className="bg-[#4CAF4F] rounded-full mx-1 opacity-[30%]"
          alt="Dots"
        />
        <Image
          src="/Ellipse 5.svg"
          width={10}
          height={10}
          className="bg-[#4CAF4F] rounded-full mx-1 opacity-[30%]"
          alt="Dots"
        />
      </div>
      </Carousel>
    </section>
  );
}

export default Hero;
