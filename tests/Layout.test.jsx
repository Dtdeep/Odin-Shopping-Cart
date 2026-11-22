import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/Routes";

vi.stubGlobal(
  "fetch",
  vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      {
        id: 1,
        title: "Test product",
        image: "test.jpg",
        price: 10,
      },
    ],
  }),
);

const setUpLayout = () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);
};

describe("Testing NavBar Navigation showing the proper pages", () => {
  it("Initially loads the homepage", () => {
    setUpLayout();

    const currentPage = screen.getByTestId("homePage");

    expect(currentPage).toBeInTheDocument();
  });

  it("Routes to homepage when clicking the logo", async () => {
    const user = userEvent.setup();
    setUpLayout();

    const homePage = screen.queryByTestId("homePage");
    const navLogo = screen.getByText(/MIKAY SHOP/i);

    await user.click(navLogo);
    expect(homePage).toBeInTheDocument();
  });
  it("Routes to homepage when clicking home", async () => {
    const user = userEvent.setup();
    setUpLayout();

    const homeLink = screen.getByText(/home/i);

    await user.click(homeLink);
    expect(screen.queryByTestId("homePage")).toBeInTheDocument();
  });

  it("Routes to shopPage when clicking Shop in the navbar", async () => {
    const user = userEvent.setup();
    setUpLayout();

    const shopLink = screen.getByTestId("shopLink");

    await user.click(shopLink);

    expect(await screen.findByTestId("shopPage")).toBeInTheDocument();
  });

  it("Routes to cartPage when clicking the cart icon in the navbar", async () => {
    const user = userEvent.setup();
    setUpLayout();

    const cartLink = screen.getByTestId("cartLink");

    await user.click(cartLink);

    expect(await screen.findByTestId("cartPage")).toBeInTheDocument();
  });
});
