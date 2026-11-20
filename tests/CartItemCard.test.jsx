import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartItemCard from "../src/components/CartItemCard/CartItemCard";

const setUpComponent = (
  productId,
  imagePath,
  productName,
  productValue,
  productPrice,
) => {
  const mockHandleQuantity = vi.fn();
  const mockHandleInput = vi.fn();
  const mockHandleDelete = vi.fn();
  render(
    <CartItemCard
      productId={productId}
      imagePath={imagePath}
      productName={productName}
      productValue={productValue}
      productPrice={productPrice}
      handleQuantityButton={mockHandleQuantity}
      handleInput={mockHandleInput}
      handleDelete={mockHandleDelete}
    />,
  );

  const subtractButton = screen.getByTestId("subtractBtn");
  const addButton = screen.getByTestId("addBtn");
  const inputElement = screen.getByRole("textbox");
  const deleteButton = screen.getByTestId("trashBtn");

  return {
    subtractButton,
    addButton,
    inputElement,
    deleteButton,
    mockHandleQuantity,
    mockHandleInput,
    mockHandleDelete,
  };
};

describe("Test CartItemCard Component", () => {
  it("Calls the proper function with the right parameter when clicking subtract button", async () => {
    const user = userEvent.setup();

    const component = setUpComponent(
      9349,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      3,
      200,
    );

    await user.dblClick(component.subtractButton);

    expect(component.mockHandleQuantity).toHaveBeenCalledTimes(2);
    expect(component.mockHandleQuantity).toHaveBeenCalledWith(9349, "subtract");
  });

  it("Calls the proper function with the right parameter when clicking add button", async () => {
    const user = userEvent.setup();

    const component = setUpComponent(
      1,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      3,
      200,
    );

    await user.tripleClick(component.addButton);

    expect(component.mockHandleQuantity).toHaveBeenCalledTimes(3);
    expect(component.mockHandleQuantity).toHaveBeenCalledWith(1, "add");
  });

  it("Calls the proper function with the right parameter when typing in the textbox", async () => {
    const user = userEvent.setup();

    const component = setUpComponent(
      55,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      3,
      200,
    );

    await user.type(component.inputElement, "2553");

    expect(component.mockHandleInput).toHaveBeenCalledTimes(4);
    expect(component.mockHandleInput).toHaveBeenCalledWith(
      55,
      expect.anything(),
    );
  });

  it("Calls the proper function with the right parameter when clicking trash icon button", async () => {
    const user = userEvent.setup();

    const component = setUpComponent(
      33,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      3,
      200,
    );

    await user.click(component.deleteButton);

    expect(component.mockHandleDelete).toHaveBeenCalledTimes(1);
    expect(component.mockHandleDelete).toHaveBeenCalledExactlyOnceWith(33);
  });
});

//
//
//
