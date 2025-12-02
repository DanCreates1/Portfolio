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
                  <img src="tailwindCssLogo.png" alt="tailwind Css Logo" />
                  <i class="fa-brands fa-npm" style={{ color: "#CC3534" }}></i>

              </div>
              <a href="https://www.codeva.xyz"  target="_blank"><button>View Project</button></a>
            </div>

            <div className="card">
              <img src=" /projectsImg/cars.png" alt=""  />
              <h2>Cars</h2>
              <p>This was my frst React project which demonstrate my early React skills,
                  I made my own Data set for the Cars and soon I will realse it's own unique API
              </p>
              <div className="techStack">
              <i class="fa-brands fa-react"  style={{ color: "cyan" }}></i>
                  <i class="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
                  <i class="fa-brands fa-css3-alt" style={{ color: "#17f3ff" }}></i>
                  <i class="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                  <img src="tailwindCssLogo.png" alt="tailwind Css Logo" />
                  <i class="fa-brands fa-npm" style={{ color: "#CC3534" }}></i>
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
              <h2>First portfolio</h2>
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

            <div className="card">
              <img src=" /projectsImg/hackApathBot.png" alt=""  />
              <h2>My Path To Tech</h2>
              <p>Description of Project 1</p>
              <a href="https://github.com/Mypath2tech-admin/discord-bot"  target="_blank"><button>View Project</button></a>
            </div>
          </div>
        </section>
    )

}