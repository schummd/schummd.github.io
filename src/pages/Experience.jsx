import { useNavigate } from 'react-router-dom';

export default function Experience() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col items-center justify-center h-full w-screen">
      <div className="container w-4/5 md:w-3/5 my-28">
        <h1 className="font-montserrat font-medium text-3xl mb-12">Experience</h1>

        <div className="grid md:gap-x-6 gap-y-1 font-montserrat">
          {/* freelance */}
          {/* <div className="col-span-2 md:col-span-1 mb-2">May 2023 - Current</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Front-End Developer</h2></div>
              <div className="text-slate-500">Worldwide</div>
              <div className="mt-2">
                Identifing and formulating user requirements user requirements, mapping to functional
                requirements for application design. Producing UX, UI, and design prototypes based
                on identified requirements.
              </div>
              <div className="mt-2">
                Developing websites using React, JavaScript and popular CSS frameworks,
                such as Material UI and Tailwindcss.
              </div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/> */}

          {/* UZH */}
          <div className="col-span-2 md:col-span-1 mb-2">July 2023 - Current</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Research Assistant</h2></div>
              <div className="text-slate-500">University of Zürich (Zürich, Switzerland)</div>
              <div className="mt-2">
                Working on a research project sponsored by the EU Horizon and in collaboration
                with companies such as STMicroelectronics, Collins Aerospace, and Trust Square.
                The project is addressing cybersecurity for IoT-enables environments though a
                multi-stakeholder sharing of threats and mitigations. Resulting in a project
                <a href="https://artwork.id" className="cursor-pointer" target="_blank"> Artwork.ID</a>,
                which offers capabilities to track artworks.
              </div>
              <div className="mt-2">
                Planning, developing, and editing of academic <a onClick={() => navigate('/publications')} className='cursor-pointer'>publications</a>.
              </div>
              <div className="mt-2">
                Peer reviewing publication submissions for:
                <ul className="font-montserrat list-disc list-inside">
                  <li>Journal of Information Processing & Management</li>
                  <li>IEEE Transactions on Network and Service Management</li>
                  <li>IEEE Journal of Social Computing</li>
                  <li>IEEE Journal of Communications and Networks</li>
                  <li>ACM Distributed Ledger Technologies Journal</li>
                  <li>Elsiver Journal of Information Security and Application</li>
                  <li>International Conference on Blockchain Computing and Applications (BCCA)</li>
                </ul>
              </div>
              <div className="mt-2">
                Supervising bachelor and master student theses and academic student projects.
                As of today, supervised a total of 8 bachelor and 6 master students.
              </div>
              <div className="mt-2">
                Teaching and providing support to a number of university courses, including:
                  <ul className="font-montserrat list-disc list-inside">
                    <li>Certificate of Advanced Studies in Blockchain</li>
                    <li>Protocols for Multimedia Communications</li>
                    <li>Blockchains and Overlay Networks</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* UNSW */}
          <div className="col-span-2 md:col-span-1 mb-2">Oct 2022 - Dec 2022</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Research Assistant</h2></div>
              <div className="text-slate-500">University of New South Wales (Sydney, Australia)</div>
              <div className="mt-2">
                Working on opportunities for blockchain technology in scientific
                data management and provenance data tracking, focusing on data
                storage with IPFS and Filecoin. Conducting literature review,
                academic paper writing, workshop for university community,
                developing smart contracts on Ethereum and software system with Filecoin.
              </div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* UNSW */}
          <div className="col-span-2 md:col-span-1 mb-2">May 2021 - Oct 2023</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Casual Academic</h2></div>
              <div className="text-slate-500">University of New South Wales (Sydney, Australia)</div>
              <div className="mt-2">
                Responsibilities include tutoring sessions, provide continuous help and
                support to students, assignments and exams marking. Courses involved in:
                <ul className="font-montserrat list-disc list-inside">
                  <li>Database Systems</li>
                  <li>Cryptocurrency and DLTs</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Securing Fixed and Wireless Networks</li>
                  <li>Software Architecture for Blockchain Applications</li>
                  <li>Engineering Project Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* Expocentric */}
          <div className="col-span-2 md:col-span-1 mb-2">Nov 2019 - Apr 2021</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Graphic Designer</h2></div>
              <div className="text-slate-500">Expocentric Pty Ltd (Sydney, Australia)</div>
              <div className="mt-2">
                Digital design, websites development & management (Wordpress and Shopify),
                SEO, keywords research, Google Ads, Facebook & Instagram advertisement,
                Amazon marketplace, graphic design.
              </div>
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* Yummylooks */}
          <div className="col-span-2 md:col-span-1 mb-2">Dec 2018 - July 2019</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Graphic Designer</h2></div>
              <div className="text-slate-500">Yummylooks Ltd (Kuala Lumpur, Malaysia)</div>
              <div className="mt-2">
                Websites management (Wordpress), SEO, keywords research, Google Ads,
                social media ads, graphic design, copywriting.
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-montserrat font-medium text-3xl my-14">Education</h2>

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
              {/* <div className="mt-2">
                Thesis on evaluating decentralized identity systems.
              </div> */}
            </div>
          </div>
          <div className="col-span-2 border-b border-stone-300 my-4"/>

          {/* UNSW */}
          <div className="col-span-2 md:col-span-1 mb-2">Feb 2020 - Dec 2022</div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid col-span-2 md:col-span-1 gap-1">
              <div><h2 className="font-semibold text-indigo-500">Master of Information Technology</h2></div>
              <div className="text-slate-500">University of New South Wales (Sydney, Australia)</div>
              <div className="mt-2">
                Award with Excellence.
              </div>
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
                Major in Philosophy, Politics and Interational Relations.
              </div>
            </div>
          </div>
          <div className="hidden col-span-2 border-b border-stone-300 my-4"/>

        </div>

      </div>
    </div>
  )
}