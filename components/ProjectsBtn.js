// next link
import Link from 'next/link';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link href="/work">
        <button className="relative w-[11em] h-[4em] outline-none transition duration-100 bg-transparent border-none text-[13px] font-bold text-[#ddebf0]">
          Projects
          {/* Button Style Elements */}
          <div
            id="clip"
            className="absolute top-0 overflow-hidden w-full h-full border-[5px] border-double border-[#001f39] shadow-inner shadow-[#001f39] clip-path-custom"
          >
            <div
              id="leftTop"
              className="corner absolute w-[4em] h-[4em] bg-[#001f39] shadow-inner transform rotate-45 transition scale-100 top-[-1.98em] left-[-3em]"
            ></div>
            <div
              id="rightTop"
              className="corner absolute w-[4em] h-[4em] bg-[#001f39] shadow-inner transform rotate-45 transition scale-100 top-[-1.98em] left-[91%]"
            ></div>
            <div
              id="leftBottom"
              className="corner absolute w-[4em] h-[4em] bg-[#001f39] shadow-inner transform rotate-45 transition scale-100 top-[2.1em] left-[-2.15em]"
            ></div>
            <div
              id="rightBottom"
              className="corner absolute w-[4em] h-[4em] bg-[#001f39] shadow-inner transform rotate-45 transition scale-100 top-[45%] left-[88%]"
            ></div>
          </div>
          <span
            id="rightArrow"
            className="arrow absolute top-[35%] left-[102%] w-[11%] h-[30%] bg-[#001f39] clip-path-rightArrow"
          ></span>
          <span
            id="leftArrow"
            className="arrow absolute top-[35%] left-[-13.5%] w-[11%] h-[30%] bg-[#001f39] clip-path-leftArrow"
          ></span>
        </button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
