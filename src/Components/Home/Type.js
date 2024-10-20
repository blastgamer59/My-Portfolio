import React from "react";
import Typewriter from "typewriter-effect";
import './Home.css'
function Type() {
  return (
    <div className="typewriter">
    <Typewriter
      options={{
        strings: ["WebDeveloper", "Data Analyst", "Python Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;