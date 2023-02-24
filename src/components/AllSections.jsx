import React, { useEffect, useState } from "react";
import axios from "axios";

const AllSections = () => {
  const [sectionList, setSection] = useState([]);

  useEffect(() => {
    const fecthAllSections = async () => {
      try {
        const res = await axios.get("http://localhost:8000/all_section");
        setSection(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllSections();
  }, []);

  return (
    <>
      <center>
        <h1>All Sections</h1>
      </center>
      <div>
        {sectionList.map((data) => (
          <div
            className="card"
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "30px",
            }}
            key={data.sec_id}
          >
            <div
              className="card-body"
              style={{
                margin: "10px",
              }}
            >
              <h4> Building :- {data.building}</h4>
              <h4>Room number :- {data.room_number}</h4>
              <h4>Semester Year :- {data.sem_year}</h4>
              <h4>Semester number : -{data.semester}</h4>
              <br></br>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllSections;
