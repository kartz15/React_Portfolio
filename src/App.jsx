import React from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <div className="is-preload">

      {/* Header */}
      <header id="header">
        <div className="top">
          <div id="logo">
            <span className="image avatar48"><img src="images/karthi.jpg" alt="" /></span>
            <h1 id="title">Karthika TS</h1>
            <p>Full Stack Developer</p>
          </div>
          <nav id="nav">
            <ul>
              <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
              <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
              <li><a href="#resume" id="resume-link"><span className="icon solid fa-file">Resume</span></a></li>
              <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
              <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="bottom">
          <ul className="icons">
            <li><a href="http://www.twitter.com" target='_blank' className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="http://www.facebook.com" target='_blank' className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/kartz15" target='_blank' className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a href="mailto:karthi.karthicool@gmail.com" target='_blank' className="icon solid fa-envelope"><span className="label">Email</span></a></li>
            <li><a href="https://www.linkedin.com/in/karthika-ts/"  target='_blank' className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main id="main">
        {/* Intro */}
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">Hi! I'm <strong>Karthika Thirukonda Sadasivam</strong>, a passionate <br />
              Full Stack Developer with expertise in modern web technologies.</h2>
              <p>Based in Troy, Michigan, I specialize in T-SQL, JavaScript, and full stack development, utilizing<br />
              frameworks like React.js and Node.js to create efficient and scalable applications.</p>
            </header>
            <footer>
              <a href="#portfolio" className="button scrolly">View My Work</a>
            </footer>
          </div>
        </section>

          {/* Portfolio */}
          <section id="portfolio" className="two">
            <div className="container">
              <header>
                <h2>Portfolio</h2>
              </header>
              <p>Here are some of my projects that I've developed and contributed to on GitHub. 
              Click on the images to view the projects.</p>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a href="https://github.com/kartz15/SBA_REACT_API" target="_blank" className="image fit">
                      <img src="images/Flipkart.png" alt="FlipKart Ecommerce" />
                    </a>
                    <header>
                      <h3>FlipKart Ecommerce</h3>
                      <p>A full-featured e-commerce application built using React.js and Node.js.</p>
                    </header>
                    <footer>
                      <a href="https://earnest-taiyaki-e5af4f.netlify.app/" target="_blank">View Live</a> | 
                      <a href="https://www.youtube.com/watch?v=LZpwqvTjOBg" target="_blank">Watch Video</a>
                    </footer>
                  </article>
                  <article className="item">
                    <a href="https://github.com/kartz15/CAPSTONE_RMS" target="_blank" className="image fit">
                      <img src="images/RMS.png" alt="Restaurant Management System" />
                    </a>
                    <header>
                      <h3>Restaurant Management System</h3>
                      <p>An application to manage restaurant operations, from orders to inventory.</p>
                    </header>
                    <footer>
                      <a href="https://your-live-link.com" target="_blank">View Live</a> | 
                      <a href="https://www.youtube.com/watch?v=NwBZfL0sFzw" target="_blank">Watch Video</a>
                    </footer>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a href="https://github.com/kartz15/SBA_MONGOOSE_TOYSTORE" target="_blank" className="image fit">
                      <img src="images/Toystore.png" alt="ToyStore Express" />
                    </a>
                    <header>
                      <h3>ToyStore Express</h3>
                      <p>An online store for toys, built using Mongoose and Express.js.</p>
                    </header>
                    <footer>
                      <a href="https://your-live-link.com" target="_blank">View Live</a> | 
                      <a href="https://www.youtube.com/watch?v=9C86IkTZ-M8&t=1s" target="_blank">Watch Video</a>
                    </footer>
                  </article>
                  <article className="item">
                    <a href="https://github.com/kartz15/SBA_Weather_APP_API" target="_blank" className="image fit">
                      <img src="images/WeatherApp.png" alt="Weather App" />
                    </a>
                    <header>
                      <h3>Weather App</h3>
                      <p>A simple weather application that fetches data from a weather API.</p>
                    </header>
                    <footer>
                      <a href="https://kartz15.github.io/SBA_Weather_APP_API/" target="_blank">View Live</a> | 
                      <a href="https://www.youtube.com/watch?v=hbPU8ijvtzA&feature=youtu.be" target="_blank">Watch Video</a>
                    </footer>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a href="https://github.com/kartz15/SBA_DIET_TRACK" target="_blank" className="image fit">
                      <img src="images/DietTracker.png" alt="Diet Tracker" />
                    </a>
                    <header>
                      <h3>Diet Tracker</h3>
                      <p>An app that helps users track their diet and nutritional intake.</p>
                    </header>
                    <footer>
                      <a href="https://kartz15.github.io/SBA_DIET_TRACK/" target="_blank">View Live</a> | 
                      <a href="https://www.youtube.com/watch?v=CJDO3RFFLB0" target="_blank">Watch Video</a>
                    </footer>
                  </article>
                  <article className="item">
                    <a href="https://github.com/kartz15/SPACE_BATTLE_GAME" target="_blank" className="image fit">
                      <img src="images/SpaceBattle.png" alt="Space Battle" />
                    </a>
                    <header>
                      <h3>Space Battle</h3>
                      <p>A fun space-themed game built with JavaScript and HTML5 canvas.</p>
                    </header>
                    <footer>
                      <a href="https://kartz15.github.io/SPACE_BATTLE_GAME/" target="_blank">View Live</a> | 
                      <a href="https://www.youtube.com/watch?v=CcK-OmFMTk0" target="_blank">Watch Video</a>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </section>


        {/* About Me */}
        {/* <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <a href="#" className="image featured"><img src="images/karthiprofile.jpg" alt="About Me" /></a>
          <p>
            I’m Karthika Thirukonda Sadasivam, a Full Stack Developer from Troy, Michigan, specializing in web development with a focus on creating seamless user experiences. With a Bachelor's degree in Information Technology and a certification in the MERN stack, I have a solid understanding of both front-end and back-end technologies.
          </p>
          <p>
            My experience includes optimizing SQL queries, developing reporting solutions, and managing data migration projects. I enjoy tackling challenges and continuously seek opportunities to enhance my skills and contribute to innovative projects.
          </p>
        </div>
      </section> */}
           {/* About Me */}
            <section id="about" className="three">
              <div className="container">
                <header>
                  <h2>About Me</h2>
                </header>
                <div className="image-container">
                  <img className="image featured" src="images/karthiprofile.jpg" alt="About Me" />
                  <div className="text-content">
                  <p>
                        I’m Karthika Thirukonda Sadasivam, a Full Stack Developer from Troy, Michigan, specializing in web development with a focus on creating seamless user experiences. With a Bachelor's degree in Information Technology and a certification in the MERN stack, I have a solid understanding of both front-end and back-end technologies.
                      </p>
                      <p>
                        My experience includes optimizing SQL queries, developing reporting solutions, and managing data migration projects. I enjoy tackling challenges and continuously seek opportunities to enhance my skills and contribute to innovative projects.
                      </p>
                  </div>
                </div>
              </div>
            </section>

          {/* Resume */}
          <section id="resume" className="three">
          <div className="container">
            <header>
              <h2>My Resume</h2>
            </header>
            <p>
              You can <a href="images/resume.pdf" target="_blank" rel="noopener noreferrer">view my resume here</a> or download it directly:
            </p>
            <p>
              <a href="images/resume.pdf" download>Download My Resume</a>
            </p>
          </div>
        </section>


        {/* Contact */}
         <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>
            <p>If you have any questions or want to get in touch, feel free to reach out!
               I’d love to hear from you.</p>
            <form method="post" action="#">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" required></textarea>
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </section> 

      </main>

      {/* Footer */}
      <footer id="footer">
        <ul className="copyright">
          <li>&copy; 2024 Karthika TS. All rights reserved.</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
