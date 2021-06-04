import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ImQuotesLeft } from "react-icons/im";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [mailData, setMailData] = useState({
    email: "",
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const sendEmail = () => {
    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    }).then((e) => console.log(e));
  };
  return (
    <div>
      <Navbar />

      <div className="h-screen w-full md:flex md:flex-row-reverse">
        <div className="h-1/3 bg-secondary flex flex-col items-start justify-end space-y-5 p-8 md:h-full md:w-1/2 xl:p-14 xl:text-xl">
          <div>
            <img className="w-28 h-auto xl:w-40" src="/logo.png" alt="logo" />
          </div>
          <div className="text-primary">
            <p>(ella-e-la) - french</p>
            <p>(n.) - creator of unique food concepts</p>
          </div>
        </div>
        <div
          className="h-2/3 bg-blue-50  md:h-full md:w-1/2"
          style={{
            backgroundImage: "url(/header.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div id="qui" className="py-20 px-5 max-w-screen-xl mx-auto xl:px-0">
        <div className="max-w-screen-lg mr-auto">
          <div className="w-full bg-transparent md:bg-secondary px-8 pt-8 sm:flex sm:flex-row-reverse sm:justify-between sm:py-8">
            <div className="space-y-5 sm:w-1/2 sm:pl-8">
              <div className="flex flex-col space-y-3 items-center md:items-start">
                <h1 className="text-primary text-3xl text-center md:text-left md:text-4xl">
                  Qui est Ella?
                </h1>
                <div className="w-20 border-t-2 border-secondary md:hidden"></div>
              </div>
              <p className="text-primary lg:text-lg text-justify">
                Piep! Ik ben Ella, 23 jaar en foodlover in hart en nieren. Door de week ga ik door
                het leven als rechtenstudent, in de weekends sta ik klaar om jou en je gezelschap
                een onvergetelijke ervaring te bezorgen. Een unieke setting en lekker eten staan
                hierbij centraal. <br /> Dankzij corona, vond ik de tijd om mijn passie in concepten
                te gieten: welkom bij Ella est là.
              </p>
            </div>
            <img
              className="transform h-auto translate-y-10 sm:max-w-sm sm:w-1/2 sm:translate-y-20 object-contain"
              src="/ella2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="px-5 py-20 flex flex-col items-center">
        <ImQuotesLeft className="w-14 h-14 text-primary text-opacity-20" />
        <p className="relative text-xl text-primary text-center sm:text-3xl">
          Laat je zintuigen verrassen en geniet van een totaalbeleving
        </p>
      </div>
      <div id="name" className="pt-20 px-5 max-w-screen-xl mx-auto xl:px-0">
        <div className="max-w-screen-lg ml-auto">
          <div className="w-full bg-transparent md:bg-secondary px-8 pb-8 sm:flex sm:flex-row-reverse sm:justify-between sm:py-8">
            <img
              className="transform -translate-y-10 sm:max-w-sm sm:w-1/2 sm:-translate-y-20 object-contain"
              src="/concepts.jpeg"
              alt=""
            />
            <div className="space-y-5 sm:w-1/2 sm:pr-8">
              <div className="flex flex-col space-y-3 items-center md:items-start">
                <h1 className="text-primary text-3xl text-center md:text-left md:text-4xl">
                  Food concepts: what’s in the name?
                </h1>
                <div className="w-20 border-t-2 border-secondary md:hidden"></div>
              </div>
              <p className="text-primary lg:text-lg text-justify">
                Ella est là werkt verschillende formules uit waarbij ‘food’ steeds de hoofdrol
                speelt. Maar het is meer dan dat! <br /> Elk food concept staat voor een
                totaalbeleving waarbij zoveel mogelijk van onze zintuigen worden geprikkeld: zien –
                horen – ruiken – voelen – proeven, het komt allemaal aan bod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="concepten" className="px-5 pt-20 space-y-10 max-w-screen-xl mx-auto xl:px-0">
        <div className="text-center flex flex-col items-center space-y-3">
          <h1 className="text-primary text-3xl md:text-4xl">Concepten</h1>
          <div className="w-20 border-t-2 border-secondary"></div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:mt-20">
          <div
            className="group relative w-full h-60 sm:h-80 sm:col-span-2 lg:col-span-1 cursor-pointer"
            style={{
              backgroundImage: "url(/dinee.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => router.push("/dineevoortwee")}
          >
            <div className="absolute group inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-center p-8 text-justify">
              <p className="text-lg text-secondary">Dinee Voor Twee</p>
            </div>
          </div>
          <div
            className="group relative w-full h-60 lg:h-80 cursor-pointer"
            style={{
              backgroundImage: "url(/demo1.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute group inset-0 bg-primary bg-opacity-40 flex flex-col justify-center items-center p-8 text-justify">
              <p className="text-lg text-secondary">Ontbijtboxen</p>
            </div>
          </div>
          {/* <div
            className="group relative w-full h-60 lg:h-80 cursor-pointer"
            style={{
              backgroundImage: "url(/demo2.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute group inset-0 bg-primary bg-opacity-40 flex flex-col justify-center items-center p-8 text-justify">
              <p className="text-lg text-secondary">Eigen creaties</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-20 xl:px-0">
        <div className="bg-secondary p-10 space-y-10 sm:flex sm:space-y-0 sm:space-x-5 md:space-x-8">
          <div className="text-primary space-y-3 sm:w-1/2">
            <h1 className="text-3xl">Heb je vragen of wil je reserveren?</h1>
            <p>Neem contact op met mij via het formulier of via sociale media.</p>
          </div>
          <div className="space-y-4 flex flex-col items-end sm:w-1/2">
            <input
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Email"
              type="text"
              onChange={(e) => setMailData({ ...mailData, email: e.target.value })}
            />
            <input
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Naam"
              type="text"
              onChange={(e) => setMailData({ ...mailData, naam: e.target.value })}
            />
            <input
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Telefoon"
              type="text"
              onChange={(e) => setMailData({ ...mailData, telefoon: e.target.value })}
            />
            <textarea
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary resize-none focus:outline-none text-primary"
              placeholder="Bericht"
              onChange={(e) => setMailData({ ...mailData, bericht: e.target.value })}
            ></textarea>
            <div className="cursor-pointer" onClick={sendEmail}>
              <p className="pt-5 text-primary text-lg">Verstuur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
