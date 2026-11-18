"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { trouverPersona, type Persona } from "./personas";

const PERSONA_STORAGE_KEY = "persona-actif";

function lirePersonaActif(): Persona | undefined {
  if (typeof window === "undefined") return undefined;
  return trouverPersona(window.localStorage.getItem(PERSONA_STORAGE_KEY));
}

// Pas de connexion réelle : le persona choisi sur "/" est mémorisé dans le
// localStorage du navigateur, et relu sur chaque écran qui en a besoin.
export function usePersonaActif() {
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

  return { personaActif, changerDePersona };
}
