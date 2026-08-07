"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, contactItems } from "../data/userData";

type HeroProps = {
  onTabChange?: (tab: string) => void;
  uiType?: "landing" | "modular";
};

const Hero = ({ onTabChange, uiType }: HeroProps) => {
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    if (uiType === "modular" && onTabChange) {
      e.preventDefault();
      onTabChange(section);
      return;
    }

    e.preventDefault();

    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const socialItems = contactItems.filter((item) =>
    ["GitHub", "LinkedIn", "X", "Discord"].includes(item.label)
  );

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        relative z-10
        w-full
        min-h-[calc(100vh-80px)]
        flex items-center
        scroll-mt-20
        px-5 sm:px-8 lg:px-12
        py-20 sm:py-24 lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          grid
          grid-cols-1
          lg:grid-cols-[1fr_auto]
          items-center
          gap-12
          lg:gap-20
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="max-w-2xl">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-blue-500/20
              bg-blue-500/10
              px-3.5 py-1.5
              text-xs sm:text-sm
              font-semibold
              uppercase
              tracking-wider
              text-blue-400
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            {personalInfo.status}
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6"
          >
            <h1
              className="
                font-black
                tracking-[-0.04em]
                leading-[0.95]
                text-white
                text-[clamp(2.8rem,7vw,5.5rem)]
              "
            >
              <span className="block">
                Ayush Kumar
              </span>

              <span className="block text-zinc-500">
                Ukenday
              </span>
            </h1>

            <div className="mt-5">
              <p
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-semibold
                  tracking-tight
                  text-zinc-300
                "
              >
                Full Stack Developer
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  sm:text-xl
                  font-medium
                  text-blue-500
                "
              >
                Building with AI & modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="
              mt-6
              max-w-xl
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-zinc-400
            "
          >
            {personalInfo.aboutText}
          </motion.p>

          {/* Actions + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-5
            "
          >
            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => handleNavigation(e, "projects")}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-5 sm:px-6
                  py-3
                  text-sm sm:text-base
                  font-bold
                  text-black
                  shadow-lg
                  shadow-white/5
                  transition-all
                  duration-300
                  hover:bg-zinc-200
                  hover:-translate-y-0.5
                  active:scale-95
                "
              >
                View My Work
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, "contact")}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border border-blue-500/30
                  bg-blue-600/90
                  px-5 sm:px-6
                  py-3
                  text-sm sm:text-base
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-600
                  active:scale-95
                "
              >
                Get in Touch

                <Send
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block h-6 w-px bg-white/10" />

              {socialItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="
                      text-zinc-500
                      transition-all
                      duration-200
                      hover:text-white
                      hover:-translate-y-0.5
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Small technology statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-xs sm:text-sm
              text-zinc-600
            "
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>AI</span>
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT — AVATAR
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            lg:mx-0
            w-[240px]
            sm:w-[280px]
            lg:w-[340px]
            xl:w-[360px]
          "
        >
          <div className="group relative">
            {/* Corner accents */}
            <div
              className="
                absolute
                -left-2
                -top-2
                z-20
                h-8
                w-8
                border-l-2
                border-t-2
                border-blue-500/70
                transition-transform
                duration-300
                group-hover:-translate-x-1
                group-hover:-translate-y-1
              "
            />

            <div
              className="
                absolute
                -right-2
                -bottom-2
                z-20
                h-8
                w-8
                border-r-2
                border-b-2
                border-blue-500/70
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:translate-y-1
              "
            />

            {/* Image */}
            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-zinc-950
                shadow-2xl
              "
            >
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                loading="eager"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  transition-all
                  duration-700
                  group-hover:scale-[1.02]
                  group-hover:grayscale-0
                "
              />

              {/* subtle overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-8
                -z-10
                rounded-full
                bg-blue-500/10
                blur-3xl
                opacity-60
              "
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;