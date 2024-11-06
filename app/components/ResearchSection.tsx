"use client";
import Image from "next/image";
import { useState } from "react";

export default function ResearchSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  return (
    <section id='research' className='section p-8 bg-gray-900 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center md:text-left'>
          Research & Publications
        </h2>

        {/* Publications Section */}
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-4'>Publications</h3>

          {/* Publication 1 */}
          <div className='mb-6'>
            <h4 className='font-semibold text-xl'>
              A Hybrid CNN-LSTM Framework and Infrared Image Processing for
              Solar Irradiance Forecasting
            </h4>
            <p className='italic text-sm mb-2'>
              <span className='font-bold'>Authors:</span> Ifran Rahman Nijhum,
              Md Yearat Hossain, Toluwabori Akinola, Md Mahbub Hasan Rakib,
              Soumyabrata Dev
            </p>
            <p className='text-md'>
              <span className='font-bold'>Conference:</span> 17th International
              Congress on Image and Signal Processing, BioMedical Engineering
              and Informatics (CISP-BMEI 2024), Shanghai, China, 2024
            </p>
          </div>

          {/* Publication 2 */}
          <div className='mb-6'>
            <h4 className='font-semibold text-xl'>
              <a
                href='https://www.sciencedirect.com/science/article/abs/pii/S0957417424020773'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-500 hover:text-blue-400'
              >
                Adaptive and Automatic Aerial Image Restoration Pipeline
                Leveraging Pre-Trained Image Restorer with Lightweight Fully
                Convolutional Network
              </a>
            </h4>
            <p className='italic text-sm mb-2'>
              <span className='font-bold'>Authors:</span> Md Yearat Hossain, Md
              Mahbub Hasan Rakib, Shafayet Rajit, Ifran Rahman Nijhum, Rashedur
              M Rahman
            </p>
            <p className='text-md'>
              <span className='font-bold'>Journal:</span> Expert Systems with
              Applications, Volume: 259, Pages: 125210, Publisher: Pergamon
            </p>
            <p className='text-md'>
              <span className='font-bold'>Publication Date:</span> 1st January
              2025
            </p>
          </div>

          <div className='mb-6'>
            <h4 className='font-semibold text-xl'>
              On Improving Solar Forecasts with Enhanced IR Imaging and CNNs
            </h4>
            <p className='italic text-sm mb-2'>
              <span className='font-bold'>Authors:</span> Ifran Rahman Nijhum,
              Md Yearat Hossain, Md Mahbub Hasan Rakib, Soumyabrata Dev
            </p>
            <p className='text-md'>
              <span className='font-bold'>Conference:</span> 26th Irish Machine
              Vision and Image Processing Conference, University of Limerick,
              2024
            </p>
          </div>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-xl'>
            <a
              href='https://ieeexplore.ieee.org/abstract/document/10642288'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-500 hover:text-blue-400'
            >
              Enhancing Intra-Hour Solar Irradiance Estimation Through Knowledge
              Distillation and Infrared Sky Images
            </a>
          </h4>
          <p className='italic text-sm mb-2'>
            <span className='font-bold'>Authors:</span> Ifran Rahman Nijhum,
            Dewansh Kaloni, Paul Kenny, Soumyabrata Dev
          </p>
          <p className='text-md'>
            <span className='font-bold'>Conference:</span> 2024 IEEE
            International Geoscience and Remote Sensing Symposium, 7 - 12 July
            2024, Athens, Greece
            <span className='block'>
              <a
                href='https://github.com/ifran-rahman/Solar_Estimation_KD'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-500 hover:text-blue-400'
              >
                Github Repository
              </a>{" "}
              |{" "}
              <a
                href='https://soumyabratadev.wordpress.com/wp-content/uploads/2024/05/nijhum2024.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-500 hover:text-blue-400'
              >
                Slide
              </a>
            </span>
          </p>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-xl'>
            <a
              href='https://ieeexplore.ieee.org/abstract/document/10512911'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-500 hover:text-blue-400'
            >
              Intra-Hour Solar Irradiance Estimation Using Infrared Sky Images
              and MobileNetV2-Based CNN Regression
            </a>
          </h4>
          <p className='italic text-sm mb-2'>
            <span className='font-bold'>Authors:</span> Ifran Rahman Nijhum,
            Paul Kenny, Soumyabrata Dev
          </p>
          <p className='text-md'>
            <span className='font-bold'>Conference:</span> 2023 IEEE 7th
            Conference on Energy Internet and Energy System Integration (EI2)
            15-18 Dec. 2023
            <span className='block'>
              <a
                href='https://github.com/ifran-rahman/solar-irradiance-estimation-dl'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-500 hover:text-blue-400'
              >
                Github Repository
              </a>
            </span>
          </p>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-xl'>
            <a
              href='https://www.sciencedirect.com/science/article/abs/pii/S0957417424020773'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-500 hover:text-blue-400'
            >
              Heartisan: An Incremental Learning Based Arrhythmia Detection,
              Data Collection, and Monitoring System
            </a>
          </h4>
          <p className='italic text-sm mb-2'>
            <span className='font-bold'>Authors:</span> Ifran Rahman Nijhum,
            Anan Ghosh, Hasibul Hassan, Yearat Hossain, Tanzilur Rahman
          </p>
          <p className='text-md'>
            <span className='font-bold'>Conference:</span> IEEE 36th
            International Symposium on Computer Based Medical Systems (CBMS)
            2023, L&apos;Aquila, Italy, 22nd - 24th June, 2023.
            <span className='block'>
              <a
                href='https://github.com/ifran-rahman/Heartisan'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-500 hover:text-blue-400'
              >
                Github Repository
              </a>
            </span>
          </p>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-xl'>
            <a
              href='https://www.sciencedirect.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-500 hover:text-blue-400'
            >
              Enhancing Image Quality of Aging Smartphones Using Multi-Scale
              Residual Feature Fusion Network
            </a>
          </h4>
          <p className='italic text-sm mb-2'>
            <span className='font-bold'>Authors:</span> M. Y. Hossain, M. M. H.
            Rakib, I. R. Nijhum and T. Rahman.
          </p>
          <p className='text-md'>
            <span className='font-bold'>Conference:</span> The Third
            International Conference on Intelligent Systems and Patterns
            Recognition, Hammamet, Tunisia, 11th – 13th May 2023.
          </p>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-xl'>
            <a
              href='https://www.sciencedirect.com/science/article/pii/S2772662223001236'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-500 hover:text-blue-400'
            >
              An end-to-end pollution analysis and detection system using
              artificial intelligence and object detection algorithms
            </a>
          </h4>
          <ul className='list-disc pl-6 text-md mt-1'>
            <li>
              Comprehensive analysis of visual pollution on state of the art
              object detection models
            </li>
            <li>
              End to end incremental learning based data collection and
              analytics system for visual pollution.
            </li>
          </ul>
          <p className='text-md'>
            <span className='font-bold'>Journal:</span> Decision Analytics
            Journal | Elsavier
          </p>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-xl'>
            <a
              href='https://ieeexplore.ieee.org/document/9666654'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-500 hover:text-blue-400'
            >
              Visual Pollution Detection Using Google Street View and YOLO
            </a>
          </h4>
          <p className='italic text-sm mb-2'>
            <span className='font-bold'>Authors:</span> Yearat Hossain, Ifran
            Rahman Nijhum, Abu Adnan Sadi, Md. Tazin Morshed Shad, Rashedur M.
            Rahman
          </p>
          <p className='text-md'>
            <span className='font-bold'>Conference:</span> IEEE 12th Annual
            Ubiquitous Computing, Electronics & Mobile Communication Conference
            (UEMCON)
          </p>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Projects</h3>

          {/* Project 1 */}
          <div className='flex items-center mb-6'>
            <Image
              src='/project_1.png'
              alt='Data Secured Biomedical Software'
              width={100}
              height={100}
              className='w-24 h-24 object-cover rounded-lg mr-4 cursor-pointer'
              onClick={() => {
                setModalImageSrc("/project_1.png");
                setIsModalOpen(true);
              }}
            />
            <div>
              <h4 className='font-semibold text-xl'>
                Data Secured Biomedical Software
              </h4>
              <p className='text-md'>
                Working on building the federated learning and machine learning
                pipeline.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className='flex items-center mb-6'>
            <Image
              src='/project_2.png'
              alt='Dynamic Rectification Knowledge Distillation Method'
              width={100}
              height={100}
              className='w-24 h-24 object-cover rounded-lg mr-4 cursor-pointer'
              onClick={() => {
                setModalImageSrc("/project_2.png");
                setIsModalOpen(true);
              }}
            />
            <div>
              <h4 className='font-semibold text-xl'>
                Dynamic Rectification Knowledge Distillation Method for CRNN
                models
              </h4>
              <p className='text-md'>
                Improved OCR model using a novel knowledge distillation method.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className='flex items-center mb-6'>
            <Image
              src='/project_3.png'
              alt='Customer Sales Data Analysis'
              width={100}
              height={100}
              className='w-24 h-24 object-cover rounded-lg mr-4 cursor-pointer'
              onClick={() => {
                setModalImageSrc("/project_3.png");
                setIsModalOpen(true);
              }}
            />
            <div>
              <h4 className='font-semibold text-xl'>
                Customer Sales Data Analysis and Revenue Prediction
              </h4>
              <p className='text-md'>
                Customer data analysis using Google Looker Studio (Data Studio).
                Deployed revenue prediction model.
                <span className='block'>
                  <a
                    href='https://example.com/deployed-site'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline text-blue-500 hover:text-blue-400'
                  >
                    Deployed Site
                  </a>{" "}
                  |{" "}
                  <a
                    href='https://example.com/dashboard'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline text-blue-500 hover:text-blue-400'
                  >
                    Dashboard
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className='flex items-center mb-6'>
            <Image
              src='/project_4.png'
              alt='Janao: Public Harassment & Crime Reporting System'
              width={100}
              height={100}
              className='w-24 h-24 object-cover rounded-lg mr-4 cursor-pointer'
              onClick={() => {
                setModalImageSrc("/project_4.png");
                setIsModalOpen(true);
              }}
            />
            <div>
              <h4 className='font-semibold text-xl'>
                Janao: Public Harassment & Crime Reporting System
              </h4>
              <p className='text-md'>
                - Users can send image, location, and information of a crime
                scene immediately to the law enforcement agency.
                <br />- Law enforcement agency has an application to receive and
                view the sent crimes and details.
                <a
                  href='https://github.com/example/janao'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline text-blue-500 hover:text-blue-400 block mt-1'
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className='flex items-center'>
            <Image
              src='/project_5.png'
              alt='Document Management Service'
              width={100}
              height={100}
              className='w-24 h-24 object-cover rounded-lg mr-4 cursor-pointer'
              onClick={() => {
                setModalImageSrc("/project_5.png");
                setIsModalOpen(true);
              }}
            />
            <div>
              <h4 className='font-semibold text-xl'>
                Document Management Service
              </h4>
              <p className='text-md'>
                A mobile application to digitize and manage documents and files
                of an organization.
                <ul className='list-disc pl-6 text-md mt-1'>
                  <li>View all employees&apos; public profiles and files</li>
                  <li>Private repository for confidential files</li>
                  <li>Upload and capture document images and other files</li>
                </ul>
                <a
                  href='https://github.com/example/document-management'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline text-blue-500 hover:text-blue-400 block mt-1'
                >
                  GitHub Repository
                </a>
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
