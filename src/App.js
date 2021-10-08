import React, { useState } from "react";
import "./index.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <h1 style={{ color: darkMode ? "white" : "orange" }}>Good {darkMode ? "Night." : "Morning!"} </h1>
        <div className="icon-part">
          <span className="lighticon" style={{ color: darkMode ? "grey" : "orange" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span className="darkicon" style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
    </div>
  </div>
  );
}
export default App;