import React from "react";

export default function dineevoortwee() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-20">
        <div className="flex flex-col space-y-3 items-center">
          <h1 className="text-primary text-3xl text-center md:text-4xl">Dinee voor twee</h1>
          <div className="w-20 border-t-2 border-secondary "></div>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          height: "600px",
          backgroundImage: "url(/dinee.jpeg)",
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
          Het Dinee voor Twee is de perfecte manier om met je ‘plus one’ even helemaal tot rust te
          komen. Jullie avond start in onze moestuin met een apertief vergezeld van amuses. Daarna
          serveer ik jullie in hét bed een 3-gangenmenu met aangepaste wijnen. Als kers op de taart
          genieten jullie na het ‘Dinee’ van een heerlijk verwarmde hottub. <br /> <br /> Benieuwd
          naar het menu van deze maand? Stuur me gerust een mailtje voor meer info!
        </p>
      </div>
      <div className="px-8 py-10 gap-5 sm:gap-10 md:gap-12 lg:gap-24 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
        <img className="w-full h-full object-contain" src="/demo1.jpg" alt="" />
        <img className="sm:row-span-2" src="/tub.jpeg" alt="" />
        <img className="w-full h-full object-contain" src="/demo3.jpg" alt="" />
      </div>
    </div>
  );
}
