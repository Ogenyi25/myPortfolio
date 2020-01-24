import React from "react";

const Navbar = () => {

  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand col-md-4"><img className="logo" src={require("../assets/images/favicon.png")} alt="img" /></div>
        <div className="float-right col-md-6">
          <span className="call">Call: 0813 475 6623; 0908 104 6069</span>
          <button className="book-button" type="button" data-toggle="collapse" data-target="#collapseExercise"
            aria-expanded="false" aria-controls="collapseExample">HIRE ME</button>
         {/* <button className="book-button" type="button" data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">SEE MY WORK</button>*/}
        </div>
      </nav>
      <div className="collapse" id="collapseExercise">
        <div className="card card-body">
          <div className="row container-fluid">
            <div className="hire-text col-md-4">
              <h4 className="title">welcome!</h4>
              <h6 className="text">Here you get the best of what you desire.
              <br />Is it -: 
                <ul>
                  <li>UIUX Design,</li>
                  <li>Web Development,</li>
                  <li>Graphic Design.</li>
                </ul>
                We've got you covered. Just fill the form, hit the submit button and we will get back to
                you way sooner than you will ever think.
              </h6>
            </div>
            <div className="col-md-6 hire-inputs">
              <form className="card">
                  <h5 className="card-text">Fill in the form below</h5>
                <input className="form-input" type="text" placeholder="Fullname" />
                <input className="form-input" type="email" placeholder="Email" />
                <input className="form-input" type="phonenumber" placeholder="PhoneNumber" />
                <select className="form-input">
                  <option className="form-input" value="design">UIUX Design</option>
                  <option className="form-input" value="graphic">Graphic Design</option>
                  <option className="form-input" value="web">Web Development</option>
                </select>
                <textarea className="textarea-input" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button className="form-button">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="row">
            <div className="col-md-4">HOME</div>
            <div className="col-md-4">CHURCH</div>
            <div className="col-md-4">SCHOOL</div>
          </div>
          </div>
      </div>*/}
    </div>
  );
};

export default Navbar;
