import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial count of 0", () => {
  render(<Counter />);

  const countElement = screen.getByText("0");
  expect(countElement).toBeInTheDocument();
});

test('increments count when the "Increment" button is clicked', () => {
  render(<Counter />);

  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  const countElement = screen.getByText("1");
  expect(countElement).toBeInTheDocument();
});

test('decrements count when the "Decrement" button is clicked', () => {
  render(<Counter />);

  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const countElement = screen.getByText("0");
  expect(countElement).toBeInTheDocument();
});
