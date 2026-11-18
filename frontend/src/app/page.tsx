"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { personas } from "../lib/personas";

const PERSONA_STORAGE_KEY = "persona-actif";

export default function QuiEtesVous() {
  const router = useRouter();

  function choisirPersona(id: string) {
    window.localStorage.setItem(PERSONA_STORAGE_KEY, id);
    router.push("/accueil");
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Qui êtes-vous ?</h1>
        <p>Choisissez un profil pour découvrir le site avec ses droits.</p>
        <ul>
          {personas.map((persona) => (
            <li key={persona.id}>
              <button type="button" onClick={() => choisirPersona(persona.id)}>
                {persona.nom} — {persona.role}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
