import Image from "next/image";
import Link from "next/link";

const guides = [
  {
    titre: "Tout savoir sur la carte eSIM",
    desc: "Comment activer une eSIM, quels sont les avantages et les opérateurs compatibles en France.",
    slug: "esim",
  },
  {
    titre: "Guide complet du WiFi 6",
    desc: "Vitesse, portée, compatibilité : tout ce qu’il faut savoir sur la nouvelle génération WiFi.",
    slug: "wifi-6",
  },
  {
    titre: "Choisir sa box internet",
    desc: "Fibre, ADSL, 4G : les critères à prendre en compte pour sélectionner la meilleure box.",
    slug: "choisir-box",
  },
  {
    titre: "Optimiser son débit fibre",
    desc: "Astuces et réglages pour tirer le meilleur parti de votre connexion fibre optique.",
    slug: "optimiser-debit",
  },
  {
    titre: "Forfaits 5G : le comparatif",
    desc: "Couverture, prix et débits : quel opérateur propose la meilleure offre 5G ?",
    slug: "forfaits-5g",
  },
  {
    titre: "Déménager sa ligne internet",
    desc: "Les démarches à suivre pour transférer votre abonnement lors d’un déménagement.",
    slug: "demenager-ligne",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1
          className="text-4xl font-bold text-[#0f172a]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Guides et conseils
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
          Nos guides pratiques pour mieux comprendre le marché des télécoms, optimiser votre connexion et faire des économies.
        </p>
      </div>

      <div className="relative mx-auto mt-12 aspect-[21/9] max-w-3xl overflow-hidden rounded-2xl">
        <Image
          src="/images/comparateur-internet-com-guide-esim-technology.jpeg"
          alt="Technologie eSIM et guides pratiques"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <div
            key={g.slug}
            className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h2 className="text-lg font-bold text-[#0f172a]">{g.titre}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{g.desc}</p>
            <Link
              href={`/guides/${g.slug}`}
              className="mt-4 inline-block text-sm font-medium text-[#0ea5e9] hover:underline"
            >
              Lire le guide
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
