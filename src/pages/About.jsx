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
            <p className="mb-2">Since 2023 I been living in Zürch, Switzerland, and working as a researcher at the
            University of Zürich.</p>
            <p className="mb-2">
              My research focuses on decentralised identities and blockchain.
              Particularly, I am investigating the reasons behind slow adoption of the decentralised technologies,
              by looking not only at the technological limitations, but also social.
            </p>
            <p className="mb-2">
              In a spare time I am a photographer. Have a look at the <a href="https://dariaschummphoto.netlify.app/" target="_blank">collection of my works</a>.
            </p>
          </div>

          <div className="col-span-2">
            <a onClick={() => navigate('/experience')} className="inline-flex items-center py-2.5 font-montserrat font-normal text-current hover:text-gray-500">
              Find out more
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}