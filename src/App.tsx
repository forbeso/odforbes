import React from "react";
import "./App.css";
import churchdeck from "./assets/churchdeck.png";
import project from "./assets/coding.jpeg";
import todoBlast from "./assets/todoBlast.png";
import jacovid from "./assets/jacovid.png";

function App() {
  return (
    <div className="App">
      <section className="sectionA flex items-center text-center md:text-left md:flex md:justify-center bg-calm-blue">
        <div className="mx-auto two-boxes flex flex-col md:flex-row md:w-10/12 md:justify-between">
          <div className="mt-5 mb-5 md:w-1/2">
            <button className="btn border p-2 rounded-full w-64 mb-4">
              Welcome to Odaine's Portfolio
            </button>
            <h1 className="text-6xl font-bold md:text-8xl font-press">
              YOUR <span>AGILE</span> FULL STACK DEVELOPER
            </h1>
            <a href="#Projects">
              <button className="p-2 rounded-full w-64 mt-4 bg-washed-yellow mb-5">
                View Projects
              </button>
            </a>
          </div>

          <div className="shape-box flex flex-col mt-5 p-3 md:w-1/2">
            <div className="w-100 flex flex-row justify-around mb-5">
              <div className="w-3/4 rounded-tr-full rounded-bl-full h-16 bg-washed-yellow"></div>
              <div className="w-16 border rounded-tr-full rounded-tl-full rounded-bl-full h-16"></div>
            </div>

            <div className="w-100 flex flex-row justify-around mb-4">
              <div className="w-1/4 border rounded-tr-full rounded-br-full rounded-bl-full"></div>
              <div className="w-1/4 border"></div>
              <div className="w-1/4 rounded-bl-full h-16 bg-washed-yellow"></div>
            </div>

            <div className="w-100 flex flex-row justify-around">
              <div className="w-16 bg-washed-yellow rounded-full"></div>
              <div className="w-1/2 rounded-tr-full rounded-tl-full rounded-bl-full h-16 bg-washed-yellow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionB md:h-50 md:flex md:justify-center bg-real-black">
        <div className="flex flex-col md:mx-auto md:w-3/4">
          <div className="mb-5 mt-5 px-5">
            <h2 className="text-washed-yellow text-center md:text-center font-extrabold  p-5 text-2xl md:text-4xl">
              PEER INTO MY CREATIVE MIND
            </h2>
          </div>
          <div className="text-2xl flex flex-col md:flex md:flex-row md:mx-auto text-white  px-5">
            <div className="mb-3 p-5 w-100 md:w-1/2">
              <p className="text-sm md:text-md lg:text-lg">
                Odaine Forbes is a full-stack agile developer with a strong
                track record of delivering high-quality, user-friendly web
                applications. I am proficient in a variety of web technologies,
                including React JS, Python, HTML, CSS, JavaScript, SQL, and
                NoSQL. I am also familiar with Agile methodologies and I am
                skilled in collaborating with cross-functional teams.
              </p>
            </div>

            <div className="mt-2 md:mt-0 p-5">
              <div className="flex flex-row">
                <div>
                  <i className="devicon-javascript-plain colored"></i>
                </div>
                <div>&nbsp; Vanilla Javascript</div>
              </div>
              <div className="flex flex-row">
                <div>
                  <i className="devicon-react-original colored"></i>
                </div>
                <div>&nbsp; React</div>
              </div>
              <div className="flex flex-row">
                <div>
                  <i className="devicon-typescript-plain colored"></i>
                </div>
                <div>
                  <p>&nbsp; TypeScript</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <i className="devicon-html5-plain colored"></i>
                </div>
                <div>
                  <p>&nbsp; HTML5</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <i className="devicon-bootstrap-plain colored"></i>
                </div>
                <div>
                  <p>&nbsp; Bootstrap</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <i className="devicon-tailwindcss-plain"></i>
                </div>
                <div>
                  <p>&nbsp; TailwindCSS</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <i className="devicon-python-plain colored"></i>
                </div>
                <div>
                  <p>&nbsp; Python</p>
                </div>
              </div>
            </div>

            <div className="mt-2 md:mt-0 p-5">
              <div className="flex flex-row">
                <div>
                  <i className="devicon-jest-plain colored"></i>
                </div>
                <div>
                  <p>&nbsp; Jest</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <i className="devicon-postgresql-plain-wordmark text-5xl"></i>
                </div>
              </div>

              <div className="">
                <div>
                  <i className="devicon-mysql-plain-wordmark colored text-6xl"></i>
                </div>
                {/* <div>
                  <p>&nbsp; MySQL</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Projects" className="bg-bland-white p-5">
        <div className="mb-5">
          <h1 className="p-5 font-semibold text-4xl text-center">
            FEATURED PROJECTS
          </h1>
          <div className="md:w-3/4 md:mx-auto">
            <div className="flex flex-row ">
              <div className="w-full md:w-1/4 p-1">
                <img
                  src={churchdeck}
                  alt="Screenshot of Churchdeck Landing Page"
                  className="w-full h-auto md:max-w-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/4 p-1">
                <img
                  src={todoBlast}
                  alt="Screenshot of Todo Web App"
                  className="w-full h-full md:max-w-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/4 p-1">
                <img
                  src={jacovid}
                  alt="Chloropleth map of jamaica showing spread of covid, recoveries, deaths"
                  className="w-full h-full md:max-w-full object-cover rounded-xl"
                />
              </div>

              <div className="w-full md:w-1/4 p-1">
                <img
                  src={project}
                  alt=""
                  className="w-full h-auto md:max-w-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="w-full md:w-1/4 p-1">
                <img
                  src={project}
                  alt=""
                  className="w-full h-auto md:max-w-full object-cover rounded-xl"
                />
              </div>

              <div className="w-full md:w-1/4 p-1">
                <img
                  src={project}
                  alt=""
                  className="w-full h-auto md:max-w-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/4 p-1">
                <img
                  src={project}
                  alt=""
                  className="w-full h-auto md:max-w-full object-cover rounded-xl"
                />
              </div>

              <div className="w-full md:w-1/4 p-1">
                <img
                  src={project}
                  alt=""
                  className="w-full h-auto md:max-w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-3/4 md:mx-auto">
          <div className="flex flex-row justify-between mb-4 border-b-2 border-sky-500 p-2">
            <div className="w-16 md:w-32">
              <i className="devicon-react-original-wordmark colored text-4xl"></i>
              <i className="devicon-postgresql-plain-wordmark colored text-4xl"></i>
            </div>
            <div className="w-40 md:w-96">
              <span className="font-bold">Churchdeck</span> - church membership
              made heavenly easy
            </div>
            <div>
              <a href="https://github.com/forbeso/churchdweb">
                <i className="devicon-github-original-wordmark colored text-4xl"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 border-b-2 border-sky-500 p-2">
            <div className="w-16 md:w-32">
              <i className="devicon-python-plain-wordmark text-dark-blue text-5xl"></i>
            </div>
            <div className="w-40 md:w-96">
              <span className="font-bold">Scrape&Sense</span> - a company
              brand/product sentiment analysis tool.
            </div>
            <div>
              <a href="https://github.com/forbeso/ScrapeandSense">
                <i className="devicon-github-original-wordmark colored text-4xl"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 border-b-2 border-sky-500 p-2">
            <div className="w-16 md:w-32">
              <i className="devicon-python-plain-wordmark text-dark-blue text-5xl"></i>
            </div>
            <div className="w-40 md:w-96">
              <span className="font-bold">Alrise</span> - Alarm Clock AI app
              allows you to wake up in a personalized and motivational way
            </div>
            <div>
              <a href="https://github.com/forbeso/AIrise">
                <i className="devicon-github-original-wordmark colored text-4xl"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 border-b-2 border-sky-500 p-2">
            <div className="w-16 md:w-32">
              <i className="devicon-react-original-wordmark colored text-4xl"></i>
              <i className="devicon-typescript-plain colored text-4xl"></i>
              {/* <i className="devicon-tailwindcss-original-wordmark colored text-6xl"></i> */}
            </div>
            <div className="w-40 md:w-96">
              <span className="font-bold">TodoBlast</span> - Your Ultimate Todo
              List Web App
            </div>
            <div>
              <a href="https://github.com/forbeso/TodoBlast">
                <i className="devicon-github-original-wordmark colored text-4xl"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 border-b-2  border-sky-500 p-2">
            <div className="w-16 md:w-32">
              <i className="devicon-python-plain-wordmark text-dark-blue text-5xl"></i>
            </div>
            <div className="w-40 md:w-96">
              <span className="font-bold">JaCovid</span> - visualizing the
              spread of Covid-19 across Jamaica's parishes
            </div>
            <div>
              <a href="https://github.com/forbeso/JaCovid">
                <i className="devicon-github-original-wordmark colored text-4xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 p-2 flex flex-col items-center">
          <div className="text-center mb-5">
            <h1 className="font-extrabold text-5xl md:text-8xl">
              GET IN TOUCH
            </h1>
          </div>
          <div className="w-100 md:w-1/2 text-center">
            <p>
              I would love to hear from you. Send a message to discuss potential
              projects, collaborations, or job opportunities.
            </p>
          </div>

          <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/odaine-forbes-a5454317a/">
              <i className="devicon-linkedin-plain-wordmark colored text-6xl md:text-8xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
