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
      {/* <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </div>
  );
};

export default App;
