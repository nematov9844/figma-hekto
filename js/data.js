export const header = 
  {
    logo: "Hekto",
    links: ["Home", "Pages", "Products", "Blog", "Shop", "Contact"],
    btn: `<i class="fa-solid fa-magnifying-glass"></i>`,
  }

export const hero =
  {
    heroLeft: "./images/hero-lomp.svg",
    heroRight: "./images/hero_new.svg",
    titleHead: "Best Furniture For Your Castle....",
    titleMain: "New Furniture Collection Trends in 2020",
    titleFooter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    heroBtnText: "Shop Now",
  }


export const featuredProducts =
  {
    title: "Featured Products",
    cards: [
      {
        cardTitle: "Cantilever chair",
        cardDesc: "Code - Y523201",
        cardPrice: 42,
        cardImg: "./images/featured_img_1.svg",
        id:1,
      },
      {
        cardTitle: "Cantilever chair",
        cardDesc: "Code - Y523201",
        cardPrice: 35,
        cardImg: "./images/featured_img_2.svg",
        id:2,
      },
      {
        cardTitle: "Cantilever chair",
        cardDesc: "Code - Y523201",
        cardPrice: 55,
        cardImg: "./images/featured_img_3.svg",
        id:3,
      },
      {
        cardTitle: "Cantilever chair",
        cardDesc: "Code - Y523201",
        cardPrice: 65,
        cardImg: "./images/featured_img_4.svg",
        id:4,
      },
    ],
  }


// Tasodifiy nomlar va rasmlar ro'yxatini yaratish
const randomNames = [
    "Modern Handy Craft",
    "Vintage Craft Tool",
    "Eco-Friendly Furniture",
    "Handmade Wooden Chair",
    "Comfort Crafting Kit",
    "Creative Home Decor"
  ];
  
  const randomImages = [
    "./images/lasteat_img_1.svg",
    "./images/lasteat_img_2.svg",
    "./images/lasteat_img_3.svg",
    "./images/lasteat_img_4.svg",
    "./images/lasteat_img_5.svg",
    "./images/lasteat_img_6.svg"
  ];
  
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Leatest products data
  export const leatestProducts = {
    title: "Leatest Products",
    newArrival: Array.from({ length: 6 }, () => ({
      img: getRandomItem(randomImages),
      name: getRandomItem(randomNames),
      price: "$42.00",
      sale: "$65.00"
    })),
    bestSeller: Array.from({ length: 6 }, () => ({
      img: getRandomItem(randomImages),
      name: getRandomItem(randomNames),
      price: "$42.00",
      sale: "$65.00"
    })),
    featured: Array.from({ length: 6 }, () => ({
      img: getRandomItem(randomImages),
      name: getRandomItem(randomNames),
      price: "$42.00",
      sale: "$65.00"
    })),
    specialOffer: Array.from({ length: 6 }, () => ({
      img: getRandomItem(randomImages),
      name: getRandomItem(randomNames),
      price: "$42.00",
      sale: "$65.00"
    }))
  };
  
