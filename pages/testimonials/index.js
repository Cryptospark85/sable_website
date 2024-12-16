// Components
import TestimonialSlider from '../../components/TestimonialSlider';

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// Next Image
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center relative">
      {/* Bottom Right Decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] xl:w-[500px] opacity-40 mix-blend-color-dodge z-0">
        <Image
          src="/bottom-right-img.png"
          width={500}
          height={500}
          alt="Bottom Right Decoration"
        />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center relative z-10">
        {/* Title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-[#003a6a]">say.</span>
        </motion.h2>

        {/* Slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
