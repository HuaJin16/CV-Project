import React from "react";
import { useState } from "react";

function Professional() {
  const initialValues = {
    title: "",
    company: "",
    description: "",
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
        <h1>Professional Experience</h1>
        {(status == "pending" || status == "editing") && (
          <>
            {" "}
            <div className="formComponent">
              <label>Job Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Job Title"
                value={formValues.title}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Company</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company"
                value={formValues.company}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter Job Description"
                value={formValues.description}
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
            <div>
              <button>Save</button>
            </div>
          </>
        )}

        {status == "submitted" && (
          <>
            {" "}
            <div>
              <button>Edit</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default Professional;
