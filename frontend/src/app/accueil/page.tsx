"use client";

import { usePersonaActif } from "../../lib/usePersonaActif";
import { EnTete } from "../../components/EnTete";

export default function Accueil() {
  const { personaActif, changerDePersona } = usePersonaActif();

  if (!personaActif) {
    return null;
  }

  return (
    <div>
      <EnTete personaActif={personaActif} onChangerDePersona={changerDePersona} />
      <main>
        <h1>Imagine for Margo</h1>
        <p>Bienvenue sur votre parcours, {personaActif.nom}.</p>
      </main>
    </div>
  );
}
