"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { personas, trouverPersona, type Persona } from "../../lib/personas";

const PERSONA_STORAGE_KEY = "persona-actif";

function lirePersonaActif(): Persona | undefined {
  if (typeof window === "undefined") return undefined;
  return trouverPersona(window.localStorage.getItem(PERSONA_STORAGE_KEY));
}

export default function Accueil() {
  const router = useRouter();
  const [personaActif] = useState<Persona | undefined>(lirePersonaActif);

  useEffect(() => {
    if (!personaActif) {
      router.replace("/");
    }
  }, [personaActif, router]);

  function changerDePersona() {
    window.localStorage.removeItem(PERSONA_STORAGE_KEY);
    router.push("/");
  }

  if (!personaActif) {
    return null;
  }

  return (
    <div>
      <header>
        <nav>
          <span>{personaActif.nom} — {personaActif.role}</span>
          <button type="button" onClick={changerDePersona}>
            Changer de profil
          </button>
        </nav>
        <nav>
          <details>
            <summary>Qui je suis</summary>
            <ul>
              {personas.map((persona) => (
                <li key={persona.id} aria-current={persona.id === personaActif.id}>
                  {persona.nom} — {persona.role}
                </li>
              ))}
            </ul>
          </details>
          <details>
            <summary>Ce que je cherche</summary>
            <p>Bientôt disponible.</p>
          </details>
          <details>
            <summary>Quand</summary>
            <p>Bientôt disponible.</p>
          </details>
        </nav>
      </header>
      <main>
        <h1>Imagine for Margo</h1>
        <p>Bienvenue sur votre parcours, {personaActif.nom}.</p>
      </main>
    </div>
  );
}
