import React from "react";
import "../styles/display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <></>
              {email}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> <></>
              {number}
            </p>
            <p>
              <FontAwesomeIcon icon={faHouse} /> <></>
              {address}
            </p>
          </div>
        </div>
        <div className="education">
          <h3 className="display-info">Education</h3>
          <hr></hr>
          <div className="user-info">
            <p className="component-title">{school}</p>
            <ul>
              <li>{degree}</li>
              <li>{location}</li>
              <li>
                {eduStartDate} - {eduEndDate}
              </li>
            </ul>
          </div>
        </div>
        <div className="professional">
          <h3 className="display-info">Professional Experience</h3>
          <hr></hr>
          <div className="user-info">
            <p className="component-title">{company}</p>
            <ul>
              <li>{title}</li>
              <li>{description}</li>
              <li>
                {proStartDate} - {proEndDate}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
