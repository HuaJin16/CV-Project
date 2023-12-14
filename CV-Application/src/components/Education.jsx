import React from "react";

function Education() {
  return (
    <>
      <h1>Eduation</h1>
      <form>
        <div>
          <label>School</label>
          <input key="school" type="text" />
          <label>Degree</label>
          <input key="degree" type="text" />
          <label>Location</label>
          <input key="location" type="text" />
          <label>Start Date</label>
          <input key="start" type="text" />
          <label>End Date</label>
          <input key="end" type="text" />
        </div>
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

export default Education;
