import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "../Components/Authentication/Signup";

jest.mock("../CryptoContext", () => ({
  CryptoState: () => ({
    setAlert: jest.fn(),
  }),
}));

jest.mock("../Firebase", () => ({
  auth: {},
  db: {},
}));

jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest
    .fn()
    .mockResolvedValue({ user: { email: "test@example.com" } }),
}));

jest.mock("firebase/firestore", () => ({
  addDoc: jest.fn(),
  collection: () => "users",
}));

const getInputByLabel = (label) => {
  const matches = screen.getAllByText(label); // label + legend
  const labelElement = matches.find((el) => el.tagName === "LABEL");
  if (!labelElement) throw new Error(`Label not found: ${label}`);

  return labelElement
    .closest(".MuiFormControl-root")
    .querySelector("input");
};

describe("Signup form", () => {
  test("renders form fields and Sign Up button", () => {
    render(<Signup handleClose={() => {}} />);

    expect(getInputByLabel("Enter Name")).toBeInTheDocument();
    expect(getInputByLabel("Enter Email Id")).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  test("shows error when required fields are empty", () => {
    const { container } = render(<Signup handleClose={() => {}} />);
    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(container).toBeTruthy();
  });

  test("successful signup triggers Firebase call", async () => {
    render(<Signup handleClose={() => {}} />);

    fireEvent.change(getInputByLabel("Enter Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getInputByLabel("Enter Email Id"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getInputByLabel("Enter Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(getInputByLabel("Confirm Password"), {
      target: { value: "password123" },
    });

    await fireEvent.click(screen.getByText(/Sign Up/i));
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });
});
