import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 6, name: "Express.js", icon: SiExpress, color: "#339933" },
  { id: 7, name: "Docker", icon: FaDocker, color: "#61DAFB" },
  { id: 8, name: "Kubernetes", icon: SiKubernetes, color: "#61DAFB" },
  { id: 9, name: "Jenkins", icon: FaJenkins, color: "#000000" },
  { id: 10, name: "Springboot", icon: SiSpringboot, color: "#47A248" },
];
export const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {/* {stackItems.map((item) => (
            <div
             
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              
             
            </div>
             
          ))} */}
          <p className="text-gray-400 font-semibold">
             With over 12 years of dedicated experience in the fitness
             industry, I have established myself as a seasoned professional
             passionate about transforming lives through fitness and strength
             training. I have successfully organized and managed five major
             fitness events, including prestigious titles such as Mr.
             Hyderabad Classic, Mr. Telangana Classic, and Strength and
             Powerlifting Mr. Telangana. Having trained over 5,000
             individuals, I bring a wealth of expertise in building tailored
             fitness programs, mentoring athletes, and helping clients
             achieve their peak physical potential. My experience spans
             advanced bodybuilding techniques, powerlifting methodologies,
             and performance optimization. Driven by a commitment to
             excellence, I aim to inspire others to embrace discipline,
             overcome challenges, and unlock their true potential.
           </p>
        </div>
      </div>
    </section>
  );
};
