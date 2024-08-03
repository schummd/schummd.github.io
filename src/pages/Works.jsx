import { useNavigate } from 'react-router-dom';

export default function Works() {
  const navigate = useNavigate();
  return(
    <div class="flex flex-col items-center justify-center h-full md:h-screen">
      <div class="container w-3/5 my-28">
        <h1 class="font-montserrat font-medium text-3xl mb-12">Works</h1>

        <div class="grid md:gap-x-6 gap-y-1 font-montserrat">

          <div class="col-span-2 md:col-span-1 mb-2">
            <img class="h-58 " src="public/iteratio.png" alt="iteratio website"/>
          </div>
          <div class="col-span-2 md:col-span-1">
            <div class="grid col-span-2 md:col-span-1 gap-1">
              <div>
                <a href="https://iteratio.netlify.app" class="font-semibold text-indigo-500" target="_blank">
                  Iteratio
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
            <img class="h-58 " src="public/photography.png" alt="iteratio website"/>
          </div>
          <div class="col-span-2 md:col-span-1">
            <div class="grid col-span-2 md:col-span-1 gap-1">
              <div>
                <a href="https://dariaschumm.netlify.app" class="font-semibold text-indigo-500" target="_blank">
                  Schumm Photography
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
            <img class="h-58 " src="public/resume.png" alt="iteratio website"/>
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