import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1
                className="text-4xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Trouvez la meilleure offre internet pour votre région
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Comparez en quelques clics les box internet et forfaits mobile des principaux opérateurs en France. Faites des économies sur votre abonnement.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/comparatif"
                  className="rounded-lg bg-[#0ea5e9] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0284c7]"
                >
                  Comparer maintenant
                </Link>
                <Link
                  href="/guides"
                  className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-white transition-colors hover:border-white"
                >
                  Voir les guides
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl md:aspect-[4/3]">
              <Image
                src="/images/comparateur-internet-com-home-hero-fiber-optic.jpeg"
                alt="Fibre optique et connexion internet haut débit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparateur en direct */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/images/comparateur-internet-com-home-comparison-dashboard.jpeg"
                alt="Tableau de bord de comparaison des offres internet"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Comparateur en direct
              </h2>
              <p className="mt-4 text-[#64748b]">
                Filtrez par prix, débit, engagement et région pour trouver l’offre qui correspond à vos besoins. Nos données sont mises à jour régulièrement pour refléter les tarifs des opérateurs.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Comparaison des prix des box internet",
                  "Filtres par débit et type de connexion",
                  "Analyse des frais d’engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#22c55e]" />
                    <span className="text-[#0f172a]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/comparatif"
                className="mt-8 inline-block rounded-lg bg-[#6366f1] px-6 py-3 font-medium text-white transition-colors hover:bg-[#4f46e5]"
              >
                Découvrir le comparatif
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies avancées */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2
                className="text-3xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Technologies avancées
              </h2>
              <p className="mt-4 text-[#64748b]">
                Découvrez les dernières innovations en matière de connectivité : fibre optique FTTH, réseau 5G, WiFi 6 et cartes eSIM. Nos guides expliquent simplement ces technologies pour vous aider à faire le bon choix.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Fibre FTTH", desc: "Débit jusqu’à 8 Gb/s" },
                  { title: "5G", desc: "Couverture et forfaits" },
                  { title: "WiFi 6", desc: "Vitesse et stabilité" },
                  { title: "eSIM", desc: "Flexibilité mobile" },
                ].map((t) => (
                  <div
                    key={t.title}
                    className="rounded-xl border border-[#e2e8f0] bg-white p-4"
                  >
                    <p className="font-semibold text-[#0f172a]">{t.title}</p>
                    <p className="text-sm text-[#64748b]">{t.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/guides"
                className="mt-8 inline-block rounded-lg bg-[#0ea5e9] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0284c7]"
              >
                Explorer les guides
              </Link>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/images/comparateur-internet-com-home-technology-5g-tower.jpeg"
                alt="Antenne 5G et technologies réseau"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recherche par région */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/images/comparateur-internet-com-home-regions-france-map.jpeg"
                alt="Carte des régions de France et couverture réseau"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Recherche par région
              </h2>
              <p className="mt-4 text-[#64748b]">
                La qualité de la connexion varie selon votre localisation. Consultez nos analyses par région pour connaître le meilleur opérateur disponible chez vous et les débits moyens constatés.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Île-de-France",
                  "Provence-Alpes-Côte d’Azur",
                  "Auvergne-Rhône-Alpes",
                  "Occitanie",
                  "Nouvelle-Aquitaine",
                  "Hauts-de-France",
                ].map((r) => (
                  <Link
                    key={r}
                    href={`/regions/${r
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[’']/g, "-")}`}
                    className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                  >
                    {r}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides populaires */}
      <section className="bg-[#0f172a] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Guides populaires
              </h2>
              <p className="mt-4 text-slate-300">
                Nos experts vous accompagnent pas à pas : installation de votre box, optimisation du WiFi, choix d’une carte eSIM, déménagement de votre ligne… Tous nos conseils sont indépendants et vérifiés.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Comment choisir sa box internet ?",
                  "Guide complet du WiFi 6",
                  "Tout savoir sur la carte eSIM",
                  "Optimiser son débit fibre",
                ].map((g) => (
                  <Link
                    key={g}
                    href="/guides"
                    className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 transition-colors hover:border-[#0ea5e9]"
                  >
                    <span className="text-[#22c55e]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium">{g}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/images/comparateur-internet-com-home-guides-wifi-setup.jpeg"
                alt="Configuration WiFi et guides pratiques"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Actualités télécom */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2
            className="text-3xl font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Actualités télécom
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
            Restez informé des dernières offres, promotions et évolutions du marché des télécoms en France.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-block rounded-lg bg-[#6366f1] px-6 py-3 font-medium text-white transition-colors hover:bg-[#4f46e5]"
          >
            Lire le blog
          </Link>
        </div>
      </section>
    </div>
  );
}
