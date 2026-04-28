export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1
        className="text-4xl font-bold text-[#0f172a]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Politique de confidentialité
      </h1>

      <div className="mt-10 space-y-8 text-[#0f172a]">
        <section>
          <h2 className="text-xl font-bold">Collecte des données</h2>
          <p className="mt-2">
            ComparateurInternet.fr collecte uniquement les données
            nécessaires au bon fonctionnement du site et à la réponse à vos
            demandes de contact. Nous ne collectons aucune donnée à des fins
            de marketing sans votre consentement explicite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Cookies</h2>
          <p className="mt-2">
            Le site utilise des cookies techniques indispensables à la
            navigation. Aucun cookie publicitaire ou de traçage tiers n’est
            déposé sans votre accord préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Utilisation des données</h2>
          <p className="mt-2">
            Les données collectées sont utilisées uniquement pour :
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Répondre à vos demandes par email</li>
            <li>Améliorer la qualité de nos contenus</li>
            <li>Assurer la sécurité du site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold">Partage des données</h2>
          <p className="mt-2">
            Vos données ne sont jamais vendues à des tiers. Elles peuvent
            être partagées uniquement avec nos prestataires techniques dans
            la stricte mesure nécessaire au fonctionnement du site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification, de suppression et de portabilité de vos données.
            Pour exercer ces droits, contactez-nous :{" "}
            <a
              href="mailto:contact@comparateur-internet.fr"
              className="text-[#0ea5e9] hover:underline"
            >
              contact@comparateur-internet.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Contact DPO</h2>
          <p className="mt-2">
            Pour toute question relative à la protection de vos données,
            écrivez-nous à :{" "}
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
