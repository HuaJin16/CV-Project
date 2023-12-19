import React from "react";
import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Professional from "./components/Professional";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [number, setNumber] = useState("Number");
  const [address, setAddress] = useState("Address");
  const [school, setSchool] = useState("School");
  const [degree, setDegree] = useState("Degree");
  const [location, setLocation] = useState("Location");
  const [eduStart, setEduStart] = useState("Start Date");
  const [eduEnd, setEduEnd] = useState("End Date");
  const [company, setCompany] = useState("Company");
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Job Description");
  const [proStart, setProStart] = useState("Start Date");
  const [proEnd, setProEnd] = useState("End Date");

  //Basic Information component
  const changeName = (value) => {
    setName(value);
  };
  const changeEmail = (value) => {
    setEmail(value);
  };
  const changeNumber = (value) => {
    setNumber(value);
  };
  const changeAddress = (value) => {
    setAddress(value);
  };

  //Education component
  const changeSchool = (value) => {
    setSchool(value);
  };
  const changeDegree = (value) => {
    setDegree(value);
  };
  const changeLocation = (value) => {
    setLocation(value);
  };
  const changeEducationStart = (value) => {
    setEduStart(value);
  };
  const changeEducationEnd = (value) => {
    setEduEnd(value);
  };

  //Professional Experience component
  const changeCompany = (value) => {
    setCompany(value);
  };
  const changeTitle = (value) => {
    setTitle(value);
  };
  const changeDescription = (value) => {
    setDescription(value);
  };
  const changeProfessionalStart = (value) => {
    setProStart(value);
  };
  const changeProfessionalEnd = (value) => {
    setProEnd(value);
  };

  return (
    <>
      <div className="forms">
        <div>
          <BasicInfo
            displayName={changeName}
            displayEmail={changeEmail}
            displayNumber={changeNumber}
            displayAddress={changeAddress}
          />
          <Education
            displaySchool={changeSchool}
            displayDegree={changeDegree}
            displayLocation={changeLocation}
            displayStart={changeEducationStart}
            displayEnd={changeEducationEnd}
          />
          <Professional
            displayCompany={changeCompany}
            displayTitle={changeTitle}
            displayDescription={changeDescription}
            displayStart={changeProfessionalStart}
            displayEnd={changeProfessionalEnd}
          />
        </div>
        <Display
          name={name}
          email={email}
          number={number}
          address={address}
          school={school}
          degree={degree}
          location={location}
          eduStartDate={eduStart}
          eduEndDate={eduEnd}
          company={company}
          title={title}
          description={description}
          proStartDate={proStart}
          proEndDate={proEnd}
        />
      </div>
    </>
  );
}

export default App;
