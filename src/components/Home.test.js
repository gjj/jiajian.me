import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders name", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Jia Jian/i);
  expect(linkElement).toBeInTheDocument();
});
