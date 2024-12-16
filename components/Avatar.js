import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar.png?v=1" // Add a version or query string
        width={737}
        height={678}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
