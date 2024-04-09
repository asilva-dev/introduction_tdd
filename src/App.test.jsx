import { render, screen } from "@testing-library/react";

import App from "./App";

test("Button starts with correct color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("Button starts with correct text", () => {
  render(<App />);
  
});

test("Button has correct color after click", () => {
  render(<App />);
  
});

