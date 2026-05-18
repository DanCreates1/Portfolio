import RubiksCube from "./RubiksCube.jsx";

export default function WhoAmI() {
  return (
    <section id="WhoAmI">
      <h2 className="WhoAmIHeading">
        Who Am <span className="WhoAmISpan">I</span>?
      </h2>
      <div className="WhoAmIContainer">
        <div className="rubiks-wrapper">
          <RubiksCube />
        </div>
        <div className="WhoAmIText">
          <p>
            Hello there! My name is Daniel. I&apos;m a Grade 10 student specializing in{" "}
            <span className="blueText">AI, automation and software engineering</span>.
          </p>
          <p>
            The vast majority of my skills have been acquired independently, through personal
            research and building projects from scratch. I am particularly passionate about topics
            such as <span className="blueText">machine learning</span>,{" "}
            <span className="blueText">computer vision</span>,{" "}
            <span className="blueText">neural networks</span>, and{" "}
            <span className="blueText">real-world AI applications</span>.
          </p>
          <p>
            Creating AI-based software and training and optimizing models is something I enjoy
            doing using tools such as <span className="blueText">Python</span>,{" "}
            <span className="blueText">TensorFlow</span>, <span className="blueText">OpenCV</span>{" "}
            and <span className="blueText">MediaPipe</span>. I always seek to learn more about new
            AI concepts and improve my skills through practice.
          </p>
          <p>
            This is the place where I publish my{" "}
            <span className="blueText">projects, experiments and work in AI</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
