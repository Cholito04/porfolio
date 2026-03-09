import { FaGithubSquare } from "react-icons/fa";

function Projects() {
  return (
    <div
      id="Projects"
      className=" w-full py-16 px-4 text-white bg-repeat-round "
    >
      <div className="max-w-310 -mt-10 w-full mx-auto text-center justify-center lg:px-1">
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold tracking-tight md:py-4">
          Projects
        </h1>
        <div className="w-full py-10 lg:max-w-310 max-w-130 mx-auto grid lg:grid-cols-3 gap-8">
          {/* project 1 card */}

          <div className="bg-sky-950 w-full shadow-xl flex flex-col p-4 my-4 rounded-2xl md:hover:scale-105 duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-center py-8">
              This Portfolio!
            </h2>

            <p className="text-center text-xl font-light">
              Built a responsive personal portfolio to showcase projects and
              skills. Designed and deployed end to end using React, Tailwind,
              and Vercel.
            </p>

            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">
                Built using react and tailwind
              </p>
              <p className="py-2 border-b mx-8">hosted on vercel</p>
              <p className="py-2 border-b mx-8">
                custom domain: mauriciomancera.dev
              </p>
              <p className="py-2 border-b mx-8">
                Responsive across mobile and desktop
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://github.com/Cholito04/porfolio"
                target="_blank"
                className="flex items-center justify-center"
              >
                <FaGithubSquare
                  className="hover:scale-120 duration-300"
                  size={60}
                />
              </a>
              <a
                href="https://mauriciomancera.dev"
                className="h-[60-px] px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
              >
                Demo
              </a>
            </div>
          </div>

          {/* project 2 card */}
          <div className=" w-full shadow-xl bg-neutral-800 flex flex-col p-4 md:my-0 my-8 rounded-2xl md:hover:scale-105 duration-300">
            <h2 className=" lg:text-3xl text-2xl font-bold text-center py-8">
              Spotify Song Recommender
            </h2>

            <p className="text-center text-xl font-light">
              Full stack recommendation engine that analyzes a user's Spotify
              playlist and surfaces similar tracks using a neural network
              trained on audio features.
            </p>

            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">
                Spotify Web API + Custom Neural Network
              </p>
              <p className="py-2 border-b mx-8">Frontend: React+Tailwind</p>
              <p className="py-2 border-b mx-8">BackEnd: Python+FastAPI</p>
              <p className="py-2 border-b mx-8">
                Frontend on vercel, backend on render
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://github.com/Cholito04/MusicRecommender"
                target="_blank"
                className="flex items-center justify-center"
              >
                <FaGithubSquare
                  className="hover:scale-120 duration-300"
                  size={60}
                />
              </a>
              <a
                href="#"
                className="h-[60-px] px-6 py-3 rounded-md bg-neutral-700 hover:bg-neutral-500 transition"
              >
                Demo
              </a>
            </div>
          </div>

          {/* project 3 card */}
          <div className=" w-full bg-sky-950 shadow-xl flex flex-col p-4 my-4 rounded-2xl md:hover:scale-105 duration-300">
            <h2 className=" lg:text-3xl text-2xl font-bold text-center py-8">
              Coming Soon - Flipped
            </h2>

            <p className="text-center text-xl font-light">
              Inventory management system for resellers to track purchased and
              sold items, monitor profit margins, and identify top performing
              products through data visualizations.
            </p>

            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">PostgresSQL: database</p>
              <p className="py-2 border-b mx-8">Frontend: React+Tailwind</p>
              <p className="py-2 border-b mx-8">BackEnd: Python+FastAPI </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 opacity-40">
              <FaGithubSquare size={60} />
              <span className="px-6 py-3 rounded-md bg-neutral-800">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
