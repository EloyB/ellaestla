import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ImQuotesLeft } from "react-icons/im";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [age, setAge] = useState(25);
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
    }).then((e) =>
      setMailData({
        email: "",
        naam: "",
        telefoon: "",
        bericht: "",
      })
    );
  };

  const calculateAge = () => {
    const birthDate = new Date("1998-05-30");
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  useEffect(() => {
    calculateAge();
  }, []);

  return (
    <div>
      <Head>
        <title>Ella Est La</title>
      </Head>
      <Navbar />

      <div className="w-full h-screen md:flex md:flex-row-reverse">
        <div className="flex flex-col items-start justify-end p-8 space-y-5 h-1/3 bg-secondary md:h-full md:w-1/2 xl:p-14 xl:text-xl">
          <div>
            <img className="h-auto w-28 xl:w-40" src="/logo.png" alt="logo" />
          </div>
          <div className="text-primary">
            <p>(ella-e-la) - french</p>
            <p>(n.) - creator of unique food concepts</p>
          </div>
        </div>
        <div
          className="h-2/3 bg-blue-50 md:h-full md:w-1/2"
          style={{
            backgroundImage: "url(/header.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div id="qui" className="max-w-screen-xl px-5 py-20 mx-auto xl:px-0">
        <div className="max-w-screen-lg mr-auto">
          <div className="w-full px-8 pt-8 bg-transparent md:bg-secondary sm:flex sm:flex-row-reverse sm:justify-between sm:py-8">
            <div className="space-y-5 sm:w-1/2 sm:pl-8">
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <h1 className="text-3xl text-center text-primary md:text-left md:text-4xl">
                  About me
                </h1>
                <div className="w-20 border-t-2 border-secondary md:hidden"></div>
              </div>
              <p className="text-justify text-primary lg:text-lg">
                Piep! Ik ben Ella, {age} jaar en foodlover in hart en nieren.
                Door de week ga ik door het leven als Legal Advisor, in de
                weekends sta ik klaar om jou en je gezelschap een onvergetelijke
                ervaring te bezorgen. Een unieke setting en lekker eten staan
                hierbij centraal.
              </p>
            </div>
            <img
              className="object-contain transform translate-y-10 sm:max-w-sm sm:w-1/2 sm:translate-y-20"
              style={{ height: "550px" }}
              src="/ella2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-5 py-20">
        <ImQuotesLeft className="w-14 h-14 text-primary text-opacity-20" />
        <p className="relative text-xl text-center text-primary sm:text-3xl">
          Laat je zintuigen verrassen en geniet van een totaalbeleving
        </p>
      </div>
      <div id="name" className="max-w-screen-xl px-5 pt-20 mx-auto xl:px-0">
        <div className="max-w-screen-lg ml-auto">
          <div className="w-full px-8 pb-8 bg-transparent md:bg-secondary sm:flex sm:flex-row-reverse sm:justify-between sm:py-8">
            <img
              className="object-contain transform -translate-y-10 sm:max-w-sm sm:w-1/2 sm:-translate-y-20"
              style={{ height: "550px" }}
              src="/concepts.jpeg"
              alt=""
            />
            <div className="space-y-5 sm:w-1/2 sm:pr-8">
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <h1 className="text-3xl text-center text-primary md:text-left md:text-4xl">
                  Food concepts: what’s in the name?
                </h1>
                <div className="w-20 border-t-2 border-secondary md:hidden"></div>
              </div>
              <p className="text-justify text-primary lg:text-lg">
                Ella est là werkt verschillende formules uit waarbij ‘food’
                steeds de hoofdrol speelt. Maar het is meer dan dat! <br /> Elk
                food concept staat voor een totaalbeleving waarbij zoveel
                mogelijk van onze zintuigen worden geprikkeld: zien – horen –
                ruiken – voelen – proeven, het komt allemaal aan bod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="max-w-screen-xl px-5 pt-20 pb-10 mx-auto xl:px-0"
      >
        <div className="p-10 space-y-10 bg-secondary sm:flex sm:space-y-0 sm:space-x-5 md:space-x-8">
          <div className="space-y-3 text-primary sm:w-1/2">
            <h1 className="text-3xl">Heb je vragen of wil je reserveren?</h1>
            <p>
              Neem contact op met mij via het formulier of via sociale media.
            </p>
          </div>
          <div className="flex flex-col items-end space-y-4 sm:w-1/2">
            <input
              className="w-full px-2 py-3 bg-transparent border-b-2 border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Email"
              type="text"
              onChange={(e) =>
                setMailData({ ...mailData, email: e.target.value })
              }
              value={mailData.email}
            />
            <input
              className="w-full px-2 py-3 bg-transparent border-b-2 border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Naam"
              type="text"
              onChange={(e) =>
                setMailData({ ...mailData, naam: e.target.value })
              }
              value={mailData.naam}
            />
            <input
              className="w-full px-2 py-3 bg-transparent border-b-2 border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Telefoon"
              type="text"
              onChange={(e) =>
                setMailData({ ...mailData, telefoon: e.target.value })
              }
              value={mailData.telefoon}
            />
            <textarea
              className="w-full px-2 py-3 bg-transparent border-b-2 resize-none border-primary placeholder-primary focus:outline-none text-primary"
              placeholder="Bericht"
              onChange={(e) =>
                setMailData({ ...mailData, bericht: e.target.value })
              }
              value={mailData.bericht}
            ></textarea>
            <div className="cursor-pointer" onClick={sendEmail}>
              <p className="pt-5 text-lg text-primary">Verstuur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
