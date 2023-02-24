import React from "react";
import { Link } from 'react-router-dom';

class Student extends React.Component {
    render() { 
        return <>
        <div className="row">
        <div className="col-sm-6  mt-25 mb-3 mb-sm-0">
          <div className="card" style={{
            height : "300px",
            margin: "100px"
          }}>
            <div className="card-body">
              <h2 className="card-title">Add Student</h2>
              <p className="card-text">To add new student in your university  click on below button</p>
              <Link to = {"/student_form"} className="btn btn-primary">Add</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6  mt-25 mb-3 mb-sm-0">
          <div className="card" style={{
            height : "300px",
            margin: "100px"
          }}>
            <div className="card-body">
              <h2 className="card-title">See All Students</h2>
              <p className="card-text">To see all students in your university click on below button.</p>
              <Link to = {"/all_students"} className="btn btn-primary">Show</Link>
            </div>
          </div>
        </div>
      </div>
        </>;
    }
}
 
export default Student;