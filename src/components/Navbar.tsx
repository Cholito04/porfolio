import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed md:top-90 md:left-0 left-30 right-30 text-white backdrop-blur-md bg-sky-950/80 md:rounded-xl rounded-b-3xl md:w-3 md:h-64 h-15 ">
      <div className="flex md:flex-col justify-center gap-8 text-xl md:p-6 p-3">
        {" "}
        <Link
          to="Hero"
          smooth={true}
          duration={500}
          className=" hover:text-sky-500 cursor-pointer"
        >
          {" "}
          Home
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-sky-500"
        >
          {" "}
          Project
        </Link>
        <Link
          to="Skills"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-sky-500"
        >
          {" "}
          Skills
        </Link>
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-sky-500"
        >
          {" "}
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
