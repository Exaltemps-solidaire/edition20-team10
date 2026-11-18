"use client";

import { useRouter } from "next/navigation";
import { personas } from "../../lib/personas";
import { Papillon } from "../../components/Papillon";

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
        <span className="marque">
          <Papillon className="papillon" />
          Imagine for Margo
        </span>
        <h1>Qui êtes-vous ?</h1>
        <p>Choisissez un profil pour trouver votre façon d&apos;agir.</p>
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
