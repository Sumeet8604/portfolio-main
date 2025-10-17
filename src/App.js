import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <h2>Sumeet Mapari</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
          alt="Sumeet Mapari"
        />
        <h1>SUMEET MAPARI</h1>
        <p>Front-End Developer | Tech Enthusiast | IoT Innovator</p>
        <a href="#about" className="btn">About Me</a>
        <a
          href={`${process.env.PUBLIC_URL}/Pdf files/SumeetMapari_Resume.pdf`}
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Sumeet Mapari</strong>, a passionate Front-End Developer and
          Computer Science Engineering student at Pimpri Chinchwad University.
          I’m deeply interested in <strong>Web Development, IoT, and Artificial Intelligence</strong>.
        </p>
        <p>
          My tech journey started with curiosity about how digital systems work.
          Since then, I’ve developed a love for crafting responsive, user-friendly
          web applications using technologies like <strong>HTML, CSS, JavaScript, React, and Python</strong>.
        </p>
        <p>
          I’m driven by creativity and problem-solving — always looking to
          build projects that make real-world impact.
        </p>
        <div className="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Python</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Smart Irrigation System</h3>
            <p>
              An IoT-based project using ESP32, soil moisture sensors, and relays for
              smart automated plant watering.
            </p>
          </div>
          <div className="project-card">
            <h3>Regional Slang Recognition & Spell Checker</h3>
            <p>
              A Flask + Python + NLP web app that detects and corrects regional slang
              words, enhancing text understanding.
            </p>
          </div>
          <div className="project-card">
            <h3>Ultrasonic Car Sensor</h3>
            <p>
              Arduino-based smart sensor to detect obstacles for vehicles and assist in parking
              with buzzer and LCD feedback.
            </p>
          </div>
          <div className="project-card">
            <h3>Hydro-Enhanced Trickle Irrigation</h3>
            <p>
              An advanced IoT system integrating automated water scheduling and energy-efficient pumping mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Institute / Board</th>
              <th>Academic Year</th>
              <th>Result / SGPA</th>
              <th>Cumulative CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech CSE - Semester 4</td>
              <td>Pimpri Chinchwad University</td>
              <td>2024-25</td>
              <td>9.29</td>
              <td>8.55</td>
            </tr>
            <tr>
              <td>HSC</td>
              <td>Kamalnayan Bajaj Junior College</td>
              <td>2021</td>
              <td>82%</td>
              <td>82%</td>
            </tr>
            <tr>
              <td>SSC</td>
              <td>PBEMS</td>
              <td>2019</td>
              <td>93%</td>
              <td>93%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <h2>Certifications</h2>
        <div className="certifications-container">
          <div className="cert-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/ibm.png`}
              alt="IBM Certificate"
            />
            <h3>Getting Started with Artificial Intelligence (IBM)</h3>
            <a
              href={`${process.env.PUBLIC_URL}/Pdf files/GettingStartedwithAI_Sumeet.pdf`}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              View PDF
            </a>
          </div>
          <div className="cert-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/HTML.png`}
              alt="Web Dev Certificate"
            />
            <h3>Full Stack Web Developer (Udemy)</h3>
            <a
              href={`${process.env.PUBLIC_URL}/Pdf files/UdemyWebDev_Sumeet.pdf`}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              View PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <b>sumeetmapari101@gmail.com</b></p>
        <p>
          <a
            href="https://www.linkedin.com/in/sumeet-mapari"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Sumeet8604"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Sumeet Mapari. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
