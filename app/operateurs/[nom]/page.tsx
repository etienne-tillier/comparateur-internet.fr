import { notFound } from "next/navigation";

const operateurs: Record<
  string,
  {
    nom: string;
    description: string;
    offres: string[];
    couverture: string;
    avis: string;
  }
> = {
  orange: {
    nom: "Orange",
    description:
      "Orange est le leader historique des télécoms en France. L’opérateur propose des offres fibre et ADSL de qualité, avec un service client réputé et une couverture réseau très étendue.",
    offres: [
      "Livebox 6 — Fibre jusqu’à 2 Gb/s, décodeur TV 4K, WiFi 6",
      "Livebox 5 — Fibre jusqu’à 1 Gb/s, décodeur TV",
      "Forfaits mobile 5G avec data illimitée",
    ],
    couverture:
      "Orange dispose de la meilleure couverture fibre et 4G/5G de France, notamment en zone rurale.",
    avis: "Service client efficace, prix légèrement supérieurs à la concurrence mais qualité de réseau au rendez-vous.",
  },
  free: {
    nom: "Free",
    description:
      "Free a révolutionné le marché des télécoms avec ses offres sans engagement et ses tarifs agressifs. L’opérateur est pionnier sur la fibre très haut débit.",
    offres: [
      "Freebox Ultra — Fibre jusqu’à 8 Gb/s, WiFi 6E, décodeur TV 4K",
      "Freebox Pop — Fibre jusqu’à 5 Gb/s, offre complète",
      "Forfaits mobile avec data illimitée et roaming inclus",
    ],
    couverture:
      "Free couvre majoritairement les zones urbaines en fibre et continue son déploiement 5G.",
    avis: "Excellent rapport qualité-prix, débits impressionnants. Le service client reste perfectible.",
  },
  sfr: {
    nom: "SFR",
    description:
      "SFR est l’un des principaux opérateurs français avec une offre complète box et mobile. L’opérateur mise sur les contenus avec des offres TV enrichies.",
    offres: [
      "Box 8 — Fibre jusqu’à 2 Gb/s, décodeur 4K, Amazon Prime 1 an",
      "Box 7 — Fibre jusqu’à 1 Gb/s, décodeur TV",
      "Forfaits mobile 5G avec data généreuse",
    ],
    couverture:
      "SFR dispose d’une bonne couverture nationale, en particulier dans les grandes agglomérations.",
    avis: "Offres attractives avec contenus inclus. Attention aux augmentations de tarifs en cours d’engagement.",
  },
  bouygues: {
    nom: "Bouygues Telecom",
    description:
      "Bouygues Telecom se positionne comme un opérateur innovant avec des offres box et mobile compétitives. L’opérateur mise sur la relation client de proximité.",
    offres: [
      "Bbox ultym — Fibre jusqu’à 2 Gb/s, Bbox 4K Pro, WiFi 6",
      "Bbox must — Fibre jusqu’à 1 Gb/s, décodeur TV",
      "Forfaits mobile avec avantages jeunes",
    ],
    couverture:
      "Bouygues Telecom couvre très bien le territoire en fibre et 4G/5G, avec une présence renforcée en zone urbaine.",
    avis: "Service client local apprécié, offres compétitives. La stabilité du réseau est globalement satisfaisante.",
  },
};

export function generateStaticParams() {
  return Object.keys(operateurs).map((nom) => ({ nom }));
}

export default async function OperateurPage({
  params,
}: {
  params: Promise<{ nom: string }>;
}) {
  const { nom } = await params;
  const data = operateurs[nom];

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

      <div className="mt-10">
        <h2
          className="text-2xl font-bold text-[#0f172a]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Offres principales
        </h2>
        <ul className="mt-4 space-y-3">
          {data.offres.map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4"
            >
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#22c55e]" />
              <span className="text-[#0f172a]">{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Couverture réseau
          </h3>
          <p className="mt-2 text-[#64748b]">{data.couverture}</p>
        </div>
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
          <h3
            className="text-lg font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Avis des utilisateurs
          </h3>
          <p className="mt-2 text-[#64748b]">{data.avis}</p>
        </div>
      </div>
    </div>
  );
}
