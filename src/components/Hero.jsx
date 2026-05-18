import React, { useEffect, useState } from "react";

const WELCOMES = [
  "Welcome",
  "Bienvenido",
  "Bienvenue",
  "Willkommen",
  "Benvenuto",
  "Bem-vindo",
  "Marhaba",
  "Shalom",
  "Konnichiwa",
  "Annyeong",
  "Dobro pozhalovat",
  "Namaste",
  "Szia",
  "Croeso",
  "Selamat datang",
  "Aloha",
  "Karibu",
  "Bula",
];

const TYPE_SPEED = 150;
const DELETE_SPEED = 95;
const WORD_PAUSE = 1000;

export default function Hero() {
  const orbitRoles = [
    "Prompting",
    "Agents",
    "RAG",
    "Vision AI",
    "NLP",
    "Embeddings",
    "Inference",
    "Deployment",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [years, setYears] = useState("0");

  useEffect(() => {
    const currentWord = WELCOMES[currentIndex];
    let timeoutId;

    if (!isDeleting && charIndex < currentWord.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, TYPE_SPEED);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, DELETE_SPEED);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), WORD_PAUSE);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % WELCOMES.length);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentIndex, isDeleting]);

  useEffect(() => {
    const startDate = new Date("2010-05-18T00:00:00");
    const msInYear = 1000 * 60 * 60 * 24 * 365.2425;

    const updateTimer = () => {
      const yearsPassed = (Date.now() - startDate.getTime()) / msInYear;
      setYears(yearsPassed.toFixed(9));
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero" id="hero">
      <nav className="navBar" aria-label="Main navigation">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#WhoAmI">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="heroLeft">
        <div className="welcome">
          <h1>
            {displayedText}
            <span className="typerPointer">|</span>
          </h1>
        </div>

        <div className="overView">
          <p>
            I&apos;m <span id="dnaiel">Daniel</span> (AKA: Pouyan)
          </p>

          <span className="location">
            <i className="fa-solid fa-location-dot" style={{ color: "#cfcfcf" }}></i>
            Canada, Ontario
          </span>

          <span className="age" id="timer">
            <i className="fa-solid fa-hourglass-half" style={{ color: "#cfcfcf" }}></i>
            {years} Years Old
          </span>

          <span className="roll">
            <i className="fa-solid fa-code" style={{ color: "#cfcfcf" }}></i>
            Applied AI Builder
          </span>

          <span className="student">
            <i className="fa-solid fa-graduation-cap" style={{ color: "#cfcfcf" }}></i>
            IBCP student
          </span>

          <a className="getInTouchButton" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>

        <div className="heroImage">
        <div className="scene">
          <img className="avatar" src="/pfp.png" alt="Portrait of Daniel" />

          <div className="orbit">
            {orbitRoles.map((role, index) => (
              <div
                key={role}
                className="word"
                style={{ "--angle": `${index * (360 / orbitRoles.length)}deg` }}
              >
                <div className="inner">
                  <span className="innerLabel">{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="status">
          <i className="fa-solid fa-circle fa-beat" id="greenDot" style={{ color: "#12d339" }}></i>
          <span>Locked in</span>
        </div>
      </div>

      <div className="scrollDown" aria-hidden="true">
        <i className="fa-solid fa-arrow-down fa-bounce" style={{ color: "#cfcfcf" }}></i>
      </div>
    </div>
  );
}
