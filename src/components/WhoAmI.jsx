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
            Hello there! My name is Daniel. I&apos;m a Grade 10 student specializing in AI,
            automation and software engineering.
          </p>
          <p>
            The vast majority of my skills have been acquired independently, through personal
            research and building projects from scratch. I am particularly passionate about topics
            such as machine learning, computer vision, neural networks, and real-world AI
            applications.
          </p>
          <p>
            Creating AI-based software and training and optimizing models is something I enjoy
            doing using tools such as Python, TensorFlow, OpenCV and MediaPipe. I always seek to
            learn more about new AI concepts and improve my skills through practice.
          </p>
          <p>
            This is the place where I publish my projects, experiments and work in AI.
          </p>
        </div>
      </div>
    </section>
  );
}
