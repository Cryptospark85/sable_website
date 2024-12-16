// Testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Working with this team was a game-changer! Their solutions exceeded all my expectations.',
    link: 'https://safe-skill.co.za',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Client',
    message:
      'The designs were intuitive and user-friendly. I’ve received so many compliments on our new platform.',
    link: 'https://safe-skill.co.za',
  },
  {
    image: '/t-avt-3.png',
    name: 'John Doe',
    position: 'Partner',
    message:
      'Professional, innovative, and dependable. I highly recommend their services to anyone.',
    link: 'https://safe-skill.co.za',
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

// Icons
import { FaQuoteLeft } from 'react-icons/fa';
// Next image
import Image from 'next/image';
import { useState } from 'react';

const TestimonialSlider = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (person) => {
    setSelectedTestimonial(person);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <>
      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-[400px]"
      >
        {testimonialSlider.map((person, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 cursor-pointer"
              onClick={() => openModal(person)}
            >
              {/* Avatar, Name, Position */}
              <div className="w-full max-w-[300px] flex flex-col items-center relative mx-auto">
                <div className="flex flex-col justify-center text-center">
                  {/* Avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                      className="rounded-full border-4 border-[#003a6a]"
                    />
                  </div>
                  {/* Name */}
                  <div className="text-lg font-bold text-[#003a6a]">
                    {person.name}
                  </div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest text-white/70">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* Quote & Message */}
              <div className="flex-1 flex flex-col justify-center relative xl:pl-20 text-white">
                {/* Quote Icon */}
                <div className="mb-4 text-[#0075d4]">
                  <FaQuoteLeft className="text-4xl xl:text-6xl mx-auto md:mx-0" />
                </div>
                {/* Message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#001f39] text-white p-8 rounded-lg max-w-md w-full relative shadow-[0px_0px_30px_#0075d4]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-white/80 hover:text-white"
            >
              &times;
            </button>
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
              <Image
                src={selectedTestimonial.image}
                width={100}
                height={100}
                alt={selectedTestimonial.name}
                className="rounded-full border-4 border-[#0075d4]"
              />
            </div>
            {/* Name */}
            <h3 className="text-2xl font-bold mb-2 text-center text-[#0075d4]">
              {selectedTestimonial.name}
            </h3>
            {/* Position */}
            <p className="text-center text-white/70 mb-4">
              {selectedTestimonial.position}
            </p>
            {/* Message */}
            <p className="text-center mb-4">{selectedTestimonial.message}</p>
            {/* Project Link */}
            <div className="flex justify-center">
              <a
                href={selectedTestimonial.link}
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

export default TestimonialSlider;
