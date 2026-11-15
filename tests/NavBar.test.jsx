import NavBar from "../src/components/NavBar/NavBar";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { MemoryRouter } from "react-router";

describe("Testing NavBar Component", () => {
  const renderNavBar = (count, route) => {
    render(
      <MemoryRouter>
        <NavBar currentRoute={route} cartItemCount={count} />
      </MemoryRouter>,
    );
  };

  it("renders cart item count properly", () => {
    renderNavBar(10);

    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
