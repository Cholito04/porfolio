import C from "../assets/C.png";
import Python from "../assets/Python.png";
import JS from "../assets/JavaScript.png";
import React from "../assets/react.svg";
import HTML from "../assets/HTML5.png";
import TailWind from "../assets/Tailwind CSS.png";
import FastAPI from "../assets/FastAPI.png";
import Git from "../assets/Git.png";

function Skills() {
  return (
    <div id="Skills" className=" py-32 lg:px-50 px-4 w-full text-white">
      <div className=" mx-auto text-center flex flex-col w-full">
        <h1 className=" lg:text-6xl md:text-5xl text-4xl font-bold py-4">
          Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12 bg-neutral-800 p-10 rounded-4xl shadow-2xl">
          <Skill
            icon={<img src={Python} alt="python" className="w-16 h-16" />}
            label="Python"
          />
          <Skill
            icon={<img src={JS} alt="javascrpit" className="w-16 h-16" />}
            label="JavaScript"
          />
          <Skill
            icon={<img src={React} alt="React" className="w-16 h-16" />}
            label="React"
          />
          <Skill
            icon={<img src={HTML} alt="HTML5" className="w-16 h-16" />}
            label="HTML5"
          />
          <Skill
            icon={<img src={TailWind} alt="tailwind" className="w-16 h-16" />}
            label="TailWind CSS"
          />
          <Skill
            icon={<img src={FastAPI} alt="FastAPI" className="w-16 h-16" />}
            label="FastAPI"
          />
          <Skill
            icon={<img src={C} alt="C" className="w-16 h-16" />}
            label="C"
          />
          <Skill
            icon={<img src={Git} alt="Git" className="w-16 h-16" />}
            label="Git"
          />
        </div>
      </div>
    </div>
  );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      className="flex flex-col items-center gap-2
                    md:hover:scale-110 transition duration-300"
    >
      {icon}
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}

export default Skills;
