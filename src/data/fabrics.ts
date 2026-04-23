export type Fabric = {
  id: number;
  slug: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  fabric: string[];
   sizes: string[];
  colors: string[];
  fit: string;
  shipping: string;
};

export const fabrics: Fabric[] = [
  {
    id: 1,
    slug: "premium-silk-fabric",
    title: "Premium Silk Fabric",
    price: "899",
        image: "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?w=800&auto=format&fit=crop",

    rating: 4.5,
    reviews: 112,
    description: "Premium quality silk fabric perfect for gowns and designer outfits.",
    fabric: ["100% Silk", "Soft texture", "Dry clean recommended"],
    sizes:["XS","S","M","L","XL"],
colors:["Maroon","Red","Wine"],
fit:"Length - 5.5m | Blouse - 0.8m",

shipping:"Dispatch within 48 hours. Delivery in 4-6 days."
  },
  {
    id: 2,
    slug: "soft-cotton-fabric",
    title: "Soft Cotton Fabric",
    price: "399",
    image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?auto=format&fit=crop&q=80&w=800",
    rating: 4.2,
    reviews: 8,
    description: "Breathable cotton fabric ideal for daily wear.",
    fabric: ["Pure Cotton", "Lightweight", "Machine washable"],
    sizes: ["1m", "2.5m", "5m"],
    colors: ["White", "Blue", "Yellow"],
    fit: "Width: 42 inches | Pre-shrunk",
    shipping: "Standard delivery. Dispatch within 24 hours."
  },
  {
    id: 3,
    slug: "luxury-velvet-fabric",
    title: "Luxury Velvet Fabric",
    price: "1299",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 15,
    description: "Rich velvet fabric perfect for party gowns and luxury outfits.",
    fabric: ["Premium Velvet", "Soft feel", "Dry clean only"],
    sizes: ["1m", "2m", "4m"],
    colors: ["Emerald", "Navy", "Ruby"],
    fit: "Width: 40 inches | Heavy weight",
    shipping: "Premium packaging. Delivery in 5-7 business days."
  },
  {
    id: 4,
    slug: "designer-net-fabric",
    title: "Designer Net Fabric",
    price: "599",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviews: 9,
    description: "Elegant net fabric suitable for stylish gowns and overlays.",
    fabric: ["Fine Net", "Lightweight", "Elegant finish"],
    sizes: ["2m", "5m", "9m"],
    colors: ["Black", "Pink", "Silver"],
    fit: "Width: 50 inches | Sheer finish",
    shipping: "Ships internationally. 2-day delivery available."
  },
  {
    id: 5,
    slug: "georgette-fabric",
    title: "Georgette Fabric",
    price: "749",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 10,
    description: "Flowy georgette fabric ideal for gowns and dresses.",
    fabric: ["Soft Georgette", "Flowy texture", "Comfortable wear"],
    sizes: ["1m", "5.5m", "10m"],
    colors: ["Peach", "Lavender", "Teal"],
    fit: "Width: 44 inches | Crepe texture",
    shipping: "Standard shipping. Dispatch in 48 hours."
  },
  {
    id: 6,
    slug: "chiffon-fabric",
    title: "Chiffon Fabric",
    price: "699",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    rating: 4.1,
    reviews: 7,
    description: "Light chiffon fabric perfect for elegant dresses.",
    fabric: ["Pure Chiffon", "Very lightweight", "Soft drape"],
    sizes: ["2m", "5m", "8m"],
    colors: ["Sky Blue", "Mint", "Coral"],
    fit: "Width: 42 inches | Ultra-light",
    shipping: "Tracked shipping. Delivery within 4 days."
  },
  {
    id: 7,
    slug: "linen-fabric",
    title: "Linen Fabric",
    price: "549",
    image:
      "https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&w=800&q=80",
    rating: 4.0,
    reviews: 6,
    description: "Natural linen fabric suitable for summer wear.",
    fabric: ["100% Linen", "Breathable", "Eco friendly"],
    sizes: ["1.5m", "3m", "5m"],
    colors: ["Beige", "Grey", "Sage"],
    fit: "Width: 54 inches | Crisp feel",
    shipping: "Eco-friendly packaging. Delivery in 5-6 days."
  },
  {
    id: 8,
    slug: "organza-fabric",
    title: "Organza Fabric",
    price: "899",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 11,
    description: "Transparent organza fabric perfect for designer gowns.",
    fabric: ["Premium Organza", "Shiny texture", "Lightweight"],
    sizes: ["1m", "2m", "5m"],
    colors: ["Rose Gold", "Lilac", "Champagne"],
    fit: "Width: 44 inches | Stiff drape",
    shipping: "Handled with care. Express shipping only."
  },
  {
    id: 9,
    slug: "satin-fabric",
    title: "Satin Fabric",
    price: "999",
    image:
      "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 14,
    description: "Smooth satin fabric for luxury gowns and dresses.",
    fabric: ["Silky finish", "Glossy look", "Premium quality"],
    sizes: ["2m", "4m", "10m"],
    colors: ["Black", "Gold", "Royal Blue"],
    fit: "Width: 58 inches | High gloss",
    shipping: "Standard shipping. Delivery in 3-5 days."
  },
  {
    id: 10,
    slug: "jacquard-fabric",
    title: "Jacquard Fabric",
    price: "1199",
    image:
      "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 9,
    description: "Stylish jacquard fabric with woven patterns.",
    fabric: ["Woven design", "Durable fabric", "Luxury feel"],
    sizes: ["1m", "3m", "5.5m"],
    colors: ["Bronze", "Copper", "Black-Gold"],
    fit: "Width: 44 inches | Textured pattern",
    shipping: "Safe delivery. Dispatch in 2 business days."
  },
];