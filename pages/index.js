import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ImQuotesLeft } from "react-icons/im";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="h-1/3 bg-secondary flex flex-col items-center justify-center">
          <div>
            <img className="w-40 h-auto" src="/logo.png" alt="logo" />
          </div>
          <div className="text-center text-primary">
            <p>(ella-e-la) - french</p>
            <p>(n.) - creator of unique foodconcepts</p>
          </div>
        </div>
        <div
          className="h-2/3 bg-blue-50"
          style={{
            backgroundImage: "url(/header.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="py-20 px-5">
        <div className="w-full bg-secondary bg-opacity-50 px-8 pt-8">
          <div className="space-y-5">
            <h1 className="text-primary text-3xl">Qui est Ella?</h1>
            <p className="text-primary">
              Piep! Ik ben Ella, 23 jaar en foodlover in hart en nieren. Door de week ga ik door het
              leven als een rechtenstudent, in de weekends sta ik klaar om jou en je gezelschap een
              onvergetelijke ervaring te bezorgen. Een unieke setting en lekker eten staan hierbij
              centraal. Dankzij corona, vond ik de tijd om mijn passie in concepten te gieten.
              Welkom bij Ella est là.
            </p>
          </div>
          <img className="transform translate-y-10" src="/ella2.png" alt="" />
        </div>
      </div>
      <div className="px-5 py-20 flex flex-col items-center">
        <ImQuotesLeft className="w-14 h-14 text-primary text-opacity-20" />
        <p className="relative text-xl text-primary text-center">
          Laat je zintuigen verrassen en geniet van een totaalbeleving
        </p>
      </div>
      <div className="py-20 px-5 space-y-5">
        <div className="w-full bg-secondary bg-opacity-50 px-8 pb-8">
          <img className="transform -translate-y-10" src="/concepts.jpeg" alt="" />
          <div className="space-y-5">
            <h1 className="text-primary text-3xl">Food concepten: what’s in the name? </h1>
            <p className="text-primary">
              Ella est là werkt verschillende formules uit waarbij ‘food’ steeds de hoofdnoot
              vormt/hoofdrol speelt. Maar het is meer dan dat! Elk food concept staat voor een
              totaalbeleving waarbij zoveel mogelijk van onze zintuigen worden geprikkeld: zien –
              horen – ruiken – voelen – proeven, het komt allemaal aan bod.
            </p>
          </div>
        </div>
        <div
          className="w-full h-60 bg-red-50"
          style={{
            backgroundImage: "url(/dinee.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full h-60 bg-red-50">{/* Tapasboxen */}</div>
        <div className="w-full h-60 bg-red-50">{/* Ontbijtboxen */}</div>
      </div>
      <div>{/* contact */}</div>
    </div>
  );
}
