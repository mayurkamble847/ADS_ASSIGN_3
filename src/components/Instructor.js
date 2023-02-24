import React from "react";
import { Link } from "react-router-dom";

class Instructor extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-6  mt-25 mb-3 mb-sm-0">
            <div
              className="card"
              style={{
                height: "300px",
                margin: "100px",
              }}
            >
              <div className="card-body">
                <h2 className="card-title">Add instructor</h2>
                <p className="card-text">
                  To add new instructor in your university click on below button
                </p>
                <Link to={"/instructor_form"} className="btn btn-primary">
                  Add
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6  mt-25 mb-3 mb-sm-0">
            <div
              className="card"
              style={{
                height: "300px",
                margin: "100px",
              }}
            >
              <div className="card-body">
                <h2 className="card-title">See All Instructor</h2>
                <p className="card-text">
                  To see all instructor in your university click on below
                  button.
                </p>
                <Link to={"/all_instructor"} className="btn btn-primary">
                  Show
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Instructor;
