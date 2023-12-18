import React from "react";

function Professional() {
  return (
    <>
      <h1>Professional Experience</h1>
      <form>
        <label>Job Title</label>
        <input key="title" type="text" />
        <label>Company</label>
        <input key="company" type="text" />
        <label>Description</label>
        <input key="description" type="text" />
        <label>Start Date</label>
        <input key="start" type="text" />
        <label>End</label>
        <input key="end" type="text" />
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

export default Professional;
