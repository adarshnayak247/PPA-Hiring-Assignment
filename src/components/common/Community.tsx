import React from "react";

const Community: React.FC = () => {
  const communityItems = [
    {
      imgSrc: "/com.svg",
      title: "Membership Organisations",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imgSrc: "/comm.svg",
      title: "National Associations",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imgSrc: "/commm.svg",
      title: "Clubs And Groups",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="pt-[40px] md:px-[9rem] px-[4rem]">
      <div className="text-center max-w-[630px] m-auto">
        <h1 className="text-4xl text-[#4D4D4D] font-[600] pb-2">
          &ldquo;Manage your entire community in a single system&rdquo;
        </h1>
        <p className="text-base text-[#717171] font-[400] pb-2">
          &ldquo;Who is Nextcent suitable for?&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {communityItems.map((item, id) => (
          <div
            key={id}
            className="w-[280px] h-[260px] flex flex-col justify-between p-4 gap-4 text-center"
          >
            <img
              src={item.imgSrc}
              className="w-14 h-14 m-auto"
              alt="member organization"
            />
            <h1 className="text-[#4D4D4D] font-[700] text-[28px] leading-[36px]">
              {item.title}
            </h1>
            <p className="text-[#717171] font-[400] text-sm">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
