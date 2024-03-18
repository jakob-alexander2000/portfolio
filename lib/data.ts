import React from "react";

import musicAppImage from "@/public/MusicApp.png";
import socialMediaAppImage from "@/public/SocialMediaApp.png";
import textSharingImage from "@/public/TextSharingApp.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Music-Streaming App",
    description:
      "A music streaming app that fetches charts & songs from the Shazam & Geolocation Api's",
    tags: ["React", "Next.js", "Tailwind", "Redux", "Rapid Api"],
    imageUrl: musicAppImage,
  },
  {
    title: "Text-Block Sharing App",
    description:
      "A responsive FS-Application where Users can post, update and delete text posts",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: textSharingImage,
  },
  {
    title: "Social-Media-App",
    description:
      "A Full-Stack Social-Media-App where users can post short texts and images, like posts and follow other users",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: socialMediaAppImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Django",
  "Framer Motion",
] as const;