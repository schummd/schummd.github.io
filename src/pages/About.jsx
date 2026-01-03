import { useNavigate } from 'react-router-dom';
import photo from '../assets/profile_picture.png';

export default function About() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col items-center justify-center h-full w-screen md:h-screen">
      <div className="container w-4/5 md:w-3/5 my-28">
        <div className="grid md:gap-x-6 gap-y-1 font-montserrat">
          <div className="flex items-center col-span-2 md:col-span-1 justify-start">
            <div className="grid">
              <h1 className="font-medium text-3xl">About Me</h1>
              <p className="my-4">schumm@ifi.uzh.ch</p>
            </div>
          </div>

          <div className="flex col-span-2 md:col-span-1 justify-start md:justify-end">
            <img className="h-40" src={photo} alt="Profile Picture"/>
          </div>

          <div className="col-span-2 mt-8">
            <p className="mb-2">My name is Daria Schumm.</p>
            <p className="mb-2">
              Since 2023 I have been living in Zürich, Switzerland, and working
              as a researcher at the Department of Informatics, University of Zürich.</p>
            <p className="mb-2">
              My research focuses on understanding and evaluating complex technical
              systems by examining the relationship between their conceptual models
              and their implemented behaviour.
            </p>
            <p className="mb-2">
              I study how responsibilities are distributed within systems, how
              requirements are specified and assessed, and how abstract roles are
              operationalised in technical architectures.
            </p>
            <p className="mb-2">
              I am particularly interested in cases where systems assert properties
              such as security, trust, or privacy without providing corresponding
              technical guarantees. Through this work, I identify recurring points
              at which conceptual models fracture when confronted with implementation
              realities.
            </p>
            {/* <p className="mb-2">
              In a spare time I am a photographer. Have a look at the <a href="https://dariaschummphoto.netlify.app/" target="_blank">collection of my works</a>.
            </p> */}
          </div>

          <div className="col-span-2 mt-4">
            <p className="hidden md:block mb-2 text-slate-500">
              <i>Keywords:</i> conceptual modelling, requirements engineering,
              software systems evaluation
            </p>
            <ul className='list-disc list-inside md:hidden mb-2 text-slate-500'>
              <p><i>Keywords:</i></p>
              <li>Conceptual modelling</li>
              <li>Requirements engineering</li>
              <li>Software systems evaluation</li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col md:flex-row md:gap-5">

            <a onClick={() => navigate('/experience')} className="pt-2.5 md:py-2.5 font-semibold text-indigo-500 cursor-pointer">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
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
        </div>
      </div>
    </div>
  )
}