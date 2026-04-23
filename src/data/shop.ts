export type Shop = {
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


export const shops: Shop[] = [
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
},
{
id:6,
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
id:7,
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
id:8,
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
id:9,
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
id:10,
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

