"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { Timeline } from "./ui/Timeline";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  const data = projects.map((item) => ({
    title: item.title,
    content: (
      <CardContainer key={item.id} className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border bg-gradient-to-r from-[#10172e] to-[#1e183c]">
          <CardItem translateZ="100" className="w-full">
            <Image
              src={item.img}
              height="800"
              width="800"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={item.title}
            />
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
          >
            {item.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {item.des}
          </CardItem>

          <div className="flex items-center justify-around mt-6">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className=" borde] rounded-full border bg-gradient-to-r from-[#2a1427] to-[#2a273b] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-1 md:mr-2"
              >
                <Image
                  src={icon}
                  alt={`icon-${index}`}
                  className="p-2"
                  width={40}
                  height={40}
                />
              </div>
            ))}
            <div className="flex items-center justify-end ">
              <CardItem
                as={Link}
                href={item.link}
                target="__blank"
                className="text-purple text-xs md:text-sm font-bold flex items-center"
              >
                Check Live Site
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    ),
  }));

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="w-full">
        {/* Pass data to Timeline */}
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default RecentProjects;
