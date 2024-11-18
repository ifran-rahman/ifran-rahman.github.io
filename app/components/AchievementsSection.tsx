"use client";

import Image from "next/image";
import { useState } from "react";

export default function Achievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  return (
    <section id='achievements' className='section p-8 bg-gray-900 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center md:text-left'>
          Achievements
        </h2>

        <div className='mb-6'>
          <div className='flex items-center md:w-full cursor-pointer'>
            <div className='w-48 h-48'>
              <img
                src='./achievements_1.jpg'
                alt='Innovation Challenge'
                width={160}
                height={160}
                className='w-full h-full object-cover rounded-md shadow-lg hover:scale-110 transition-transform'
                onClick={() => {
                  setModalImageSrc("/achievements_1.jpg");
                  setIsModalOpen(true);
                }}
              />
            </div>

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

        <div className='mb-6'>
          <div className='flex items-center md:w-full cursor-pointer'>
            <div className='w-48 h-48'>
              <img
                src='/achievements_2.jpg'
                alt='HackNSU 2019'
                width={160}
                height={160}
                className='w-full h-full object-cover rounded-md shadow-lg hover:scale-110 transition-transform'
                onClick={() => {
                  setModalImageSrc("/achievements_2.jpg");
                  setIsModalOpen(true);
                }}
              />
            </div>

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

        {isModalOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
            onClick={() => setIsModalOpen(false)} // Close modal if clicked outside
          >
            <div
              className='relative bg-white p-4 rounded-md'
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
              <button
                className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <Image
                src={modalImageSrc}
                alt='Modal Image'
                width={600}
                height={600}
                className='object-contain'
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
