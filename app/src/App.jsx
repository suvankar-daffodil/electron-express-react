import React, { useState } from "react";
import Axios from "axios";

import "./App.css";

const makeAPICall = async isConnected => {
  return await Axios.post("http://localhost:5000/toggle-vpn", {
    shouldConnect: !isConnected
  });
};

const App = () => {
  const [isConnected, setConnected] = useState(false);

  const handleClick = () => {
    makeAPICall(isConnected)
      .then(response => {
        setConnected(!isConnected);
      })
      .catch(err => {
        console.log(err?.response?.data);
      });
  };

  return (
    <div className="container">
      <button onClick={handleClick}>
        {isConnected ? "DISCONNECT" : "CONNECT"}
      </button>
      <div>{isConnected ? "STATUS - CONNECTED" : "STATUS - NOT CONNECTED"}</div>
    </div>
  );
};

export default App;
