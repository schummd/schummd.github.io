import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="container w-4/5 md:w-3/5">
          <h1 className="font-montserrat font-semibold text-3xl md:text-4xl mb-12">
            I am Daria, a researcher developing and applying analytical
            frameworks to complex technical systems.
          </h1>
          <p className="font-montserrat text-xl mb-12">
            Currently I hold a position at the University of Zürich.
          </p>
          <div className="flex flex-col w-aut">
          <a onClick={() => navigate('/experience')} className="hidden md:inline-flex items-center py-2.5 font-montserrat font-normal text-xl text-current hover:text-indigo-500 cursor-pointer">
            Find out more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block ml-1.5 mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
