// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative">
      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-0 w-[300px] xl:w-[400px] opacity-40 mix-blend-color-dodge z-0">
        <Image
          src="/bottom-right-img.png"
          width={400}
          height={400}
          alt="Bottom Right Decoration"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-[#003a6a]">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Explore a showcase of innovative solutions, tailored designs, and
              digital transformations crafted with precision and creativity.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
