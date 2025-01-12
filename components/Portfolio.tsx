"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/assets/strength.jpg";
import project2 from "@/assets/proj6.png";
import project3 from "@/assets/nutrition.jpg";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const projects = [
  {
    id: 1,
    // year: 2024,
    title: "Strength Training",
    description:
      "My programs are designed to help individuals enhance their physical capabilities through structured exercises using weights, resistance bands, machines, and bodyweight techniques. With a focus on proper form and progressive overload, I ensure clients achieve sustainable results, improved athletic performance, and reduced risk of injuries.",
    image: project1,
  },
  {
    id: 2,
    // year: 2024,
    title: "Personal training ",
    description: "As a personal trainer, I provide customized workout plans, one-on-one guidance, and expert support to ensure maximum efficiency and results. From weight loss and muscle building to improving overall strength and endurance, my approach focuses on proper form, injury prevention, and consistent progress. Together, we'll create a sustainable path to fitness that fits your lifestyle and empowers you to become the best version of yourself.",
    image: project2,
  },
  {
    id: 3,
    // year: 2024,
    title: "Nutritionist",
    description:
      "As a nutritionist, I specialize in creating personalized nutrition plans that align with your health, fitness, and lifestyle goals. By combining science-based knowledge with practical strategies, I help you make informed food choices to optimize energy, enhance performance, and improve overall well-being. Whether your goal is weight management, muscle building, or improving health conditions, my approach focuses on balance, sustainability, and results..",
    image: project3,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% , #000 50% , ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            My <span className="text-gray-400">Services</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              {/* <p className="text-gray-400 text-lg mb-2">{project.year}</p> */}
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-100 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};
