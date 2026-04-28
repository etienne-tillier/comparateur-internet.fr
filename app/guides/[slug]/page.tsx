import { notFound } from "next/navigation";

const guides: Record<string, { titre: string; contenu: string }> = {
  esim: {
    titre: "Tout savoir sur la carte eSIM",
    contenu: `
La carte eSIM (embedded SIM) est une puce électronique intégrée directement dans votre smartphone, tablette ou montre connectée. Contrairement à la SIM physique, elle ne nécessite aucune carte à insérer.

**Avantages de l’eSIM**
- Activation instantanée par QR code
- Plusieurs forfaits sur un même appareil
- Indémodable en cas de changement d’opérateur
- Idéale pour les voyages (forfaits locaux)

**Opérateurs compatibles en France**
Orange, SFR et Bouygues Telecom proposent désormais l’eSIM sur la majorité de leurs forfaits. Free Mobile a également lancé le support eSIM pour ses abonnés.

**Comment activer une eSIM ?**
1. Demandez une eSIM auprès de votre opérateur
2. Recevez un QR code par email
3. Scannez le QR code dans les réglages de votre téléphone
4. Votre ligne est active en quelques minutes
    `,
  },
  "wifi-6": {
    titre: "Guide complet du WiFi 6",
    contenu: `
Le WiFi 6 (802.11ax) est la dernière génération de norme WiFi. Il apporte des améliorations significatives en termes de vitesse, de portée et de gestion des appareils connectés.

**Améliorations clés**
- Débit théorique jusqu’à 9,6 Gb/s
- Meilleure gestion de la batterie sur les appareils mobiles
- Performance optimisée en environnement dense
- Latence réduite pour le gaming et la vidéo

**WiFi 6E : la version étendue**
Le WiFi 6E exploite la bande des 6 GHz, offrant encore moins d’interférences et des débits supérieurs. Freebox Ultra et certaines box Orange/SFR intègrent déjà cette technologie.

**Compatibilité**
Pour bénéficier du WiFi 6, vous devez disposer à la fois d’une box compatible et d’appareils (smartphone, ordinateur) supportant cette norme.
    `,
  },
  "choisir-box": {
    titre: "Choisir sa box internet",
    contenu: `
Le choix d’une box internet dépend de plusieurs critères : votre usage, votre localisation et votre budget.

**Types de connexion**
- **Fibre FTTH** : le meilleur débit disponible, jusqu’à 8 Gb/s
- **Fibre FTTLA/FTTB** : bon débit, mais partagé avec les voisins
- **ADSL/VDSL** : solution de secours en zone non fibrée
- **4G/5G box** : alternative pour les zones rurales

**Critères de choix**
1. Vérifiez l’éligibilité fibre à votre adresse
2. Estimez vos besoins en débit (streaming 4K, télétravail, gaming)
3. Comparez les options TV et les services inclus
4. Attention aux prix après la période promotionnelle

**Box des opérateurs**
Orange (Livebox 6), Free (Freebox Ultra), SFR (Box 8) et Bouygues (Bbox ultym) proposent toutes des offres fibre avec décodeur TV 4K et WiFi 6.
    `,
  },
  "optimiser-debit": {
    titre: "Optimiser son débit fibre",
    contenu: `
Même avec une connexion fibre, plusieurs facteurs peuvent limiter votre débit réel. Voici comment optimiser votre installation.

**Vérifications matérielles**
- Utilisez des câbles Ethernet Cat 6 minimum
- Placez votre box dans un endroit central et dégagé
- Éloignez la box des appareils émettant des ondes (micro-ondes, Bluetooth)
- Mettez à jour le firmware de votre box régulièrement

**Paramétrages logiciels**
- Sélectionnez le bon canal WiFi pour éviter les interférences
- Activez la bande 5 GHz pour les appareils proches
- Utilisez le WiFi 6 si votre matériel est compatible
- Limitez les applications en arrière-plan consommant de la bande passante

**Tests de débit**
Effectuez des tests sur différents appareils et à différentes heures pour identifier les problèmes. Si votre débit est très inférieur à celui souscrit, contactez votre opérateur.
    `,
  },
  "forfaits-5g": {
    titre: "Forfaits 5G : le comparatif",
    contenu: `
La 5G est désormais accessible chez tous les opérateurs français. Voici ce qu’il faut savoir pour choisir le bon forfait.

**Couverture 5G en France**
Les opérateurs couvrent aujourd’hui plus de 75 % de la population en 5G, avec des débits allant de 300 Mb/s à plus de 1 Gb/s selon la bande de fréquence utilisée.

**Forfaits 5G des opérateurs**
- **Orange** : forfaits 5G à partir de 29,99 € avec data illimitée
- **SFR** : offres 5G avec contenus inclus (Netflix, Prime Video)
- **Bouygues** : forfaits 5G avec avantages famille
- **Free** : data illimitée en 5G dès le forfait à 19,99 €

**Points de vigilance**
- Vérifiez la couverture 5G chez vous avant de souscrire
- La 5G consomme plus de batterie : pensez à activer le mode 5G auto
- Certains forfaits limitent le débit 5G : lisez les conditions
    `,
  },
  "demenager-ligne": {
    titre: "Déménager sa ligne internet",
    contenu: `
Déménager votre ligne internet est une démarche simple si vous respectez quelques étapes.

**Préparer son déménagement**
1. Prévenez votre opérateur au moins 1 mois avant le déménagement
2. Vérifiez l’éligibilité à votre nouvelle adresse
3. Choisissez une date d’installation chez le nouvel opérateur ou la migration

**Options possibles**
- **Transfert de ligne** : votre opérateur transfère l’abonnement (délai 2 à 3 semaines)
- **Résilier et souscrire** : si vous changez d’opérateur ou de type de connexion
- **Offre 4G/5G box** : solution temporaire en attendant la fibre

**Frais à prévoir**
- Certains opérateurs facturent des frais de transfert (généralement entre 0 et 49 €)
- Vérifiez si vous êtes engagé et s’il y a des pénalités de résiliation
- Pensez à retourner le matériel de l’ancien logement si demandé
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1
        className="text-4xl font-bold text-[#0f172a]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {guide.titre}
      </h1>
      <div className="mt-8 whitespace-pre-line text-[#0f172a]">
        {guide.contenu.split("\n").map((line, i) => {
          if (line.startsWith("**") && line.endsWith("**")) {
            return (
              <h2
                key={i}
                className="mt-6 text-xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {line.replace(/\*\*/g, "")}
              </h2>
            );
          }
          if (line.startsWith("- ")) {
            return (
              <li key={i} className="ml-5 list-disc text-[#0f172a]">
                {line.replace("- ", "")}
              </li>
            );
          }
          if (line.match(/^\d+\./)) {
            return (
              <li key={i} className="ml-5 list-decimal text-[#0f172a]">
                {line.replace(/^\d+\.\s*/, "")}
              </li>
            );
          }
          if (line.trim() === "") {
            return <div key={i} className="h-4" />;
          }
          return (
            <p key={i} className="text-[#0f172a]">
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
}
