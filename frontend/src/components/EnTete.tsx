import Link from "next/link";
import { personas, type Persona } from "../lib/personas";
import { routeDuProfil } from "../lib/navigation";

export function EnTete({
  personaActif,
  onChangerDePersona,
}: {
  personaActif: Persona;
  onChangerDePersona: () => void;
}) {
  return (
    <header>
      <nav>
        <span>
          {personaActif.nom} — {personaActif.role}
        </span>
        <button type="button" onClick={onChangerDePersona}>
          Changer de profil
        </button>
      </nav>
      <nav>
        <details>
          <summary>Qui je suis</summary>
          <ul>
            {personas.map((persona) => {
              const route = routeDuProfil(persona.id);
              return (
                <li key={persona.id} aria-current={persona.id === personaActif.id}>
                  {route ? (
                    <Link href={route}>
                      {persona.nom} — {persona.role}
                    </Link>
                  ) : (
                    <span>
                      {persona.nom} — {persona.role}
                    </span>
                  )}
                </li>
              );
            })}
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
  );
}
