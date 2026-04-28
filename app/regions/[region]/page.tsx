import { notFound } from "next/navigation";

const regions: Record<
  string,
  {
    nom: string;
    description: string;
    meilleurOperateur: string;
    debitMoyen: string;
    couverture5g: string;
    analyse: string;
  }
> = {
  "ile-de-france": {
    nom: "Île-de-France",
    description:
      "La région Île-de-France bénéficie de la meilleure couverture fibre et 5G de France. Paris et sa métropole disposent d’un très haut débit très largement démocratisé.",
    meilleurOperateur: "Orange et Free ex-aequo sur le débit fibre.",
    debitMoyen: "950 Mb/s en téléchargement",
    couverture5g: "Plus de 95 % de la population couverte",
    analyse:
      "Tous les opérateurs proposent des offres compétitives en Île-de-France. La concurrence est forte, ce qui profite aux consommateurs avec des promotions régulières.",
  },
  "provence-alpes-cote-d-azur": {
    nom: "Provence-Alpes-Côte d’Azur",
    description:
      "La région PACA dispose d’un excellent déploiement fibre dans les grandes villes comme Marseille, Nice et Toulon. Les zones rurales restent néanmoins en retard.",
    meilleurOperateur: "SFR et Orange mènent le classement local.",
    debitMoyen: "720 Mb/s en téléchargement",
    couverture5g: "Environ 85 % de la population couverte",
    analyse:
      "Marseille et Nice sont très bien desservies. Les zones montagneuses et rurales privilégient souvent l’ADSL ou la 4G box.",
  },
  "auvergne-rhone-alpes": {
    nom: "Auvergne-Rhône-Alpes",
    description:
      "Avec Lyon comme centre névralgique, la région bénéficie d’une couverture fibre en forte progression. Les départements montagneux restent plus difficiles à couvrir.",
    meilleurOperateur: "Orange mène sur la couverture rurale.",
    debitMoyen: "680 Mb/s en téléchargement",
    couverture5g: "Environ 80 % de la population couverte",
    analyse:
      "Lyon, Grenoble et Saint-Étienne sont très bien desservies. Les stations de ski et les vallées peuvent être tributaires de la 4G fixe.",
  },
  occitanie: {
    nom: "Occitanie",
    description:
      "Occitanie affiche une couverture fibre très hétérogène entre les métropoles (Toulouse, Montpellier) et les zones rurales du Larzac ou des Pyrénées.",
    meilleurOperateur: "Bouygues Telecom est très présent sur le territoire.",
    debitMoyen: "610 Mb/s en téléchargement",
    couverture5g: "Environ 78 % de la population couverte",
    analyse:
      "Toulouse et Montpellier bénéficient d’excellentes connexions. Les zones rurales comptent sur l’ADSL ou les offres satellite/4G.",
  },
  "nouvelle-aquitaine": {
    nom: "Nouvelle-Aquitaine",
    description:
      "La plus grande région de France mène un déploiement fibre ambitieux. Bordeaux et ses environs sont très bien desservis, tout comme les villes côtières.",
    meilleurOperateur: "Orange domine sur la couverture globale.",
    debitMoyen: "640 Mb/s en téléchargement",
    couverture5g: "Environ 75 % de la population couverte",
    analyse:
      "Bordeaux, La Rochelle et Bayonne sont en fibre. Les Landes et le Limousin ruraux restent encore en ADSL pour certains foyers.",
  },
  "hauts-de-france": {
    nom: "Hauts-de-France",
    description:
      "Lille et son aire urbaine disposent d’excellents débits fibre. Le reste de la région progresse rapidement grâce aux plans de déploiement FTTH.",
    meilleurOperateur: "Free et Orange sont les plus performants.",
    debitMoyen: "700 Mb/s en téléchargement",
    couverture5g: "Environ 82 % de la population couverte",
    analyse:
      "Lille est un pôle technologique très bien connecté. Les zones rurales du sud de la région progressent fortement en couverture fibre.",
  },
};

export function generateStaticParams() {
  return Object.keys(regions).map((region) => ({ region }));
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const data = regions[region];

  if (!data) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1
        className="text-4xl font-bold text-[#0f172a]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {data.nom}
      </h1>
      <p className="mt-4 text-lg text-[#64748b]">{data.description}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Meilleur opérateur
          </h3>
          <p className="mt-2 text-[#64748b]">{data.meilleurOperateur}</p>
        </div>
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Débit moyen
          </h3>
          <p className="mt-2 text-[#64748b]">{data.debitMoyen}</p>
        </div>
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Couverture 5G
          </h3>
          <p className="mt-2 text-[#64748b]">{data.couverture5g}</p>
        </div>
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Analyse
          </h3>
          <p className="mt-2 text-[#64748b]">{data.analyse}</p>
        </div>
      </div>
    </div>
  );
}
