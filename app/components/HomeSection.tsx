import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id='home'
      className='section pt-20 p-8 bg-gray-900 flex items-center justify-center'
    >
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12'>
        {/* Left Column - Circular Photo */}
        <div className='flex justify-center md:justify-start w-full md:w-auto'>
          <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg'>
            <Image
              src='/profile.png' // Add your image in the public folder with this filename
              alt='Profile Photo'
              width={160}
              height={160}
              className='object-cover'
            />
          </div>
        </div>
        <div className='text-center md:text-left'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
            Ifran Rahman Nijhum
          </h2>
          <p className='text-md mb-6 text-gray-300'>
            I am currently a PhD student at University College Dublin in
            Ireland, specializing in solar power forecasting and estimation
            using artificial intelligence techniques. I work at the{" "}
            <a className='text-blue-700' href='https://soumyabrata.dev/theia/'>
              THEIA lab
            </a>{" "}
            at UCD. My research focuses on efficient and improved solar
            forecasting using computer vision and efficient ml. I have been
            working on leveraging infrared imaging and model compression
            techniques to achieve better performance and real-time photovoltaic
            forecasting capabilities. Previously, I served as a Lecturer at{" "}
            <a className='text-blue-700' href='https://www.rtm-aktu.edu.bd/'>
              RTM Al-Kabir Technical University
            </a>{" "}
            and worked as a Research Assistant at{" "}
            <a
              className='text-blue-700'
              href='https://sites.google.com/site/tanzilctg/Home'
            >
              TnR Lab
            </a>
            , North South University. My academic and research journey began
            with a Bachelor of Science degree in Computer Science and
            Engineering from{" "}
            <a className='text-blue-700' href='http://www.northsouth.edu/'>
              North South University
            </a>
            , Bangladesh. Apart from academics, I have participated in many
            contests. I was highly engaged in co-curricular activities. During
            the last two years of my bachelor&apos;s, I served as the
            coordinator of Team R&D and one of the Sub-executives of Team
            Provision at{" "}
            <a className='text-blue-700' href='https://nsusc.acm.org/home.html'>
              NSU ACM SC
            </a>
            . In my free time, I love watching movies, series, traveling and
            taking photos. I like to try out new recipes from time to time as
            well!
          </p>

          <div className='flex gap-4 justify-center md:justify-start'>
            <a
              href='https://www.linkedin.com/in/ifran-rahman-nijhum-1421b8179/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 ease-out outline outline-1 outline-blue-400'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/ifran-rahman'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 ease-out outline outline-1 outline-blue-400'
            >
              GitHub
            </a>
            <a
              href='https://www.researchgate.net/profile/Ifran_Rahman'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 ease-out outline outline-1 outline-blue-400'
            >
              Researchgate
            </a>
            <a
              href='https://medium.com/@ifranrahmannijhum-1215'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 ease-out outline outline-1 outline-blue-400'
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
