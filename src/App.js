import "./App.css";
import NavBar from "./components/NavBar";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <LeftSideBar />
      <LeftSideBar position="right" />
      <main>
        <section className="content">
          <p>Hi, my name is</p>
          <h1 className="name">Bhuvnesh Sharma.</h1>
          <h1>I build things for the web</h1>
          <p className="description">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <a className="link" href="#">
              Innovaccer
            </a>
            .
          </p>
          <div>
            <a href="#" className="button">
              Check out my projects
            </a>
          </div>
        </section>
        <section className="about_me">
          <div className="header">
            <h2>About Me</h2>
            <div className="seperator"></div>
          </div>
          <div className="about_content">
            <div className="info">
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up,
                <a href="#" className="link-tag">
                  a huge corporation
                </a>
                , and a student-led design studio. My main focus these days is
                building accessible, inclusive products and digital experiences
                at
                <a href="#" className="link-tag">
                  Upstatement
                </a>
                for a variety of clients.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="skills">
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Flutter</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="profile">
              <div>
                <div>
                  <img src="https://i.pinimg.com/550x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <p>What's next?</p>
          <h2>GET IN TOUCH</h2>
          <div className="info">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </div>
          <div className="send-email">
            <a href="#" className="button">
              Say hello
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
