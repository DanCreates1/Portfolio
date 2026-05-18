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
            I&apos;m Daniel, an IBCP student from Ontario focused on building at the intersection of{" "}
            <span className="blueText">web development and AI</span>. I did not start with a big
            technical background, so most of my progress came from{" "}
            <span className="blueText">trial, iteration, and consistency</span> rather than shortcuts.
          </p>
          <p>
            What keeps me motivated is turning ideas into things people can actually use. I enjoy
            working on <span className="blueText">AI-powered tools</span>, responsive interfaces, and
            projects where I can improve both logic and design. Every build helps me strengthen{" "}
            <span className="blueText">problem-solving, product thinking, and execution</span>.
          </p>
          <p>
            Outside of tech, I train consistently and work toward lifeguard certification. That
            routine reinforces discipline, and I bring that same approach into coding by showing up
            daily, shipping updates, and learning from mistakes. For me, growth is about{" "}
            <span className="blueText">long-term consistency over short-term hype</span>.
          </p>
          <p>
            This portfolio is my public log of what I am{" "}
            <span className="blueText">building, learning, and improving</span>. My direction is
            clear: keep sharpening my skills and build projects that combine{" "}
            <span className="blueText">practical AI with clean user experience</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
