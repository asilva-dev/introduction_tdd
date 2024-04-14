import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import { describe, expect } from "vitest";
import { kebabCaseToTitleCase } from "./helpers";

test("Button click flow", () => {
  //render app
  render(<App />);

  //find the button
  const buttonElement = screen.getByRole("button", {name: /red/i });

  //check initial color
  expect(buttonElement).toHaveClass("red");

  //click the button 
  fireEvent.click(buttonElement);

   //expect the class to be blue
   expect(buttonElement).toHaveClass("medium-violet-red");

  //check button color
  expect(buttonElement).toHaveTextContent(/blue/i);
 
});

test("checkbox flow", () => {
  render(<App />);

  //find elements
  const buttonElement = screen.getByRole("button", {name: /red/i });
  const checkBoxElement = screen.getByRole("checkbox", {name: /disable button/i });

  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();

  //click checkbox to disable button
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");

  //click checkbox to re-enable button
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('red');
});


describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });

  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
})

