import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ImQuotesLeft } from "react-icons/im";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full md:flex md:flex-row-reverse">
        <div className="h-1/3 bg-secondary flex flex-col items-start justify-end space-y-5 p-8 md:h-full md:w-1/2 xl:p-20 xl:text-2xl">
          <div>
            <img className="w-28 h-auto xl:w-40" src="/logo.png" alt="logo" />
          </div>
          <div className="text-primary space-y-3">
            <p>(ella-e-la) - french</p>
            <p>(n.) - creator of unique foodconcepts</p>
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
      <div className="py-20 px-5 max-w-screen-xl mx-auto xl:px-0">
        <div className="max-w-screen-lg mr-auto">
          <div className="w-full bg-secondary bg-opacity-50 px-8 pt-8 sm:flex sm:flex-row-reverse sm:justify-between sm:py-8">
            <div className="space-y-5 sm:w-1/2 sm:pl-8">
              <h1 className="text-primary text-3xl lg:text-5xl">Qui est Ella?</h1>
              <p className="text-primary lg:text-lg">
                Piep! Ik ben Ella, 23 jaar en foodlover in hart en nieren. Door de week ga ik door
                het leven als een rechtenstudent, in de weekends sta ik klaar om jou en je
                gezelschap een onvergetelijke ervaring te bezorgen. Een unieke setting en lekker
                eten staan hierbij centraal. Dankzij corona, vond ik de tijd om mijn passie in
                concepten te gieten. Welkom bij Ella est là.
              </p>
            </div>
            <img
              className="transform translate-y-10 sm:max-w-sm sm:w-1/2 sm:translate-y-20"
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
      <div className="py-20 px-5 max-w-screen-xl mx-auto xl:px-0">
        <div className="max-w-screen-lg ml-auto">
          <div className="w-full bg-secondary bg-opacity-50 px-8 pb-8 sm:flex sm:flex-row-reverse sm:justify-between sm:py-8">
            <img
              className="transform -translate-y-10 sm:max-w-sm sm:w-1/2 sm:-translate-y-20"
              src="/concepts.jpeg"
              alt=""
            />
            <div className="space-y-5 sm:w-1/2 sm:pr-8">
              <h1 className="text-primary text-3xl lg:text-5xl">
                Food concepten: what’s in the name?{" "}
              </h1>
              <p className="text-primary text-lg">
                Ella est là werkt verschillende formules uit waarbij ‘food’ steeds de hoofdnoot
                vormt/hoofdrol speelt. Maar het is meer dan dat! Elk food concept staat voor een
                totaalbeleving waarbij zoveel mogelijk van onze zintuigen worden geprikkeld: zien –
                horen – ruiken – voelen – proeven, het komt allemaal aan bod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pt-20 space-y-10 max-w-screen-xl mx-auto xl:px-0">
        <div className="text-center flex flex-col items-center space-y-3">
          <h1 className="text-primary text-3xl md:text-4xl">Concepten</h1>
          <div className="w-20 border-t-2 border-secondary"></div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          <div
            className="w-full h-60 bg-red-50 sm:h-80 sm:col-span-2 lg:col-span-1"
            style={{
              backgroundImage: "url(/dinee.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="w-full h-60 lg:h-80 bg-red-50"
            style={{
              backgroundImage: "url(/demo1.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* Tapasboxen */}
          </div>
          <div
            className="w-full h-60 lg:h-80 bg-red-50"
            style={{
              backgroundImage: "url(/demo2.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* Ontbijtboxen */}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-20 xl:px-0">
        <div className="bg-secondary bg-opacity-50 p-10 space-y-10 sm:flex sm:space-y-0 sm:space-x-5 md:space-x-8">
          <div className="text-primary space-y-3 sm:w-1/2">
            <h1 className="text-3xl">Heb je vragen of wil je reserveren?</h1>
            <p>Neem contact op met mij via het formulier of via sociale media</p>
          </div>
          <div className="space-y-4 flex flex-col items-end sm:w-1/2">
            <input
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary focus:outline-none"
              placeholder="Email"
              type="text"
            />
            <input
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary focus:outline-none"
              placeholder="Naam"
              type="text"
            />
            <input
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary focus:outline-none"
              placeholder="Telefoon"
              type="text"
            />
            <textarea
              className="w-full bg-transparent py-3 px-2 border-b-2 border-primary placeholder-primary resize-none focus:outline-none"
              placeholder="Bericht"
            ></textarea>
            <div>
              <p className="pt-5 text-primary text-lg">Verstuur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
