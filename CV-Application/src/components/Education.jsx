import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Education({
  displaySchool,
  displayDegree,
  displayLocation,
  displayStart,
  displayEnd,
}) {
  const initialValues = {
    school: "",
    degree: "",
    location: "",
    start: "",
    end: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [status, setStatus] = useState("pending");

  //edits the value of each form component
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //edits the visibility of form components
  const handleSubmit = (e) => {
    e.preventDefault();
    displaySchool(formValues.school);
    displayDegree(formValues.degree);
    displayLocation(formValues.location);
    displayStart(formValues.start);
    displayEnd(formValues.end);
    if (status == "pending") {
      setStatus("submitted");
    } else if (status == "submitted") {
      setStatus("editing");
    } else if (status == "editing") {
      setStatus("submitted");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="title">
          {" "}
          <FontAwesomeIcon icon={faGraduationCap} />
          <> </>Eduation
        </h1>
        {(status == "pending" || status == "editing") && (
          <>
            {" "}
            <div className="formComponent" id="testing">
              <label>School</label>
              <input
                type="text"
                name="school"
                placeholder="Enter School"
                value={formValues.school}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Degree</label>
              <input
                type="text"
                name="degree"
                placeholder="Enter Degree"
                value={formValues.degree}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={formValues.location}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Start Date</label>
              <input
                type="text"
                name="start"
                placeholder="Enter Start Date"
                value={formValues.start}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>End Date</label>
              <input
                type="text"
                name="end"
                placeholder="Enter End Date"
                value={formValues.end}
                required
                onChange={handleChange}
              />
            </div>
            <div className="btn-container">
              <button>Save</button>
            </div>
          </>
        )}

        {status == "submitted" && (
          <>
            {" "}
            <div className="btn-container">
              <button>Edit</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default Education;
