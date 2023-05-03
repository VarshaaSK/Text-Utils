import { fireEvent , screen , render } from "@testing-library/react";
import Counter from "./Counter";

test("sholud check the heading" , () => {
    render(<Counter/>);
    const heading = screen.queryByText("Counter");
    expect(heading).toBeInTheDocument();
})

test("should check if 0 is present" , () => {
    render(<Counter/>);
    const value = screen.getByText(0);
    expect(value).toBeVisible();
})

test("should check values other than 0 by setting inital value", () => {
    render(<Counter initialValue={3}/>);
    const value = screen.getByText(3);
    expect(value).toBeVisible();
})

test("should increment the value on clicking the add button", () => {
    render(<Counter initialValue={5}/>);
    const addBtn = screen.getByText("Add");
    fireEvent.click(addBtn);
    const addedValue = screen.queryByText(6);
    expect(addedValue).toBeInTheDocument();
})

test("Should increment the value by two" , () => {
    render(<Counter initialValue={8}/>);
    const addButton = screen.getByTestId("addition");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const additionSum = screen.getByText(10);
    expect(additionSum).toBeVisible()
})

test("Should decrement one value by clicking once", () => {
    render(<Counter initialValue={5}/>);
    const subButton = screen.getByTestId("subtraction");
    fireEvent.click(subButton);
    const subValue = screen.getByText(4);
    expect(subValue).toBeVisible();
})

test("Should decrement value twice on clicking the button twice", () => {
    render(<Counter initialValue={5}/>);
    const subButton = screen.getByTestId("subtraction");
    fireEvent.click(subButton);
    fireEvent.click(subButton);
    const subValue = screen.getByText(3);
    expect(subValue).toBeVisible();
})

test("Should throw error on showing negative number" , () =>{
    render(<Counter initialValue={-10}/>);
    const errorMessage = screen.getByText("Negative numbers NOT ALLOWED");
    expect(errorMessage).toBeVisible();
})


