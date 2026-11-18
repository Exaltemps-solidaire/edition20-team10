import type { PersonaId } from "./personas";

// Les parcours dédiés se construisent itération par itération : un profil sans
// route renvoyée reste affiché, mais pas encore cliquable.
export function routeDuProfil(id: PersonaId): string | undefined {
  if (id === "organisateur") return "/organisateur";
  return undefined;
}
