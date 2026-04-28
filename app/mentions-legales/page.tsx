export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1
        className="text-4xl font-bold text-[#0f172a]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Mentions légales
      </h1>

      <div className="mt-10 space-y-8 text-[#0f172a]">
        <section>
          <h2 className="text-xl font-bold">Éditeur du site</h2>
          <p className="mt-2">
            Le site ComparateurInternet.fr est édité par Comparateur Internet
            France, société en cours de constitution.
          </p>
          <p className="mt-2">
            Siège social : France.
            <br />
            Contact :{" "}
            <a
              href="mailto:contact@comparateur-internet.fr"
              className="text-[#0ea5e9] hover:underline"
            >
              contact@comparateur-internet.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Responsable de publication</h2>
          <p className="mt-2">
            Le responsable de la publication est l’équipe éditoriale de
            ComparateurInternet.fr.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Propriété intellectuelle</h2>
          <p className="mt-2">
            L’ensemble des éléments constituant le site (textes, graphismes,
            logiciels, photographies, images, vidéos, sons, plans, logos,
            marques, etc.) est la propriété exclusive de
            ComparateurInternet.fr ou de ses partenaires.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Liens hypertextes</h2>
          <p className="mt-2">
            Le site peut contenir des liens vers d’autres sites. Nous ne
            pouvons être tenus responsables du contenu de ces sites externes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="mt-2">
            Pour toute question, vous pouvez nous contacter par email :{" "}
            <a
              href="mailto:contact@comparateur-internet.fr"
              className="text-[#0ea5e9] hover:underline"
            >
              contact@comparateur-internet.fr
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
