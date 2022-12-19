import React from "react";
import { FaLeaf } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="flex justify-between p-16 bg-black text-white">
        <div className="footers w-1/4 block">
          <p className="font-bold text-3xl">Sitemap</p>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our platform</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">absolute</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Kenua</a>
            </li>
            <li>
              <a href="#">Wesite Privacy</a>
            </li>
          </ul>
        </div>
        <div className="footers w-1/4 block">
          <p className="font-bold text-3xl">Socials</p>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Vimeo</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
          </ul>
        </div>
        <div className="footers w-1/4 block">
          <p className="font-bold text-3xl">Kenyan Office</p>
          <ul>
            <li>
              <a href="#">clarepay Ltd</a>
            </li>
            <li>
              <a href="#">Box 123-2300</a>
            </li>
            <li>
              <a href="#">Nairobi Kenya</a>
            </li>
            <li>
              <a href="#">+25412345678</a>
            </li>
            <li>
              <a href="#">office@clarepay</a>
            </li>
          </ul>
        </div>
        <div className="footers w-1/4 block">
          <p className="font-bold text-3xl">Press & News</p>
          <ul className="text-xl white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our platform</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo flex bg-black text-center justify-between p-24 text-white text-4xl">
        <div className="logo flex">
          <FaLeaf className="text-[#4285F9] " />
          <div className="image text-sans text-xl font-semibold">clarepay Ltd</div>
        </div>{" "}
        <div className="text-base">2022 all rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
