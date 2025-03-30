"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>IT Technician - Technical Schools Complex, Chełm</li>
        <li>Computer Science Engineer - Lublin University of Technology</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "softSkills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem Solving </li>
        <li>Creativity</li>
        <li>Independence </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="pl-2 list-disc">
        <li>Atut Centrum, Warsaw - Intern</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt=''/>
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a 22-year-old Computer Science student at Lublin University of Technology, passionate about modern technologies and programming. I have experience working with various programming languages and designing both desktop and web applications. I am always eager to take on challenges, improving my skills and gaining new experiences. My interests also include artificial intelligence, machine learning, and cloud software development. I am looking for opportunities to apply my knowledge and further develop in the IT industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("softSkills")}
              active={tab === "softSkills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
