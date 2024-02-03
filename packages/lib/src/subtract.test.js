import { describe, it, expect } from "vitest";
import { subtract } from "./subtract";

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
