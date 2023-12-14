import React from "react";

function BasicInfo() {
  return (
    <>
      <h1>Basic Information</h1>
      <form></form>
      <div>
        <label>Full Name</label>
        <input key="name" type="text" />
        <label>Email</label>
        <input key="email" type="text" />
        <label>Phone Number</label>
        <input key="number" type="text" />
        <label>Address</label>
        <input key="address" type="text" />
      </div>
      <div>
        <button>Submit</button>
      </div>
      <div>
        <button>Edit</button>
      </div>
    </>
  );
}

export default BasicInfo;
