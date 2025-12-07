export default function Projects() {
    return(
        <section id="Projects">
        <div className="Projects">
          <h1>My Projects</h1>
          </div>

          <div className="projectCards">
           
            <div className="card">
              <img src=" /projectsImg/codeva.png" alt="Project Codeva picture"  />
              <h2>Codeva Front-end</h2>
              <p>Me and the Front-End team of the Codeva worked to gether to make this website live and ready for production</p>
              <div className="techStack">
                  <i class="fa-brands fa-react"  style={{ color: "cyan" }}></i>
                  <i class="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
                  <i class="fa-brands fa-css3-alt" style={{ color: "#17f3ff" }}></i>
                  <i class="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                  <img src="/ProgrammingIcons/tailwindCssLogo.png" alt="tailwind Css Logo" />
                  <i class="fa-brands fa-npm" style={{ color: "#CC3534" }}></i>

              </div>
              <a href="https://www.codeva.xyz"  target="_blank"><button>View Project</button></a>
            </div>
            
            <div className="card">
              <img src=" /projectsImg/ASL.png" alt=""  />
              <h2>AI Sign Language Detector</h2>
              <p>
                A self-trained and fully built AI tool that detects sign language letters
                using live hand-tracking, created to explore computer vision and machine learning.
              </p>
              <div className="techStack">
                  <img src="/ProgrammingIcons/python.png" alt="tailwind Css Logo" />
                  <img src="/ProgrammingIcons/scikitLearn.png" alt="scikitLearn logo" />
                  <img src="/ProgrammingIcons/numpy.png" alt="numpy" />
                  <img src="/ProgrammingIcons/Tensorflow_logo.svg.png" alt="Tensorflow logo" />
                  <img src="/ProgrammingIcons/mediaPipe.png" alt="" />
                  </div>
              <a href="https://cars-phi-ten.vercel.app"  target="_blank"><button>View Project</button></a>
            </div>

             <div className="card">
              <img src=" /projectsImg/revenda.png" alt=""  />
              <h2>Revenda</h2>
              <p>
                A clean and modern website I built for a web design agency.
                It highlights their services and branding with a fully responsive layout.
              </p>
               <div className="techStack">
                  <i class="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
                  <i class="fa-brands fa-css3-alt" style={{ color: "#17f3ff" }}></i>
                  <i class="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                  </div>
              <a href="https://rendeva.vercel.app"  target="_blank"><button>View Project</button></a>
            </div>

             <div className="card">
              <img src=" /projectsImg/oldPortfolio.png" alt=""  />
              <h2>Portfolio V1</h2>
              <p>
                My first ever portfolio website, where I learned the
                basics of web design, layout, and responsive pages.
              </p>
              <div className="techStack">
                  <i class="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
                  <i class="fa-brands fa-css3-alt" style={{ color: "#17f3ff" }}></i>
                  <i class="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                  </div>
              <a href="https://dancreates1.github.io/Pouyan"  target="_blank"><button>View Project</button></a>
            </div>

            <div className="card">
                <img src=" /projectsImg/portfolioV2.png" alt=""  />
                <h2>Portfolio V2</h2>
                <p>
                  A redesigned and self-made portfolio built to improve layout, 
                  performance, and modern styling while showcasing my latest projects
                </p>
                <div className="techStack">
                <i class="fa-brands fa-react"  style={{ color: "cyan" }}></i>
                    <i class="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
                    <i class="fa-brands fa-css3-alt" style={{ color: "#17f3ff" }}></i>
                    <i class="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                    <i class="fa-brands fa-npm" style={{ color: "#CC3534" }}></i>
                    </div>
                <a href="https://dancreates1.github.io/Dan-Creates/"  target="_blank"><button>View Project</button></a>
            </div>

      <div className="card">
              <img src=" /projectsImg/Dusic.png" alt=""  />
              <h2>Dusic</h2>
              <p>
                Dusic is a lightweight web tool that displays your current Spotify track in
                real time, designed to make sharing what you’re listening to simple and stylish.
              </p>
               <div className="techStack">
              <i class="fa-brands fa-react"  style={{ color: "cyan" }}></i>
                  <i class="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
                  <i class="fa-brands fa-css3-alt" style={{ color: "#17f3ff" }}></i>
                  <i class="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                  <i class="fa-brands fa-npm" style={{ color: "#CC3534" }}></i>
                  </div>
              <a href="https://github.com/DanCreates1/Dusic"  target="_blank"><button>View Project</button></a>
            </div>

            
          </div>
        </section>
    )

}