import "./intro.scss";
import { Typewriter } from 'react-simple-typewriter'

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <img src="/assets/fd-4.png" alt="profile"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Furkan Durak</h1>
          <h3>
            <span style={{color: "crimson", fontWeight: "bold"}}>
              <Typewriter 
                words={["React Front End  Developer", "React Native Mobile Developer"]}
                loop={0}
                cursor
                deleteSpeed={30}
                delaySpeed={3000}
              />
            </span>
          </h3>
        </div>
        <div className="arrow">
          <a href="#portfolio">
            <img src="./assets/down.png" alt="arrow"/>
          </a>
        </div>
      </div>
      <div className="background"></div>
    </div>
  )
}
