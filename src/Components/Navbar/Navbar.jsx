import { AiOutlineHeart } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";
import logo from "../../assets/logo001.png";
import { Link } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#FF4512] ">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-1 md:px-5">
        <div className="flex items-center gap-2 py-2">
          <img className="w-10 md:w-20" src={logo} alt="" />
          <div className="text-2xl md:text-4xl text-white font-medium">
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
          <div className="relative ">
            <AiOutlineHeart></AiOutlineHeart>
            <h1 className="absolute text-xs right-0 top-0 bg-white rounded-full p-1 border-2 border-white"></h1>
          </div>
          <div className="relative ">
            <FaShopify></FaShopify>
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
