import React from "react";
import SecondaryNavbar from "../components/secondarynav";

export default function ontbijtboxen() {
  return (
    <div>
      <SecondaryNavbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-12 pb-20">
          <div className="flex flex-col space-y-3 items-center">
            <h1 className="text-primary text-3xl text-center md:text-4xl">Ontbijtboxen</h1>
            <div className="w-20 border-t-2 border-secondary "></div>
          </div>
        </div>
        <div
          className="w-full"
          style={{
            height: "600px",
            backgroundImage: "url(/obcover.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="py-20 px-8 space-y-10">
          <div className="flex flex-col space-y-3 items-center lg:items-start">
            <h1 className="text-primary text-2xl text-center lg:text-left md:text-3xl">
              Wat kan ik verwachten?
            </h1>
            <div className="w-20 border-t-2 border-secondary "></div>
          </div>
          <p className="text-primary text-justify">
            Mijn avontuur begon met… Ontbijtboxen! Op verschillende feestdagen doorheen het jaar kan
            je bij mij terecht voor take-away ontbijtjes, helemaal in thema. Van ovenverse
            mini-pistolets en koffiekoekjes van de plaatselijke bakker tot huisgemaakte slaatjes,
            huisgemaakte dessertjes en meer. <br />
            <br /> Heb je een bedrijfs-, familie- of eender ander feestje? Laat het me weten! Voor
            elke gelegenheid vanaf 8 personen stel ik voor jou een ontbijtje samen.
          </p>
        </div>
        <div className="px-8 py-10 gap-5 sm:gap-10 md:gap-12 lg:gap-24 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
          <img className="w-full h-full object-contain" src="/obgallery1.jpeg" alt="" />
          <img className="sm:row-span-2" src="/obgallery2.jpeg" alt="" />
          <img className="w-full h-full object-contain" src="/obgallery3.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
