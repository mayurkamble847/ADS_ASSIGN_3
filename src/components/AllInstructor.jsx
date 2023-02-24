import React, { useEffect, useState } from "react";
import axios from "axios";

const AllInstructor = () => {
  const [instructorList, setInstructor] = useState([]);

  useEffect(() => {
    const fecthAllInstructor= async () => {
      try {
        const res = await axios.get("http://localhost:8000/all_instructor");
        setInstructor(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllInstructor();
  }, []);

  return (
    <>
      <center>
        <h1>All Instructor</h1>
      </center>
      <div>
        {instructorList.map((data) => (
          <div
            className="card"
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "30px",
            }}
            key={data.id}
          >
            <div
              className="card-body"
              style={{
                margin: "10px",
              }}
            >
              <h4>Name :- {data.instructor_name}</h4>
              <h4>Department :- {data.dept_name}</h4>
              <h4>Salary : -{data.salary}</h4>
              <br></br>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllInstructor;
