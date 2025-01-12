"use client";

import React, { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import profilepic from "../assets/Gymlogo.jpg";
import object1 from "../assets/obj1.png";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export const Hero = () => {
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

  const border = useMotionTemplate`1px solid ${color}`;

  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center text-center">
        {" "}
        {/* Add "text-center" here */}
        {/* <span className="mb-4 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span> */}
        <h1 className="text-white/40 text-5xl md:text-7xl font-black md:text-7xl">
          Hi, I am
        </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
          Mark Samson D'Souza
        </h1>
        <Image src={profilepic} alt="profile pic" width={250} />
        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          <Image
            src={object1}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={object1}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={object1}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <p className="font-medium">5000+ Happy Clients</p>
        </div>
        <p className="my-6 max-w-xl text-center">
        With 12+ years of experience, trained 5,000+ clients, and organized 5 prestigious fitness events.
        


        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          {/* Download CV */}
          {/* <FiArrowRight /> */}
        </motion.button>
      </div>

          <div className="bg-circle-container">
            <div className="bg-circle-container"></div>
            <div className="bg-circle"></div>
          </div>

    </motion.section>
  );
};
