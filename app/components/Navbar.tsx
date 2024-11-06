import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex items-center font-sans justify-between px-5 py-4 bg-white text-gray-900'>
      <div className='text-2xl'>
        <Link href='/'>Ifran Rahman Nijhum</Link>
      </div>

      <div className='space-x-8'>
        <Link
          href='#home'
          className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300'
        >
          Home
        </Link>
        <Link
          href='#research'
          className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300'
        >
          Research
        </Link>
        <Link
          href='#resume'
          className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300'
        >
          Resume
        </Link>
        <Link
          href='#achievements'
          className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300'
        >
          Achievements
        </Link>
        <Link
          href='#service'
          className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300'
        >
          Service
        </Link>
        <Link
          href='#contact'
          className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
