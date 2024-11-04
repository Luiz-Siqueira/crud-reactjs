import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InputComponent } from ".";
describe("<InputComponent/>", () => {
  it("should  render the input with label", () => {
    const fn = jest.fn();
    render(
      <InputComponent
        name="email"
        type="email"
        onChange={fn}
        value="valor"
        label="Email"
      />
    );

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
  });
  it("should render the input with type = 'string'  and call onChange when typing on the input", () => {
    const fn = jest.fn();
    render(
      <InputComponent
        name="email"
        type="email"
        onChange={fn}
        value="valor"
        label="Email"
      />
    );

    expect.assertions(3);

    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toHaveAttribute("type", "email");

    fireEvent.change(input, { target: { value: "teste@teste.com" } });
    expect(fn).toHaveBeenCalledTimes(1);

    expect(fn).toHaveBeenCalledWith("teste@teste.com");
  });
});
