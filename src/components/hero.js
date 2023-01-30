import Button from "./btn-primary";
import "./css/hero.css";

function Hero() {
  return (
    <div className="hero">
        <div className="title">
            <div className="left">
            <img></img>
            <h1>Hi, I'm <span className="name">John Doe</span></h1>
            </div>
            <a href="https://youtube.com" className="link">About</a>
        </div>

        <div className="bio">
            <p>I am a dedicated, open-minded computer engineer who is passionate about state-of-art technologies. Besides, I am a lifelong learner that endeavors to expand my skillset.
                I am interested in Frontend Development using React, Tailwind, NextJS, Gatsby. Moreover, I know git, jira, netlify environments.</p>
        </div>
        <div className="actions">
            <Button label={"Get in touch"} target={"https://youtube.com"} type={"btn-primary"} />
        </div>
        
    </div>
       
  );
}

export default Hero