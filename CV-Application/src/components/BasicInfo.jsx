import React from "react";
import { useState } from "react";

function BasicInfo({
  displayName,
  displayEmail,
  displayNumber,
  displayAddress,
}) {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    address: "",
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
    displayName(formValues.name);
    displayEmail(formValues.email);
    displayNumber(formValues.number);
    displayAddress(formValues.address);
    if (status == "pending") {
      setStatus("submitted");
    } else if (status == "submitted") {
      setStatus("editing");
    } else if (status == "editing") {
      setStatus("submitted");
    }
    console.log("name: " + displayName);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Basic Information</h1>
        {(status == "pending" || status == "editing") && (
          <>
            {" "}
            <div className="formComponent">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formValues.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={formValues.email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Phone Number</label>
              <input
                type="text"
                name="number"
                placeholder="Enter Phone Number"
                value={formValues.number}
                required
                onChange={handleChange}
              />
            </div>
            <div className="formComponent">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formValues.address}
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

export default BasicInfo;
