import Link from "next/link";
import { Papillon } from "../components/Papillon";

const missions = [
  {
    titre: "Financer la recherche",
    texte: "Des appels à projets, dont Fight Kids Cancer à l'échelle européenne.",
  },
  {
    titre: "Mobiliser",
    texte: "Les acteurs de la recherche réunis au colloque FAST, et le plaidoyer auprès des pouvoirs publics.",
  },
  {
    titre: "Sensibiliser",
    texte: "Une campagne nationale chaque année, Septembre en Or.",
  },
  {
    titre: "Soutenir les enfants et les familles",
    texte: "À l'hôpital, et lors de week-ends de répit.",
  },
];

export default function Accueil() {
  return (
    <div className="page">
      <section className="bande-accueil">
        <div className="bande-accueil-interieur">
          <Papillon className="papillon" />
          <div>
            <h1>Face au cancer, nous agissons.</h1>
            <p>
              Imagine for Margo, association reconnue d&apos;utilité publique,
              finance la recherche et soutient les enfants atteints de cancer
              et leurs familles, partout en France.
            </p>
          </div>
        </div>
      </section>
      <main className="contenu">
        <ul className="liste-fiches">
          {missions.map((mission) => (
            <li key={mission.titre}>
              <span className="fiche-titre">{mission.titre}</span>
              <span className="fiche-texte">{mission.texte}</span>
            </li>
          ))}
        </ul>
        <p className="chiffre-cle">
          <strong>1 800</strong>
          <span>bénévoles mobilisés partout en France</span>
        </p>
        <Link href="/qui-etes-vous" className="cta">
          Trouver mon parcours
        </Link>
      </main>
    </div>
  );
}
