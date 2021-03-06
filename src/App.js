import React from "react";
import logo from "./logo.svg";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "roboto",
      }}
    >
      <img src={logo} alt="School-logo" />
      <h1
        style={{
          color: "#6EC177",
          margin: 0,
        }}
      >
        Watch this space
      </h1>
      <p>Coming Soon</p>
    </div>
  );
};

export default App;
