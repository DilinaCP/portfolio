"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      I am a second-year Computer Science undergraduate at the University of Westminster (affiliated with the Informatics Institute of Technology). 
      Passionate about software development, I enthusiastic in web design, full-stack development, and machine learning. 
      My proactive learning mindset and strong analytical skills enable me to adapt quickly to new technologies. 
      </p>

      




    </motion.section>
  );
}
