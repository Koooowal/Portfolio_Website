"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "React",
    image: <FaReact className="text-4xl text-blue-500" />,
  },
  {
    metric: "Node.js",
    image: <FaNodeJs className="text-4xl text-green-600" />,
  },
  {
    metric: "Express.js",
    image: <SiExpress className="text-4xl text-white" />,
  },
  {
    metric: "MongoDB",
    image: <SiMongodb className="text-4xl text-green-600" />,
  },
  {
    metric: "JavaScript",
    image: <IoLogoJavascript className="text-4xl text-yellow-400" />,
  },
  {
    metric: "Git",
    image: <FaGitAlt className="text-4xl text-white" />,
  },
  {
    metric: "TypeScript",
    image: <SiTypescript className="text-4xl text-blue-500" />,
  },
  {
    metric: "Next.js",
    image: <RiNextjsFill className="text-4xl text-white" />,
  },
  {
    metric: "PostgreSQL",
    image: <SiPostgresql className="text-4xl text-white" />,
  },
  {
    metric: "Tailwind CSS",
    image: <SiTailwindcss className="text-4xl text-blue-500" />,
  },
];

const AchievementsSection = () => {
  return (
    <div className="px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="mb-6 text-3xl font-bold text-center text-white">Tech Stack</h2>
      <div className="relative p-2 overflow-hidden rounded-md bg-gradient-to-r from-primary-500 to-secondary-500">
        {/* Gradient animation effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-spin-slow"></div>
        
        {/* Container with dark background and border */}
        <div className="relative z-10 rounded-md bg-[#181818] py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              {achievement.image ? (
                achievement.image
              ) : (
                <h2 className="flex flex-row text-4xl font-bold text-white">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-4xl font-bold text-white"
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    })}
                  />
                  {achievement.postfix}
                </h2>
              )}
              <p className="text-[#ADB7BE] text-base mt-2">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
