"use client";

import Link from "next/link";
import { usePersonaActif } from "../../lib/usePersonaActif";
import { EnTete } from "../../components/EnTete";

export default function PageOrganisateur() {
  const { personaActif, changerDePersona } = usePersonaActif();

  if (!personaActif) {
    return null;
  }

  return (
    <div className="page">
      <EnTete personaActif={personaActif} onChangerDePersona={changerDePersona} />
      <main className="contenu">
        <h1>Organiser une action solidaire</h1>
        <p>
          Vous voulez lancer une collecte, une course ou un évènement au profit
          d&apos;Imagine for Margo ? Nous vous accompagnons de l&apos;idée à la
          réalisation.
        </p>
        <Link href="/calendrier" className="cta">
          Voir les actions déjà organisées
        </Link>
      </main>
    </div>
  );
}
