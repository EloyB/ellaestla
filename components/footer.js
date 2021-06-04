import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full px-5 xl:px-0 mx-auto max-w-screen-xl">
      <div className="px-2 border-t-2 border-primary py-5 border-opacity-30 flex items-center justify-between">
        <img className="w-16 h-auto" src="/logo.png" alt="logo" />
        <a target="_blank" href="https://www.instagram.com/ella.est.la_/">
          <FaInstagram className="text-primary w-7 h-7" />
        </a>
      </div>
      <div className="text-center pb-5">
        <a target="_blank" href="https://www.qwebdesign.be" className="text-sm text-primary">
          Created by Qweb Design
        </a>
      </div>
    </div>
  );
}
