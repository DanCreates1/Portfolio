export default function WhoAmI() {
   console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);

   return (
      
      <section id="WhoAmI">
    <div className="WhoAmI">
      <h1>Who Am <span>I</span>?</h1>
      <p>
        Grade 10 student in the IB program with a focus on coding, fitness, and continuous learning. 
        I enjoy building web applications that are practical and easy to use, while developing skills in web development through self-directed projects.
        Outside of coding, I'm training to become a certified lifeguard, working out regularly, and exploring new technologies.
        This portfolio highlights ongoing work and progress in both academics and personal development.
       </p>
      </div>
      </section>
   )
}