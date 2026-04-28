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
    nom: "\u00cele-de-France",
    description:
      "La r\u00e9gion \u00cele-de-France b\u00e9n\u00e9ficie de la meilleure couverture fibre et 5G de France. Paris et sa m\u00e9tropole disposent d\u2019un tr\u00e8s haut d\u00e9bit tr\u00e8s largement d\u00e9mocratis\u00e9.",
    meilleurOperateur: "Orange et Free ex-aequo sur le d\u00e9bit fibre.",
    debitMoyen: "950 Mb/s en t\u00e9l\u00e9chargement",
    couverture5g: "Plus de 95 % de la population couverte",
    analyse:
      "Tous les op\u00e9rateurs proposent des offres comp\u00e9titives en \u00cele-de-France. La concurrence est forte, ce qui profite aux consommateurs avec des promotions r\u00e9guli\u00e8res.",
  },
  "provence-alpes-cote-d-azur": {
    nom: "Provence-Alpes-C\u00f4te d\u2019Azur",
    description:
      "La r\u00e9gion PACA dispose d\u2019un excellent d\u00e9ploiement fibre dans les grandes villes comme Marseille, Nice et Toulon. Les zones rurales restent n\u00e9anmoins en retard.",
    meilleurOperateur: "SFR et Orange m\u00e8nent le classement local.",
    debitMoyen: "720 Mb/s en t\u00e9l\u00e9chargement",
    couverture5g: "Environ 85 % de la population couverte",
    analyse:
      "Marseille et Nice sont tr\u00e8s bien desservies. Les zones montagneuses et rurales privil\u00e9gient souvent l\u2019ADSL ou la 4G box.",
  },
  "auvergne-rhone-alpes": {
    nom: "Auvergne-Rh\u00f4ne-Alpes",
    description:
      "Avec Lyon comme centre n\u00e9vralgique, la r\u00e9gion b\u00e9n\u00e9ficie d\u2019une couverture fibre en forte progression. Les d\u00e9partements montagneux restent plus difficiles \u00e0 couvrir.",
    meilleurOperateur: "Orange m\u00e8ne sur la couverture rurale.",
    debitMoyen: "680 Mb/s en t\u00e9l\u00e9chargement",
    couverture5g: "Environ 80 % de la population couverte",
    analyse:
      "Lyon, Grenoble et Saint-\u00c9tienne sont tr\u00e8s bien desservies. Les stations de ski et les vall\u00e9es peuvent \u00eatre tributaires de la 4G fixe.",
  },
  occitanie: {
    nom: "Occitanie",
    description:
      "Occitanie affiche une couverture fibre tr\u00e8s h\u00e9t\u00e9rog\u00e8ne entre les m\u00e9tropoles (Toulouse, Montpellier) et les zones rurales du Larzac ou des Pyr\u00e9n\u00e9es.",
    meilleurOperateur: "Bouygues Telecom est tr\u00e8s pr\u00e9sent sur le territoire.",
    debitMoyen: "610 Mb/s en t\u00e9l\u00e9chargement",
    couverture5g: "Environ 78 % de la population couverte",
    analyse:
      "Toulouse et Montpellier b\u00e9n\u00e9ficient d\u2019excellentes connexions. Les zones rurales comptent sur l\u2019ADSL ou les offres satellite/4G.",
  },
  "nouvelle-aquitaine": {
    nom: "Nouvelle-Aquitaine",
    description:
      "La plus grande r\u00e9gion de France m\u00e8ne un d\u00e9ploiement fibre ambitieux. Bordeaux et ses environs sont tr\u00e8s bien desservis, tout comme les villes c\u00f4ti\u00e8res.",
    meilleurOperateur: "Orange domine sur la couverture globale.",
    debitMoyen: "640 Mb/s en t\u00e9l\u00e9chargement",
    couverture5g: "Environ 75 % de la population couverte",
    analyse:
      "Bordeaux, La Rochelle et Bayonne sont en fibre. Les Landes et le Limousin ruraux restent encore en ADSL pour certains foyers.",
  },
  "hauts-de-france": {
    nom: "Hauts-de-France",
    description:
      "Lille et son aire urbaine disposent d\u2019excellents d\u00e9bits fibre. Le reste de la r\u00e9gion progresse rapidement gr\u00e2ce aux plans de d\u00e9ploiement FTTH.",
    meilleurOperateur: "Free et Orange sont les plus performants.",
    debitMoyen: "700 Mb/s en t\u00e9l\u00e9chargement",
    couverture5g: "Environ 82 % de la population couverte",
    analyse:
      "Lille est un p\u00f4le technologique tr\u00e8s bien connect\u00e9. Les zones rurales du sud de la r\u00e9gion progressent fortement en couverture fibre.",
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
            Meilleur op\u00e9rateur
          </h3>
          <p className="mt-2 text-[#64748b]">{data.meilleurOperateur}</p>
        </div>
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            D\u00e9bit moyen
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
