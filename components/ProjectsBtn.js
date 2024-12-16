// next link
import Link from 'next/link';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link href="/work">
        <button className="relative w-[11em] h-[4em] outline-none transition duration-300 bg-transparent border-none text-[13px] font-bold text-white/70 group">
          Projects
          {/* Button Style Elements */}
          <div
            id="clip"
            className="absolute top-0 overflow-hidden w-full h-full border-[5px] border-double border-[#001f39] shadow-inner shadow-[#001f39] clip-path-custom group-hover:border-[#0075d4] group-hover:shadow-[0_0_32px_#0075d4] transition-all duration-300"
          >
            {/* Corners */}
            <div
              id="leftTop"
              className="corner absolute w-[4em] h-[4em] bg-[#002441] shadow-inner transform rotate-45 top-[-1.98em] left-[-3em] transition-all duration-300 group-hover:bg-[#0075d4] group-hover:scale-125"
            ></div>
            <div
              id="rightTop"
              className="corner absolute w-[4em] h-[4em] bg-[#002441] shadow-inner transform rotate-45 top-[-1.98em] left-[91%] transition-all duration-300 group-hover:bg-[#0075d4] group-hover:scale-125"
            ></div>
            <div
              id="leftBottom"
              className="corner absolute w-[4em] h-[4em] bg-[#002441] shadow-inner transform rotate-45 top-[2.1em] left-[-2.15em] transition-all duration-300 group-hover:bg-[#0075d4] group-hover:scale-125"
            ></div>
            <div
              id="rightBottom"
              className="corner absolute w-[4em] h-[4em] bg-[#002441] shadow-inner transform rotate-45 top-[45%] left-[88%] transition-all duration-300 group-hover:bg-[#0075d4] group-hover:scale-125"
            ></div>
          </div>

          {/* Arrows */}
          <span
            id="rightArrow"
            className="arrow absolute top-[35%] left-[102%] w-[11%] h-[30%] bg-[#002441] clip-path-rightArrow group-hover:bg-[#0075d4] group-hover:left-[-15%] transition-all duration-300 animate-arrow-move"
          ></span>
          <span
            id="leftArrow"
            className="arrow absolute top-[35%] left-[-13.5%] w-[11%] h-[30%] bg-[#002441] clip-path-leftArrow group-hover:bg-[#0075d4] group-hover:left-[103%] transition-all duration-300 animate-arrow-move"
          ></span>
        </button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
