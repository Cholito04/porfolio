import { FaGithubSquare } from "react-icons/fa";

function Projects() {
  return (
    <div
      id="Projects"
      className=" w-full py-16 px-4 text-white bg-repeat-round "
    >
      <div className="max-w-310 -mt-10 w-full mx-auto text-center justify-center lg:px-1 px-15">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:py-4">
          Projects
        </h1>
        <div className="w-full py-4 max-w-310 mx-auto grid lg:grid-cols-3 gap-8">
          {/* project 1 card */}

          <div className="bg-sky-950 w-full shadow-xl flex flex-col p-4 my-4 rounded-2xl md:hover:scale-105 duration-300">
            <h2 className="text-3xl font-bold text-center py-8">
              First project
            </h2>

            <p className="text-center text-xl font-light">
              some things that i can do
            </p>

            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">Spotify Web API</p>
              <p className="py-2 border-b mx-8">Frontend: React+Tailwind</p>
              <p className="py-2 border-b mx-8">BackEnd: Python+FastAPI</p>
              <p className="py-2 border-b mx-8">Neural Network</p>
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
                className="h-[60-px] px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
              >
                Demo
              </a>
            </div>
          </div>

          {/* project 2 card */}
          <div className=" w-full shadow-xl bg-neutral-800 flex flex-col p-4 md:my-0 my-8 rounded-2xl md:hover:scale-105 duration-300">
            <h2 className="text-3xl font-bold text-center py-8">
              Spotify Song Recommender
            </h2>

            <p className="text-center text-xl font-light">
              Recommend song based on a user's playlist using a simple neural
              network.
            </p>

            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">Spotify Web API</p>
              <p className="py-2 border-b mx-8">Frontend: React+Tailwind</p>
              <p className="py-2 border-b mx-8">BackEnd: Python+FastAPI</p>
              <p className="py-2 border-b mx-8">Neural Network</p>
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
            <h2 className="text-3xl font-bold text-center py-8">
              Third project
            </h2>

            <p className="text-center text-xl font-light">
              some things that i can do
            </p>

            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">Spotify Web API</p>
              <p className="py-2 border-b mx-8">Frontend: React+Tailwind</p>
              <p className="py-2 border-b mx-8">BackEnd: Python+FastAPI</p>
              <p className="py-2 border-b mx-8">Neural Network</p>
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
                className="h-[60-px] px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
