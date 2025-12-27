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
            Grade 10 student in the IB program with a focus on coding, fitness, and continuous learning. 
            I enjoy building web applications that are practical and easy to use, while developing skills
            in web development through self-directed projects. Outside of coding, I'm training to become
            a certified lifeguard, working out regularly, and exploring new technologies. This portfolio
            highlights ongoing work and progress in both academics and personal development.
         </div>
      </div>
   </section>
   )
}