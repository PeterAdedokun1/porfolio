"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiBox,
  FiLayout,
  FiServer,
  FiTrendingUp,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

type Tier = "Core" | "Strong" | "Working";

const capabilities: {
  icon: IconType;
  category: string;
  tagline: string;
  tier: Tier;
  tools: string[];
}[] = [
  {
    icon: FiLayout,
    category: "Frontend Systems",
    tagline:
      "High-end interfaces with accessibility, motion, and performance handled as product features.",
    tier: "Core",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: FiServer,
    category: "Product Engineering",
    tagline:
      "Enough backend depth to shape APIs, own app flows, and ship production-ready experiences end to end.",
    tier: "Strong",
    tools: ["Node.js", "REST API", "MongoDB", "CI/CD"],
  },
  {
    icon: FiBox,
    category: "Web3 Integration",
    tagline:
      "Smart-contract interaction and on-chain UX for teams building useful real-world products.",
    tier: "Working",
    tools: ["Solidity", "Ethers.js"],
  },
  {
    icon: FiTrendingUp,
    category: "Growth and Quality",
    tagline:
      "SEO, performance, and testing habits that make launch day cleaner and iteration easier afterward.",
    tier: "Strong",
    tools: ["Jest", "SEO", "Performance Eng.", "System Architecture"],
  },
];

const allSkillTags = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "MongoDB",
  "REST API",
  "GraphQL",
  "Solidity",
  "Ethers.js",
  "Jest",
  "CI/CD",
  "SEO",
  "Performance Engineering",
  "System Architecture",
  "Figma",
  "Git",
  "Vercel",
];

const tierStyles: Record<Tier, string> = {
  Core: "border-accent/40 bg-accent/10 text-accent-fg",
  Strong: "border-line-strong bg-panel text-fg2",
  Working: "border-line bg-panel text-fg3",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-surface px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-dm text-xs uppercase tracking-widest text-accent-fg">
              02 / Skills
            </span>
            <div className="h-px max-w-xs flex-1 bg-line" />
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[5fr,7fr]">
          <div>
            <ScrollReveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 font-dm text-[11px] uppercase tracking-[0.22em] text-fg4">
                Tools / systems / execution
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mb-6 font-syne text-4xl font-extrabold leading-tight text-fg md:text-5xl">
                The stack I use to build products that
                <span className="text-accent-fg"> look sharp and scale cleanly</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="mb-10 max-w-xl font-dm text-lg leading-relaxed text-fg3">
                My toolkit is centered on modern frontend engineering, but I also
                care about architecture, product flow, and maintainability. That
                combination makes me useful on both landing pages and larger apps.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-[2rem] border border-line bg-gradient-to-br from-panel to-surface p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="font-dm text-[11px] uppercase tracking-[0.22em] text-fg5">
                      Toolkit snapshot
                    </p>
                    <p className="mt-2 font-syne text-2xl font-bold text-fg">
                      Built for startup speed
                    </p>
                  </div>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-2 font-dm text-[10px] uppercase tracking-[0.22em] text-accent-fg">
                    Current
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {allSkillTags.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="rounded-full border border-line px-3.5 py-2 font-dm text-xs text-fg3 transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-fg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap, index) => (
              <ScrollReveal key={cap.category} delay={index * 0.08}>
                <CapabilityCard {...cap} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  icon: Icon,
  category,
  tagline,
  tier,
  tools,
}: {
  icon: IconType;
  category: string;
  tagline: string;
  tier: Tier;
  tools: string[];
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br from-panel to-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_22px_70px_rgba(0,0,0,0.06)]">
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(200,255,0,0.09), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface text-accent-fg transition-colors group-hover:border-accent/40">
            <Icon size={18} />
          </div>
          <span
            className={`rounded-full border px-3 py-1 font-dm text-[10px] uppercase tracking-[0.2em] ${tierStyles[tier]}`}
          >
            {tier}
          </span>
        </div>

        <h3 className="mb-2 font-syne text-xl font-bold text-fg transition-colors group-hover:text-accent-fg">
          {category}
        </h3>
        <p className="mb-6 font-dm text-sm leading-relaxed text-fg3">
          {tagline}
        </p>

        <div className="mb-8 flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-line px-2 py-1 font-dm text-[10px] uppercase tracking-wider text-fg4"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-line/80 pt-4">
          <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-fg5">
            Product-ready
          </span>
          <FiArrowUpRight
            aria-hidden
            className="text-fg5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-fg"
            size={16}
          />
        </div>
      </div>
    </div>
  );
}
