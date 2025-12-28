import RubiksCube from "./RubiksCube.jsx";
export default function WhoAmI() {
   return (
   <section id="WhoAmI">
      <h2 className="WhoAmIHeading">Who Am <span className="WhoAmISpan">I</span> ?</h2>
      <div className="WhoAmIContainer">
         <div className="rubiks-wrapper">
            <RubiksCube />
         </div>
         <div className="WhoAmIText">
            <p>
            Hi! My name is Daniel. I’m a Grade 10 IB student interested in coding,
            fitness, and learning new things over time. I didn’t grow up knowing how
            to code or build websites—most of what I know now <span id="blueText">comes from trial and error</span>
            and spending a lot of time working on projects.
            </p>
            <p>
               As I learned more, I realized I enjoy writing code and building websites
               that actually do something useful. I often start with a basic idea, then
               slowly improve it by fixing bugs, changing layouts, and adding features.
               Some things work right away, others don’t, but each project helps me <span id="blueText">understand how things work</span> a bit better.
            </p>
            <p>
               Outside of coding, I’m training to become a certified lifeguard and keep
               a consistent workout routine. Both require showing up regularly and staying
               focused, even when things get tiring. That same mindset carries over when I’m
               stuck on a problem or learning something new.
            </p>
            <p>
               This website is a place where I keep track of what I’m building, what I’m learning,
               and how my skills are improving over time—both in school and outside of it.
            </p>
         </div>
      </div>
   </section>
   )
}