export default function ServiceSection() {
  return (
    <section id='service' className='section p-8 bg-gray-900 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center md:text-left'>
          Service
        </h2>

        {/* Coordinator Role */}
        <div className='mb-6'>
          <h3 className='font-bold text-xl'>Coordinator</h3>
          <p className='italic mb-2'>
            Team Research & Development, NSU ACM Student Chapter
          </p>
          <p className='text-sm mb-4'>Jan 2020 - Jan 2022</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>Instructed an object detection research project.</li>
            <li>
              Managed an international programming contest “Semi-code” and
              Inter-University Hackathon &quot;HackNSU Season 3”.
            </li>
            <li>
              Planned and arranged intra-hackathons, programming contests, and
              team meetings.
            </li>
          </ul>
        </div>

        {/* Sub Executive Role */}
        <div>
          <h3 className='font-bold text-xl'>Sub Executive</h3>
          <p className='italic mb-2'>Team Provision, NSU ACM Student Chapter</p>
          <p className='text-sm mb-4'>Nov 2020 - Feb 2022</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>One of the leads of a team of nearly two hundred members.</li>
            <li>
              Worked in arranging, planning contests, recruitment events, and
              maintaining order and discipline in the team.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
