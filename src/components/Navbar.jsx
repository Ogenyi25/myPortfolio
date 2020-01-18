import React from "react";

const Navbar = () => {

  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand col-md-4">Ogenyi</div>
        <div className="float-right col-md-6">
          <span className="call">Call: 0813 475 6623; 0908 104 6069</span>
          <button className="book-button" type="button" data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">HIRE ME</button>
           <button className="book-button" type="button" data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">SEE MY WORK</button>
        </div>
      </nav>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
    </div>
  );
};

export default Navbar;
