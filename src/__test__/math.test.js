import { describe, it, expect } from "vitest";
import { sum, divide } from "../math.js";

describe("math functions", () => {
  it("adds two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("divides numbers correctly", () => {
    expect(divide(6, 2)).toBe(3);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });
});