export const products = [
  {
    id: 1,
    title: "Tokensur",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540259/Tokensur_token_hu2oac.jpg",
    desc: "Token de Tokensur",
    price: 2000,
    category: "Activos digitales",
  },
  {
    id: 2,
    title: "PalToken",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540259/palta_token_pb0tdm.jpg",
    desc: "Token de palta",
    price: 3500,
    category: "Muy pronto",
  },
  {
    id: 3,
    title: "Real estate",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540259/Low_Poly_Office_-_3_Ready_to_Render_wtegx5.jpg",
    desc: "Token de desarrollo inmobiliario",
    price: 5000,
    category: "Activos reales",
  },
  {
    id: 4,
    title: "Patagonia Hashers",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540260/Server_room_stock_illustration__Illustration_of_line_-_30142378_vglljk.jpg",
    desc: "Minería sustentable de Bitcoin",
    price: 1500,
    category: "Activos digitales",
  },
  {
    id: 5,
    title: "Cow Pampa Token",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540259/Cow_pampa_token_qcerrb.jpg",
    desc: "Token de vacas",
    price: 4000,
    category: "Activos reales",
  },
  {
    id: 6,
    title: "Token Bodega Malma",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540260/M%C3%A1s_de_700_fotos_de_Vino_Tinto_y_Vino_gratis_vcdbzd.jpg",
    desc: "Token de vinos",
    price: 1900,
    category: "Muy pronto",
  },
  {
    id: 7,
    title: "Token Unnique Gold",
    img: "https://res.cloudinary.com/dal1tbyhp/image/upload/v1689540260/uniqque_pdw6gh.png",
    desc: "Token de tierras",
    price: 20000,
    category: "Activos digitales",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
