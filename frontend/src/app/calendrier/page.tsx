const evenements = [
  {
    nom: "Course Enfants sans Cancer",
    texte:
      "Une course solidaire organisée au profit de la recherche contre le cancer pédiatrique.",
  },
  {
    nom: "Rallye du Cœur",
    texte: "Un rallye automobile organisé au profit d'Imagine for Margo.",
  },
];

export default function Calendrier() {
  return (
    <div className="page">
      <main className="contenu">
        <h1>Calendrier des événements</h1>
        <p>
          Deux rendez-vous réunissent chaque année une partie de la
          communauté d&apos;Imagine for Margo.
        </p>
        <ul className="liste-fiches">
          {evenements.map((evenement) => (
            <li key={evenement.nom}>
              <span className="fiche-titre">{evenement.nom}</span>
              <span className="fiche-texte">{evenement.texte}</span>
            </li>
          ))}
        </ul>
        <p className="chiffre-cle">
          <strong>200+</strong>
          <span>autres actions organisées chaque année, partout en France</span>
        </p>
        <p>
          Le détail de chaque action (dates, lieux, photos) sera regroupé ici
          dès qu&apos;une source de données fiable sera branchée.
        </p>
      </main>
    </div>
  );
}
