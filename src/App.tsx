import React from "react";
import Railway from "./components/Railway";
import "./components/css/App.css";

const App: React.FC = () => {
  return (
    <div className="whole">
      <div className="body">
        <Railway />
        <Railway />
        <Railway />
        <Railway />
        <Railway />
        <Railway />
        <Railway />
        <Railway />
      </div>
    </div>
  );
};

export default App;
