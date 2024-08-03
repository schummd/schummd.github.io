import { useNavigate } from 'react-router-dom';
import photo from '../assets/profile_picture.png';

export default function About() {
  const navigate = useNavigate();
  return(
    <div class="flex flex-col items-center justify-center h-full md:h-screen">
      <div class="container w-3/5 my-28">

        <div class="grid md:gap-x-6 gap-y-1 font-montserrat">

          <div class="col-span-2 md:col-span-1 flex items-center">

            <div class="grid">
              <h1 class="font-semibold text-3xl">About Me</h1>
              <p class="mt-4">schumm@ifi.uzh.ch</p>
            </div>

          </div>

          <div class="col-span-2 md:col-span-1 flex justify-end">
            <img class="h-40" src={photo} alt="Profile Picture"/>
          </div>

          <div class="col-span-2 mt-8">
            <p class="mb-2">My name is Daria Schumm.</p>
            <p class="mb-2">Since 2023 I been living in Zürch, Switzerland, and working as a researcher at the
            University of Zürich.</p>
            <p class="mb-2">
              My research focuses on decentralised identities and blockchain.
              Particularly, I am investigating the reasons behind slow adoption of the decentralised technologies,
              by looking not only at the technological limitations, but also social.
            </p>
          </div>

          <div class="col-span-2">
            <a onClick={() => navigate('/experience')} class="inline-flex items-center py-2.5 font-montserrat font-normal text-current hover:text-gray-500">
              Find out more
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}