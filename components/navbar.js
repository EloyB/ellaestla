import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [hitScrollPoint, setHitScrollPoint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= screen.height) {
        setHitScrollPoint(true);
      } else {
        setHitScrollPoint(false);
        setOpenMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed lg:absolute z-50 w-full transition-colors ${
        hitScrollPoint ? "bg-secondary md:w-full" : "bg-transparent md:w-1/2"
      } bg-transparent p-8 ${
        openMenu ? "shadow-lg" : "shadow-none"
      } md:right-0 md:top-0 lg:shadow-none xl:px-14 xl:py-10`}
    >
      <div className={`max-w-screen-xl m-auto lg:flex lg:items-center`}>
        <div className={`flex ${hitScrollPoint ? "justify-between" : "justify-end"} `}>
          <img
            className={`w-14 h-9 object-contain ${hitScrollPoint ? "block" : "hidden"} lg:hidden`}
            src="/logo.png"
            alt="logo"
          />
          <div className={`cursor-pointer lg:hidden`} onClick={() => setOpenMenu(!openMenu)}>
            <CgMenuRight className="text-primary w-8 h-8" />
          </div>
        </div>
        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } flex flex-col bg-secondary pt-4 space-y-3 text-center text-primary lg:flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 lg:pt-0`}
        >
          <div>
            <Link legacyBehavior href="/#qui">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                About me
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href="/#name">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                What's in the name?
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href="/#concepten">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                Concepten
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href="/#contact">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
