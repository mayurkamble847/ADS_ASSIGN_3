import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


class Main extends React.Component {
   
    render() { 
        return <div className="card w-60">
            <center style={{
                height: "910px",
                justifyContent:"center",
                alignContent:"center",
                marginTop : "30px"
            }}>
        <div className="card w-60 mt-3" style={{
            display:"block",
            margin:"auto",
            width:"500px",
        }}
        >
          <div className="card-body" style={{
            display:"block",
            margin:"auto",
            width:"500px",
            height : "150px"
        }}>
            <h5 className="card-title">Student</h5>
            <Link to={"/student"} className="btn btn-primary" >GO</Link>
          </div>
        </div>
        <div className="card w-60 mt-3" style={{
            display:"block",
            margin:"auto",
            width:"500px",
            height : "150px"

        }}>
          <div className="card-body">
            <h5 className="card-title">Instructor</h5>
            <Link to={"/instructor"}className="btn btn-primary">GO</Link>
          </div>
        </div>
        <div className="card w-60 mt-3" style={{
            display:"block",
            margin:"auto",
            width:"500px",
            height : "150px"

        }}>
          <div className="card-body">
            <h5 className="card-title">Courses</h5>
            <Link to={"/course"} className="btn btn-primary">GO</Link>
          </div>
        </div>
        <div className="card w-60 mt-3" style={{
            display:"block",
            margin:"auto",
            width:"500px",
            height : "150px"

        }}>
          <div className="card-body">
            <h5 className="card-title">Section</h5>
            <Link to={"/section"} className="btn btn-primary">GO</Link>
          </div>
        </div>
      </center>
      {/* <Student/> */}
        </div>;
    }
}
 
export default Main;