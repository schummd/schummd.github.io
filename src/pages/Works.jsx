import { useNavigate } from 'react-router-dom';
import iteratio from '../assets/iteratio.png';
import photography from '../assets/photography.png';
import resume from '../assets/resume.png';

export default function Works() {
  const navigate = useNavigate();
  return(
    <div class="flex flex-col items-center justify-center h-full w-screen">
      <div class="container w-4/5 md:w-3/5 my-28">
        <h1 class="font-montserrat font-medium text-3xl mb-12">Works</h1>

        <div class="grid md:gap-x-6 gap-y-1 font-montserrat">

          <div class="col-span-2 md:col-span-1 mb-2">
            <img class="h-58" src={iteratio} alt="iteratio website"/>
          </div>
          <div class="col-span-2 md:col-span-1">
            <div class="grid col-span-2 md:col-span-1 gap-1">
              <div>
                <a href="https://iteratio.netlify.app" class="font-semibold text-indigo-500" target="_blank">
                  Iteratio
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-4 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </div>
              <div class="text-slate-500">Javascript, React, Material UI</div>
              <div class="mt-2">
                A portfolio website for a senior UX/UI designer, emphasising services and previous works.
                The website includes various use cases display pages with media and hierarchical text,
                contact form, slider to showcase logos of the clients.
              </div>
            </div>
          </div>
          <div class="col-span-2 border-b-0 border-stone-300 my-4"/>

          <div class="col-span-2 md:col-span-1 mb-2">
            <img class="h-58 " src={photography} alt="iteratio website"/>
          </div>
          <div class="col-span-2 md:col-span-1">
            <div class="grid col-span-2 md:col-span-1 gap-1">
              <div>
                <a href="https://dariaschummphoto.netlify.app" class="font-semibold text-indigo-500" target="_blank">
                  Schumm Photography
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-4 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </div>
              <div class="text-slate-500">Javascript, React, Material UI</div>
              <div class="mt-2">
                A photography portfolio website to showcase aspirational photo art and love of travel.
                The website includes a gallary that is sorted into various collections, has a dedicated
                contact page with a form, and simple hero page.
              </div>
            </div>
          </div>
          <div class="col-span-2 border-b-0 border-stone-300 my-4"/>

          <div class="col-span-2 md:col-span-1 mb-2">
            <img class="h-58 " src={resume} alt="iteratio website"/>
          </div>
          <div class="col-span-2 md:col-span-1">
            <div class="grid col-span-2 md:col-span-1 gap-1">
              <div>
                <a onClick={() => navigate('/')} class="font-semibold text-indigo-500" target="_blank">
                  This website
                </a>
              </div>
              <div class="text-slate-500">Javascript, React, Vite, Tailwindcss</div>
              <div class="mt-2">
                This website is another example of the front-end works that was completed recently.
                It's purpose is to work as a resume, showcasing work experience, front-end portfolio,
                list of publications and about page.
              </div>
            </div>
          </div>
          <div class="col-span-2 border-b-0 border-stone-300 my-4"/>

        </div>

      </div>
    </div>
  )
}