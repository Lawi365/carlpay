import React from "react";
// import logo from '../images/logo.png'
import { FaLeaf } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="header p-4 flex justify-start ml-48 mr-48 items-center text-white font-semibold bg-black">
        <div className="logo items-center flex text-white">
          <FaLeaf className="text-[#4285F9] " />
          <div className="image text-sans text-4xl font-semibold">carepay</div>
        </div>
        <div className="list ml-16 ">
          <ul className="flex items-center m-auto ">
            <li>
              <a href="#" className="ml-4">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="ml-4">
                Our mission
              </a>
            </li>
            <li>
              <a href="#" className="ml-4">
                Private payers
              </a>
            </li>
            <li>
              <a href="#" className="ml-4">
                Public Payers
              </a>
            </li>
            <li>
              <a href="#" className="ml-4">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="flex ml-6 relative">
                About <RxCaretDown />
              </a>
              <ul className="invisible hover:visible absolute mt-4 bg-black items-center p-4 text-sm text-white w-24">
                <li className="mb-0.5 bb-1">About us</li>
                <li className="">Kenya</li>
                <li className="">Nigeria</li>
                <li className="">Open Source</li>
              </ul>
            </li>
            <li>
              <a href="#" className="ml-4">
                News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
