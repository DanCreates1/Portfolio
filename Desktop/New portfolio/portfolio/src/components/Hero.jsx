import React, { useState, useEffect } from "react";

export default function Hero() {

   const welcomes = [
  "Welcome", // English
  "Bienvenido", // Spanish
  "Bienvenue", // French
  "Willkommen", // German
  "Benvenuto", // Italian
  "Bem-vindo", // Portuguese
  "欢迎 ", // Chinese (Simplified)
  "歡迎 ", // Chinese (Traditional)
  "ようこそ ", // Japanese
  "환영합니다 ", // Korean
  "Добро пожаловать ", // Russian
  "خوش آمدید ", // Persian
  "أهلا وسهلا ", // Arabic
  "स्वागत है ", // Hindi
  "স্বাগতম ", // Bengali
  "स्वागतम् ", // Sanskrit
  "স্বাগত ", // Assamese
  "ಸ್ವಾಗತ ", // Kannada
  "സ്വാഗതം ", // Malayalam
  "வரவேற்கிறேன் ", // Tamil
  "స్వాగతం ", // Telugu
  "स्वागत छ cha)", // Nepali
  "ආයුබෝවන් ", // Sinhala
  "வரவேற்க ", // Punjabi (Gurmukhi: ਸੁਆਗਤ ਹੈ)
  "स्वागत छ ", // Marathi
  "Hoş geldiniz", // Turkish
  "Καλώς", // Greek
  "ברוך הבא", // Hebrew
  "Velkommen", // Danish
  "Welkom", // Dutch / Afrikaans
  "Välkommen", // Swedish
  "Velkommen", // Norwegian
  "Tervetuloa", // Finnish
  "Bun venit", // Romanian
  "Witamy", // Polish
  "Üdvözöljük", // Hungarian
  "Dobrodošli", // Croatian / Bosnian / Serbian
  "Vitajte", // Slovak
  "Vítajte", // Czech
  "Üdvözlöm", // Hungarian
  "Tere tulemast", // Estonian
  "Sveiki atvykę", // Lithuanian
  "Laipni lūdzam", // Latvian
  "Добре дошли", // Bulgarian
  "Добродошли ", // Serbian (Cyrillic)
  "Fáilte", // Irish
  "Croeso", // Welsh
  "Failt ort", // Manx
  "Fàilte", // Scottish Gaelic
  "Bienveni", // Haitian Creole
  "Maligayang pagdating", // Filipino / Tagalog
  "Selamat datang", // Indonesian / Malay
  "Chào mừng", // Vietnamese
  "ຍິນດີຕ້ອນຮັບ", // Lao
  "សូមស្វាគមន៍", // Khmer
  "မင်္ဂလာပါ", // Burmese
  "Karibu", // Swahili
  "Ongi etorri", // Basque
  "Benvingut", // Catalan
  "Ongi etorri", // Basque
  "Welkom", // Afrikaans
  "Akwaaba", // Akan (Twi)
  "Nnọọ", // Igbo
  "Barka da zuwa", // Hausa
  "Ẹ ku abọ", // Yoruba
  "Sawubona", // Zulu
  "Dumelang", // Sotho
  "Tonga soa", // Malagasy
  "Talofa", // Samoan
  "Bula", // Fijian
  "Aloha", // Hawaiian
  "Kia ora", // Maori
  "Haere mai", // Maori (alt)
  "Shalom", // Hebrew (alt)
  "Welkom", // Flemish
  "Marhaba",
  "Welcome" // Urdu (مرحبا)
];

  const [currentIndex, setCurrentIndex] = useState(0); // which word
  const [charIndex, setCharIndex] = useState(0); // which letter
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

 const typingSpeed = 150;
  const deletingSpeed = 100;
  const pause = 1000;
    
  useEffect(() => {
    const currentWord = welcomes[currentIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting → next word
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % welcomes.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);




  useEffect(() => {}, [displayedText]);
  return (
    <div className="hero">
        <div className="navBar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <div className="welcome">
            <h1> {displayedText}<span className="typerPointer">|</span></h1>
            <p>I'm <span id="dnaiel">Daniel</span> (AKA: Pouyan)</p>
        </div>


        <div className="heroImage">
        <div className="scene">
          <img className="avatar" src="/pfp.png" alt="Hero" />

          <div
            className="orbit"
            style={{ ["--r"]: "130px", ["--speed"]: "8s" }}
          >
            <div className="word" style={{ ["--angle"]: "0deg" }}>
              <div className="inner"><span>Motivate</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "45deg" }}>
              <div className="inner"><span>Create</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "90deg" }}>
              <div className="inner"><span>Ship</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "135deg" }}>
              <div className="inner"><span>Learn</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "180deg" }}>
              <div className="inner"><span>Code</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "225deg" }}>
              <div className="inner"><span>Share</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "270deg" }}>
              <div className="inner"><span>Grow</span></div>
            </div>

            <div className="word" style={{ ["--angle"]: "315deg" }}>
              <div className="inner"><span>Repeat</span></div>
            </div>
          </div>
        </div>
    <div className="status">
      <i className="fa-solid fa-circle" id="greenDot" style={{ color: "#12d339" }}></i>
      <span>Locked in</span>
    </div>
      </div>


    </div>
  )
}