

import { Link } from "react-router-dom";

const Nav = () => {

  

  return (
    <>
      <nav className=" container mb-5  bg-yellow-300  text-center  py-7 ">
        <ul className="flex flex-col md:flex-row gap-2 items-center justify-center md:justify-between">
          <Link to="/">
            <h1 className="text-3xl md:text-6xl font-bold italic text-primary">
              $Nokia🤡
            </h1>
          </Link>

          <div className="flex gap-4">
            <Link to="/">
              <p className=" font-bold italic text-primary">$Nokia🧌</p>
            </Link>

            <Link to="/">
              <p className=" font-bold italic text-primary">$Nokia🧌</p>
            </Link>
            <Link to="/">
              <p className=" font-bold italic text-primary">$Nokia🧌</p>
            </Link>
            <Link to="/">
              <p className=" font-bold italic text-primary">$Nokia</p>
            </Link>
          </div>
          <Link to="/">
            <h1 className="text-3xl md:text-6xl font-bold italic text-primary">
              $Nokia🤡
            </h1>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
