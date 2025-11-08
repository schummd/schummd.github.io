import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="container w-4/5 md:w-3/5">
          <h1 className="font-montserrat font-semibold text-4xl mb-12">
            I am Daria, a computer science researcher and front-end developer.
          </h1>
          <p className="font-montserrat text-xl mb-12">
            Currently I hold a position at the University of Zürich.
          </p>
          <div className="flex flex-col w-aut">
          <a onClick={() => navigate('/works')} className="hidden md:inline-flex items-center py-2.5 font-montserrat font-normal text-xl text-current hover:text-gray-500 cursor-pointer">
            Find out more
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
