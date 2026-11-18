import { expect, test } from "@playwright/test";

// Démo du cas passant, de bout en bout. Chaque itération ajoute ses étapes (test.step).
test("Démo : le cas passant", async ({ page }) => {
  await test.step("J'ouvre l'application", async () => {
    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
  });

  await test.step("Je choisis le persona Organisateur", async () => {
    await page.getByRole("button", { name: /Laura/ }).click();
    await expect(page).toHaveURL(/\/accueil/);
  });

  await test.step("J'arrive sur l'accueil avec la navigation par profil", async () => {
    await expect(page.getByRole("heading", { name: "Imagine for Margo" })).toBeVisible();
    await page.getByText("Qui je suis").click();
    await expect(page.getByText("Organisatrice d'une action solidaire")).toBeVisible();
  });
});
