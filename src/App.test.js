import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders element", () => {
  render(<App />);
  const nameElement = screen.getByText(/Brazil/i);
  expect(nameElement).toBeInTheDocument();
});
