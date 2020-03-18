import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./App.css";
import Production from "./config/production";

const makeAPICall = async () => {
  const headers = {
    Accept: "application/json",
    DeviceId: "TestCompressUserDevice",
    OperatingSystem: "Android",
    OperatingSystemVersion: "v-3.2",
    DeviceName: "Samsung",
    protocol: "ipsec",
    ApiVersion: "v2",
    "Content-Type": "application/x-www-form-urlencoded"
  };

  let urlencoded = new URLSearchParams();
  urlencoded.append("extref", "TestCompress");

  const config = {
    method: "POST",
    url: Production.url,
    data: urlencoded,
    headers: headers
  };

  return await Axios(config);
};

const App = () => {
  const [state, setState] = useState({ error: null, message: null });
  useEffect(() => {
    makeAPICall()
      .then(response => setState(response?.data))
      .catch(err => setState(err?.response?.data));
  }, []);

  return <div>{state.message ? JSON.stringify(state) : "Please wait...."}</div>;
};

export default App;
