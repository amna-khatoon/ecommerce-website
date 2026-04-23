export type ProductDetail = {
  id: number;
  slug: string;
  title: string;
  image: string;
  bg: string;
  price: string;

  description: string;

  fabric: string[]; // ⭐ 3 bullet points

  sizes: string[];
  colors: string[];

  rating: number;
  reviews: number;

  fit: string;
  shipping: string;
};

export const categories: ProductDetail[] = [
{
id:1,
slug:"category-saree",
title:"Saree Collection",
image:"/wom1.png",
bg:"bg-gray-200",
price:"₹3,000",

description:
"Discover timeless sarees crafted with elegance and tradition. Perfect for weddings, festivals, and special occasions.",

fabric:[
"Premium silk blends for luxurious feel",
"Breathable fabric suitable for long wear",
"Colorfast material that retains vibrancy"
],

sizes:["XS","S","M","L","XL"],

colors:["Red","Maroon","Wine","Pink"],

rating:4.5,
reviews:1842,

fit:"Length 5.5m with blouse piece",

shipping:"Dispatch within 24-48 hours. Delivery in 3-6 days."
},

{
id:2,
slug:"category-wedding",
title:"Wedding Collection",
image:"/wom2.png",
bg:"bg-amber-100",
price:"₹8,000",

description:
"Step into your big day with our premium wedding outfits designed with rich embroidery and stunning craftsmanship.",

fabric:[
"Heavy embroidery with durable stitching",
"Soft inner lining for comfort",
"Wrinkle-resistant premium fabric"
],

sizes:["XS","S","M","L","XL"],

colors:["Gold","Cream","Red","Champagne"],

rating:4.8,
reviews:956,

fit:"Structured fit with elegant flare",

shipping:"Priority processing available. Ships in 24 hours."
},

{
id:3,
slug:"category-kurti",
title:"Kurti Sets",
image:"/wom3.png",
bg:"bg-cyan-100",
price:"₹1,500 ",

description:
"Modern kurti sets designed for everyday elegance with breathable fabrics and flattering silhouettes.",

fabric:[
"Lightweight cotton blends",
"Skin-friendly material",
"Easy wash and care fabric"
],

sizes:["XS","S","M","L","XL","XXL"],

colors:["Blue","Yellow","White","Teal"],

rating:4.3,
reviews:621,

fit:"Relaxed straight fit",

shipping:"Ships next day with fast delivery."
},

{
id:4,
slug:"category-lehenga",
title:"Lehenga Sets",
image:"/wom4.png",
bg:"bg-fuchsia-100",
price:"₹6,000 ",

description:
"Make a statement with our designer lehengas featuring intricate detailing and luxurious textures.",

fabric:[
"Multi-layered fabric for volume",
"Detailed zari and thread work",
"Soft can-can lining for comfort"
],

sizes:["S","M","L","XL"],

colors:["Pink","Magenta","Purple","Beige"],

rating:4.7,
reviews:488,

fit:"Flared silhouette with tailored blouse",

shipping:"Delivery within 4-7 business days."
},

{
id:5,
slug:"category-coord",
title:"Co-Ord Sets",
image:"/wom5.png",
bg:"bg-indigo-100",
price:"₹2,500",

description:
"Trendy co-ord sets that blend comfort with modern fashion for effortless styling.",

fabric:[
"Stretchable fabric for flexibility",
"Breathable material for summer wear",
"Fade-resistant colors"
],

sizes:["XS","S","M","L"],

colors:["Grey","Black","Olive","Lavender"],

rating:4.2,
reviews:350,

fit:"Smart tailored fit",

shipping:"Fast dispatch within 48 hours."
}

];
