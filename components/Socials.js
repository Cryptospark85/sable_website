// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      {/* YouTube */}
      <Link
        href={''}
        className='hover:text-blue-500 text-white transition-colors duration-300'
      >
        <RiYoutubeLine size={24} />
      </Link>
      {/* Facebook */}
      <Link
        href={''}
        className='hover:text-blue-500 text-white transition-colors duration-300'
      >
        <RiFacebookLine size={24} />
      </Link>
      {/* Instagram */}
      <Link
        href={''}
        className='hover:text-blue-500 text-white transition-colors duration-300'
      >
        <RiInstagramLine size={24} />
      </Link>
    </div>
  );
};

export default Socials;
