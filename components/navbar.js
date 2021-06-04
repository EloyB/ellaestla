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
      if (window.scrollY > 20) {
        setHitScrollPoint(true);
      } else {
        setHitScrollPoint(true);
        setOpenMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed md:absolute z-50 w-full bg-secondary p-8 ${
        openMenu ? "shadow-lg" : "shadow-none"
      } md:w-1/2 md:right-0 md:top-0 lg:shadow-none xl:px-14 xl:py-10`}
    >
      <div className={`max-w-screen-xl m-auto lg:flex lg:items-center`}>
        <div className={`flex justify-end`}>
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
            <Link href="/#qui">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                Qui est Ella?
              </a>
            </Link>
          </div>
          <div>
            <Link href="/#name">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                What's in the name?
              </a>
            </Link>
          </div>
          <div>
            <Link href="/#concepten">
              <a className="text-lg" onClick={() => setOpenMenu(false)}>
                Concepten
              </a>
            </Link>
          </div>
          <div>
            <Link href="/#contact">
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
