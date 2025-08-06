// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div>
//         <nav className='flex justify-between py-4   '>
//             <div>logo</div>
//             <div>
//                 <ul className='flex px- '>
//                     <li>
//                         <Link to={'/'}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to={'/'}>Product</Link>
//                     </li>
//                     <li>
//                         <Link to={'/'}>About</Link>
//                     </li>
//                     <li>
//                         <Link to={'/'}>Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div className='absolu'>
//                 <button>login</button>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/zestleaf-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="w-full fixed flex justify-between items-center px-8 text-white  bg-gray-500/60 z-99">
        {/* Logo */}
        <div>
          {/* <h1 className="font-extrabold text-xl">ONROAD</h1> */}
          <img src={logo} alt="" className=" top-0" width={130} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 text-lg font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="">
          <Link to={"/wishlist"}>
          <FontAwesomeIcon icon={faHeart} className="px-2" />
          </Link>
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} className="px-2" />
          </Link>
         
          <button className="font-extrabold pr-4">
            <Link to={"/signup"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 z-99 w-full bg-gray-50 shadow-md flex flex-col items-center gap-4 py-4 lg:hidden">
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              New cars
            </Link>
          </li>
          <li>
            <Link to={""} onClick={() => setMenuOpen(false)}>
              Used cars
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Service
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Exchange
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Insurance
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
