import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import FormModal from "../FormModal";

// it("calls the onSubmit function without valid inputs", () => {
//   const mockOnSubmit = jest.fn();
//   render(<FormModal onModalSubmit={mockOnSubmit} />);
//   const submitButton = screen.getByRole("button");
//   fireEvent.submit(submitButton);
//   expect(mockOnSubmit).toHaveBeenCalledTimes(0);
// });

const randomSpy = jest.spyOn(Math, 'random');

it("calls the onSubmit function without valid inputs", () => {
  const handleSubmit = jest.fn();
  const handleModal = jest.fn();
  render(<FormModal modalState={true} openModal={handleModal} onModalSubmit={handleSubmit} />);
  const submitButton = screen.getByTestId('submit');
  const inputName = screen.getByTestId('name-input');
  const inputDate = screen.getByTestId('date-input');
  const inputTime = screen.getByTestId('time-input');
  const inputTimezone = screen.getByTestId('timezone-input')
  
  userEvent.type(inputName, 'Mark');
  userEvent.type(inputDate, '11');
  userEvent.type(inputTime, '11:00');
  userEvent.selectOptions(inputTimezone, screen.getByRole('option', {name: 'Africa/Abidjan'}))
  randomSpy.mockReturnValue(0.5);

  fireEvent.click(submitButton);
});