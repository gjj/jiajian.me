import React from "react";
import "./App.css";
import Router from "./Router";
import { useGoogleAnalytics } from "./utils/google-analytics";

function App() {
  useGoogleAnalytics();
  return <Router />;
}

export default App;
