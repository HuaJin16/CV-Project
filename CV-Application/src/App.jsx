import React from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Professional from "./components/Professional";
import Display from "./components/Display";
import "./App.css";

function App() {
  return (
    <>
      <div className="forms">
        <BasicInfo />
        <Education />
        <Professional />
        <Display />
      </div>
    </>
  );
}

export default App;
