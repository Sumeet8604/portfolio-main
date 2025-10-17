import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <h2>Raj Konde</h2>
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
        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="My Photo" />
        <h1>RAJ KONDE</h1>
        <p>Frontend Developer | Tech Enthusiast | Problem Solver</p>
        <a href="#about" className="btn">About Me</a>
        <a
          href={`${process.env.PUBLIC_URL}/Pdf files/RajResume.pdf`}
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
          Hi, I’m <strong>Sumeet Mapari</strong>, a Front-End Developer and B.Tech CSE student.
          I am passionate about <strong>Web Development, IoT, and AI</strong>.
        </p>
        <p>
          My journey in technology began with curiosity about how websites function,
          which led me to work with <strong>HTML, CSS, JavaScript, React, and Python</strong>.
        </p>
        <p>
          I enjoy creating polished solutions and continuously improving my skills.
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
            <p>IoT-based project using ESP32, moisture sensors, and relays for automated plant watering.</p>
          </div>
          <div className="project-card">
            <h3>Regional Slang Recognition & Spell Checker</h3>
            <p>Flask + Python + NLP web app to recognize and correct regional slang words.</p>
          </div>
          <div className="project-card">
            <h3>Ultrasonic Car Sensor</h3>
            <p>Arduino-based project to detect obstacles and assist in parking with LCD & buzzer feedback.</p>
          </div>
          <div className="project-card">
            <h3>Hydro-Enhanced Trickle-Irrigation</h3>
            <p>Advanced irrigation system integrating IoT, smart scheduling, and energy-efficient pumping.</p>
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
            <img src={`${process.env.PUBLIC_URL}/images/ibm.png`} alt="Certificate 1" />
            <h3>Getting Started with Artificial Intelligence</h3>
            <a
              href={`${process.env.PUBLIC_URL}/Pdf files/GettingStartedwithArtificialIntelligence_Badge20240912-8-1r97te.pdf`}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              View PDF
            </a>
          </div>
          <div className="cert-card">
            <img src={`${process.env.PUBLIC_URL}/images/HTML.png`} alt="Certificate 2" />
            <h3>Full Stack Web Developer</h3>
            <a
              href={`${process.env.PUBLIC_URL}/Pdf files/Udemy - HTML JSP.pdf`}
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
        <p>Email: <b>raj.konde23@pcu.edu.in</b></p>
        <p>
          <a href="https://www.linkedin.com/in/raj-konde-886091293" target="_blank" rel="noreferrer">LinkedIn</a> |
          <a href="https://github.com/Rajkonde4" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Raj Konde. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
