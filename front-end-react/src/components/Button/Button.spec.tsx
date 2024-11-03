import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from ".";
describe("<Button/>", () => {
  it("should  render the button with text 'SingIn'", () => {
    const fn = jest.fn();
    render(<Button text="SingIn" onClick={fn} />);

    expect.assertions(1);

    expect(screen.getByRole("button", { name: /SingIn/i })).toBeInTheDocument();
  });
  it("should call function when clicked", () => {
    const fn = jest.fn();
    render(<Button text="SingIn" onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole("button", { name: /SingIn/i });

    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
