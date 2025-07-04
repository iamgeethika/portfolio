import React, { useState, useEffect } from "react";
import "./App.css";
import edu from "./images/educ.png";
// Add imports at the top of your App.js
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import FlipCard from "./components/FlipCard";
import deansList from "./images/deansList.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import iiithLogo from "./images/iiith.jpeg";
import taLogo from "./images/TA.png";
import walmartLogo from "./images/walmart_logo.jpeg";
import CircularGallery from "./components/CircularGallery";
import ContactForm from "./components/ContactForm";
import GradientText from "./components/GradientText";

// Import project images
import greddiit from './images/greddit.png';
import cshell from './images/c_shell.png';
import redbus from './images/redbus.png';
import ctop from './images/ctop.jpeg';
import ds from './images/ds.png';
import dass from './images/dass.jpeg';
import esw from './images/esw.jpg';
import xv6 from './images/xv6.png';
import smai from './images/smai.jpg';
import nstse from './images/nstse.png';
import jee from './images/jee.png';
import ntse from './images/ntse.png';
import ssc from './images/ssc.jpeg';
// Project data array - make sure order matches the images in CircularGallery
const projectsData = [
  {
    id: 1,
    title: "Greddiit",
    description: "A Reddit-like social platform with features for posting, voting, and community management.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/iamgeethika/Greddiit",
    image: greddiit
  },
  {
    id: 2,
    title: "Custom C Shell",
    description: "A custom UNIX shell implementation in C with support for common shell commands and features.",
    technologies: ["C", "UNIX", "System Calls", "Process Management"],
    github: "https://github.com/iamgeethika/Shell",
    image: cshell
  },
  {
    id: 3,
    title: "RedBus Like DBMS",
    description: "A database management system for bus ticketing similar to RedBus with booking and scheduling features.",
    technologies: ["SQL", "Database Design", "Java", "JDBC"],
    github: "https://github.com/iamgeethika/RedBus",
    image: redbus
  },
  {
    id: 4,
    title: "Distributed Tracing System",
    description: "A system for monitoring and troubleshooting microservice-based distributed applications.",
    technologies: ["Go", "Microservices", "Docker", "Kubernetes"],
    github: "https://github.com/chnaveenin/distributed-tracing-system",
    image: ds
  },
  {
    id: 5,
    title: "cTOP",
    description: "A terminal-based system monitor similar to htop, displaying system resources and processes.",
    technologies: ["C", "ncurses", "System Programming"],
    github: "https://github.com/iamgeethika/ctop",
    image: ctop
  },
  {
    id: 6,
    title: "Automated Student Assessment",
    description: "Web application that automates student assessment based on classroom interactions and learning activities.",
    technologies: ["React", "Node.js", "MongoDB", "Machine Learning"],
    github: "https://github.com/iamgeethika/DASS_33",
    image: dass
  },
  {
    id: 7,
    title: "xv6",
    description: "Extended and modified xv6 operating system with additional features and improved scheduling.",
    technologies: ["C", "Assembly", "Operating Systems"],
    github: "https://github.com/iamgeethika/modified-xv6-riscv",
    image: xv6
  },
  {
    id: 8,
    title: "Indoor Air Quality Monitor",
    description: "IoT-based system for monitoring and analyzing indoor air quality with real-time alerts.",
    technologies: ["IoT", "Arduino", "React", "Data Visualization"],
    github: "https://github.com/iamgeethika/ESW",
    image: esw
  },
  {
    id: 9,
    title: "Neural Networks",
    description: "Implementation and exploration of various neural network architectures for machine learning tasks.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
    github: "https://github.com/iamgeethika/neural-networks",
    image: smai
  }
];

// Project Card Component
const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="technologies">
        <h3>Technologies Used:</h3>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btns btn-github">
          <FaGithub /> GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btns btn-demo">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

