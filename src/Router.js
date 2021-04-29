import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Home />
    </BrowserRouter>
  );
}
