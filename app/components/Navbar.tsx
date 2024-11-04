import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-3 bg-gray-800 text-white'>
      {/* Title */}
      <div className='text-2xl font-bold'>
        <Link href='/'>Ifran Rahman Nijhum</Link>
      </div>

      {/* Navigation Links */}
      <div className='space-x-6'>
        <Link href='#home' className='hover:text-gray-300'>
          Home
        </Link>
        <Link href='#research' className='hover:text-gray-300'>
          Research
        </Link>
        <Link href='#resume' className='hover:text-gray-300'>
          Resume
        </Link>
        <Link href='#achievements' className='hover:text-gray-300'>
          Achievements
        </Link>
        <Link href='#service' className='hover:text-gray-300'>
          Service
        </Link>
        <Link href='#contact' className='hover:text-gray-300'>
          Contact
        </Link>
      </div>
    </nav>
  );
}
