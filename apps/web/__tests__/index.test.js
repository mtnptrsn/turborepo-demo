import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders a heading and a button", () => {
    window.alert = jest.fn();

    render(<Home />);
    // check if there's a heading
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    // check if there's a button with label "Click Me"
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();

    // clicks the button and confirms an alert shows up
    button.click();
    expect(window.alert).toHaveBeenCalledWith("Button was clicked!");
  });
});
