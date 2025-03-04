// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import project1 from "@/assets/strength.jpg";
// import project2 from "@/assets/proj14.jpg";
// import project3 from "@/assets/nutrition.jpg";

// import {
//   useMotionTemplate,
//   useMotionValue,
//   motion,
//   animate,
// } from "framer-motion";

// const projects = [
//   {
//     id: 1,
//     // year: 2024,
//     title: "Strength Training",
//     description:
//       "My programs are designed to help individuals enhance their physical capabilities through structured exercises using weights, resistance bands, machines, and bodyweight techniques. With a focus on proper form and progressive overload, I ensure clients achieve sustainable results, improved athletic performance, and reduced risk of injuries.",
//     image: project1,
//   },
//   {
//     id: 2,
//     // year: 2024,
//     title: "Personal training ",
//     description: "As a personal trainer, I provide customized workout plans, one-on-one guidance, and expert support to ensure maximum efficiency and results. From weight loss and muscle building to improving overall strength and endurance, my approach focuses on proper form, injury prevention, and consistent progress. Together, we'll create a sustainable path to fitness that fits your lifestyle and empowers you to become the best version of yourself.",
//     image: project2,
//   },
//   {
//     id: 3,
//     // year: 2024,
//     title: "Nutritionist",
//     description:
//       "As a nutritionist, I specialize in creating personalized nutrition plans that align with your health, fitness, and lifestyle goals. By combining science-based knowledge with practical strategies, I help you make informed food choices to optimize energy, enhance performance, and improve overall well-being. Whether your goal is weight management, muscle building, or improving health conditions, my approach focuses on balance, sustainability, and results..",
//     image: project3,
//   },
// ];

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// export const Portfolio = () => {
//   const [selectedProject, setSelectedProject] = useState(projects[0]);

//   const color = useMotionValue(COLORS_TOP[0]);

//   useEffect(() => {
//     animate(color, COLORS_TOP, {
//       ease: "easeInOut",
//       duration: 10,
//       repeat: Infinity,
//       repeatType: "mirror",
//     });
//   }, []);

//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% , #000 50% , ${color})`;

//   return (
//     <motion.section
//       style={{
//         backgroundImage,
//       }}
//       id="portfolio"
//       className="py-32 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
//         <div>
//           <h2 className="text-6xl font-bold mb-10">
//             Certified <span className="text-gray-400">In</span>
//           </h2>
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               onClick={() => setSelectedProject(project)}
//               className="cursor-pointer mb-8 group"
//             >
//               {/* <p className="text-gray-400 text-lg mb-2">{project.year}</p> */}
//               <h3
//                 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
//                   selectedProject.id === project.id ? "text-purple-200" : ""
//                 } duration-300`}
//               >
//                 {project.title}
//               </h3>
//               {selectedProject.id === project.id && (
//                 <div className="border-b-2 border-purple-200 my-4"></div>
//               )}
//               {selectedProject.id === project.id && (
//                 <p className="text-gray-100 transition-all duration-500 ease-in-out">
//                   {project.description}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         <Image
//           src={selectedProject.image}
//           alt={selectedProject.title}
//           className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
//           width={800}
//           height={450}
//         />
//       </div>
//     </motion.section>
//   );
// };


"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import project1Img1 from "@/assets/strength.jpg";
import project1Img2 from "@/assets/proj111.jpg";
import project1Img3 from "@/assets/proj112.jpg";
import project1Img4 from "@/assets/proj113.jpg";
import project1Img5 from "@/assets/proj114.jpg";
import project1Img6 from "@/assets/proj115.jpg";
import project1Img7 from "@/assets/proj116.jpg";



import project2Img1 from "@/assets/proj14.jpg";
import project2Img2 from "@/assets/proj1.jpg";
import project2Img3 from "@/assets/proj2.jpg";
import project2Img4 from "@/assets/proj3.jpg";
import project2Img5 from "@/assets/proj4.jpg";
import project2Img6 from "@/assets/proj5.jpg";
import project2Img7 from "@/assets/proj6.jpg";
import project2Img8 from "@/assets/proj7.jpg";

