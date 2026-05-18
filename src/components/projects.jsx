import { useEffect, useState } from "react";

const projects = [
  {
    title: "Codeva Front-end",
    description:
      "I worked with the Codeva front-end team to ship a production-ready website with a polished UI and clean component structure.",
    image: "/projectsImg/codeva.png",
    alt: "Codeva project screenshot",
    link: "https://www.codeva.xyz",
    tech: [
      { type: "icon", className: "fa-brands fa-react", color: "cyan" },
      { type: "icon", className: "fa-brands fa-square-js", color: "yellow" },
      { type: "icon", className: "fa-brands fa-css3-alt", color: "#17f3ff" },
      { type: "icon", className: "fa-brands fa-html5", color: "#e34c26" },
      { type: "image", src: "/ProgrammingIcons/tailwindCssLogo.png", alt: "Tailwind CSS logo" },
      { type: "icon", className: "fa-brands fa-npm", color: "#CC3534" },
    ],
  },
  {
    title: "AI Sign Language Detector",
    description:
      "A self-trained AI tool that detects sign language letters with live hand-tracking to explore computer vision and machine learning.",
    image: "/projectsImg/ASL.png",
    alt: "AI sign language detector screenshot",
    link: "https://cars-phi-ten.vercel.app",
    tech: [
      { type: "image", src: "/ProgrammingIcons/python.png", alt: "Python logo" },
      { type: "image", src: "/ProgrammingIcons/scikitLearn.png", alt: "Scikit-learn logo" },
      { type: "image", src: "/ProgrammingIcons/numpy.png", alt: "NumPy logo" },
      { type: "image", src: "/ProgrammingIcons/Tensorflow_logo.svg.png", alt: "TensorFlow logo" },
      { type: "image", src: "/ProgrammingIcons/mediaPipe.png", alt: "MediaPipe logo" },
    ],
  },
  {
    title: "AI Clash Royale Tutor",
    description:
      "An assistant that analyzes gameplay and suggests strategy in real time to improve deck usage and match decisions.",
    image: "/projectsImg/ClashRoyaleAITutor.png",
    alt: "AI Clash Royale tutor screenshot",
    link: "https://github.com/DanCreates1/Dusic",
    tech: [
      { type: "icon", className: "fa-brands fa-react", color: "cyan" },
      { type: "icon", className: "fa-brands fa-square-js", color: "yellow" },
      { type: "icon", className: "fa-brands fa-css3-alt", color: "#17f3ff" },
      { type: "icon", className: "fa-brands fa-html5", color: "#e34c26" },
      { type: "icon", className: "fa-brands fa-npm", color: "#CC3534" },
    ],
  },
  {
    title: "Revenda",
    description:
      "A modern marketing site I built for a web design agency with clean branding and responsive layouts.",
    image: "/projectsImg/Revenda.png",
    alt: "Revenda website screenshot",
    link: "https://rendeva.vercel.app",
    tech: [
      { type: "icon", className: "fa-brands fa-square-js", color: "yellow" },
      { type: "icon", className: "fa-brands fa-css3-alt", color: "#17f3ff" },
      { type: "icon", className: "fa-brands fa-html5", color: "#e34c26" },
    ],
  },
  {
    title: "Portfolio V1",
    description:
      "My first portfolio website where I learned core web layout and responsive design fundamentals.",
    image: "/projectsImg/oldPortfolio.png",
    alt: "Portfolio version 1 screenshot",
    link: "https://dancreates1.github.io/Pouyan",
    tech: [
      { type: "icon", className: "fa-brands fa-square-js", color: "yellow" },
      { type: "icon", className: "fa-brands fa-css3-alt", color: "#17f3ff" },
      { type: "icon", className: "fa-brands fa-html5", color: "#e34c26" },
    ],
  },
  {
    title: "Portfolio V2",
    description:
      "A redesigned portfolio focused on improved layout, performance, and cleaner project presentation.",
    image: "/projectsImg/portfolioV2.png",
    alt: "Portfolio version 2 screenshot",
    link: "https://dancreates1.github.io/Dan-Creates/",
    tech: [
      { type: "icon", className: "fa-brands fa-react", color: "cyan" },
      { type: "icon", className: "fa-brands fa-square-js", color: "yellow" },
      { type: "icon", className: "fa-brands fa-css3-alt", color: "#17f3ff" },
      { type: "icon", className: "fa-brands fa-html5", color: "#e34c26" },
      { type: "icon", className: "fa-brands fa-npm", color: "#CC3534" },
    ],
  },
  {
    title: "Dusic",
    description:
      "A lightweight web app that shows your currently playing Spotify track in real time for simple and stylish sharing.",
    image: "/projectsImg/Dusic.png",
    alt: "Dusic app screenshot",
    link: "https://github.com/DanCreates1/Dusic",
    tech: [
      { type: "icon", className: "fa-brands fa-react", color: "cyan" },
      { type: "icon", className: "fa-brands fa-square-js", color: "yellow" },
      { type: "icon", className: "fa-brands fa-css3-alt", color: "#17f3ff" },
      { type: "icon", className: "fa-brands fa-html5", color: "#e34c26" },
      { type: "icon", className: "fa-brands fa-npm", color: "#CC3534" },
    ],
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = projects.length;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const autoplayId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(autoplayId);
  }, [totalSlides]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section id="Projects" className="Projects">
      <h1>My Projects</h1>

      <div className="projectsSlider" aria-label="Projects slider">
        <button
          className="projectNavButton"
          type="button"
          aria-label="Previous project"
          onClick={goToPrev}
        >
          <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>

        <div className="projectViewport">
          <div className="projectTrack" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {projects.map((project) => (
              <article className="card projectSlide" key={project.title}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="techStack">
                  {project.tech.map((item, index) => {
                    if (item.type === "image") {
                      return <img key={`${project.title}-${index}`} src={item.src} alt={item.alt} />;
                    }

                    return (
                      <i
                        key={`${project.title}-${index}`}
                        className={item.className}
                        style={{ color: item.color }}
                        aria-hidden="true"
                      ></i>
                    );
                  })}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </article>
            ))}
          </div>
        </div>

        <button
          className="projectNavButton"
          type="button"
          aria-label="Next project"
          onClick={goToNext}
        >
          <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      <div className="projectDots" role="tablist" aria-label="Select project slide">
        {projects.map((project, index) => (
          <button
            key={project.title}
            className={`projectDot${currentSlide === index ? " active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            type="button"
            aria-label={`Go to ${project.title}`}
            aria-selected={currentSlide === index}
            role="tab"
          ></button>
        ))}
      </div>
    </section>
  );
}
