// Personas d'exemple pour simuler le choix de profil, sans connexion réelle
// (voir passation/cadrage/7-prd.md : « pas de connexion, pas de création de compte »).

export type PersonaId = "organisateur" | "particulier" | "entreprise" | "testateur";

export type Persona = {
  id: PersonaId;
  nom: string;
  role: string;
};

export const personas: Persona[] = [
  { id: "organisateur", nom: "Laura", role: "Organisatrice d'une action solidaire" },
  { id: "particulier", nom: "Marc", role: "Particulier qui veut donner" },
  { id: "entreprise", nom: "Julie", role: "Responsable mécénat en entreprise" },
  { id: "testateur", nom: "Georges", role: "Personne qui prépare un legs" },
];

export function trouverPersona(id: string | null): Persona | undefined {
  return personas.find((persona) => persona.id === id);
}