function App() {
  // State to track the currently selected project - start with the first project
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  // Add CSS for the project card
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .project-card {
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin: 30px auto;
        max-width: 800px;
        transition: all 0.3s ease;
      }
      
      .project-card h2 {
        color: #DC143C;
        margin-bottom: 15px;
        font-size: 28px;
      }
      
      .project-description {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: #333;
      }
      
      .technologies h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #555;
      }
      
      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 25px;
      }
      
      .tech-tag {
        background: #f3f3f3;
        color: #333;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
      }
      
      .project-links {
        display: flex;
        gap: 15px;
      }
      
      .btns {
       display: inline-flex;
       align-items: center;
       gap: 8px;
       padding: 10px 20px;
       border-radius: 8px;
       font-weight: 600;
       text-decoration: none;
       transition: all 0.2s ease;
       border: 2px solid #fd4766;
      }
      
      .btn-github {
        background: #24292e;
        border-color: transparent;
        color: white;
      }
      
      .btn-demo {
        background: #DC143C;
        color: white;
      }
      
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .btns:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      background: transparent;
      border-color: #fd4766;
      color: #fd4766;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Home Section */}
      <section className="hero">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href="https://drive.google.com/file/d/11xb56b_rrm2m8RB_bjPhQ5M4WW0GP-fW/view?usp=sharing" className="btn">
            Resume
          </a>
        </nav>

        <div className="content">
          <span className="title">Web Developer</span>
          <h1>
            Hello, I'm <span>Geethika</span>
          </h1>
          <p style={{ fontSize: "18px" }}>
            I'm a B.Tech graduate with a passion for technology and
            problem-solving. As a web developer, I craft responsive and
            user-friendly websites. I enjoy turning ideas into digital experiences
            using clean, efficient code. Eager to grow, I'm always learning new
            tools and frameworks.
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              alignItems: "left",
              gap: "15px",
            }}
          >
            <a
              href="https://www.linkedin.com/in/thota-geethika/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="#0077b5" />
            </a>
            <a
              href="mailto:thotageethika12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail size={30} color="#D44638" />
            </a>
            <a
              href="https://www.instagram.com/geethu_613/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="#E4405F" />
            </a>
            <a
              href="https://github.com/iamgeethika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} color="#000000" />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section - Now a separate section, not absolutely positioned */}
      <section id="education" className="education-section" style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        padding: "50px 0" // Add padding instead of absolute positioning
      }}>
        {/* Education Heading */}
        <Fade direction="down">
          {/* <span style={{
            fontSize: "2.5em",
            margin: "0 0 40px 0",
            textAlign: "center",
            color: "#DC143C",
            // fontFamily: "birthstone",
            background: "radial-gradient( rgba(255,105,180,0.4) 0%, rgba(255,20,147,0.1) 60%, rgba(0,0,0,0) 90%)",
          }}>
            Education
          </span> */}

          <GradientText
            colors={["#ff004f", "#ff6b6b", "#ff004f"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            fontSize="4em"
          >
            Education
          </GradientText>
        </Fade>

        {/* Container for the side-by-side layout */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {/* Left side with image */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade
              direction="left"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={edu}
                alt="Education Icon"
                style={{
                  width: "500px",
                  maxWidth: "100%",
                }}
              />
            </Fade>
          </div>

          {/* Right side with education details */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              paddingLeft: "5px",
              gap: "20px",
            }}
          >
            <Fade
              direction="right"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* FlipCard Component for Education */}
              <FlipCard
                backImage={deansList}
                backImageAlt="My Deans List Image"
                frontContent={
                  <>
                    <h2>International Institute of Information Technology, Hyderabad</h2>
                    <p>Bachelor of Technology in Computer Science</p>
                    <p>2021 - 2025</p>
                    <p className="highlight">GPA: 8.44</p>
                  </>
                }
              />
              <div>
                <li>
                  <p style={{ marginTop: "10px" }}>
                    My academic background encompasses foundational computer science disciplines, including data systems, algorithms, software design and analysis, distributed systems, and operating systems. I have also pursued specialized studies in statistical methods for artificial intelligence.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    I was honoured with <b>Deans List 1</b> in Monsoon 2023 for Academic Excellence.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    I also worked as a <b>Teaching Assistant</b> for Linear Algebra and Algorithm Analysis and Design courses.
                  </p>
                </li>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <center id="experience">
        <Fade direction="down">
          <GradientText
            colors={["#ff004f", "#ff6b6b", "#ff004f"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            fontSize="4em"
          >
            Experience
          </GradientText>
        </Fade>

        {/* <p style={{fontSize: "20px"}}>
          Here's a look at the hands-on experiences and internships that have shaped my growth as a developer—turning ideas into impact, one project at a time.
        </p> */}
      </center>

      <section className="experience-section" style={{ background: "radial-gradient( rgba(255,105,180,0.4) 0%, rgba(255,20,147,0.1) 60%, rgba(0,0,0,0) 90%)" }}>


        <div>
          <VerticalTimeline animated={true} >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="January 2023 - April 2023"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={iiithLogo}
                  alt="Raj Reddy Center"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="Raj Reddy Center"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">Raj Reddy Center</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Full Stack Developer Intern
                </h4>
              </b>
              <p>
                As a team of 4 started developing a web application that automates the student assessment based on the
                student-teacher interactions during class. It starts with basic MCQ's and True/False, short answer questions and further
                expand the work to long answer questions.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jan 2024 - May 2024"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={taLogo}
                  alt="TA Logo"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="TA-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  IIITH - Linear Algebra
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Teaching Assistant
                </h4>
              </b>
              <p>
                Worked as a Teaching Assistant for the course Linear Algebra
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="May 2024 - July 2024"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={walmartLogo}
                  alt="Walmart"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="Walmart-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">Walmart</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Software Developer Intern
                </h4>
              </b>
              <p>
                Developed a Performance dashboard application from scratch to analyze the impact of Looper Pro vs. Looper,
                which are CI platforms developed by Walmart with Looper pro being an advanced version of Looper. Also generated job
                reports at various levels.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Aug 2024 - Dec 2024"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={taLogo}
                  alt="TA Logo"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="TA-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  IIITH - Algorithm Analysis and Design
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Teaching Assistant
                </h4>
              </b>
              <p>
                Worked as a Teaching Assistant for the course Algorithm Analysis and Design
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jan 2024 - Dec 2024"
              iconStyle={{ boxShadow: "none" }}
              icon={
                <img
                  src={iiithLogo}
                  alt="IIITH Logo"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="iiith-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  IIITH - Smart City Research Lab
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Developer
                </h4>
              </b>
              <p>I worked at the Smart City Research Center, IIIT Hyderabad,
                where I contributed to enhancing and testing the ctOP platform.
                My responsibilities included upgrading the user interface, implementing
                a subscription feature across both the frontend and backend, migrating the system from OM2M to Mobius,
                conducting tests using SQLite3, and compiling a comprehensive test report.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jan 2025 - May 2025"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={taLogo}
                  alt="TA Logo"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="TA-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  IIITH - Linear Algebra
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Teaching Assistant
                </h4>
              </b>
              <p>
                Worked as a Teaching Assistant for the course Linear Algebra
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="July 2025 - Present"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={walmartLogo}
                  alt="Walmart"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="Walmart-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">Walmart</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Software Developer 
                </h4>
              </b>
              <p>
                Currently working as a Software Developer at Walmart, focusing on enhancing the performance and scalability of internal tools.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>

      <br></br>
      <br></br>

      <center id="projects">
        <Fade direction="down">
          {/* <span style={{
            fontSize: "2.5em",
            margin: "0 0 40px 0",
            textAlign: "center",
            color: "#DC143C",
            // fontFamily: "birthstone",
            background: "radial-gradient( rgba(255,105,180,0.4) 0%, rgba(255,20,147,0.1) 60%, rgba(0,0,0,0) 90%)",
          }}>
            Projects
          </span> */}
          <GradientText
            colors={["#ff004f", "#ff6b6b", "#ff004f"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            fontSize="4em"
          >
            Projects
          </GradientText>
        </Fade>
      </center>

      <section className="projects-section">
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            bend={3}
            textColor="black"
            borderRadius={0.05}
            projects={projectsData}
            onSelectProject={setSelectedProject}
          />
        </div>

        {/* Project Details Card */}
        <div className="project-details-container">
          <Fade direction="up">
            <ProjectCard project={selectedProject} />
          </Fade>
        </div>
      </section>

      <br></br>


      <center id="awards">
        <Fade direction="down">
          {/* <span style={{
            fontSize: "2.5em",
            margin: "0 0 40px 0",
            textAlign: "center",
            color: "#DC143C",
            // fontFamily: "birthstone",
            background: "radial-gradient( rgba(255,105,180,0.4) 0%, rgba(255,20,147,0.1) 60%, rgba(0,0,0,0) 90%)",
          }}>
            Achievements
          </span> */}
          <GradientText
            colors={["#ff004f", "#ff6b6b", "#ff004f"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            fontSize="4em"
          >
            Achievements
          </GradientText>
        </Fade>
      </center>

      <section className="awards-section" style={{ background: "radial-gradient( rgba(255,105,180,0.4) 0%, rgba(255,20,147,0.1) 60%, rgba(0,0,0,0) 90%)" }}>


        <div>
          <VerticalTimeline animated={true} >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="January 2023 - April 2023"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={iiithLogo}
                  alt="IIITH"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="IIITH"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">Deans List 1</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  Deans List 1
                </h4> */}
              </b>
              <p>
                I was awarded with <b>Deans List 1</b> in Monsoon 2023 for Academic Excellence.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jan 2025 - May 2025"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={jee}
                  alt="JEE"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="TA-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  JEE Mains
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  Teaching Assistant
                </h4> */}
              </b>
              <p>
                Secured 99.77 percentile in JEE Mains 2021
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jan 2024 - May 2024"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={ssc}
                  alt="IPE Logo"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="TA-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                {/* <h3 className="vertical-timeline-element-title">
                  Aditya Junior College
                </h3> */}
                <h4 className="vertical-timeline-element-subtitle">
                  IPE
                </h4>
              </b>
              <p>
                Secure State 2nd rank in Intermediate Public Examination (IPE) in 2021 with a score of 990/1000.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="May 2025"
              iconStyle={{ boxShadow: "none" }}
              icon={
                <img
                  src={nstse}
                  alt="NSTSE Logo"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="iiith-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  NSTSE
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  Btech in Computer Science and Engineering
                </h4> */}
              </b>
              <p>Secured State 1st rank in <b>NSTSE</b> (National Level Science Talent Search Examination) in 2019.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Aug 2024 - Dec 2024"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={ntse}
                  alt="NTSE Logo"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="TA-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">
                  NTSE
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  NTSE
                </h4> */}
              </b>
              <p>
                Awareded with <b>NTSE</b> (National Talent Search Examination) scholarship during 10th grade in 2019
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="May 2024 - July 2024"
              iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
              icon={
                <img
                  src={ssc}
                  alt="SSC Logo"
                  // make it larger
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  className="Walmart-logo"
                />
              }
              shadow={true}
              dateClassName="text-black font-bold text-lg"
            >
              <b>
                <h3 className="vertical-timeline-element-title">10th Grade</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  10th Grade
                </h4> */}
              </b>
              <p>
                Perfect score in 10th grade with a score of 10/10 CGPA.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </section>

      <section>
        <div id="contact">
          <ContactForm />
        </div>
      </section>

      <div className="made-with-love">
        Made with <span className="heart">❤️</span> by Geethika
      </div>

    </div>
  );
}

export default App;