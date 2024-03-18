"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
 
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      <span className="font-bold">Computer Science student and aspiring Fullstack developer</span> with a passion for
combining  <span className="font-bold">analytical and creative thinking and acting</span>.
<br></br>
Trained in the
development of <span className="underline"> web applications.</span> 

      </p>

      <p>
      <span className="italic">During my studies</span>, I discovered the world of programming. To rapidly acquire relevant skills
in this field, I completed a full-time coding bootcamp from May to August 2023. My
background in general and comparative literature equips me with the ability to grasp
complex concepts and apply them creatively in my development work. Since last October, I
have also been studying computer science through distance learning at IU International
University. My goal is to work in an innovative company on digital solutions.
      </p>
    </motion.section>
  );
}