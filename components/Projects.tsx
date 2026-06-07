"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Dolearnn",
    description:
    "DoLearnn is an edtech platform that connects students with vetted teachers for personalized one on one online learning. It uses a hands on matching approach to pair each learner with the right teacher based on their needs, while providing structured learning and clear progress tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind", "EdTech", "UX"],
    stats: [
      { value: "Live", label: "Platform Status" },
      { value: "EdTech", label: "Category" },
      { value: "Scale", label: "Focus" },
    ],
    category: "Learning Platform",
    stage: "Live Product",
    tone: "Clarity-led learning experience",
    liveUrl: "https://dolearnn.com/",
  },
  {
    number: "02",
    title: "Eventpadi",
    description:
      "A high-scale event management platform processing real money and real people. Built to handle 70K+ ticket buyers and 500+ events while maintaining sub-second load times and rock-solid payment flows.",
    tags: ["React", "TypeScript",  "CHAKRA UI", "CI/CD"],
    stats: [
      { value: "70K+", label: "Ticket Buyers" },
      { value: "$40K+", label: "Revenue Processed" },
      { value: "500+", label: "Events" },
    ],
    category: "Event Platform",
    stage: "High-volume ops",
    tone: "Built for pressure and trust",
    liveUrl: "https://eventpadi.com/",
  },
  {
    number: "03",
    title: "Edssistance",
    description:
      "A comprehensive school management platform built for scale - multi-role (admin, teacher, student, parent), multi-tenant architecture serving multiple institutions from a single codebase.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Role-Based Auth", "Multi-tenant"],
    stats: [
      { value: "Multi", label: "Role System" },
      { value: "Multi", label: "Tenant Ready" },
      { value: "100%", label: "Accessible" },
    ],
    category: "EdTech",
    stage: "Platform architecture",
    tone: "Complex flows made usable",
    liveUrl: "#",
  },
  {
    number: "04",
    title: "Primal Journals",
    description:
      "An academic content management system built for a publishing house, featuring optimized SEO architecture, content discovery flows, and performance engineering that drove measurable traffic growth.",
    tags: ["Reactjs", "SEO", "Performance", "CMS", "TypeScript"],
    stats: [
      { value: "50%", label: "Traffic Growth" },
      { value: "A+", label: "Lighthouse Score" },
      { value: "CMS", label: "Academic" },
    ],
    category: "Academic CMS",
    stage: "Content performance",
    tone: "Editorial system with reach",
    liveUrl: "https://primaljournals.org/",
  },
  {
    number: "05",
    title: "Devupshot",
    description:
      "A full-featured learning management system that supports course creation, instructor dashboards, and platform-level configuration. It enables admins and instructors to manage courses, track learning activities, and deliver structured online education through a scalable, dashboard-driven system.",
    tags: ["React", "Chakra UI", "Node.js", "LMS", "Dashboards"],
    stats: [
      { value: "LMS", label: "Platform Type" },
      { value: "Multi", label: "Role System" },
      { value: "Full", label: "Course Lifecycle" },
    ],
    category: "Learning Platform",
    stage: "Dashboard-driven LMS",
    tone: "Structured learning at scale",
    liveUrl: "https://educrat-rho.vercel.app/",
  },
  {
    number: "06",
    title: "Nail Maestro",
    description:
      "A luxury brand site for a premium nail artistry studio that treats nail design as culture, identity, and creative direction. Built around an immersive portfolio with a full-screen gallery viewer, tiered service storytelling, and direct WhatsApp and Instagram booking flows that turn browsing into bookings.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Brand"],
    stats: [
      { value: "Live", label: "Platform Status" },
      { value: "Luxury", label: "Brand Tier" },
      { value: "Direct", label: "Booking Flow" },
    ],
    category: "Luxury Brand",
    stage: "Live Product",
    tone: "Editorial brand, built to convert",
    liveUrl: "https://www.nailmaestro.com/",
  },
  {
    number: "07",
    title: "Kairolexx",
    description:
      "A marketing agency site for a team that pairs strategy with hands-on execution across content, ads, email, SEO, and campaign delivery. Designed to communicate measurable momentum over vanity metrics, with clear service framing, case-study proof, and frictionless consultation booking via WhatsApp and email.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Marketing", "Conversion"],
    stats: [
      { value: "Live", label: "Platform Status" },
      { value: "Multi", label: "Channel Support" },
      { value: "20min", label: "Free Strategy Call" },
    ],
    category: "Agency Site",
    stage: "Live Product",
    tone: "Strategy that ships, not just slides",
    liveUrl: "https://kairolexx.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-surface px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-10 h-80 bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.12),transparent_68%)] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-dm text-xs uppercase tracking-widest text-accent-fg">
              03 / Projects
            </span>
            <div className="h-px max-w-xs flex-1 bg-line" />
          </div>
        </ScrollReveal>

        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <ScrollReveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 font-dm text-[11px] uppercase tracking-[0.22em] text-fg4">
                Case studies / product work
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="font-syne text-4xl font-extrabold leading-tight text-fg md:text-5xl">
                Selected work that feels
                <span className="text-accent-fg"> shipped, scaled, and serious</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.12}>
            <div className="rounded-[2rem] border border-line bg-gradient-to-br from-panel to-surface p-6">
              <p className="font-dm text-sm leading-relaxed text-fg3">
                These are not placeholder portfolio pieces. They represent real product
                thinking, production delivery, and interface work built to help teams
                earn trust quickly.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.08}>
              <ProjectCard project={project} index={idx} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 text-center">
            <a
              href="https://github.com/PeterAdedokun1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-5 py-3 font-dm text-sm text-fg3 transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-fg"
            >
              More on GitHub
              <FiExternalLink className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(200,255,0,0.14), transparent 72%)`;

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className={`group relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-panel to-surface p-8 shadow-[0_24px_70px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_32px_90px_rgba(0,0,0,0.08)] md:p-10 ${
        index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
      }`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight, opacity: hovered ? 1 : 0 }}
      />
      <motion.div
        aria-hidden
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.92 }}
        transition={{ duration: 0.35 }}
        className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-accent/15"
      />
      <motion.div
        aria-hidden
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0.55, x: -14 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-x-10 top-24 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-start">
        <div className="flex items-center gap-4 lg:block">
          <span className="block font-syne text-6xl font-extrabold leading-none text-line-strong transition-colors duration-300 group-hover:text-accent/40 md:text-7xl">
            {project.number}
          </span>
          <div className="lg:hidden">
            <p className="font-dm text-[11px] uppercase tracking-[0.22em] text-fg5">
              {project.stage}
            </p>
            <p className="mt-1 font-dm text-sm text-fg3">{project.tone}</p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h3 className="font-syne text-3xl font-bold text-fg transition-colors duration-300 group-hover:text-accent-fg md:text-4xl">
              {project.title}
            </h3>
            <span className="rounded-full border border-line px-3 py-1 font-dm text-xs text-fg4">
              {project.category}
            </span>
          </div>

          <div className="mb-6 hidden items-center gap-4 lg:flex">
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 font-dm text-[10px] uppercase tracking-[0.22em] text-accent-fg">
              {project.stage}
            </span>
            <span className="font-dm text-sm text-fg4">{project.tone}</span>
          </div>

          <p className="mb-8 max-w-3xl font-dm text-base leading-relaxed text-fg3 md:text-lg">
            {project.description}
          </p>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {project.stats.map((stat, statIndex) => (
              <motion.div
                key={stat.label}
                animate={hovered ? { y: -2 } : { y: 0 }}
                transition={{ duration: 0.24, delay: statIndex * 0.04 }}
                className="rounded-[1.35rem] border border-line/80 bg-surface/70 p-4"
              >
                <p className="font-syne text-2xl font-bold text-fg">{stat.value}</p>
                <p className="mt-1 font-dm text-xs uppercase tracking-[0.2em] text-fg5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-dm text-xs text-accent-fg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line/70 pt-6">
            <span className="font-dm text-[11px] uppercase tracking-[0.22em] text-fg5">
              Live Site
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
              className="group/link inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 font-dm text-xs uppercase tracking-[0.18em] text-accent-fg transition-all duration-200 hover:border-accent hover:bg-accent hover:text-black"
            >
              Visit {project.title}
              <FiExternalLink
                className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                size={14}
              />
            </a>
          </div>
        </div>

        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live site`}
          animate={hovered ? { x: 6, y: -6 } : { x: 0, y: 0 }}
          transition={{ duration: 0.22 }}
          className="hidden lg:flex"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface/80 transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
            <FiArrowRight
              className="text-fg4 transition-colors duration-300 group-hover:text-black"
              size={18}
            />
          </div>
        </motion.a>
      </div>
    </motion.article>
  );
}
