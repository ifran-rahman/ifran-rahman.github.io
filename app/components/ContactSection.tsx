export default function ContactSection() {
  return (
    <section id='contact' className='section p-10 bg-gray-900 text-white'>
      <div className='container mx-auto text-center md:text-left'>
        <h2 className='text-3xl font-bold mb-4'>Contact</h2>
        <p className='text-lg mb-2'>
          Email:{" "}
          <a
            href='mailto:ifran.nijhum@ucdconnect.ie'
            className='text-blue-600 hover:underline'
          >
            ifran.nijhum@ucdconnect.ie
          </a>
        </p>
        <p className='text-lg'>
          Personal Email:{" "}
          <a
            href='mailto:ifranrahmannijhum@gmail.com'
            className='text-blue-600 hover:underline'
          >
            ifranrahmannijhum@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
