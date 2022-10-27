import React from "react";
import GradientBtn from "./GradientBtn";
import { LogoMixedMark } from "./Logo"

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
      label: "home",
    },
    {
      id: 2,
      link: "products",
      label: "projects"
    },
    {
      id: 3,
      link: "developer API",
      label: "technology"
    },
    {
      id: 4,
      link: "customers",
      label: "promises",
    },
    {
      id: 5,
      link: "contact",
      label: "contact",
    },
  ];

  return (
    <>
      <div className="absolute z-20 w-full text-white bg-transparent h-22 font-neuereg">
        <div className="flex items-center justify-between h-full max-w-screen-xl px-4 mx-auto">
          <div>
            <LogoMixedMark className="w-auto bg-transparent h-[27px] fill-white" />
          </div>

          <div className="items-center hidden lg:flex">
            <ul className="flex">
              {links.map(({ id, link, label }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 cursor-pointer hover:text-niagra"
                >
                  <Link to={link} smooth duration={500}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block cursor-pointer lg:hidden"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
          }`}
      >
        <ul>
          {links.map(({ id, link, label }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
