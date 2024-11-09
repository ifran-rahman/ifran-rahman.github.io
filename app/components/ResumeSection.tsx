// import DownloadButton from './DownloadButton';

export default function ResumeSection() {
  return (
    <section id='resume' className='section p-8 bg-gray-900 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center md:text-left'>
          Resume
        </h2>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-4'>Education</h3>
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>
              Doctor of Philosophy - PhD
            </h4>
            <p className='text-sm italic mb-2'>
              University College Dublin, Ireland, 2023 - Present
            </p>
            <ul className='list-disc pl-6 text-md'>
              <li>
                Research Topic: Accurate Forecasting of Photovoltaic Potential
                for Efficient Integration into Residential Homes
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-xl'>
              Bachelor of Science in Computer Science and Engineering
            </h4>
            <p className='text-sm italic mb-2'>
              North South University, Bangladesh, 2018 - 2022
            </p>
            <ul className='list-disc pl-6 text-md'>
              <li>
                Research thesis entitled &quot;Implementing Different Knowledge
                Distillation methods on Bangla OCR&quot;
              </li>
              <li>Received Best Poster Award</li>
            </ul>
          </div>
        </div>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-4'>Work Experience</h3>

          {/* Lecturer */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>
              Lecturer, Department of Computer Science & Engineering
            </h4>
            <p className='text-sm italic mb-2'>
              RTM Al-Kabir Technical University, Bangladesh | Feb 2023 - Present
            </p>
            <ul className='list-disc pl-6 text-md'>
              <li>
                Instructing undergraduate courses in Computer Science and
                Engineering.
              </li>
              <li>Mentoring students and guiding projects.</li>
            </ul>
          </div>

          {/* Research Assistant */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>
              Research Assistant, TnR Lab
            </h4>
            <p className='text-sm italic mb-2'>
              North South University, Bangladesh | Jan 2023 - Present
            </p>
            <ul className='list-disc pl-6 text-md'>
              <li>Building a data-secured machine learning pipeline.</li>
              <li>Assisting in research projects and data collection.</li>
            </ul>
          </div>

          {/* Intern */}
          <div>
            <h4 className='font-semibold text-xl'>
              Intern, Data Science Department
            </h4>
            <p className='text-sm italic mb-2'>
              Cramstack Limited, Bangladesh | Nov 2021 - May 2022
            </p>
            <ul className='list-disc pl-6 text-md'>
              <li>
                Research and writing documentation on text summarizers, OCR
                APIs.
              </li>
              <li>
                Data cleaning, processing, and visualization using BI tools.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-4'>Skills</h3>

          {/* Programming */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>Programming</h4>
            <p className='text-md'>
              Python, Java (Familiar with: C, C++, Arduino)
            </p>
          </div>

          {/* Frameworks */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>Frameworks</h4>
            <p className='text-md'>
              Pytorch, Tensorflow, Keras, FastAPI, Flower for Federated
              Learning, Native Android (Java), Flutter
            </p>
          </div>

          {/* Database */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>Database</h4>
            <p className='text-md'>MySQL, Firebase</p>
          </div>

          {/* Version Control and Tools */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>Version Control and Tools</h4>
            <p className='text-md'>Git, Github, Bitbucket</p>
          </div>

          {/* Data Visualization */}
          <div className='mb-4'>
            <h4 className='font-semibold text-xl'>Data Visualization</h4>
            <p className='text-md'>
              Google Data Studio, matplotlib, seaborn, plotly
            </p>
          </div>

          {/* Presentation */}
          <div>
            <h4 className='font-semibold text-xl'>Presentation</h4>
            <p className='text-md'>PowerPoint, Word, Canva</p>
          </div>
        </div>
      </div>
    </section>
  );
}
