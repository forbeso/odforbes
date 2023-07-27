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
        <div className="two-boxes flex flex-col md:flex-row md:w-10/12 md:justify-between">
          <div className="mt-5 mb-5 md:w-1/2">
            <button className="btn border p-2 rounded-full w-64 mb-4">
              Welcome to Odaine's Portfolio
            </button>
            <h1 className="text-3xl font-bold md:text-6xl">
              YOUR <span>AGILE</span> FULL STACK DEVELOPER
            </h1>
            <button className="p-2 rounded-full w-64 mt-4 bg-washed-yellow mb-5">
              View Projects
            </button>
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
        <div className="flex flex-col mx-auto">
          <div className="mb-5 mt-5 px-5">
            <h2 className="text-washed-yellow text-center md:text-left font-extrabold  p-5 text-2xl md:text-4xl">
              PEER INTO MY CREATIVE MIND
            </h2>
          </div>
          <div className="text-2xl flex flex-col md:flex md:flex-row md:mx-auto text-white text-left px-5">
            <div className="mb-5 p-5">
              <p>
                Odaine Forbes is a passionate software developer with a knack
                for crafting innovative solutions to complex problems. With
                Python and JavaScript expertise, their work combines
                functionality with elegance.
              </p>
            </div>

            <div className="mt-5 md:mt-0 p-5">
              <p>
                Odaine is always eager to learn new technologies and frameworks
                while staying ahead of industry trends. Their work reflects
                their dedication to continuous improvement and their drive to
                create impactful software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Projects" className="bg-bland-white p-5">
        <div className="mb-4">
          <h1 className="p-5 font-semibold text-4xl">FEATURED PROJECTS</h1>

          <div className="flex flex-row ">
            <div className="w-full md:w-1/2 p-1">
              <img
                src={churchdeck}
                alt=""
                className="w-full h-auto md:max-w-full object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2 p-1">
              <img
                src={todoBlast}
                alt=""
                className="w-full h-auto md:max-w-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-row ">
            <div className="w-full md:w-1/2 p-1">
              <img
                src={jacovid}
                alt=""
                className="w-full h-auto md:max-w-full object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2 p-1">
              <img
                src={project}
                alt=""
                className="w-full h-auto md:max-w-full object-cover rounded-xl"
              />
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
              <i className="devicon-github-original-wordmark colored text-4xl"></i>
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
              <i className="devicon-github-original-wordmark colored text-4xl"></i>
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
              <i className="devicon-github-original-wordmark colored text-4xl"></i>
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
              <i className="devicon-github-original-wordmark colored text-4xl"></i>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 border-b-2 border-sky-500 p-2">
            <div className="w-16 md:w-32">
              <i className="devicon-python-plain-wordmark text-dark-blue text-5xl"></i>
            </div>
            <div className="w-40 md:w-96">
              <span className="font-bold">JaCovid</span> - visualizing the
              spread of Covid-19 across Jamaica's parishes
            </div>
            <div>
              <i className="devicon-github-original-wordmark colored text-4xl"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
