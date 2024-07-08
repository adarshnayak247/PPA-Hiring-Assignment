"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AchievementItem {
    imgSrc: string;
    total: number;
    title: string;
}

const Achievement: React.FC = () => {
    const [counterOn, setCounterOn] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCounterOn(inView),
    });

    const achievementItems: AchievementItem[] = [
        {
            imgSrc: "/member.svg",
            total: 2245341,
            title: "Members",
        },
        {
            imgSrc: "/event.svg",
            total: 46328,
            title: "Clubs",
        },
        {
            imgSrc: "/event.svg",
            total: 828867,
            title: "Event Bookings",
        },
        {
            imgSrc: "/payment.svg",
            total: 1926436,
            title: "Payments",
        },
    ];

    return (
        <section className="bg-[#F5F7FA] py-[64px] md:px-[9rem] px-[4rem] mt-10 dark:bg-[#020817]" ref={ref}>
            <div className="flex flex-col gap-6 md:flex-row items-center">
                <div>
                    <h1 className="text-4xl font-[600] text-[#4D4D4D]">
                        Helping a local
                        <span className="block text-[#4CAF4F]">
                            business reinvent itself
                        </span>
                    </h1>
                    <p className="text-base text-[#18191F] font-[400] py-2">
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto">
                    {achievementItems.map((item, id) => (
                        <div key={id} className="w-[255px] flex gap-4 items-center">
                            <div className="w-12 h-12">
                                <img
                                    src={item.imgSrc}
                                    alt="achievement logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="font-[700] text-[28px] leading-[36px] text-[#4D4D4D]">
                                    {counterOn && (
                                        <CountUp
                                            start={0}
                                            end={item.total}
                                            duration={3}
                                            delay={0}
                                        />
                                    )}
                                </h1>
                                <p className="text-base font-[400] text-[#717171]">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievement;
