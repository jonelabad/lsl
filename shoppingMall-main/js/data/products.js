const products = [
    {
      "id": 1,
      "catId": 1,
      "subCatId": 1,
      "name": "Apple",
      "price": 100,
      "image": "apple.jpg"
    },
    {
      "id": 2,
      "catId": 1,
      "subCatId": 1,
      "name": "Orange",
      "price": 200,
      "image": "orange.jpg"
    },
    {
      "id": 3,
      "catId": 1,
      "subCatId": 2,
      "name": "Carrot",
      "price": 30,
      "image": "carrot.jpg"
    },
    {
      "id": 4,
      "catId": 1,
      "subCatId": 2,
      "name": "Spinach",
      "price": 40,
      "image": "spinach.jpg"
    },
    {
      "id": 5,
      "catId": 2,
      "subCatId": 4,
      "name": "Whole Wheat Bread",
      "price": 60,
      "image": "bread.jpg"
    },
    {
      "id": 6,
      "catId": 2,
      "subCatId": 4,
      "name": "Burger Buns",
      "price": 50,
      "image": "buns.jpg"
    },
    {
      "id": 7,
      "catId": 2,
      "subCatId": 5,
      "name": "Chocolate Cake",
      "price": 300,
      "image": "chocolate_cake.jpg"
    },
    {
      "id": 8,
      "catId": 2,
      "subCatId": 5,
      "name": "Vanilla Cake",
      "price": 250,
      "image": "vanilla_cake.jpg"
    },
    {
      "id": 9,
      "catId": 3,
      "subCatId": 8,
      "name": "Saree For Women",
      "price": 1000,
      "image": "dress1.webp"
    },
    {
      "id": 10,
      "catId": 3,
      "subCatId": 8,
      "name": "Skirt For Women",
      "price": 700,
      "image": "jacket1.jpg"
    },
    {
      "id": 11,
      "catId": 3,
      "subCatId": 9,
      "name": "Shirt For Women",
      "price": 800,
      "image": "jacket2.webp"
    },
    {
      "id": 12,
      "catId": 3,
      "subCatId": 9,
      "name": "T-shirt For Women",
      "price": 500,
      "image": "sda.webp"
    },
    {
      "id": 13,
      "catId": 4,
      "subCatId": 11,
      "name": "Lipstick",
      "price": 300,
      "image": "lipstick.jpg"
    },
    {
      "id": 14,
      "catId": 4,
      "subCatId": 11,
      "name": "Foundation",
      "price": 500,
      "image": "foundation.jpg"
    },
    {
      "id": 15,
      "catId": 4,
      "subCatId": 12,
      "name": "Moisturizer",
      "price": 250,
      "image": "moisturizer.jpg"
    },
    {
      "id": 16,
      "catId": 4,
      "subCatId": 12,
      "name": "Sunscreen",
      "price": 400,
      "image": "sunscreen.jpg"
    },
    {
      "id": 17,
      "catId": 5,
      "subCatId": 14,
      "name": "Ceramic Vase",
      "price": 600,
      "image": "vase.jpg"
    },
    {
      "id": 18,
      "catId": 5,
      "subCatId": 14,
      "name": "Glass Vase",
      "price": 700,
      "image": "glass_vase.jpg"
    },
    {
      "id": 19,
      "catId": 5,
      "subCatId": 15,
      "name": "Table Lamp",
      "price": 1200,
      "image": "lamp.jpg"
    },
    {
      "id": 20,
      "catId": 5,
      "subCatId": 15,
      "name": "Wall Light",
      "price": 1500,
      "image": "wall_light.jpg"
    },
    {
        "id": 21,
        "catId": 3,
        "subCatId": 8,
        "name": "Anarkali Dress For Women",
        "price": 1500,
        "image": "jacket2.webp"
    },
    {
        "id": 22,
        "catId": 3,
        "subCatId": 8,
        "name": "Lehenga Choli For Women",
        "price": 3000,
        "image": "shirt1.jpg"
    },
    {
        "id": 23,
        "catId": 3,
        "subCatId": 8,
        "name": "Kurti For Women",
        "price": 800,
        "image": "swet1.webp"
    },
    {
        "id": 24,
        "catId": 3,
        "subCatId": 8,
        "name": "Palazzo Pants For Women",
        "price": 700,
        "image": "swet2.webp"
    },
    {
        "id": 25,
        "catId": 3,
        "subCatId": 8,
        "name": "Denim Jacket For Women",
        "price": 1200,
        "image": "swet4.webp"
    },
    {
        "id": 26,
        "catId": 3,
        "subCatId": 8,
        "name": "Maxi Dress For Women",
        "price": 2000,
        "image": "swet5.webp"
    },
    {
        "id": 27,
        "catId": 3,
        "subCatId": 8,
        "name": "Crop Top",
        "price": 500,
        "image": "top1.webp"
    },
    {
        "id": 28,
        "catId": 3,
        "subCatId": 8,
        "name": "Formal Blazer",
        "price": 2500,
        "image": "top2.webp"
    },
    {
        "id": 29,
        "catId": 3,
        "subCatId": 8,
        "name": "Pencil Skirt ",
        "price": 900,
        "image": "top3.webp"
    },
    {
        "id": 30,
        "catId": 3,
        "subCatId": 8,
        "name": "Evening Gown",
        "price": 4000,
        "image": "top4.webp"
    },
    {
        "id": 31,
        "catId": 3,
        "subCatId": 8,
        "name": "Silk Saree",
        "price": 5000,
        "image": "silk_saree.jpg"
    },
    {
        "id": 32,
        "catId": 3,
        "subCatId": 8,
        "name": "Chiffon Dupatta",
        "price": 400,
        "image": "chiffon_dupatta.jpg"
    },
    {
        "id": 33,
        "catId": 3,
        "subCatId": 8,
        "name": "Woolen Shawl",
        "price": 1200,
        "image": "woolen_shawl.jpg"
    },
    {
        "id": 34,
        "catId": 3,
        "subCatId": 8,
        "name": "Tank Top",
        "price": 400,
        "image": "tank_top.jpg"
    },
    {
        "id": 35,
        "catId": 3,
        "subCatId": 8,
        "name": "Floral Print Dress",
        "price": 1700,
        "image": "floral_print_dress.jpg"
    },
    {
        "id": 36,
        "catId": 3,
        "subCatId": 8,
        "name": "Hoodie",
        "price": 1000,
        "image": "hoodie.jpg"
    },
    {
        "id": 37,
        "catId": 3,
        "subCatId": 8,
        "name": "Leggings",
        "price": 600,
        "image": "leggings.jpg"
    },
    {
        "id": 38,
        "catId": 3,
        "subCatId": 8,
        "name": "Sweater",
        "price": 1500,
        "image": "sweater.jpg"
    },
    {
        "id": 39,
        "catId": 3,
        "subCatId": 8,
        "name": "Jumpsuit",
        "price": 2200,
        "image": "jumpsuit.jpg"
    },
    {
        "id": 40,
        "catId": 3,
        "subCatId": 8,
        "name": "Peplum Top",
        "price": 1100,
        "image": "peplum_top.jpg"
    }
    
  ]
  