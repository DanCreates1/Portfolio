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

              </div>
              <a href="https://www.codeva.xyz"  target="_blank"><button>View Project</button></a>
            </div>

            <div className="card">
              <img src=" /projectsImg/cars.png" alt=""  />
              <h2>Cars</h2>
              <p>Description of Project 1</p>
              <a href="https://cars-phi-ten.vercel.app"  target="_blank"><button>View Project</button></a>
            </div>

             <div className="card">
              <img src=" /projectsImg/revenda.png" alt=""  />
              <h2>Revenda</h2>
              <p>Description of Project 1</p>
              <a href="https://rendeva.vercel.app"  target="_blank"><button>View Project</button></a>
            </div>

             <div className="card">
              <img src=" /projectsImg/oldPortfolio.png" alt=""  />
              <h2>Project 1</h2>
              <p>Description of Project 1</p>
              <a href="https://dancreates1.github.io/Pouyan"  target="_blank"><button>View Project</button></a>
            </div>

      <div className="card">
              <img src=" /projectsImg/Dusic.png" alt=""  />
              <h2>Dusic</h2>
              <p>Description of Project 1</p>
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