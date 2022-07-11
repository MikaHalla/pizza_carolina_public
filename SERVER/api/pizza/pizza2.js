const pizza = [
  {
    id: 1,
    number: 1,
    name: 'MARGHERITA',
    category: 'vegetariánska',
    weight: 420,
    price: 3.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 2,
    number: 5,
    name: 'QUATTRO FORMAGGI',
    category: 'vegetariánska',
    weight: 420,
    price: 4.8,
    ingredients: [
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Inovec',
        isUnwanted: false,
      },
      {
        name: 'Hermelín',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 3,
    number: 27,
    name: 'VEGETARIANA',
    category: 'vegetariánska',
    weight: 530,
    price: 4.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'artičoky',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
      {
        name: 'špargľa',
        isUnwanted: false,
      },
      {
        name: 'ananás',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 4,
    number: 28,
    name: 'VEGETARIA',
    category: 'vegetariánska',
    weight: 490,
    price: 4.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'brokolica',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 5,
    number: 220,
    name: 'VERDURA',
    category: 'vegetariánska',
    weight: 560,
    price: 4.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'brokolica',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
      {
        name: 'artičoky',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 6,
    number: 223,
    name: 'HERMELIA',
    category: 'vegetariánska',
    weight: 510,
    price: 4.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'Hermelín',
        isUnwanted: false,
      },
      {
        name: 'hrach',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 7,
    number: 233,
    name: 'AMERICANA',
    category: 'vegetariánska',
    weight: 540,
    price: 4.7,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'hranolky',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 8,
    number: 2,
    name: 'SICILIANA',
    category: 'rybacia',
    weight: 480,
    price: 4.7,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'sardelky',
        isUnwanted: false,
      },
      {
        name: 'kapary',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 9,
    number: 3,
    name: 'FRUTTI DI MARE',
    category: 'rybacia',
    weight: 450,
    price: 5.3,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'morské plody',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia'],
  },
  {
    id: 10,
    number: 15,
    name: 'AL TONNO',
    category: 'rybacia',
    weight: 510,
    price: 4.7,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'tuniak',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 11,
    number: 229,
    name: 'ADRIATICA',
    category: 'rybacia',
    weight: 510,
    price: 6,
    ingredients: [
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'tuniak',
        isUnwanted: false,
      },
      {
        name: 'smotana',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 12,
    number: 231,
    name: 'CONTESA',
    category: 'rybacia',
    weight: 650,
    price: 6.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'tuniak',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'ryby', 'rybacia', 'syr'],
  },
  {
    id: 13,
    number: 550,
    name: 'SARDELLE',
    category: 'rybacia',
    weight: 530,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'sardelky',
        isUnwanted: false,
      },
      {
        name: 'sardinky',
        isUnwanted: false,
      },
      {
        name: 'kapary',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 14,
    number: 552,
    name: 'MARINARA',
    category: 'rybacia',
    weight: 480,
    price: 6.9,
    ingredients: [
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'krevety',
        isUnwanted: false,
      },
      {
        name: 'mušle',
        isUnwanted: false,
      },
      {
        name: 'kalamáre',
        isUnwanted: false,
      },
      {
        name: 'bylinky',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia'],
  },
  {
    id: 15,
    number: 8,
    name: 'DIAVOLA',
    category: 'pikantná',
    weight: 490,
    price: 4.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 16,
    number: 12,
    name: 'VESUVIO',
    category: 'pikantná',
    weight: 640,
    price: 5.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 17,
    number: 21,
    name: 'TRADIZIONALE',
    category: 'pikantná',
    weight: 570,
    price: 5.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'klobása',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 18,
    number: 25,
    name: 'VIVALDI',
    category: 'pikantná',
    weight: 560,
    price: 5.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
      {
        name: 'kapary',
        isUnwanted: false,
      },
      {
        name: 'sardelky',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 19,
    number: 29,
    name: 'LUCIFERO',
    category: 'pikantná',
    weight: 550,
    price: 5,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 20,
    number: 30,
    name: 'CICLOPE',
    category: 'pikantná',
    weight: 560,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 21,
    number: 211,
    name: 'MEXICANA',
    category: 'pikantná',
    weight: 560,
    price: 5.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'fazuľa',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 22,
    number: 224,
    name: 'LUX',
    category: 'pikantná',
    weight: 590,
    price: 5.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 23,
    number: 226,
    name: 'SOMBRERO',
    category: 'pikantná',
    weight: 560,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'feferónky',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'fazuľa',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 24,
    number: 553,
    name: 'BAČOVSKÁ',
    category: 'pikantná',
    weight: 550,
    price: 6,
    ingredients: [
      {
        name: 'smotana',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'bryndza',
        isUnwanted: false,
      },
      {
        name: 'kôpor',
        isUnwanted: false,
      },
    ],
    tags: [],
  },
  {
    id: 25,
    number: 554,
    name: 'GAZDOVSKÁ',
    category: 'pikantná',
    weight: 570,
    price: 5.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'klobása',
        isUnwanted: false,
      },
      {
        name: 'údený syr',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 26,
    number: 4,
    name: 'PROSCIUTTO',
    category: 'dámska',
    weight: 470,
    price: 4.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 27,
    number: 16,
    name: 'HAWAI',
    category: 'dámska',
    weight: 490,
    price: 4.7,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'ananás',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 28,
    number: 26,
    name: 'TI AMO',
    category: 'dámska',
    weight: 510,
    price: 4.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'kuracie mäso',
        isUnwanted: false,
      },
      {
        name: 'špargľa',
        isUnwanted: false,
      },
    ],
    tags: ['hnusná', 'syr'],
  },
  {
    id: 29,
    number: 210,
    name: 'FRUTTA',
    category: 'dámska',
    weight: 400,
    price: 4.8,
    ingredients: [
      {
        name: 'škorica',
        isUnwanted: false,
      },
      {
        name: 'ovocie',
        isUnwanted: false,
      },
      {
        name: 'hrozienka',
        isUnwanted: false,
      },
      {
        name: 'orechy',
        isUnwanted: false,
      },
      {
        name: 'čokoláda',
        isUnwanted: false,
      },
      {
        name: 'vanilka',
        isUnwanted: false,
      },
    ],
    tags: ['Alica', 'Alicka'],
  },
  {
    id: 30,
    number: 212,
    name: 'SINGAPORE',
    category: 'dámska',
    weight: 480,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'ananás',
        isUnwanted: false,
      },
      {
        name: 'orechy',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 31,
    number: 6,
    name: 'CALZONE',
    category: 'ostatné',
    weight: 430,
    price: 4.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'artičoky',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 32,
    number: 9,
    name: 'QUATTRO STAGIONI',
    category: 'ostatné',
    weight: 530,
    price: 5.3,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'olivy',
        isUnwanted: false,
      },
      {
        name: 'artičoky',
        isUnwanted: false,
      },
      {
        name: 'kapary',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 33,
    number: 10,
    name: 'RENÉ',
    category: 'ostatné',
    weight: 610,
    price: 5.6,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
      {
        name: 'artičoky',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 34,
    number: 13,
    name: 'PROSCIUTTO FUNGI',
    category: 'ostatné',
    weight: 520,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 35,
    number: 14,
    name: 'CALABRIA',
    category: 'ostatné',
    weight: 540,
    price: 4.9,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'cibuľa',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
      {
        name: 'kapary',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 36,
    number: 17,
    name: 'PIZZA SENDVIČ UFO',
    category: 'ostatné',
    weight: 680,
    price: 5.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 37,
    number: 19,
    name: 'CAPRI',
    category: 'ostatné',
    weight: 480,
    price: 4.6,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'kuracie mäso',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'bazalka',
        isUnwanted: false,
      },
    ],
    tags: ['hnusná', 'syr'],
  },
  {
    id: 38,
    number: 20,
    name: 'COLOSEUM',
    category: 'ostatné',
    weight: 480,
    price: 5.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 39,
    number: 23,
    name: 'CAPRICCIOSA',
    category: 'ostatné',
    weight: 460,
    price: 4.9,
    ingredients: [
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'artičoky',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 40,
    number: 24,
    name: 'RIALTO',
    category: 'ostatné',
    weight: 450,
    price: 4.9,
    ingredients: [
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 41,
    number: 31,
    name: 'MARCELLA',
    category: 'ostatné',
    weight: 560,
    price: 5.4,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 42,
    number: 32,
    name: 'CAROLINA',
    category: 'ostatné',
    weight: 560,
    price: 5.5,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'kuracie mäso',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'hnusná', 'syr'],
  },
  {
    id: 43,
    number: 221,
    name: 'CRUDO',
    category: 'ostatné',
    weight: 620,
    price: 5.7,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'vajce',
        isUnwanted: false,
      },
      {
        name: 'paprika',
        isUnwanted: false,
      },
      {
        name: 'údené mäso',
        isUnwanted: false,
      },
      {
        name: 'hrach',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 44,
    number: 222,
    name: 'BOLOGNESE',
    category: 'ostatné',
    weight: 520,
    price: 5,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'mäsová zmes',
        isUnwanted: false,
      },
      {
        name: 'tymián',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 45,
    number: 225,
    name: 'FATRA',
    category: 'ostatné',
    weight: 550,
    price: 6.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'údené mäso',
        isUnwanted: false,
      },
      {
        name: 'chren',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 46,
    number: 227,
    name: 'GARGANO',
    category: 'ostatné',
    weight: 530,
    price: 5.3,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'klobása',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 47,
    number: 228,
    name: 'SAN LORENZO',
    category: 'ostatné',
    weight: 500,
    price: 4.7,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'kuracie mäso',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'chren',
        isUnwanted: false,
      },
    ],
    tags: ['hnusná', 'syr'],
  },
  {
    id: 48,
    number: 230,
    name: 'PULS',
    category: 'ostatné',
    weight: 610,
    price: 6.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
      {
        name: 'oregáno',
        isUnwanted: false,
      },
      {
        name: 'Hermelín',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 49,
    number: 232,
    name: 'ROLLO',
    category: 'ostatné',
    weight: 530,
    price: 6.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
      {
        name: 'Hermelín',
        isUnwanted: false,
      },
      {
        name: 'údené mäso',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 50,
    number: 234,
    name: 'PIZZA FAMILY',
    category: 'ostatné',
    weight: 890,
    price: 8.9,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'Inovec',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 51,
    number: 237,
    name: 'NICOL',
    category: 'ostatné',
    weight: 530,
    price: 5.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'Hermelín',
        isUnwanted: false,
      },
      {
        name: 'údené mäso',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 52,
    number: 238,
    name: 'TOBY',
    category: 'ostatné',
    weight: 530,
    price: 5.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'saláma',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'kápia',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 53,
    number: 239,
    name: 'DENNY',
    category: 'ostatné',
    weight: 580,
    price: 5.3,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'šampiňóny',
        isUnwanted: false,
      },
      {
        name: 'kukurica',
        isUnwanted: false,
      },
      {
        name: 'Niva',
        isUnwanted: false,
      },
      {
        name: 'kápia',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 54,
    number: 247,
    name: 'AMORE',
    category: 'ostatné',
    weight: 520,
    price: 6.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'Gorgonzola',
        isUnwanted: false,
      },
      {
        name: 'bazalka',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 55,
    number: 248,
    name: 'FANTASIA',
    category: 'ostatné',
    weight: 670,
    price: 6.8,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'losos',
        isUnwanted: false,
      },
      {
        name: 'špenát',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 56,
    number: 249,
    name: 'ROMANA',
    category: 'ostatné',
    weight: 620,
    price: 9.2,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'Gorgonzola',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'Prosciutto',
        isUnwanted: false,
      },
    ],
    tags: ['syr', 'šunka'],
  },
  {
    id: 57,
    number: 264,
    name: 'FUNGI',
    category: 'ostatné',
    weight: 620,
    price: 7.3,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'hríby',
        isUnwanted: false,
      },
    ],
    tags: ['huby', 'hubová', 'syr'],
  },
  {
    id: 58,
    number: 270,
    name: 'QUATRO CARNE',
    category: 'ostatné',
    weight: 610,
    price: 6.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'slanina',
        isUnwanted: false,
      },
      {
        name: 'údené mäso',
        isUnwanted: false,
      },
      {
        name: 'klobása',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 59,
    number: 271,
    name: 'BAMBINO',
    category: 'ostatné',
    weight: 550,
    price: 5.4,
    ingredients: [
      {
        name: 'smotana',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Bambino',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'špenát',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 60,
    number: 272,
    name: 'MARGHERITA ITALIANA',
    category: 'ostatné',
    weight: 520,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Mozzarella',
        isUnwanted: false,
      },
      {
        name: 'bazalka',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 61,
    number: 273,
    name: 'LUCIANO',
    category: 'ostatné',
    weight: 570,
    price: 5.6,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'cesnak',
        isUnwanted: false,
      },
      {
        name: 'smotana',
        isUnwanted: false,
      },
      {
        name: 'krevety',
        isUnwanted: false,
      },
      {
        name: 'krabie mäso',
        isUnwanted: false,
      },
      {
        name: 'špenát',
        isUnwanted: false,
      },
    ],
    tags: ['ryby', 'rybacia', 'syr'],
  },
  {
    id: 62,
    number: 274,
    name: 'PRIMAVERA',
    category: 'vegetariánska',
    weight: 690,
    price: 5.1,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'Cottage',
        isUnwanted: false,
      },
      {
        name: 'zelenina',
        isUnwanted: false,
      },
    ],
    tags: ['syr'],
  },
  {
    id: 63,
    number: 551,
    name: 'PROSCIUTO CRUDO',
    category: 'ostatné',
    weight: 520,
    price: 6.9,
    ingredients: [
      {
        name: 'paradajky',
        isUnwanted: false,
      },
      {
        name: 'Eidam',
        isUnwanted: false,
      },
      {
        name: 'šunka',
        isUnwanted: false,
      },
      {
        name: 'Prosciutto',
        isUnwanted: false,
      },
    ],
    tags: ['syr', 'šunka'],
  },
];

export default pizza;
