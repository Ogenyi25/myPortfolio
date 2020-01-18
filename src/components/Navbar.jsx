import React from "react";

const Navbar = () => {

  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand col-md-4">Ogenyi</div>
        <div className="float-right col-md-6">
          <span className="call">Call: 0813 475 6623; 0908 104 6069</span>
          <button className="book-button" type="button" data-toggle="collapse" data-target="#collapseExercise"
            aria-expanded="false" aria-controls="collapseExample">HIRE ME</button>
          <button className="book-button" type="button" data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">SEE MY WORK</button>
        </div>
      </nav>
      <div className="collapse" id="collapseExercise">
        <div className="card card-body">
          <form className="card">
            <input className="form-input" type="text" placeholder="Fullname" />
            <input className="form-input" type="email" placeholder="Email" />
          </form>
        </div>
      </div>

      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="row">
            <div className="col-md-4">HOME</div>
            <div className="col-md-4">CHURCH</div>
            <div className="col-md-4">SCHOOL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
