import axios from "axios";
import React, { useState } from "react";

const StudentForm = () => {
  const [studentData, setData] = useState({
    name: "",
    dept: "",
    id: "",
    credits: null,
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("Started....");

      const response = await axios.post("http://localhost:8000/student_form", studentData);
      console.log(response);
    } catch (err) {

      console.log(err);
    }

  };

  console.log(studentData);
  return (
    <>
      <form>
        <div
          className="mb-3"
          style={{
            marginLeft: "200px",
            marginRight: "800px",
            marginTop: "100px",
          }}
        >
          <label htmlFor="exampleInputName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div
          className="mb-3"
          style={{
            marginLeft: "200px",
            marginRight: "800px",
          }}
        >
          <label htmlFor="exampleInputDept" className="form-label">
            Student Department
          </label>
          <input
            type="text"
            className="form-control"
            name="dept"
            onChange={handleChange}
          />
        </div>
        <div
          className="mb-3"
          style={{
            marginLeft: "200px",
            marginRight: "800px",
          }}
        >
          <label htmlFor="exampleId" className="form-label">
            Student Id
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            onChange={handleChange}
          />
        </div>
        <div
          className="mb-3"
          style={{
            marginLeft: "200px",
            marginRight: "800px",
          }}
        >
          <label htmlFor="exampleInputCredits" className="form-label">
            Total credits
          </label>
          <input
            type="number"
            className="form-control"
            name="credits"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            marginLeft: "200px",
            marginRight: "800px",
          }}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default StudentForm;
