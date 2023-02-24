import React from "react";

class Navbar extends React.Component {
    render() { 
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" style={{
            display:"block",
            height:"120px",
        }}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="#"><h1>University Student Information Management</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
        </div>;
    }
}
 
export default Navbar;