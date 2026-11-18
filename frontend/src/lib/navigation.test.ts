import { describe, expect, it } from "vitest";
import { routeDuProfil } from "./navigation";

describe("routeDuProfil", () => {
  it("renvoie la page organisateur pour le persona organisateur", () => {
    expect(routeDuProfil("organisateur")).toBe("/organisateur");
  });

  it("ne renvoie aucune route pour un profil sans parcours dédié", () => {
    expect(routeDuProfil("particulier")).toBeUndefined();
    expect(routeDuProfil("testateur")).toBeUndefined();
  });
});
