import React from "react";
import { render, screen } from "@testing-library/react";
import WebCore from "../core/WebCore";

test("renders learn react link", () => {
  render(<WebCore />);
  // ? used in the base react template
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
