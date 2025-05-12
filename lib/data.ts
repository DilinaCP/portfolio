import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import curasyncImg from "@/public/curasync.png";
import ticketsystem from "@/public/ticketsystem.png";
import javaticketsystem from "@/public/javaticketsystem.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "BSc (Hons) in Computer Science",
    location: "IIT, Colombo, Sri Lanka",
    description:
      "Currently pursuing my degree at IIT, affiliated with the University of Westminster. Gained practical experience in OOP, web development, machine learning, and full-stack software projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Team Leader – AIESEC in IIT",
    location: "IIT, Colombo, Sri Lanka",
    description:
      "Leading teams and coordinating impactful student-led projects as a Team Leader at AIESEC, building leadership, teamwork, and communication skills.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Started Foundation Program",
    location: "IIT, Colombo, Sri Lanka",
    description:
      "Successfully completed the foundation program at the Informatics Institute of Technology, building a strong base in computing and problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Freelancer & Project Developer",
    location: "Remote",
    description:
      "Worked as a freelance logo designer and data entry specialist on Upwork and Fiverr.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  }
] as const;


export const projectsData = [
  {
    title: "CuraSync - Healthcare Management Platform",
    description:
      "A cloud-based healthcare management system designed to streamline interactions between patients, doctors, labs, and pharmacies.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    imageUrl: curasyncImg,
  },
  {
    title: "Ticketing System – Full-Stack Simulation",
    description:
      "A simulation of real-world producer-consumer interactions using a Angular frontend and Spring Boot backend. Included RESTful API development for real-time ticket booking and management.",
    tags: ["Angular", "TypeScript", "Springboot"],
    imageUrl: ticketsystem,
  },
  {
    title: "Cinema Management System (Java)",
    description:
      "A standalone Java application enabling seat bookings, ticket purchasing, cancellations, and sorted ticket views. Focused on user interaction and core Java programming principles.",
    tags: ["Java"],
    imageUrl: javaticketsystem,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
] as const;
