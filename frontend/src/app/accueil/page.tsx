"use client";

import { usePersonaActif } from "../../lib/usePersonaActif";
import { EnTete } from "../../components/EnTete";
import { Papillon } from "../../components/Papillon";

export default function Accueil() {
  const { personaActif, changerDePersona } = usePersonaActif();

  if (!personaActif) {
    return null;
  }

  return (
    <div className="page">
      <EnTete personaActif={personaActif} onChangerDePersona={changerDePersona} />
      <div className="bande-accueil">
        <div className="bande-accueil-interieur">
          <Papillon className="papillon" />
          <div>
            <h1>Bienvenue, {personaActif.nom}</h1>
            <p>Votre parcours vers Imagine for Margo commence ici.</p>
          </div>
        </div>
      </div>
      <main className="contenu">
        <p>
          Choisissez « Qui je suis » dans la navigation pour retrouver votre
          espace, ou revenez ici à tout moment.
        </p>
      </main>
    </div>
  );
}
