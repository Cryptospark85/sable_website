// next image
import Image from 'next/image';

const BottomRightImg = () => {
  return (
    <div className="absolute bottom-0 right-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[300px] opacity-50">
      <Image
        src="/bottom-right-img.png"
        width={300}
        height={300}
        alt="Bottom Right Image"
        className="w-full h-full"
      />
    </div>
  );
};

export default BottomRightImg;
