import Image from "next/image";
import Link from "next/link";

const offres = [
  {
    operateur: "Orange",
    slug: "orange",
    offre: "Livebox 6",
    prix: "32,99 €/mois",
    debit: "Jusqu’à 2 Gb/s",
    engagement: "12 mois",
    avantages: [
      "Fibre optique FTTH",
      "Décodeur TV 4K",
      "WiFi 6 inclus",
      "Service client 7j/7",
    ],
  },
  {
    operateur: "Free",
    slug: "free",
    offre: "Freebox Ultra",
    prix: "29,99 €/mois",
    debit: "Jusqu’à 8 Gb/s",
    engagement: "Sans engagement",
    avantages: [
      "Débit fibre record",
      "Freebox Pop TV",
      "Appels illimités",
      "WiFi 6E",
    ],
  },
  {
    operateur: "SFR",
    slug: "sfr",
    offre: "Box 8",
    prix: "31,99 €/mois",
    debit: "Jusqu’à 2 Gb/s",
    engagement: "12 mois",
    avantages: [
      "Fibre optique",
      "Décodeur TV 4K",
      "Amazon Prime inclus 1 an",
      "Répéteur WiFi",
    ],
  },
  {
    operateur: "Bouygues Telecom",
    slug: "bouygues",
    offre: "Bbox ultym",
    prix: "30,99 €/mois",
    debit: "Jusqu’à 2 Gb/s",
    engagement: "12 mois",
    avantages: [
      "Fibre optique FTTH",
      "Bbox 4K Pro",
      "WiFi 6",
      "Service client local",
    ],
  },
];

export default function ComparatifPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1
          className="text-4xl font-bold text-[#0f172a]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Comparatif des offres internet
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
          Comparez les principales offres box des opérateurs français. Filtrez selon le prix, le débit et la durée d’engagement pour trouver l’abonnement adapté à vos besoins.
        </p>
      </div>

      <div className="relative mx-auto mt-12 aspect-[21/9] max-w-3xl overflow-hidden rounded-2xl">
        <Image
          src="/images/comparateur-internet-com-comparison-operators-logos.jpeg"
          alt="Logos des opérateurs télécom"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {offres.map((o) => (
          <div
            key={o.slug}
            className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a]">{o.operateur}</h2>
                <p className="text-sm text-[#64748b]">{o.offre}</p>
              </div>
              <span className="rounded-full bg-[#0ea5e9]/10 px-3 py-1 text-sm font-semibold text-[#0ea5e9]">
                {o.prix}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-[#64748b]">
              <span className="rounded-md bg-[#f8fafc] px-2 py-1">{o.debit}</span>
              <span className="rounded-md bg-[#f8fafc] px-2 py-1">{o.engagement}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {o.avantages.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-[#0f172a]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#22c55e]" />
                  {a}
                </li>
              ))}
            </ul>
            <Link
              href={`/operateurs/${o.slug}`}
              className="mt-6 inline-block rounded-lg bg-[#6366f1] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4f46e5]"
            >
              Voir les détails
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-[#f8fafc] p-8">
        <h2
          className="text-2xl font-bold text-[#0f172a]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Comment bien choisir son offre ?
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              titre: "Évaluez vos besoins",
              desc: "Nombre d’utilisateurs, usage (streaming, télétravail, gaming), surface de votre logement.",
            },
            {
              titre: "Comparez les débits",
              desc: "La fibre FTTH offre les meilleurs débits. Vérifiez l’éligibilité à votre adresse.",
            },
            {
              titre: "Lisez les avis",
              desc: "La qualité du service client et la stabilité du réseau comptent autant que le prix.",
            },
          ].map((c) => (
            <div key={c.titre} className="rounded-xl bg-white p-5">
              <p className="font-semibold text-[#0f172a]">{c.titre}</p>
              <p className="mt-2 text-sm text-[#64748b]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
