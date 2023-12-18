import React from "react";

function BasicInfo() {
  return (
    <>
      <h1>Basic Information</h1>
      <form>
        <label>Full Name</label>
        <input key="name" type="text" />
        <label>Email</label>
        <input key="email" type="text" />
        <label>Phone Number</label>
        <input key="number" type="text" />
        <label>Address</label>
        <input key="address" type="text" />
        <div>
          <button>Submit</button>
        </div>
        <div>
          <button>Edit</button>
        </div>
      </form>
    </>
  );
}

export default BasicInfo;
