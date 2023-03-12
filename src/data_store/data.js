import { images } from "../constants";

const SECTIONS = [
  {
    title: "hats",
    imageUrl: images.hat,
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: images.jackets,
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: images.sneakers,
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: images.womens,
    id: 4,
    size: "large",
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: images.mens,
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: images.brown_brim,
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: images.bluebeanie,
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: images.brown_cowboy,
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: images.grey_brim,
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: images.green_beanie,
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: images.palm_tree_cap,
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: images.red_beanie,
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: images.wolf_cap,
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: images.blue_snapback,
        price: 16,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: images.adidas_nmd,
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: images.adidas_yeezy,
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: images.black_converse,
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: images.nike_white,
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: images.nike_red,
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: images.nike_brown,
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: images.jordan_limited,
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: images.timberlands,
        price: 200,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: images.black_shearing,
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: images.blue_jean,
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: images.grey_jean,
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: images.brown_shearing,
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: images.tan_trench,
        price: 185,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: images.tank_top,
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: images.floral_blouse,
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: images.floral_dress,
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: images.red_dots,
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: images.striped_sweater,
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: images.yellow_track,
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: images.white_blouse,
        price: 20,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: images.camo_vest,
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: images.floral_tshirt,
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: images.bandw_longsleeve,
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: images.pink_t_shirt,
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: images.jean_longsleeve,
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: images.burgundy,
        price: 25,
      },
    ],
  },
};

export { SECTIONS, SHOP_DATA };
