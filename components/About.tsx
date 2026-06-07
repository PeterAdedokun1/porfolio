"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiClock, FiGlobe, FiLayers } from "react-icons/fi";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";

type Stat = {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { to: 70, suffix: "K+", label: "Ticket buyers served" },
  { to: 40, prefix: "$", suffix: "K+", label: "Revenue processed" },
  { to: 500, suffix: "+", label: "Events managed" },
  { to: 50, suffix: "%", label: "Traffic growth delivered" },
];

const strengths = [
  {
    icon: FiGlobe,
    title: "Global-ready communication",
    text: "Clear async updates, dependable delivery, and product thinking that works across time zones.",
  },
  {
    icon: FiLayers,
    title: "Design-sensitive engineering",
    text: "I translate visual intent into polished interfaces without losing performance or usability.",
  },
  {
    icon: FiClock,
    title: "Built for momentum",
    text: "I like shipping fast, reducing ambiguity, and helping teams keep quality high as products grow.",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="bg-surface px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-dm text-xs uppercase tracking-widest text-accent-fg">
              01 / About
            </span>
            <div className="h-px max-w-xs flex-1 bg-line" />
          </div>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 font-dm text-[11px] uppercase tracking-[0.22em] text-fg4">
                Lagos based / available worldwide
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="max-w-4xl font-syne text-4xl font-extrabold leading-[1.02] text-fg md:text-6xl">
                I&apos;m a product engineer who builds interfaces that feel
                <span className="text-accent-fg"> premium, fast, and trustworthy</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid gap-6 rounded-[2rem] border border-line bg-gradient-to-br from-panel to-surface p-8 shadow-[0_24px_70px_rgba(0,0,0,0.04)] md:grid-cols-[1.2fr,0.8fr]">
                <div className="space-y-5">
                  <p className="font-dm text-lg leading-relaxed text-fg3">
                    I am a product-focused frontend engineer from <span className="text-fg">Lagos, Nigeria</span> who helps startups and growing teams turn ideas into products people actually use. My strongest tools are <span className="text-accent-fg">React</span>, <span className="text-accent-fg">TypeScript</span>, and <span className="text-accent-fg">Next.js</span>, but the bigger value I bring is owning features end to end, from the product decision to the interface users instantly trust.
                  </p>
                  <p className="font-dm text-lg leading-relaxed text-fg3">
                    My work spans EdTech, event platforms, and publishing systems. I think in user outcomes, not just tickets, and care about the details that matter to international clients too: responsiveness, clarity, accessibility, performance, and delivery that does not need constant follow-up.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-line bg-surface/85 p-6">
                  <p className="font-dm text-[11px] uppercase tracking-[0.24em] text-fg5">
                    Value I bring
                  </p>
                  <div className="mt-5 space-y-4">
                    {["Clean UI execution", "Fast iteration loops", "Strong communication", "Scalable code structure"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-fg">
                          +
                        </span>
                        <span className="font-dm text-sm text-fg2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {strengths.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.15 + index * 0.06}>
                  <div className="group h-full rounded-[1.5rem] border border-line bg-panel/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface text-accent-fg transition-colors group-hover:border-accent/40">
                      <item.icon size={18} />
                    </div>
                    <h3 className="mb-3 font-syne text-xl font-bold text-fg">
                      {item.title}
                    </h3>
                    <p className="font-dm text-sm leading-relaxed text-fg3">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08 + 0.2 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br from-panel to-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${
                  index % 2 === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(200,255,0,0.08), transparent 68%)",
                  }}
                />
                <div className="relative">
                  <p className="mb-2 font-dm text-[11px] uppercase tracking-[0.24em] text-fg5">
                    Impact
                  </p>
                  <p className="mb-3 whitespace-nowrap font-syne text-2xl  font-extrabold tracking-tight text-accent-fg md:text-5xl md:tracking-normal">
                    <CountUp
                      to={stat.to}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1.8}
                    />
                  </p>
                  <p className="font-dm text-sm text-fg4">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
