// Work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Project 1',
          path: '/thumb1.jpg',
          link: 'https://www.youtube.com/watch?v=project1',
        },
        {
          title: 'Project 2',
          path: '/thumb2.jpg',
          link: 'https://www.youtube.com/watch?v=project2',
        },
        {
          title: 'Project 3',
          path: '/thumb3.jpg',
          link: 'https://www.youtube.com/watch?v=project3',
        },
        {
          title: 'Project 4',
          path: '/thumb4.jpg',
          link: 'https://www.youtube.com/watch?v=project4',
        },
      ],
    },
  ],
};

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper';

// Icons
import { BsArrowRight } from 'react-icons/bs';
// Next image
import Image from 'next/image';
import { useState } from 'react';

const WorkSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="relative">
        {/* Bottom Right Image */}
        <div className="absolute bottom-0 right-0 w-[300px] xl:w-[400px] opacity-40 mix-blend-color-dodge z-0">
          <Image
            src="/bottom-right-img.png"
            width={400}
            height={400}
            alt="Bottom Right Decoration"
          />
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="h-[280px] sm:h-[480px]"
        >
          {workSlider.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    onClick={() => openModal(image)}
                  >
                    {/* Image */}
                    <Image src={image.path} width={500} height={300} alt="" />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0075d4] to-[#003a6a] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#001f39] text-white p-8 rounded-lg max-w-md w-full relative shadow-[0px_0px_30px_#0075d4]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-white/80 hover:text-white"
            >
              &times;
            </button>
            {/* Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={selectedImage.path}
                width={400}
                height={300}
                alt={selectedImage.title}
                className="rounded-lg"
              />
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedImage.title}
            </h3>
            {/* Link Button */}
            <div className="flex justify-center">
              <a
                href={selectedImage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0075d4] text-white px-4 py-2 rounded hover:bg-[#005ea8] transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
