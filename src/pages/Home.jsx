import React from "react";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="container-fluid">
      <div className="welcome row">
        <div className="welcome-words col-md-6">
          <h4 className="welcome-title">
            WELCOME!
          </h4>
          <h3 className="welcome-body">MY NAME IS OTOR JOHN STEPHEN</h3>
          <h5 className="welcome-body-note">Web-Developer and UIUX/Graphics Designer</h5>
          {/*<button className="hire-me">HIRE ME</button>
          <button className="see-work">SEE MY WORK</button>*/}
        </div>
        <div className="welcome-image col-md-4">
          <div className="image">
          <img src={require("../assets/images/john.jpg")} alt="img" className="myimg" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
