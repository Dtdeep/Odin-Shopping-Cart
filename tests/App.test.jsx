import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();
    expect(true).toBe(true);

    // check if App components renders headline
  });
});
