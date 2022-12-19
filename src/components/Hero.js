import React from "react";
import header from "../images/header.jpg";
import { RiGovernmentFill } from "react-icons/ri";
import { FaHospitalAlt, FaClinicMedical } from "react-icons/fa";
import { TbDentalOff, TbArrowsUpDown } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { MdLocalPharmacy } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlPeople } from "react-icons/sl";
import { AiOutlineInsurance } from "react-icons/ai";
import { GoRadioTower } from "react-icons/go";

function Hero() {
  return (
    <div className="root">
      <div className="relative">
        <img
          src={header}
          className="h-[600px] w-full hero-dad-child object-cover"
          alt="dad with daughter"
        />
        <div>
          <div className="top-image absolute top-40 right-24 bg-transparent text-white text-5xl font-semibold">
            <p>
              We Connect Your <br />
              Healthcare Ecosystem
              <br />
              by leveraging technology
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* End of hero section */}
      <div className="  bg-[#f4f6f6]">
      <div className=" mid-what-we-are pt-24 pb-16 mr-48 ml-48">
        <div className="text-6xl font-semibold ">
          <p>
            {" "}
            A Mobile and cloud based platform that benefit All the individuals
          </p>
        </div>
        <div className="flex mt-16 bg-[#f4f6f6] [#a2d2ff] text-[#021F4F] rounded">
          <div className="manual w-1/2  m-4">
            <p className="man text-3xl font-bold p-4 mb-4">
              From Manual paper based
            </p>
            <div className="div-icons flex text-5xl">
              <ul className="w-1/3 items-center">
                <li>
                  <RiGovernmentFill className="ml-2" />
                  <p className="text-lg">Governments</p>
                </li>
                <li>
                  <SlPeople className="ml-2" />
                  <p className="text-lg">Employer</p>
                </li>
                <li>
                  <RiGovernmentFill className="ml-2" />
                  <p className="text-lg">savings</p>
                </li>
                <li>
                  <AiOutlineInsurance className="ml-2" />
                  <p className="text-lg">Private Insurance</p>
                </li>
                <li>
                  <BiDonateHeart className="ml-2" />
                  <p className="text-lg">Donorcontributions</p>
                </li>
              </ul>
              <ul className="w-1/3">
                <li className="invisible">
                  <CgProfile />
                  <p className="text-xl ">Member</p>
                </li>
                <li className="invisible">
                  <CgProfile />
                  <p className="text-xl">Member</p>
                </li>
                <li>
                  <CgProfile className="ml-2" />
                  <p className="text-xl">Member</p>
                </li>
              </ul>
              <ul className="w-1/3">
                <li>
                  <FaHospitalAlt className="ml-4" />
                  <p className="text-lg">Hospitals</p>
                </li>
                <li>
                  <MdLocalPharmacy className="ml-4" />
                  <p className="text-lg">Pharmacies</p>
                </li>
                <li>
                  <TbDentalOff className="ml-2" />
                  <p className="text-lg">Dental</p>
                </li>
                <li>
                  <FaClinicMedical className="ml-2" />
                  <p className="text-lg">Clinics</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="manual w-1/2  m-4">
            <p className="man  text-3xl font-bold p-4 mb-4">
              To Digitalised & Mobile-Based
            </p>
            <div className="div-icons flex text-5xl">
              <ul className="w-1/3 items-center">
                <li>
                  <RiGovernmentFill className="ml-2" />
                  <p className="text-lg">Governments</p>
                </li>
                <li>
                  <SlPeople className="ml-2" />
                  <p className="text-lg">Employer</p>
                </li>
                <li>
                  <RiGovernmentFill className="ml-2" />
                  <p className="text-lg">savings</p>
                </li>
                <li>
                  <AiOutlineInsurance className="ml-2" />
                  <p className="text-lg">Private Insurance</p>
                </li>
                <li>
                  <BiDonateHeart className="ml-2" />
                  <p className="text-lg">Donorcontributions</p>
                </li>
              </ul>
              <ul className="w-1/3 m-4">
                <li className="invisible">
                  <CgProfile />
                  <p className="text-xl">Member</p>
                </li>
                <li className="visible">
                  <GoRadioTower className="ml-2" />
                  <p className=""></p>
                </li>
                <li className="visible">
                  <TbArrowsUpDown className="ml-2" />
                  <p className="text-xl"></p>
                </li>
                <li>
                  <CgProfile className="ml-2" />
                  <p className="text-base">Member</p>
                </li>
              </ul>
              <ul className="w-1/3">
                <li>
                  <FaHospitalAlt className="ml-4" />
                  <p className="text-lg">Hospitals</p>
                </li>
                <li>
                  <MdLocalPharmacy className="ml-4" />
                  <p className="text-lg">Pharmacies</p>
                </li>
                <li>
                  <TbDentalOff className="ml-2" />
                  <p className="text-lg">Dental</p>
                </li>
                <li>
                  <FaClinicMedical className="ml-2" />
                  <p className="text-lg">Clinics</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    // end section hero
  );
}

export default Hero;
