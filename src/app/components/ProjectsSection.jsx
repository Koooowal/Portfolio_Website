"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A modern portfolio website built with React, showcasing projects, skills, and experience in a sleek and interactive design.",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Koooowal/Portfolio_Website",
    previewUrl: "https://koowaldev.com/",
  },
  {
    id: 2,
    title: "Pinterest Clone",
    description: "A full-stack Pinterest clone built with the MERN stack, featuring user authentication, image uploads, and dynamic pin organization.",
    image: "/images/projects/2.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/Koooowal/PinterestCloneFullstack",
    previewUrl: "https://pinterestclonefullstackfe.onrender.com/",
  },
  {
    id: 3,
    title: "Recipe Finder",
    description: "A React-based Recipe Finder app that allows users to search, filter, and discover recipes with ease.",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Koooowal/RecipeFinderApp-React-",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "A full-stack Expense Tracker built with the MERN stack, enabling users to manage, track, and categorize their expenses in real-time.",
    image: "/images/projects/4.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/Koooowal/ExpenseTracker",
  },
  {
    id: 5,
    title: "To Do List",
    description: "A To-Do List application built with PHP, allowing users to add, manage, and track their tasks efficiently.",
    image: "/images/projects/5.png",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/Koooowal/ToDoListApp",
  },
  {
    id: 6,
    title: "Bydgoszcz Website",
    description: "A static website about Bydgoszcz, built with HTML and CSS, showcasing the city's history, attractions, and culture.",
    image: "/images/projects/6.png",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/Koooowal/BydgoszczCity",
  },
  {
    id: 7,
    title: "Quiz App",
    description: "A Quiz App built with React, allowing users to take quizzes, track scores, and view results in a user-friendly interface.",
    image: "/images/projects/7.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Koooowal/SmallReactProjects/tree/main/QuizApp%20(React)",
  },
  {
    id: 8,
    title: "BMI Calculator",
    description: "A BMI Calculator built with React, allowing users to calculate their Body Mass Index and track their health.",
    image: "/images/projects/8.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Koooowal/SmallReactProjects/tree/main/BMI_Calcuulator%20(React)",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
