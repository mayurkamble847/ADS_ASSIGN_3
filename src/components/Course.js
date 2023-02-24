import React from "react";
import { Link } from "react-router-dom";

class Corse extends React.Component {
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
                <h2 className="card-title">Add new Course</h2>
                <p className="card-text">
                  To add new course in your university click on below button
                </p>
                <Link to={"/course_form"} className="btn btn-primary">
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
                <h2 className="card-title">See All Course</h2>
                <p className="card-text">
                  To see all course in your university click on below button.
                </p>
                <Link to={"/all_courses"} className="btn btn-primary">
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

export default Corse;
