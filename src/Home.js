import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import AboutCard from "./AboutCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="container container-sm bg-dark bordered mt-0 mt-sm-5 pb-3">
      <div className="row">
        <div className="col-sm-6 width position height">
          <h2 className="text-white part-1">My name is</h2>
          <div className="content part-3">
            <h1 className=""><pre>Shina A.</pre></h1>
            <h1 className=""><pre>Shina A.</pre></h1>
          </div>
          <h2 className="part-4 animate-charcter">I am a FULL STACK DEVELOPER</h2>
          <div className="part-5">
            <div className="d-flex gap-4">
            <button className="btn btn-primary px-4">
                CV
              </button>
              <button className="btn btn-primary">
                Portfolio
              </button>
            </div>
            <div className="d-flex gap-3 py-4 text-white">
            <a href="https://www.linkedin.com/in/shinaa"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://github.com/oluwaCyna"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
        <div className=" col-sm-6 width">
          <AboutCard />
        </div>
      </div>

      
    </div>
  );
};

export default Home;
