export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  technicalSpecs: string[];
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "aeroadapt-top",
    name: "AeroAdapt Ultra 2.0",
    category: "Upper Layer",
    price: "€85.00",
    description: "Dynamic moisture management system that activates as you sweat, increasing airflow to prevent overheating during high-intensity training.",
    technicalSpecs: [
      "Targeted ventilation in high-heat zones",
      "Ergonomic fit for full range of motion",
      "Moisture-wicking AeroAdapt panels"
    ],
    imageUrl: "https://picsum.photos/seed/nike1/800/1000?grayscale"
  },
  {
    id: "pro-leggings",
    name: "Compression Prime",
    category: "Performance Bottoms",
    price: "€65.00",
    description: "Locked-in support with targeted compression zones to improve blood flow and muscle recovery speed.",
    technicalSpecs: [
      "Graduated compression technology",
      "Flat-lock seams for zero distraction",
      "Reinforced knee articulation"
    ],
    imageUrl: "https://picsum.photos/seed/nike2/800/1000?grayscale"
  },
  {
    id: "swift-shorts",
    name: "Swift Aero 5\"",
    category: "Training Shorts",
    price: "€45.00",
    description: "Ultralight laser-cut fabric designed for explosive speed. The minimal weight ensures maximum agility.",
    technicalSpecs: [
      "Perforated breathable waistband",
      "Water-repellent finish",
      "Reflective detailing for low light"
    ],
    imageUrl: "https://picsum.photos/seed/nike3/800/1000?grayscale"
  }
];

export const JOURNAL_ENTRIES = [
  {
    id: "1",
    title: "The Science of AeroAdapt",
    date: "JAN 24, 2024",
    excerpt: "Deep dive into the molecular triggers that open ventilation ports during peak anaerobic output.",
    category: "LAB"
  },
  {
    id: "2",
    title: "Breaking the 2-Hour Barrier",
    date: "DEC 12, 2023",
    excerpt: "How iterative engineering in textile weight contributed to the ultimate marathon performance.",
    category: "PERFORMANCE"
  }
];
