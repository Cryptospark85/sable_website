// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Icons
import {
  RxCode,
  RxLayers,
  RxRocket,
  RxCrop,
  RxDesktop,
  RxGear,
  RxArrowTopRight,
} from 'react-icons/rx';

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper';
import { useState } from 'react';

// Service data
export const serviceData = [
  {
    icon: <RxCode />,
    title: 'Custom Software Design',
    description:
      'Tailored software solutions designed to meet your unique business needs and challenges.',
    link: 'https://www.youtube.com/watch?v=custom-software',
  },
  {
    icon: <RxLayers />,
    title: 'Modern UX & UI',
    description:
      'Intuitive and visually appealing user interfaces designed for exceptional user experiences.',
    link: 'https://www.youtube.com/watch?v=ux-ui-design',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Boost your online presence with cutting-edge SEO strategies that drive organic traffic.',
    link: 'https://www.youtube.com/watch?v=seo-optimization',
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description:
      'Elevate your brand identity with creative and consistent branding solutions.',
    link: 'https://www.youtube.com/watch?v=branding-solutions',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description:
      'Responsive and scalable web development services to bring your ideas to life.',
    link: 'https://www.youtube.com/watch?v=web-development',
  },
  {
    icon: <RxGear />,
    title: 'Business Integration',
    description:
      'Seamlessly integrate technology into your business processes for improved efficiency.',
    link: 'https://www.youtube.com/watch?v=business-integration',
  },
];

const ServiceSlider = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        autoplay={{
          delay: 5000, // Adjusts the speed of rotation
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="h-[340px]"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleCardClick(item)}
              className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col gap-y-6 cursor-pointer group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-[0px_0px_15px_#003a6a]"
            >
              {/* Icon */}
              <div className="text-4xl text-[#003a6a]">{item.icon}</div>
              {/* Title */}
              <div className="text-lg font-bold text-white">{item.title}</div>
              {/* Description */}
              <p className="text-white/70 leading-normal">{item.description}</p>
              {/* Arrow */}
              <div className="text-3xl text-[#003a6a]">
                <RxArrowTopRight className="group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#001f39] text-white p-8 rounded-lg max-w-md w-full relative shadow-[0px_0px_30px_#003a6a]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-white/80 hover:text-white"
            >
              &times;
            </button>
            {/* Icon */}
            <div className="text-5xl text-[#0075d4] mb-4 text-center">
              {selectedCard.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedCard.title}
            </h3>
            {/* Description */}
            <p className="text-center text-white/70 mb-4">
              {selectedCard.description}
            </p>
            {/* Link Button */}
            <div className="flex justify-center">
              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0075d4] text-white px-4 py-2 rounded hover:bg-[#005ea8] transition-all duration-300"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceSlider;
