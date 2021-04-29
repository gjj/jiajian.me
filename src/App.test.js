import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders build version", () => {
  render(<App />);
  const linkElement = screen.getByText(/Build v0.1.0/i);
  expect(linkElement).toBeInTheDocument();
});
