// import { useNavigate } from 'react-router-dom';

export default function Education() {
  // const navigate = useNavigate();
  return(
    <div className="flex flex-col items-center justify-center h-full w-screen">
      <div className="container w-4/5 md:w-3/5 my-28">
        <h1 className="font-montserrat font-medium text-3xl my-12">Education</h1>

        <div className="grid md:gap-x-6 gap-y-1 font-montserrat">
          {/* UC */}
          <div className="col-span-2 md:col-span-1 mb-2">February 2025 - current</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Graduate Diploma in Psychological Science</h2></div>
              <div className="text-slate-500">University of Canterbury (Christchurch, New Zealand)</div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* UZH */}
          <div className="col-span-2 md:col-span-1 mb-2">July 2023 - current</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Doctor of Philosophy</h2></div>
              <div className="text-slate-500">University of Zürich (Zürich, Switzerland)</div>
              <div className="mt-2">
                Supervisor: Prof. Dr. Burkhard Stiller
              </div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* UNSW */}
          <div className="col-span-2 md:col-span-1 mb-2">Feb 2020 - Dec 2022</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Master of Information Technology</h2></div>
              <div className="text-slate-500">University of New South Wales (Sydney, Australia)</div>
              <div className="mt-2">Thesis: Efficient Credentials Revocation Using Cryptographic Accumulators</div>
              <div className="mt-2">Supervisor:  Prof. Dr. Hey-young Paik</div>
              <div className="mt-2">Award with Excellence</div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* Massey */}
          <div className="col-span-2 md:col-span-1 mb-2">Feb 2015 - Nov 2017</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Bachelor of Aviation Management</h2></div>
              <div className="text-slate-500">Massey University (Auckland, New Zealand)</div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* AU */}
          <div className="col-span-2 md:col-span-1 mb-2">Feb 2014 - Nov 2016</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Bachelor of Arts</h2></div>
              <div className="text-slate-500">University of Auckland (Auckland, New Zealand)</div>
              <div className="mt-2">
                Major in Philosophy, Politics and International Relations.
              </div>
            </div>
          </div>
          <div className="hidden col-span-2 border-b border-stone-300 my-4"/>

        </div>

      </div>
    </div>
  )
}