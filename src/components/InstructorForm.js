import React from "react";
class InstructorForm extends React.Component {
  state = {};
  render() {
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Instructor Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div
            className="mb-3"
            style={{
              marginLeft: "200px",
              marginRight: "800px",
            }}
          >
            <label htmlFor="exampleInputEmail1" className="form-label">
              Instructor Department
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div
            className="mb-3"
            style={{
              marginLeft: "200px",
              marginRight: "800px",
            }}
          >
            <label htmlFor="exampleInputEmail1" className="form-label">
              Instructor Id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div
            className="mb-3"
            style={{
              marginLeft: "200px",
              marginRight: "800px",
            }}
          >
            <label htmlFor="exampleInputEmail1" className="form-label">
              Salary
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginLeft: "200px",
              marginRight: "800px",
            }}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default InstructorForm;