import project3Img1 from "@/assets/nutrition.jpg";
import project3Img2 from "@/assets/proj330.jpg";
import project3Img3 from "@/assets/proj331.jpg";
import project3Img4 from "@/assets/proj332.jpg";
import project3Img5 from "@/assets/proj333.jpg";

import project4Img1 from "@/assets/s1.jpg"
import project4Img2 from "@/assets/s2.jpg"
import project4Img3 from "@/assets/s3.jpg"
import project4Img4 from "@/assets/s4.jpg"
import project4Img5 from "@/assets/s5.jpg"
import project4Img6 from "@/assets/s6.jpg"
import project4Img7 from "@/assets/s7.jpg"
import project4Img8 from "@/assets/s8.jpg"
import project4Img9 from "@/assets/s9.jpg"
import project4Img10 from "@/assets/s10.jpg"

const projects = [
  {
    id: 1,
    title: "Strength Training",
    description:
      "My programs are designed to help individuals enhance their physical capabilities through structured exercises using weights, resistance bands, machines, and bodyweight techniques. With a focus on proper form and progressive overload, I ensure clients achieve sustainable results, improved athletic performance, and reduced risk of injuries.",
    images: [project1Img1 , project1Img3 , project1Img4 , project1Img6, project1Img2 , project1Img5  , project1Img7],
  },
  {
    id: 2,
    title: "Personal Training",
    description:
      "As a personal trainer, I provide customized workout plans, one-on-one guidance, and expert support to ensure maximum efficiency and results. From weight loss and muscle building to improving overall strength and endurance, my approach focuses on proper form, injury prevention, and consistent progress. Together, we'll create a sustainable path to fitness that fits your lifestyle and empowers you to become the best version of yourself.",
    images: [project2Img1, project2Img2, project2Img3 , project2Img4 , project2Img5 , project2Img6 , project2Img7 , project2Img8],
  },
  {
    id: 3,
    title: "Nutritionist",
    description:
      "As a nutritionist, I specialize in creating personalized nutrition plans that align with your health, fitness, and lifestyle goals. By combining science-based knowledge with practical strategies, I help you make informed food choices to optimize energy, enhance performance, and improve overall well-being. Whether your goal is weight management, muscle building, or improving health conditions, my approach focuses on balance, sustainability, and results.",
    images: [project3Img1, project3Img2, project3Img3 , project3Img4 , project3Img5],
  },
  {
    id: 4,
    title: "Stage Shows",
    description:
      "At Sam's Gym, we take fitness beyond the gym by participating in high-energy stage shows and fitness events. Our team, including trainers and clients, showcases their strength, endurance, and agility through choreographed performances, fitness demonstrations, and competitive events. We provide structured training programs to prepare participants for bodybuilding expos, functional fitness showcases, aerobics displays, and more. Our performances inspire audiences and highlight the power of dedication, training, and teamwork.",
    images: [project4Img1, project4Img2, project4Img3 , project4Img4 , project4Img5 , project4Img6 , project4Img7 , project4Img8 , project4Img9 , project4Img10],
  }

];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);

  // Specify the ref type as HTMLDivElement | null
  const sliderRef = useRef<HTMLDivElement | null>(null); 
  const isDragging = useRef(false); // Flag to check if dragging
  const startX = useRef(0); // Mouse start position
  const scrollLeft = useRef(0); // Initial scroll position

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  // Drag-to-Scroll Handlers with MouseEvent typing
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return; // Safeguard for null ref
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return; // Safeguard for null ref
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Speed factor
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Project List */}
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Certified <span className="text-gray-400">In</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
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

        {/* Horizontal Image Slider */}
        <div
          ref={sliderRef}
          className="overflow-x-scroll lg:overflow-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{
            display: "flex",
            gap: "1rem",
            scrollBehavior: "smooth",
          }}
        >
          {selectedProject.images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: "80%", // Adjust for smaller screen sizes
                maxWidth: "400px", // Set a limit for larger screens
              }}
            >
              <Image
                src={image}
                alt={`${selectedProject.title} Image ${index + 1}`}
                className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                width={400}
                height={225}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

