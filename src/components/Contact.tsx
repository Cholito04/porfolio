import Linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";

function Contact() {
  return (
    <div id="Contact" className="text-white py-16 w-full">
      <div className="mx-auto w-full text-center lg:text-6xl md:text-5xl text-4xl font-bold p-16">
        <h1>Find Me</h1>
      </div>

      <div className=" max-w-220 mx-auto flex p-10 items-center justify-center w-full md:gap-40 gap-8 bg-sky-950 rounded-4xl shadow-2xl">
        <a
          href="https://github.com/Cholito04/MusicRecommender"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src={github}
            alt="github"
            className="w-16 h-16 md:hover:scale-120 duration-300 bg-white rounded-full ml-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mauricio-mancera-bohorquez-8a7166388/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src={Linkedin}
            alt="LinkedIn"
            className="w-16 h-16 md:hover:scale-120 duration-300"
          />
        </a>
        <a
          href="mailto:mauriciomancerab@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-sky-500 transition bg-neutral-700 p-3 rounded-full md:hover:scale-120 duration-300"
        >
          Send Email
        </a>
      </div>
    </div>
  );
}
export default Contact;
