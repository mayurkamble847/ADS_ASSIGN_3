import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCourses = () => {
    const [courseList, setCourses] = useState([]);

    useEffect(() => {
        const fecthAllCourses = async () => {
          try {
            const res = await axios.get("http://localhost:8000/all_courses");
            setCourses(res.data);
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        };
        fecthAllCourses();
      }, []);

    return ( 
        <>
      <center>
        <h1>All Courses</h1>
      </center>
      <div>
        {courseList.map((data) => (
          <div
            className="card"
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "30px",
            }}
            key={data.course_id}
          >
            <div
              className="card-body"
              style={{
                margin: "10px",
              }}
            >
              <h4> Course Name :- {data.title}</h4>
              <h4>Department :- {data.dept_name}</h4>
              <h4>Course Credits :- {data.credits}</h4>
              <br></br>
            </div>
          </div>
        ))}
      </div>
    </>
     );
}

export default AllCourses;