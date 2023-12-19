import React from "react";

function Display({
  name,
  email,
  number,
  address,
  school,
  degree,
  location,
  eduStartDate,
  eduEndDate,
  company,
  title,
  description,
  proStartDate,
  proEndDate,
}) {
  return (
    <>
      <div className="display">
        <div className="information">
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{number}</p>
          <p>{address}</p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>{school}</p>
          <p>{degree}</p>
          <p>{location}</p>
          <p>{eduStartDate}</p>
          <p>{eduEndDate}</p>
        </div>
        <div className="professional">
          <h3>Professional Experience</h3>
          <p>{company}</p>
          <p>{title}</p>
          <p>{description}</p>
          <p>{proStartDate}</p>
          <p>{proEndDate}</p>
        </div>
      </div>
    </>
  );
}

export default Display;
