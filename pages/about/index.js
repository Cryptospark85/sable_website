// Import necessary libraries and components
import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import Image from "next/image";

// About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Dev",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Webby Awards - Honoree", stage: "2011 - 2012" },
      { title: "Adobe Design Achievement Awards - Finalist", stage: "2009 - 2010" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer - XYZ Company", stage: "2012 - 2023" },
      { title: "Web Developer - ABC Agency", stage: "2010 - 2012" },
      { title: "Intern - DEF Corporation", stage: "2008 - 2010" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Web Development - ABC University, LA, CA", stage: "2011" },
      { title: "Computer Science Diploma - AV Technical Institute", stage: "2009" },
      { title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA", stage: "2006" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary py-32 text-center xl:text-left relative">
      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-0 w-[600px] xl:w-[900px] opacity-50 mix-blend-color-dodge z-0">
        <Image
          src="/bottom-right-img.png"
          width={900}
          height={900}
          alt="Bottom Right Decoration"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building a <span className="text-[#003a6a]">Future</span> of Smart Solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            We began our journey with a vision to build smart, innovative solutions. Since our inception, we’ve worked with businesses and startups to craft tailored digital products that transform ideas into impactful realities.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <Counter title="Years of experience" count={10} />
              {/* Clients */}
              <Counter title="Satisfied clients" count={250} />
              {/* Projects */}
              <Counter title="Finished projects" count={650} />
              {/* Awards */}
              <Counter title="Winning awards" count={8} />
            </div>
          </motion.div>
        </div>

        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <Tabs tabs={aboutData} activeIndex={index} setIndex={setIndex} />
          <TabContent activeTab={aboutData[index]} />
        </motion.div>
      </div>
    </div>
  );
};

// Counter component for reusability
const Counter = ({ title, count }) => (
  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    <div className="text-2xl xl:text-4xl font-extrabold text-[#003a6a] mb-2">
      <CountUp start={0} end={count} duration={5} /> +
    </div>
    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">{title}</div>
  </div>
);

// Tabs component for navigation
const Tabs = ({ tabs, activeIndex, setIndex }) => (
  <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
    {tabs.map((tab, tabIndex) => (
      <div
        key={tabIndex}
        className={`${
          activeIndex === tabIndex &&
          "text-[#003a6a] after:w-[100%] after:bg-[#003a6a] after:transition-all after:duration-300"
        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
        onClick={() => setIndex(tabIndex)}
      >
        {tab.title}
      </div>
    ))}
  </div>
);

// Tab Content
const TabContent = ({ activeTab }) => (
  <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
    {activeTab.info.map((item, index) => (
      <div
        key={index}
        className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
      >
        <div className="font-light mb-2 md:mb-0">{item.title}</div>
        <div className="hidden md:flex">-</div>
        <div>{item.stage}</div>
        <div className="flex gap-x-4">
          {item.icons?.map((icon, iconIndex) => (
            <div key={iconIndex} className="text-2xl text-white">
              {icon}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default About;
