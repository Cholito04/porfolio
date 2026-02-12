import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed top-90 left-0 text-white bg-sky-950 w-3">
      <div className="flex flex-col justify-center gap-8 text-xl p-6">
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
          to="Project"
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
      </div>
    </div>
  );
}

export default Navbar;
