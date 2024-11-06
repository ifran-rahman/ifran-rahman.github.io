"use client";

import Image from "next/image";
import { useState } from "react";

export default function Achievements() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openImage = (url: string) => {
    setImageUrl(url);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setImageUrl("");
  };

  return (
    <section id='achievements' className='section p-8 bg-gray-900 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center md:text-left'>
          Achievements
        </h2>

        {/* Achievement 1 */}
        <div className='mb-6'>
          <div className='flex items-center md:w-full cursor-pointer'>
            {/* Image Section */}
            <div className='w-48 h-48'>
              <Image
                src='/achievements_1.jpg' // Add the thumbnail image
                alt='Innovation Challenge'
                width={160}
                height={160}
                className='w-full h-full object-cover rounded-md shadow-lg hover:scale-110 transition-transform'
                onClick={() => openImage("/achievements_1.jpg")}
              />
            </div>

            {/* Description Section */}
            <div className='md:ml-6 mt-4 md:mt-0'>
              <div className='flex items-center mb-4'>
                <h3 className='font-bold text-xl mr-4'>
                  Champion, Best Poster Category
                </h3>
                <p className='italic text-sm'>Innovation Challenge, 2022</p>
              </div>
              <p className='text-md mb-4'>Final year thesis showcase.</p>
            </div>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className='mb-6'>
          <div className='flex items-center md:w-full cursor-pointer'>
            {/* Image Section */}
            <div className='w-48 h-48'>
              <Image
                src='/achievements_2.jpg' // Add the thumbnail image
                alt='HackNSU 2019'
                width={160}
                height={160}
                className='w-full h-full object-cover rounded-md shadow-lg hover:scale-110 transition-transform'
                onClick={() => openImage("/achievements_2.jpg")}
              />
            </div>

            {/* Description Section */}
            <div className='md:ml-6 mt-4 md:mt-0'>
              <div className='flex items-center mb-4'>
                <h3 className='font-bold text-xl mr-4'>1st Runner Up</h3>
                <p className='italic text-sm'>HackNSU, 2019</p>
              </div>
              <p className='text-md mb-4'>
                Developed a web-based solution to the then undergraduate
                admission problems of Bangladesh.
              </p>
            </div>
          </div>
        </div>

        {/* Expanded Image Modal */}
        {isOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative'>
              <button
                onClick={closeImage}
                className='absolute top-4 right-4 text-white text-xl font-bold'
              >
                X
              </button>
              <Image
                src={imageUrl}
                alt='Expanded Achievement Image'
                width={400}
                height={400}
                className='max-w-full max-h-full object-contain'
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
