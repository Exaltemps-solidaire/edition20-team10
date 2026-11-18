import { describe, expect, it } from "vitest";
import { trouverPersona } from "./personas";

describe("trouverPersona", () => {
  it("retrouve un persona existant par son id", () => {
    expect(trouverPersona("organisateur")?.nom).toBe("Laura");
  });

  it("renvoie undefined pour un id inconnu ou absent", () => {
    expect(trouverPersona("inconnu")).toBeUndefined();
    expect(trouverPersona(null)).toBeUndefined();
  });
});
