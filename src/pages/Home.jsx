import { useNavigate } from 'react-router-dom';
import photo from '../assets/profile_picture.png';
import resume from '../assets/CV.pdf';
import noAI from '../assets/no-ai-icon-08.png';
// import noAI2 from '../assets/noAI.png';

export default function Home() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col items-center justify-center h-full w-screen md:h-screen">
      <div className="container w-4/5 md:w-3/5 my-28">
        <div className="grid md:gap-x-6 gap-y-1 font-montserrat">

          <div className="flex items-center col-span-2 md:col-span-1 justify-start">
            <div className="grid">
              <h1 className="font-medium text-3xl">Daria Schumm</h1>
              <p className="my-4">schumm@ifi.uzh.ch</p>
            </div>
          </div>

          <div className="flex col-span-2 md:col-span-1 justify-start md:justify-end">
            <img className="h-40" src={photo} alt="Profile Picture"/>
          </div>

          <div className="col-span-2 mt-8">
            {/* <p className="mb-2">My name is Daria Schumm.</p> */}
            <p className="mb-2">
              Since 2023 I have been a part of the Communications Systems Group at
              the Department of Informatics, University of Zürich.</p>
            <p className="mb-2">
              My research focuses on understanding and evaluating complex technical
              systems, particularly decentralized and digital identities, by examining
              the relationship between their conceptual models and their implemented behaviour.
            </p>
            <p className="mb-2">
              I study how responsibilities are distributed within systems, how
              requirements are specified and assessed, and how abstract roles are
              operationalised in system architectures of complex software systems.
            </p>
            <p className="mb-2">
              I am particularly interested in cases where systems promise properties
              such as security, trust, or privacy without providing corresponding
              technical guarantees.
              Through this work, I identify recurring points at which conceptual
              models breaks down when confronted with implementation realities.
            </p>
            {/* <p className="mb-2">
              In a spare time I am a photographer. Have a look at the <a href="https://dariaschummphoto.netlify.app/" target="_blank">collection of my works</a>.
            </p> */}
          </div>

          <div className="col-span-2 mt-4">
            <p className="hidden md:block mb-2">
              <b>Keywords:</b> Data Analytics, Requirements Engineering, Decentralized Identity, Blockchain
            </p>
            <ul className='list-disc list-inside md:hidden mb-2'>
              <p><b>Keywords:</b></p>
              <li>Blockchain</li>
              <li>Decentralized Identity</li>
              <li>Requirements engineering</li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>

        <div className="font-montserrat flex flex-row items-center justify-between mt-2">

            <div className="col-span-2 flex flex-col md:flex-row md:gap-5">
              <a href={resume} target='_black' className="md:py-2.5 font-semibold text-indigo-500 cursor-pointer">
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
              </a>

              <a onClick={() => navigate('/publications')} className="md:py-2.5 font-semibold text-indigo-500 cursor-pointer">
                Publications
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </a>

              <a href="https://scholar.google.com/citations?user=lhm6SNsAAAAJ&hl=en" target="_blank" className="md:py-2.5 font-semibold text-indigo-500 cursor-pointer">
                Google Scholar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </a>
            </div>

            <img className="size-12 inline-block ml-1" src={noAI} alt="no AI use"/>
            {/* <img className="inline-block ml-1 h-10" src={noAI2} alt="no AI use"/> */}
            {/* <a href="https://ai-free.io" target="_blank" rel="noopener noreferrer" title="Learn more about the AI-Free label at ai-free.io">
              <img src="https://ai-free.io/AI-free.io-TEXT.png" width="50" alt="ai-free.io text label" />
            </a> */}
          </div>
      </div>
    </div>

    // <div className="flex flex-col items-center justify-center h-screen w-screen">
    //   <div className="container w-4/5 md:w-3/5">
    //       <h1 className="font-montserrat font-semibold text-3xl md:text-4xl mb-12">
    //         I am Daria, a researcher developing and applying analytical
    //         frameworks to complex technical systems.
    //       </h1>
    //       <p className="font-montserrat text-xl mb-12">
    //         Currently I hold a position at the University of Zürich.
    //       </p>
    //       <div className="flex flex-col w-aut">
    //       <a onClick={() => navigate('/experience')} className="hidden md:inline-flex items-center py-2.5 font-montserrat font-normal text-xl text-current hover:text-indigo-500 cursor-pointer">
    //         Find out more
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block ml-1.5 mt-1">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  )
}
