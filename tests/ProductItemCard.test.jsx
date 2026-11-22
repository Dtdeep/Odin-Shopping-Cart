import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductItemCard from "../src/components/ProductItem/ProductItemCard";
import userEvent from "@testing-library/user-event";
const setUpRender = (id, path, name, price, handleAddCart) => {
  render(
    <ProductItemCard
      productId={id}
      imagePath={path}
      productName={name}
      productPrice={price}
      handleAddCart={handleAddCart}
    />,
  );

  const inputElement = screen.getByRole("textbox");
  const decrementButton = screen.getByTestId("subtractBtn");
  const incrementButton = screen.getByTestId("addBtn");
  const addToCartBtn = screen.getByText("Add To Cart");

  return { inputElement, decrementButton, incrementButton, addToCartBtn };
};

describe("Test ProductItemCard Component's behavior", () => {
  it("increments or decrements the qu   antity via the 2 buttons", async () => {
    const user = userEvent.setup();
    const component = setUpRender(
      1,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      200,
    );

    await user.pointer({
      keys: "[MouseLeft]",
      target: component.incrementButton,
    });
    await user.pointer({
      keys: "[MouseLeft]",
      target: component.incrementButton,
    });
    await user.pointer({
      keys: "[MouseLeft]",
      target: component.decrementButton,
    });
    await user.pointer({
      keys: "[MouseLeft]",
      target: component.incrementButton,
    });

    expect(component.inputElement.value).toBe("2");
  });

  it("Does not allow negative numbers when decrementing", async () => {
    const user = userEvent.setup();
    const component = setUpRender(
      1,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      200,
    );

    await user.pointer({
      keys: "[MouseLeft]",
      target: component.decrementButton,
    });

    expect(component.inputElement.value).toBe("0");
  });

  it("Allow typing to the input and incrementing, decrementing it", async () => {
    const user = userEvent.setup();
    const component = setUpRender(
      1,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      200,
    );

    await user.pointer({ keys: "[MouseLeft]", target: component.inputElement });
    await user.keyboard("25");
    await user.pointer({
      keys: "[MouseLeft]",
      target: component.decrementButton,
    });
    await user.pointer({
      keys: "[MouseLeft]",
      target: component.decrementButton,
    });
    await user.pointer({
      keys: "[MouseLeft]",
      target: component.incrementButton,
    });

    expect(component.inputElement.value).toBe("24");
  });

  it("does not allow inputting a negative number or not a number", async () => {
    const user = userEvent.setup();
    const component = setUpRender(
      1,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      200,
    );
    await user.pointer({ keys: "[MouseLeft]", target: component.inputElement });
    await user.keyboard("-asdf30a*&");

    expect(component.inputElement.value).toBe("30");
  });

  it("Triggers add cart button with the right parameters and resets the currentQuantity back to zero", async () => {
    const handleAddCartTest = vi.fn(() => {});

    const user = userEvent.setup();
    const component = setUpRender(
      1,
      "src/assets/cafe.jpg",
      "Manhattan Cafe",
      200,
      handleAddCartTest,
    );

    await user.type(component.inputElement, "20");
    await user.click(component.addToCartBtn);

    expect(handleAddCartTest).toHaveBeenCalledWith(1, 20);
    expect(component.inputElement.value).toBe("0");
  });
});
