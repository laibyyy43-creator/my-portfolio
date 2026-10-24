import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "jQuery",
  "Responsive Design",
  "Website Deployment",
  "Client Handling",
];

const projects = [
  {
    number: "01",
    name: "Marshmellow",
    type: "E-commerce Website",
    description:
      "A baby girls' fashion website featuring dress collections, product cards, and shopping cart functionality.",
    tech: "React · CSS · Laravel",
    link: "https://devmarshmellow.vercel.app/",
    button: "View Live Website",
  },
  {
    number: "02",
    name: "IK PIZZA",
    type: "Restaurant Website",
    description:
      "A restaurant website project focused on pizza menu presentation, responsive design, and customer ordering.",
    tech: "React · CSS · JavaScript",
    link: "https://ik-pizza.vercel.app/",
    button: "View Live Website",
  },
];

const experience = [
  {
    role: "Visa Consultant",
    company: "Rapid Line Immigration Services",
    date: "2025–2026",
    details:
      "Guided clients through study, work, and visit visa processes; organized documents, prepared application forms, and managed client follow-ups.",
  },
  {
    role: "Appointment Setter",
    company: "Renewable Energy Association Project — USA",
    date: "September–November 2024 · 2 months",
    details:
      "Worked remotely, contacted US customers about solar energy, scheduled appointments, and maintained customer records.",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          Laibaaly<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk ↗
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">WEB DEVELOPER · PORTFOLIO</p>

            <h1>
              Turning ideas into <span>beautiful</span> websites.
            </h1>

            <p className="hero-description">
              Hi, I'm Laibaaly — an aspiring web developer who loves creating
              clean, user-friendly digital experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore My Work ↗
              </a>

              <a className="secondary-button" href="#about">
                More About Me
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              Open to learning and new opportunities
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle"></div>

            <div className="art-card">
              <span className="art-sparkle">✳</span>
              <p className="art-small">CREATIVE DEVELOPER</p>

              <h2>
                Design.
                <br />
                Develop.
                <br />
                <span>Dream.</span>
              </h2>

              <div className="art-line"></div>
              <p className="art-bottom">HTML · CSS · REACT</p>
            </div>

            <span className="floating-star star-one">✦</span>
            <span className="floating-star star-two">✳</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <p className="eyebrow">A LITTLE INTRODUCTION</p>
          <h2 className="section-title">Curious mind, creative heart.</h2>

          <div className="about-grid">
            <p className="about-lead">
              I'm a motivated web development learner who enjoys turning ideas
              into practical websites and learning something new with every
              project.
            </p>

            <div className="about-details">
              <p>
                My background in consulting and customer communication has
                helped me develop teamwork, time management, communication, and
                problem-solving skills.
              </p>

              <p>
                I'm currently pursuing a two-year BSCS (ADP) program and
                building my web development skills through practical projects.
              </p>

              <p className="location">⌖ Lahore, Pakistan</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2 className="section-title">My skills & tools.</h2>

          <p className="section-intro">
            Technical and professional skills I'm developing and using in my
            work.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className="soft-skills">
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Time Management</span>
            <span>Client Support</span>
            <span>Appointment Setting</span>
            <span>Inbound & Outbound Calling</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="section-title">Projects I'm proud of.</h2>

          <p className="section-intro">
            A few projects from my web development journey.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">↗</span>
                </div>

                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.button} ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience section" id="experience">
          <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>
          <h2 className="section-title">Experience that shaped me.</h2>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-dot"></div>

                <div className="timeline-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>

                  <span className="date">{item.date}</span>
                </div>

                <p className="experience-description">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education section" id="education">
          <p className="eyebrow">LEARNING & GROWING</p>
          <h2 className="section-title">Education.</h2>

          <div className="education-grid">
            <article className="education-card">
              <span className="education-icon">✳</span>
              <h3>Hafiz-e-Quran</h3>
              <p>Quran Memorization</p>
              <span className="education-date">Completed</span>
            </article>

            <article className="education-card">
              <span className="education-icon">✳</span>
              <h3>Web Development Certificate</h3>
              <p>
                NAVTTC — National Vocational and Technical Training Commission
              </p>
              <span className="education-date">Completed</span>
              <p className="marks">Frontend Web Development Training</p>
            </article>

            <article className="education-card">
              <span className="education-icon">✳</span>
              <h3>BSCS (ADP) — 2-Year Program</h3>
              <p>APWA Graduate College for Women</p>
              <span className="education-date">Currently Pursuing</span>
            </article>

            <article className="education-card">
              <span className="education-icon">✳</span>
              <h3>Intermediate</h3>
              <p>Fatima Jinnah College, Lahore</p>
              <span className="education-date">2023–2024 · Completed</span>
              <p className="marks">Marks: 65.83%</p>
            </article>
          </div>

          <div className="language-row">
            <strong>Languages</strong>
            <span>English</span>
            <span>Urdu</span>
            <span>Punjabi</span>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's create something <span>meaningful.</span>
          </h2>

          <p>
            Interested in my work or want to discuss a website project? I'd love
            to hear from you.
          </p>

          <a className="primary-button" href="mailto:laibyyy43@gmail.com">
            Email Me ↗
          </a>

          <p className="contact-email">laibyyy43@gmail.com</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="logo" href="#home">
          Laibaaly<span>.</span>
        </a>

        <p>Designed & built with care by Laiba.</p>

        <p>© {new Date().getFullYear()} · All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
