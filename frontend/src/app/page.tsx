"use client";

import { useRouter } from "next/navigation";
import { personas } from "../lib/personas";

const PERSONA_STORAGE_KEY = "persona-actif";

export default function QuiEtesVous() {
  const router = useRouter();

  function choisirPersona(id: string) {
    window.localStorage.setItem(PERSONA_STORAGE_KEY, id);
    router.push("/accueil");
  }

  return (
    <div className="page">
      <main className="contenu">
        <h1>Qui êtes-vous ?</h1>
        <p>Choisissez un profil pour découvrir votre parcours avec Imagine for Margo.</p>
        <ul className="liste-profils">
          {personas.map((persona) => (
            <li key={persona.id}>
              <button
                type="button"
                className="profil"
                onClick={() => choisirPersona(persona.id)}
              >
                <span className="profil-nom">{persona.nom}</span>
                <span className="profil-role">{persona.role}</span>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
