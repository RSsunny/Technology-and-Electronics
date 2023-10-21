import { AiOutlineHeart } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";
import logo from "../../assets/logo001.png";
import { Link } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#FF4512] ">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-2 md:px-5">
        <div className="flex items-center gap-2 py-2">
          <img className="w-10 md:w-20" src={logo} alt="" />
          <div className="text-3xl md:text-4xl text-white font-medium">
            <span className="font-rancho">Electronics</span>
          </div>
        </div>
        <div>
          <div className="relative hidden md:block">
            <input
              className="outline-none w-[300px] lg:w-[600px] pl-4 pr-10 py-1 rounded-full"
              type="search"
              name="serch"
              id="1001"
              placeholder="Search"
            />
            <BsSearch className="absolute right-3 top-2"></BsSearch>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-5 text-2xl md:text-4xl text-white">
          <label className="swap swap-rotate scale-75 md:scale-100">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="relative hidden md:block">
            <AiOutlineHeart></AiOutlineHeart>
            <h1 className="absolute text-xs right-0 top-0 bg-white rounded-full p-1 border-2 border-white"></h1>
          </div>
          <div className="relative ">
            <Link to={"/mycart"}>
              <FaShopify></FaShopify>
            </Link>
            <h1 className="absolute text-xs right-0 top-0 bg-white rounded-full p-1 border-2 border-white"></h1>
          </div>

          {user ? (
            <Link to={user ? "/profile" : "/login"}>
              {" "}
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="" />
                  ) : (
                    <LiaUserSolid className=" text-2xl md:text-4xl"></LiaUserSolid>
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div className="text-xl md:text-2xl font-rancho flex items-centergap-2 border px-2 md:px-4 md:py-1 rounded-full">
              <LiaUserSolid className=" text-2xl md:text-3xl"></LiaUserSolid>
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center px-5 py-2">
        <div className="relative inline-block">
          <input
            className="outline-none  pl-4 pr-10 py-1 rounded-full"
            type="search"
            name="serch"
            id="1001"
            placeholder="Search"
          />
          <BsSearch className="absolute right-3 top-2"></BsSearch>
        </div>
        <div onClick={() => setMenu(!menu)} className="md:hidden ">
          {menu ? (
            <BiMenuAltRight className="text-3xl"></BiMenuAltRight>
          ) : (
            <BiMenu className="text-3xl"></BiMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
