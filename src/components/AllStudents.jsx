import React, { useEffect, useState } from "react";
import axios from "axios";

const AllStudents = () => {
    const [studentList, setStudents] = useState([]);

    useEffect(() => {
        const fecthAllStudents = async () => {
          try {
            const res = await axios.get("http://localhost:8000/all_students");
            setStudents(res.data);
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        };
        fecthAllStudents();
      }, []);

    return ( 
        <>
      <center>
        <h1>All Students</h1>
      </center>
      <div>
        {studentList.map((data) => (
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
              <h4> Student Name :- {data.student_name}</h4>
              <h4>Department :- {data.dept_name}</h4>
              <h4>Total Credits :- {data.tot_cred}</h4>
              <br></br>
            </div>
          </div>
        ))}
      </div>
    </>
     );
}

export default AllStudents;