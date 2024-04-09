import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

test("Button starts with correct label and color", () => {
  //render app
  render(<App />);

  //find the button
  const buttonElement = screen.getByRole("button", {name: /blue/i });

  //check initial color
  expect(buttonElement).toHaveClass("red");

  //click the button 
  fireEvent.click(buttonElement);

  //check button color
  expect(buttonElement).toHaveTextContent(/red/i)

  //check button text
  expect(buttonElement).toHaveClass("blue")
});

test("Button starts with correct label and color after click", () => {
  render(<App />);
  
});

test("Button starts with correct label and color before click", () => {
  //render app

  //find the button

  //check the button color

  //check the button label
  
});

