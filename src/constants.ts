export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  technicalSpecs: string[];
  imageUrl: string;
  isMemberExclusive?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "grvl-concept",
    name: "GRVL Concept",
    category: "Gravel Running",
    price: "€220.00",
    description: "Allez plus loin que l’asphalte, avec la puissance des plaques carbone. Conçue pour une efficacité maximale sur terrain mixte.",
    technicalSpecs: [
      "Plaque Energy Blade carbone",
      "Mousse Energy Surge ultralégère",
      "Semelle Contagrip All-Terrain"
    ],
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "xt-6-black",
    name: "XT-6",
    category: "Sportstyle",
    price: "€180.00",
    description: "L'icône du trail running réimaginée pour la ville. Un mélange parfait de performance technique et de design minimaliste.",
    technicalSpecs: [
      "Système Quicklace™",
      "Amorti EVA double densité",
      "Construction SensiFit™ sécurisée"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "xt-6-gtx",
    name: "XT-6 GORE-TEX",
    category: "Trail running",
    price: "€200.00",
    description: "Protection intégrale contre les éléments avec la membrane GORE-TEX. Pour ceux qui ne s'arrêtent jamais.",
    technicalSpecs: [
      "Membrane ePE GORE-TEX",
      "Pare-boue protecteur",
      "Châssis ACS stable"
    ],
    imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "xt-whisper",
    name: "XT-WHISPER",
    category: "Sportstyle",
    price: "€150.00",
    description: "Une silhouette légère et aérienne. Exclusivité membres S/PLUS.",
    isMemberExclusive: true,
    technicalSpecs: [
      "Mesh ultra-respirant",
      "Lignes de design épurées",
      "Confort quotidien supérieur"
    ],
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "xt-4-og",
    name: "XT-4 OG",
    category: "Course à pied",
    price: "€190.00",
    description: "Retour aux sources. La fidélité absolue au modèle original qui a défini le trail moderne.",
    technicalSpecs: [
      "Squelette TPU résistant",
      "Semelle externe géométrique",
      "Coloris archives authentiques"
    ],
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "xa-pro-3d",
    name: "XA PRO 3D V9 GORE-TEX",
    category: "Randonnée",
    price: "€170.00",
    description: "La stabilité légendaire. La chaussure de randonnée incontournable pour les terrains les plus techniques.",
    technicalSpecs: [
      "3D Advanced Chassis™",
      "GORE-TEX imperméable",
      "Renfort pare-pierres ultra-robuste"
    ],
    imageUrl: "https://images.unsplash.com/photo-1520639889313-727216af39ae?q=80&w=800&auto=format&fit=crop"
  }
];

export const JOURNAL_ENTRIES = [
  {
    id: "1",
    title: "Gravel Running Revolution",
    date: "AVR 12, 2024",
    excerpt: "Comment les plaques carbone redéfinissent la vitesse sur les chemins de gravier.",
    category: "INNOVATION"
  },
  {
    id: "2",
    title: "Eco-Quest 5 Silhouette",
    date: "MAR 28, 2024",
    excerpt: "Conception durable : tenir la distance tout en respectant l'environnement.",
    category: "SUSTAINABILITY"
  }
];
