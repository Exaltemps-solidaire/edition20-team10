import { expect, test } from "@playwright/test";

// Démo du cas passant, de bout en bout. Chaque itération ajoute ses étapes (test.step).
test("Démo : le cas passant", async ({ page }) => {
  await test.step("J'ouvre l'application sur la page de présentation", async () => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Face au cancer, nous agissons." })).toBeVisible();
  });

  await test.step("Je clique sur mon parcours", async () => {
    await page.getByRole("link", { name: "Trouver mon parcours" }).click();
    await expect(page).toHaveURL(/\/qui-etes-vous/);
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

  await test.step("Je clique sur mon profil et j'arrive sur ma page organisateur", async () => {
    await page.getByRole("link", { name: /Laura/ }).click();
    await expect(page.getByRole("heading", { name: "Organiser une action solidaire" })).toBeVisible();
  });

  await test.step("J'accède au calendrier des événements", async () => {
    await page.getByRole("link", { name: "Voir les actions déjà organisées" }).click();
    await expect(page.getByRole("heading", { name: "Calendrier des événements" })).toBeVisible();
  });
});
