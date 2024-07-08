import { ArrowRight } from "lucide-react";
import React from "react";

const Updates: React.FC = () => {
  const updateItems = [
    {
      imgSrc:"/customer/image 18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      imgSrc:"/customer/image 19.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      imgSrc:"/customer/image 20.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="py-[30px] md:px-[9rem] px-[2rem]">
      <div className="text-center  max-w-[630px] m-auto">
        <h1 className="text-4xl text-[#4D4D4D] font-[600] pb-2">
          &ldquo;Caring is the new marketing&rdquo;
        </h1>
        <p className="text-base text-[#717171] font-[400] pb-2">
          &ldquo;The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.&rdquo;
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] py-4 sm:gap-y-5px">
        {updateItems.map((item, id) => (
          <div
            key={id}
            className="max-w-[368px] h-[366px] relative m-auto mb-20"
          >
            <img
              src={item.imgSrc}
              alt="update image"
              className="w-full h-full object-cover rounded-md"
            />

            <div className="md:w-[317px] w-[240px] mt-[-20px] absolute top-3/4 left-1/2 transform -translate-x-1/2 text-center py-6 px-4 bg-[#F5F7FA] shadow-lg rounded-sm z-10 dark:bg-[#020817]">
              <h4 className="text-xl font-[600] text-[#717171] mb-4">
                {item.title}
              </h4>
              <p className="text-xl text-[#4CAF4F] font-[600] col-span-4 flex items-center justify-center ">
                Read More <ArrowRight className="ml-3" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
