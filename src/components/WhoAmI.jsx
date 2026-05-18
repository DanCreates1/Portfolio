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
            Hi! My name is Daniel. I am a Grade 10 IB student interested in coding, fitness, and
            learning new things over time. I did not grow up knowing how to code or build
            websites, and most of what I know now <span id="blueText">comes from trial and error</span>{" "}
            plus many hours building projects.
          </p>
          <p>
            As I learned more, I realized I enjoy writing code and{" "}
            <span id="blueText">building websites</span> that solve real problems. I usually start
            with a basic idea, then improve it by fixing bugs, adjusting layouts, and adding
            features. Each project helps me <span id="blueText">understand systems deeper</span>.
          </p>
          <p>
            Outside of coding, I am training to become a <span id="blueText">certified lifeguard</span>{" "}
            and keep a consistent workout routine. Both require discipline and showing up every
            day. That mindset carries over whenever I am stuck on a problem.
          </p>
          <p>
            This website is where I track what I am <span id="blueText">building</span>, what I am{" "}
            <span id="blueText">learning</span>, and how my skills are{" "}
            <span id="blueText">improving</span> over time.
          </p>
        </div>
      </div>
    </section>
  );
}
