export type Product = {
  id: number;
  slug: string;
  title: string;
  price: string;
  image: string;
  bg: string;

  description: string;
  fabric: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  fit: string;
  shipping: string;
};


export const products: Product[] = [
{
id:1,
slug:'saree',
title:"Banarasi Saree",
price:"₹7,000",
image:"/wom1.png",
bg:"bg-purple-200",

description:
"Embrace timeless elegance with this handcrafted Banarasi saree featuring intricate zari weaving. Designed for weddings and grand celebrations, it offers unmatched grace and luxurious comfort.",

fabric:[
  "Pure Banarasi Silk",
  "Rich zari woven detailing",
  "Soft & luxurious finish"
],

sizes:["XS","S","M","L","XL"],

colors:["Maroon","Red","Wine"],

rating:4.6,
reviews:812,

fit:"Length - 5.5m | Blouse - 0.8m",

shipping:"Dispatch within 48 hours. Delivery in 4-6 days."
},

{
id:2,
slug:'kurtha',
title:"Designer Kurtha",
price:"₹4,000",
image:"/wom2.png",
bg:"bg-pink-200",

description:
"A beautifully tailored kurtha crafted for modern women who love tradition with style. Breathable fabric ensures all-day comfort.",

fabric:[
  "Premium cotton blend",
  "Breathable & lightweight",
  "Skin-friendly fabric"
],

sizes:["XS","S","M","L","XL"],

colors:["Pink","Peach","White"],

rating:4.2,
reviews:412,

fit:"Bust 38in | Waist 32in",

shipping:"Ships next day."
},

{
id:3,
slug:'wedding-saree',
title:"Wedding Saree",
price:"₹8,000",
image:"/wom3.png",
bg:"bg-green-100",

description:
"Turn heads with this premium wedding saree designed with detailed embroidery and luxurious texture.",

fabric:[
  "Authentic Kanjivaram silk",
  "Heavy bridal weaving",
  "Long-lasting shine"
],

sizes:["S","M","L","XL"],

colors:["Green","Gold"],

rating:4.8,
reviews:1204,

fit:"Traditional drape",

shipping:"Priority shipping available."
},

{
id:4,
slug:'designer-saree',
title:"Designer Saree",
price:"₹5,000",
image:"/wom4.png",
bg:"bg-orange-200",

description:
"A contemporary designer saree perfect for festive evenings and parties.",

fabric:[
  "Premium georgette fabric",
  "Lightweight & flowy",
  "Wrinkle-resistant"
],

sizes:["XS","S","M","L"],

colors:["Orange","Cream"],

rating:4.3,
reviews:322,

fit:"Lightweight & flowy",

shipping:"Delivery within 5 days."
},

{
id:5,
slug:'party-wear',
title:"Party Wear Saree",
price:"₹4,000",
image:"/wom5.png",
bg:"bg-gray-200",

description:
"This party wear saree blends glamour with comfort, making it ideal for night events.",

fabric:[
  "High-quality net fabric",
  "Soft inner lining",
  "Elegant shimmer texture"
],

sizes:["XS","S","M","L","XL","XXL"],

colors:["Grey","Silver","Black"],

rating:4.1,
reviews:210,

fit:"Slim drape",

shipping:"Fast delivery available."
}
];

