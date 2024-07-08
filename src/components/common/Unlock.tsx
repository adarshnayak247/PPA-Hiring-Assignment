import React from "react";
import { Button } from "../ui/button";

const Unlock: React.FC = () => {
    const info = {
        imgSrc: "/rafiki.svg",
        title: "The unseen of spending three years at Pixelgrade",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
    };

    return (
        <section className="pt-[40px] md:px-[9rem] px-[4rem]">
            <div className="flex items-center flex-col md:flex-row gap-[3rem]">
                <div className="max-w-[442px] max-h-[433px]">
                    <img
                        src={info.imgSrc}
                        className="w-full h-full"
                        alt="Unlock illustration"
                    />
                </div>
                <div className="u-right flex flex-col gap-6 max-w-[600px]">
                    <h1 className="font-[600] text-4xl text-[#4D4D4D]">
                        {info.title}
                    </h1>
                    <p className="font-[400] text-sm text-[#717171]">
                        {info.para}
                    </p>
                    <Button className="w-36 bg-[#4CAF4F]">Learn More</Button>
                </div>
            </div>
        </section>
    );
};

export default Unlock;
